import { NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { safeEqual, createDownloadToken } from '@/lib/security';
import { markOrderPaid } from '@/lib/firebase';
import { auditLogger } from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const { orderId, paymentId, signature, email } = await req.json();

    if (!orderId || !paymentId || !signature || !email) {
      await auditLogger.paymentFailed(orderId || 'unknown', 'Missing payment verification parameters', req);
      return NextResponse.json({ success: false, error: 'Missing payment verification parameters.' }, { status: 400 });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Verify HMAC-SHA256 signature if keySecret is available
    if (keySecret) {
      const generatedSig = crypto
        .createHmac('sha256', keySecret)
        .update(`${orderId}|${paymentId}`)
        .digest('hex');

      if (!safeEqual(signature, generatedSig)) {
        await auditLogger.securityAlert('Signature mismatch detected during payment verification', {
          orderId,
          paymentId,
          receivedSignature: signature,
        }, req);
        return NextResponse.json({ success: false, error: 'Invalid cryptographic payment signature.' }, { status: 400 });
      }
    }

    // Mint short-lived token (7 days)
    const token = createDownloadToken(email, orderId);

    // Update order record in Cloud Firestore
    await markOrderPaid(orderId, {
      paymentId,
      signature,
      token,
      verifiedAt: new Date().toISOString(),
    });

    // Forensic audit log
    await auditLogger.paymentVerified(orderId, paymentId, email, 999, req);

    return NextResponse.json({
      success: true,
      token,
      redirectUrl: `/success?token=${token}&orderId=${orderId}`,
    });
  } catch (error: any) {
    await auditLogger.paymentFailed('unknown', error?.message || 'Verification processing error', req);
    return NextResponse.json(
      { success: false, error: error?.message || 'Verification processing error.' },
      { status: 500 }
    );
  }
}
