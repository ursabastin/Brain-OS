'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Lock,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  ArrowRight,
  AlertCircle,
  FileText,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LOGO_PATH } from '@/components/BrandLogo';
import { SITE_CONFIG } from '@/lib/config';
import { getPricingConfig } from '@/lib/pricing';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay?: any;
  }
}

export default function CheckoutPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const { currentPrice, comparePrice, isLaunchActive } = getPricingConfig();
  const savings = comparePrice - currentPrice;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please provide a valid delivery email address.');
      return;
    }

    setLoading(true);

    try {
      const orderRes = await fetch('/api/checkout/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), name: name.trim() }),
      });

      const orderData = await orderRes.json();
      if (!orderData.success) {
        throw new Error(orderData.error || 'Failed to initialize order.');
      }

      // If keys aren't in .env yet, seamlessly route to test fulfillment
      if (orderData.mockMode) {
        router.push(orderData.redirectUrl);
        return;
      }

      if (!window.Razorpay) {
        throw new Error('Payment gateway is initializing. Please click again.');
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: SITE_CONFIG.name,
        description: 'Brain OS: 360-Node Obsidian Second Brain',
        order_id: orderData.orderId,
        prefill: { email: email.trim(), name: name.trim() },
        theme: { color: '#FFE600' },
        handler: async function (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            const verifyRes = await fetch('/api/checkout/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                email: email.trim(),
              }),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              router.push(verifyData.redirectUrl);
            } else {
              setError(verifyData.error || 'Verification failed. Support has been alerted.');
            }
          } catch {
            setError('Verification network anomaly. Please check your email for access.');
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (resp: { error?: { description?: string } }) {
        setError(resp?.error?.description || 'Payment was cancelled or declined.');
        setLoading(false);
      });
      rzp.open();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Checkout encountered an error.');
      setLoading(false);
    }
  };

  const handleDirectPaymentLink = async () => {
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please provide a valid delivery email address before requesting payment link.');
      return;
    }

    // If static Razorpay Payment Page URL is configured in SITE_CONFIG, redirect immediately
    if (SITE_CONFIG.paymentPageUrl) {
      window.location.href = SITE_CONFIG.paymentPageUrl;
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/checkout/payment-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), name: name.trim() }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || 'Failed to generate payment link.');
      }

      if (data.paymentLink) {
        window.location.href = data.paymentLink;
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Could not generate payment link.');
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black font-sans">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 w-full space-y-8 font-mono">
        {/* Breadcrumb & Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neo-yellow border-2 border-black text-xs font-black uppercase shadow-neo-sm">
            <Lock className="w-3.5 h-3.5" />
            <span>SECURE CHECKOUT &bull; 256-BIT ENCRYPTION</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black">
            ORDER FULFILLMENT CONSOLE
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans">
            Instant cryptographic delivery upon payment confirmation. Zero waiting, zero recurring fees.
          </p>
        </div>

        {/* 2-Column Checkout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* COLUMN 1: ORDER DELIVERABLES & PRICING BREAKDOWN (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="card-neo-lg p-6 sm:p-8 bg-white space-y-6">
              {/* Product Card Title */}
              <div className="flex items-start gap-4 border-b-2 border-black pb-5">
                <div className="w-12 h-12 bg-neo-yellow border-2 border-black flex items-center justify-center p-2 shadow-neo-sm shrink-0">
                  <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
                    <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
                  </svg>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 block">
                    FLAGSHIP SYNDICATE KEYSTONE
                  </span>
                  <h2 className="text-base sm:text-lg font-black uppercase text-black leading-snug">
                    Brain OS: 360-Node Second Brain &amp; AI Connection Engine
                  </h2>
                  <span className="inline-block px-2 py-0.5 bg-neo-lime text-black border border-black text-[10px] font-bold uppercase">
                    1.6 MB UNENCRYPTED .ZIP ARCHIVE
                  </span>
                </div>
              </div>

              {/* What You Receive */}
              <div className="space-y-3 font-mono text-xs">
                <span className="font-black uppercase text-neutral-600 block">
                  DELIVERABLES INCLUDED IN YOUR LICENSE:
                </span>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span><strong>360 Interconnected Markdown Notes</strong> organized across 11 sovereign business domains</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span><strong>Master AI Connection Engine.md</strong> (System context directive for Claude &amp; ChatGPT)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span><strong>3,255 [[Wikilinks]] Graph Topology</strong> with interactive Obsidian visual canvas layouts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span><strong>Single-User Commercial License:</strong> Apply all formulas to build, price, and sell your own products</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span><strong>48-Hour Technical Defect Guarantee:</strong> Guaranteed archive integrity or 100% refund</span>
                  </li>
                </ul>
              </div>

              {/* Unit Economics Pricing Breakdown */}
              <div className="border-2 border-black p-4 bg-neo-bg space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center text-neutral-600">
                  <span>Regular Production Value:</span>
                  <span className="line-through font-bold">₹{comparePrice}</span>
                </div>
                <div className="flex justify-between items-center text-green-700 font-bold">
                  <span>Launch Window Discount ({isLaunchActive ? '30-Day Window' : 'Special'}):</span>
                  <span>-₹{savings}</span>
                </div>
                <div className="border-t-2 border-black pt-2 flex justify-between items-center text-base sm:text-lg font-black text-black">
                  <span>TOTAL DUE TODAY:</span>
                  <span className="text-xl sm:text-2xl font-black bg-neo-yellow px-2 py-0.5 border border-black shadow-neo-sm">
                    ₹{currentPrice} INR
                  </span>
                </div>
                <p className="text-[10px] text-neutral-500 pt-1">
                  ⚡ Single one-time transaction &bull; ₹0 monthly recurring fees forever.
                </p>
              </div>
            </div>

            {/* Trust & Guarantee Callout */}
            <div className="p-4 bg-neo-lime/30 border-2 border-black text-xs font-sans space-y-1">
              <strong className="font-mono font-black uppercase text-black block flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-black" />
                SOVEREIGN PRIVACY GUARANTEE:
              </strong>
              <p className="text-neutral-700">
                100% Offline execution. Once downloaded, your Second Brain executes entirely on your local machine with zero cloud tracking, zero note telemetry, and zero vendor lock-in.
              </p>
            </div>
          </div>

          {/* COLUMN 2: CHECKOUT FORM & PAYMENT GATEWAY (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-neo-lg p-6 sm:p-8 bg-white space-y-5">
              <div className="border-b-2 border-black pb-3">
                <h3 className="font-black text-sm uppercase text-black">
                  ENTER FULFILLMENT DETAILS
                </h3>
                <p className="text-xs text-neutral-500 font-sans">
                  Where should we transmit your secure download token?
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-100 border-2 border-black text-red-900 text-xs font-bold flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase text-black block">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Mehta"
                    className="w-full px-3.5 py-3 bg-neo-bg border-2 border-black font-mono text-xs focus:outline-none focus:bg-white focus:shadow-neo-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase text-black block">
                    Delivery Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="founder@yourdomain.com"
                    className="w-full px-3.5 py-3 bg-neo-bg border-2 border-black font-mono text-xs focus:outline-none focus:bg-white focus:shadow-neo-sm transition-all"
                  />
                  <p className="text-[10px] text-neutral-500">
                    Your cryptographically signed 7-day download credentials will be delivered here.
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-neo-yellow hover:bg-[#FFE000] text-black font-mono text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2.5 btn-neo cursor-pointer shadow-neo disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>INITIALIZING GATEWAY...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>PAY ₹{currentPrice} &amp; GET INSTANT VAULT</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectPaymentLink}
                    disabled={loading}
                    className="w-full py-2.5 bg-white hover:bg-neutral-100 text-black border-2 border-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Zap className="w-3.5 h-3.5 text-black" />
                    <span>OR PAY VIA DIRECT PAYMENT LINK (UPI &bull; MOBILE)</span>
                  </button>
                </div>

                <div className="text-[10px] text-neutral-500 font-sans space-y-1 pt-1 leading-relaxed">
                  <p>
                    By proceeding, you agree to our{' '}
                    <Link href="/terms" className="underline font-bold text-black hover:text-neo-coral">
                      Terms of Service
                    </Link>
                    ,{' '}
                    <Link href="/privacy" className="underline font-bold text-black hover:text-neo-coral">
                      Privacy Policy
                    </Link>
                    , and{' '}
                    <Link href="/refund-policy" className="underline font-bold text-black hover:text-neo-coral">
                      48-Hour Technical Defect Guarantee
                    </Link>
                    .
                  </p>
                </div>
              </form>

              {/* Supported Payment Methods */}
              <div className="border-t-2 border-black pt-4 space-y-2 font-mono text-[11px]">
                <span className="font-black uppercase text-neutral-600 block">
                  SUPPORTED INSTANT PAYMENT RAILS:
                </span>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 bg-neo-gray border border-black font-bold flex items-center gap-1.5">
                    <span>⚡ UPI / QR</span>
                    <span className="text-neutral-500">(GPay, PhonePe)</span>
                  </div>
                  <div className="p-2 bg-neo-gray border border-black font-bold flex items-center gap-1.5">
                    <span>💳 All Cards</span>
                    <span className="text-neutral-500">(Visa, MC, RuPay)</span>
                  </div>
                  <div className="p-2 bg-neo-gray border border-black font-bold flex items-center gap-1.5">
                    <span>🏦 NetBanking</span>
                    <span className="text-neutral-500">(50+ Banks)</span>
                  </div>
                  <div className="p-2 bg-neo-gray border border-black font-bold flex items-center gap-1.5">
                    <span>📱 Wallets</span>
                    <span className="text-neutral-500">(Paytm, Mobikwik)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
