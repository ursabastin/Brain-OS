import { NextResponse } from 'next/server';
import { createDownloadToken } from '@/lib/security';
import { markOrderPaid, getOrder } from '@/lib/firebase';
import { auditLogger } from '@/lib/logger';
import { verifyRazorpayWebhookSignature } from '@/lib/razorpay';

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-razorpay-signature');
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    // Validate webhook signature if secret is configured
    if (webhookSecret) {
      if (!signature) {
        await auditLogger.securityAlert('Webhook received without signature header', {}, req);
        return NextResponse.json({ error: 'Missing webhook signature' }, { status: 400 });
      }

      const isValid = verifyRazorpayWebhookSignature({ rawBody, signature });

      if (!isValid) {
        await auditLogger.securityAlert('Webhook signature mismatch', { received: signature }, req);
        return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
      }
    }

    const payload = JSON.parse(rawBody);
    const event = payload.event;
    const paymentEntity = payload.payload?.payment?.entity;
    const orderEntity = payload.payload?.order?.entity;
    const paymentLinkEntity = payload.payload?.payment_link?.entity;

    // Handle payment.captured, order.paid, or payment_link.paid
    if (event === 'payment.captured' || event === 'order.paid' || event === 'payment_link.paid') {
      const orderId =
        paymentEntity?.order_id ||
        orderEntity?.id ||
        paymentLinkEntity?.id ||
        paymentLinkEntity?.reference_id;
      const paymentId = paymentEntity?.id || 'pay_wh_' + Date.now();
      const amountPaise =
        paymentEntity?.amount ||
        orderEntity?.amount ||
        paymentLinkEntity?.amount ||
        99900;
      const email =
        paymentEntity?.email ||
        paymentEntity?.notes?.customerEmail ||
        paymentEntity?.notes?.email ||
        orderEntity?.notes?.email ||
        paymentLinkEntity?.customer?.email;

      if (orderId && email) {
        const existingOrder = await getOrder(orderId);

        // If order hasn't been marked paid yet, process fulfillment
        if (!existingOrder || existingOrder.status !== 'paid') {
          const token = createDownloadToken(email, orderId);

          await markOrderPaid(orderId, {
            paymentId,
            signature: signature || 'wh_verified',
            token,
            verifiedAt: new Date().toISOString(),
          });

          await auditLogger.paymentVerified(orderId, paymentId, email, amountPaise / 100, req);
        }
      }
    } else if (event === 'payment.failed') {
      const orderId = paymentEntity?.order_id || 'unknown';
      const errorDesc = paymentEntity?.error_description || 'Payment capture failed';
      await auditLogger.paymentFailed(orderId, errorDesc, req);
    }

    return NextResponse.json({ status: 'ok', received: true });
  } catch (error: any) {
    console.error('Webhook processing exception:', error);
    return NextResponse.json({ error: 'Webhook processing error' }, { status: 500 });
  }
}
