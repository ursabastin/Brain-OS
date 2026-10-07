import { NextResponse } from 'next/server';
import { getPricingConfig } from '@/lib/pricing';
import { createOrderRecord } from '@/lib/firebase';
import { auditLogger } from '@/lib/logger';
import {
  isRazorpayConfigured,
  createRazorpayPaymentLink,
} from '@/lib/razorpay';

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid customer email is required.' },
        { status: 400 }
      );
    }

    const { currentPrice } = getPricingConfig();
    const amountInPaise = currentPrice * 100;
    const clientName = (name || 'Anonymous Solopreneur').trim();
    const clientEmail = email.toLowerCase().trim();
    const referenceId = `ref_${Date.now()}`;

    // If Razorpay keys are not yet provided in .env.local, return mock checkout link
    if (!isRazorpayConfigured()) {
      const mockOrderId = `order_link_test_${Date.now()}`;
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
        paymentLink: `/success?token=test_link_token&orderId=${mockOrderId}`,
        orderId: mockOrderId,
        message: 'Razorpay keys pending. Test mode payment link issued.',
      });
    }

    // Call live Razorpay Payment Links API
    const paymentLink = await createRazorpayPaymentLink({
      amountInPaise,
      customerName: clientName,
      customerEmail: clientEmail,
      referenceId,
    });

    // Save order in Cloud Firestore
    await createOrderRecord({
      orderId: paymentLink.id,
      customerName: clientName,
      customerEmail: clientEmail,
      amount: amountInPaise,
      currency: 'INR',
      status: 'created',
      createdAt: new Date().toISOString(),
    });

    await auditLogger.orderInitialized(paymentLink.id, clientEmail, amountInPaise, req);

    return NextResponse.json({
      success: true,
      paymentLink: paymentLink.short_url,
      id: paymentLink.id,
      amount: amountInPaise,
    });
  } catch (error: any) {
    await auditLogger.paymentFailed('payment_link_error', error?.message || 'Failed to create payment link', req);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to generate payment link.' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email') || 'solopreneur@brainos.site';
  const name = searchParams.get('name') || 'Brain OS Solopreneur';

  // Construct a redirect to checkout or payment link
  const postRes = await fetch(new URL('/api/checkout/payment-link', req.url).toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name }),
  });

  const data = await postRes.json();
  if (data.success && data.paymentLink) {
    return NextResponse.redirect(data.paymentLink);
  }

  return NextResponse.redirect(new URL('/checkout', req.url));
}
