import { NextResponse } from 'next/server';
import { getPricingConfig } from '@/lib/pricing';
import { createOrderRecord } from '@/lib/firebase';
import { auditLogger } from '@/lib/logger';
import { isRazorpayConfigured, createRazorpayOrder } from '@/lib/razorpay';

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required.' },
        { status: 400 }
      );
    }

    const { currentPrice } = getPricingConfig();
    const amountInPaise = currentPrice * 100;
    const clientName = (name || 'Anonymous Purchaser').trim();
    const clientEmail = email.toLowerCase().trim();

    // Resilient fallback if fresh credentials haven't been added yet
    if (!isRazorpayConfigured()) {
      const mockOrderId = `order_test_${Date.now()}`;
      await createOrderRecord({
        orderId: mockOrderId,
        customerName: clientName,
        customerEmail: clientEmail,
        amount: amountInPaise,
        currency: 'INR',
        status: 'created',
        createdAt: new Date().toISOString(),
      });

      await auditLogger.orderInitialized(mockOrderId, clientEmail, amountInPaise, req);

      return NextResponse.json({
        success: true,
        mockMode: true,
        redirectUrl: `/success?token=test_token_setup_profile&orderId=${mockOrderId}`,
        message: 'Credentials pending in .env.local. Test mode redirect enabled.',
      });
    }

    // Create live Razorpay Order via SDK
    const order = await createRazorpayOrder({
      amountInPaise,
      receipt: `rcpt_${Date.now().toString().slice(-8)}`,
      notes: { email: clientEmail, name: clientName },
    });

    // Save order in Google Cloud Firestore
    await createOrderRecord({
      orderId: order.id,
      customerName: clientName,
      customerEmail: clientEmail,
      amount: Number(order.amount),
      currency: order.currency,
      status: 'created',
      createdAt: new Date().toISOString(),
    });

    // Forensic audit log
    await auditLogger.orderInitialized(order.id, clientEmail, Number(order.amount), req);

    const publicRazorpayKey =
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || '';

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: publicRazorpayKey.trim(),
    });
  } catch (error: any) {
    await auditLogger.paymentFailed('unknown', error?.message || 'Failed to create order', req);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to create order.' },
      { status: 500 }
    );
  }
}
