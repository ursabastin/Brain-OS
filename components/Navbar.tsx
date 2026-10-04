'use client';

import React from 'react';
import Link from 'next/link';
import { LOGO_PATH } from './BrandLogo';
import { SITE_CONFIG } from '@/lib/config';

interface NavbarProps {
  onOpenCheckout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const handleClick = () => {
    if (onOpenCheckout) onOpenCheckout();
    else window.location.href = '/#checkout';
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-neo-bg/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-neo-yellow border-2 border-black shadow-neo-sm flex items-center justify-center p-1.5 transition-transform group-hover:rotate-3">
            <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-mono text-base sm:text-lg font-black tracking-tight text-black uppercase">
              BRAIN OS
            </span>
            <span className="font-mono text-[9px] font-bold tracking-widest text-neutral-600 uppercase">
              STUDIO &bull; 12-PRODUCT SYNDICATE
            </span>
          </div>
        </Link>

        {/* Navigation & Primary Action */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-5 font-mono text-xs font-bold uppercase text-black">
            <a href="/#calendar" className="hover:text-neo-coral transition-colors underline decoration-2 underline-offset-4">
              [ 12-Product Calendar ]
            </a>
            <a href="/#vault-proof" className="hover:text-neo-coral transition-colors underline decoration-2 underline-offset-4">
              [ Master Vault Graph ]
            </a>
            <a href="/#vault-preview" className="hover:text-neo-coral transition-colors underline decoration-2 underline-offset-4">
              [ Math &amp; Note Preview ]
            </a>
            <a href="/#domains" className="hover:text-neo-coral transition-colors underline decoration-2 underline-offset-4">
              [ 11 Domains ]
            </a>
            <a href="/#faq" className="hover:text-neo-coral transition-colors underline decoration-2 underline-offset-4">
              [ FAQ ]
            </a>
          </nav>

          <button
            onClick={handleClick}
            className="px-3.5 sm:px-4 py-2 bg-neo-yellow hover:bg-[#FFE000] text-black font-mono text-xs font-black uppercase tracking-wider btn-neo flex items-center gap-2 cursor-pointer"
          >
            <span>GET BRAIN OS &bull; ₹{SITE_CONFIG.priceInr}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
