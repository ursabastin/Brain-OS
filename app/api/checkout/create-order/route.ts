import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { SITE_CONFIG } from '@/lib/config';

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, error: 'Valid email is required.' }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Resilient fallback if fresh credentials haven't been added yet
    if (!keyId || !keySecret) {
      const mockOrderId = `order_test_${Date.now()}`;
      return NextResponse.json({
        success: true,
        mockMode: true,
        redirectUrl: `/success?token=test_token_setup_profile&orderId=${mockOrderId}`,
        message: 'Credentials pending in .env.local. Test mode redirect enabled.',
      });
    }

    const rzp = new Razorpay({ key_id: keyId, key_secret: keySecret });
    const amountInPaise = SITE_CONFIG.priceInr * 100;

    const order = await rzp.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `rcpt_${Date.now().toString().slice(-8)}`,
      notes: { email, name: name || 'Anonymous Purchaser' },
    });

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || keyId,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to create order.' },
      { status: 500 }
    );
  }
}
