'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Lock, ShieldCheck, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import { getPricingConfig } from '@/lib/pricing';
import { LOGO_PATH } from './BrandLogo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay?: any;
  }
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  if (!isOpen) return null;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please provide a valid delivery email.');
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

      if (orderData.mockMode) {
        router.push(orderData.redirectUrl);
        return;
      }

      if (!window.Razorpay) {
        throw new Error('Payment gateway is loading. Please retry.');
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: SITE_CONFIG.name,
        description: 'Brain OS — 360-Node Obsidian Second Brain',
        order_id: orderData.orderId,
        prefill: { email: email.trim(), name: name.trim() },
        theme: { color: '#FFE600' },
        handler: async function (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {
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
            setError('Verification network anomaly. Contact support.');
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
        setError(resp?.error?.description || 'Payment was cancelled.');
        setLoading(false);
      });
      rzp.open();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Checkout encountered an error.');
      setLoading(false);
    }
  };

  const { currentPrice, comparePrice } = getPricingConfig();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white border-[3px] border-black p-6 sm:p-8 text-black space-y-6 shadow-neo-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-neo-gray border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Brand Logo */}
        <div className="flex items-center gap-3 border-b-2 border-black pb-4">
          <div className="w-10 h-10 bg-neo-yellow border-2 border-black flex items-center justify-center p-1.5 shadow-neo-sm">
            <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
            </svg>
          </div>
          <div>
            <div className="font-mono text-base font-black uppercase text-black tracking-wider">
              BRAIN OS
            </div>
            <div className="font-mono text-[9px] font-bold text-neo-muted uppercase">
              INSTANT CRYPTOGRAPHIC UNLOCK
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-black font-mono tracking-tight uppercase">
            Unlock 360-Node Master Vault
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Full Obsidian vault archive (.zip) + Master AI Connection Engine. Instant token delivery.
          </p>
        </div>

        {/* Pricing Box */}
        <div className="p-4 bg-neo-yellow border-2 border-black shadow-neo-sm flex items-center justify-between font-mono">
          <div>
            <span className="text-[10px] font-bold uppercase text-black block">LIFETIME LICENSE</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-black">₹{currentPrice}</span>
              <span className="text-xs text-neutral-600 line-through">₹{comparePrice}</span>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-black text-white font-mono text-[10px] font-black uppercase border border-black">
            ONE-TIME ONLY
          </span>
        </div>

        <form onSubmit={handleCheckout} className="space-y-4 font-mono text-xs">
          <div>
            <label className="block text-xs font-black text-black mb-1.5 uppercase">
              Delivery Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="founder@domain.com"
              className="w-full px-3.5 py-3 bg-white border-2 border-black text-black font-mono text-xs focus:outline-none focus:bg-neo-yellow/10"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-black mb-1.5 uppercase">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Founder / Creator"
              className="w-full px-3.5 py-3 bg-white border-2 border-black text-black font-mono text-xs focus:outline-none focus:bg-neo-yellow/10"
            />
          </div>

          {error && (
            <p className="text-xs text-neo-coral font-bold font-mono border-2 border-neo-coral p-2 bg-red-50">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-neo-yellow hover:bg-[#FFE000] text-black font-mono text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 btn-neo cursor-pointer"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
            <span>{loading ? 'INITIALIZING CHECKOUT...' : `PAY ₹${currentPrice} & DOWNLOAD VAULT`}</span>
          </button>
        </form>

        <div className="flex items-center justify-between text-[10px] text-neutral-600 font-mono pt-1 border-t-2 border-black">
          <span className="flex items-center gap-1 font-bold text-black">
            <ShieldCheck className="w-3.5 h-3.5 text-black" /> RAZORPAY ENCRYPTED
          </span>
          <span className="font-bold">100% PRIVATE &amp; OFFLINE</span>
        </div>
      </div>
    </div>
  );
};
