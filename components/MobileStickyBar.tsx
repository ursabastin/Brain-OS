'use client';

import React from 'react';
import { Lock } from 'lucide-react';
import { LOGO_PATH } from './BrandLogo';
import { SITE_CONFIG } from '@/lib/config';
import { getPricingConfig } from '@/lib/pricing';

interface MobileStickyBarProps {
  onOpenCheckout: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCheckout }) => {
  const { currentPrice, comparePrice } = getPricingConfig();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t-2 border-black md:hidden shadow-neo-lg">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neo-yellow border-2 border-black flex items-center justify-center p-1 shadow-neo-sm shrink-0">
            <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-mono text-xs font-black uppercase text-black">
              BRAIN OS
            </div>
            <div className="flex items-baseline gap-1 mt-0.5 font-mono">
              <span className="text-sm font-black text-black">₹{currentPrice}</span>
              <span className="text-[10px] text-neutral-500 line-through">₹{comparePrice}</span>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenCheckout}
          className="px-4 py-2.5 bg-neo-yellow hover:bg-[#FFE000] text-black font-mono text-xs font-black uppercase tracking-wider btn-neo flex items-center gap-1.5 cursor-pointer shrink-0"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>UNLOCK VAULT</span>
        </button>
      </div>
    </div>
  );
};
