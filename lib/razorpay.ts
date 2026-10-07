import Razorpay from 'razorpay';
import crypto from 'node:crypto';
import { safeEqual } from './security';
import { SITE_CONFIG } from './config';

/**
 * Checks whether live Razorpay API keys are configured in environment variables.
 */
export function isRazorpayConfigured(): boolean {
  const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  return Boolean(keyId && keySecret && keyId.trim().length > 0 && keySecret.trim().length > 0);
}

/**
 * Returns a configured Razorpay instance or null if credentials are not yet supplied.
 */
export function getRazorpayClient(): Razorpay | null {
  const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return null;
  }

  return new Razorpay({
    key_id: keyId.trim(),
    key_secret: keySecret.trim(),
  });
}

/**
 * Creates a standard Razorpay Order for Checkout modal/popup integration.
 */
export async function createRazorpayOrder({
  amountInPaise,
  receipt,
  notes = {},
}: {
  amountInPaise: number;
  receipt?: string;
  notes?: Record<string, string>;
}) {
  const rzp = getRazorpayClient();
  if (!rzp) {
    throw new Error('Razorpay credentials not configured. Please add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.');
  }

  return await rzp.orders.create({
    amount: amountInPaise,
    currency: 'INR',
    receipt: receipt || `rcpt_${Date.now().toString().slice(-8)}`,
    notes,
  });
}

/**
 * Creates an official Razorpay Hosted Payment Link (shareable URL).
 * Ideal for Instagram DMs, mobile In-App Browsers, and direct checkout links.
 */
export async function createRazorpayPaymentLink({
  amountInPaise,
  customerName,
  customerEmail,
  description,
  referenceId,
}: {
  amountInPaise: number;
  customerName: string;
  customerEmail: string;
  description?: string;
  referenceId?: string;
}) {
  const rzp = getRazorpayClient();
  if (!rzp) {
    throw new Error('Razorpay credentials not configured. Please add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.');
  }

  const callbackUrl = `${SITE_CONFIG.url}/success?ref=${referenceId || Date.now()}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const payload: any = {
    amount: amountInPaise,
    currency: 'INR',
    accept_partial: false,
    description: description || 'Brain OS: 360-Node Second Brain & AI Engine',
    customer: {
      name: customerName,
      email: customerEmail,
    },
    notify: {
      sms: false,
      email: true,
    },
    reminder_enable: true,
    notes: {
      customerName,
      customerEmail,
      referenceId: referenceId || `ref_${Date.now()}`,
      source: 'brainos_payment_link',
    },
    callback_url: callbackUrl,
    callback_method: 'get',
  };

  if (referenceId) {
    payload.reference_id = referenceId;
  }

  return await rzp.paymentLink.create(payload);
}

/**
 * Cryptographically verifies standard Razorpay payment HMAC-SHA256 signature.
 */
export function verifyRazorpayPaymentSignature({
  orderId,
  paymentId,
  signature,
}: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) return false;

  const expectedSignature = crypto
    .createHmac('sha256', keySecret.trim())
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return safeEqual(signature, expectedSignature);
}

/**
 * Cryptographically verifies Razorpay Webhook signature against raw request body.
 */
export function verifyRazorpayWebhookSignature({
  rawBody,
  signature,
}: {
  rawBody: string;
  signature: string;
}): boolean {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) return false;

  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret.trim())
    .update(rawBody)
    .digest('hex');

  return safeEqual(signature, expectedSignature);
}
