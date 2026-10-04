'use client';

import React, { useState, useEffect } from 'react';
import { Lock, Timer, Zap, ShieldCheck, Flame } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import { getPricingConfig } from '@/lib/pricing';

interface LaunchCountdownProps {
  onOpenCheckout: () => void;
}

export const LaunchCountdown: React.FC<LaunchCountdownProps> = ({ onOpenCheckout }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(SITE_CONFIG.launchEndDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const pricing = getPricingConfig();
  const currentPrice = timeLeft.isExpired ? SITE_CONFIG.postLaunchPriceInr : SITE_CONFIG.priceInr;

  return (
    <section id="launch-offer" className="px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      <div className="card-neo-lg p-6 sm:p-12 relative text-center space-y-6 sm:space-y-8 bg-neo-yellow">
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white font-mono text-xs font-black uppercase shadow-neo-sm">
            <Flame className="w-4 h-4 text-neo-yellow animate-pulse" />
            <span>OFFICIAL 1-MONTH LAUNCH OFFER PROTOCOL</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black font-mono text-xs font-black uppercase shadow-neo-sm">
            <Timer className="w-4 h-4 text-neo-coral" />
            <span>OCTOBER 15 &mdash; NOVEMBER 15</span>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-5xl font-black font-mono tracking-tight text-black uppercase leading-tight">
            {timeLeft.isExpired
              ? 'LAUNCH OFFER CONCLUDED'
              : 'ACQUIRE BRAIN OS AT LAUNCH VALUATION'}
          </h2>
          <p className="text-xs sm:text-base text-neutral-800 font-mono leading-relaxed">
            {timeLeft.isExpired
              ? `The 1-month launch window has expired. Brain OS is now priced at the standard Tier 2 rate of ₹${SITE_CONFIG.postLaunchPriceInr}.`
              : `The ₹${SITE_CONFIG.priceInr} launch valuation is strictly guaranteed until November 15. At midnight, the automated system permanently advances the vault to ₹${SITE_CONFIG.postLaunchPriceInr}.`}
          </p>
        </div>

        {/* Live Countdown Display Box */}
        {mounted && !timeLeft.isExpired && (
          <div className="max-w-xl mx-auto p-4 sm:p-5 bg-white border-2 border-black shadow-neo">
            <div className="text-[11px] font-mono font-bold uppercase text-neutral-600 mb-3 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neo-coral animate-ping" />
              <span>AUTOMATIC PRICE INCREASE TO ₹{SITE_CONFIG.postLaunchPriceInr} IN:</span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 font-mono">
              <div className="p-2 sm:p-3 bg-neo-bg border-2 border-black shadow-neo-sm">
                <div className="text-2xl sm:text-4xl font-black text-black">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase mt-1">DAYS</div>
              </div>
              <div className="p-2 sm:p-3 bg-neo-bg border-2 border-black shadow-neo-sm">
                <div className="text-2xl sm:text-4xl font-black text-black">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase mt-1">HOURS</div>
              </div>
              <div className="p-2 sm:p-3 bg-neo-bg border-2 border-black shadow-neo-sm">
                <div className="text-2xl sm:text-4xl font-black text-black">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase mt-1">MINUTES</div>
              </div>
              <div className="p-2 sm:p-3 bg-neo-bg border-2 border-black shadow-neo-sm">
                <div className="text-2xl sm:text-4xl font-black text-neo-coral">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase mt-1">SECONDS</div>
              </div>
            </div>
          </div>
        )}

        {/* Price Display Card */}
        <div className="py-2">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-4 sm:p-5 bg-white border-2 border-black shadow-neo font-mono">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-6xl font-black text-black">₹{currentPrice}</span>
              <span className="text-base sm:text-xl text-neutral-500 line-through font-bold">
                ₹{SITE_CONFIG.comparePriceInr}
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="px-2.5 py-1 bg-neo-lime border border-black font-black text-[10px] sm:text-xs text-black uppercase">
                {timeLeft.isExpired ? 'TIER 2 RATE' : '1-MONTH LAUNCH VALUATION'}
              </span>
              <span className="text-[10px] text-neutral-600 font-bold uppercase">
                LIFETIME LICENSE &bull; NO MONTHLY BILLS
              </span>
            </div>
          </div>
        </div>

        {/* Big Action Button */}
        <div className="flex justify-center">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-5 bg-black hover:bg-neutral-800 text-white font-mono text-sm sm:text-base font-black uppercase tracking-wider btn-neo flex items-center justify-center gap-3 cursor-pointer"
          >
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-neo-yellow" />
            <span>UNLOCK BRAIN OS VAULT</span>
          </button>
        </div>

        {/* Security & Delivery Reassurance */}
        <div className="border-t-2 border-black pt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-[11px] sm:text-xs text-neutral-800 font-bold">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-black" /> RAZORPAY 256-BIT ENCRYPTED
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-black" /> INSTANT 1.6 MB .ZIP DOWNLOAD
          </span>
          <span>🔒 100% PRIVATE OFFLINE ARCHITECTURE</span>
        </div>
      </div>
    </section>
  );
};
