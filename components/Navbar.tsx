'use client';

import React from 'react';
import Link from 'next/link';
import { LOGO_PATH } from './BrandLogo';

interface NavbarProps {
  onOpenCheckout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const handleClick = () => {
    if (onOpenCheckout) onOpenCheckout();
    else window.location.href = '/checkout';
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-neo-bg/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-neo-yellow border-2 border-black shadow-neo-sm flex items-center justify-center p-1.5 transition-transform group-hover:rotate-3 shrink-0">
            <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-mono text-base sm:text-lg font-black tracking-tight text-black uppercase">
              BRAIN OS
            </span>
            <span className="hidden sm:inline font-mono text-[9px] font-bold tracking-widest text-neutral-600 uppercase">
              STUDIO &bull; 12-PRODUCT SYNDICATE
            </span>
          </div>
        </Link>

        {/* Navigation & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-4 xl:gap-6">
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-mono text-[11px] font-bold uppercase text-neutral-800">
            <a
              href="/#calendar"
              className="px-2.5 py-1 hover:text-black hover:bg-neutral-100 transition-colors"
            >
              Calendar
            </a>
            <a
              href="/#vault-proof"
              className="px-2.5 py-1 hover:text-black hover:bg-neutral-100 transition-colors"
            >
              Vault Graph
            </a>
            <a
              href="/#vault-preview"
              className="px-2.5 py-1 hover:text-black hover:bg-neutral-100 transition-colors"
            >
              Math Preview
            </a>
            <a
              href="/#domains"
              className="px-2.5 py-1 hover:text-black hover:bg-neutral-100 transition-colors"
            >
              11 Domains
            </a>
            <a
              href="/#faq"
              className="px-2.5 py-1 hover:text-black hover:bg-neutral-100 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <button
            onClick={handleClick}
            className="px-3 sm:px-4 py-2 bg-neo-yellow hover:bg-[#FFE000] text-black font-mono text-xs font-black uppercase tracking-wider btn-neo flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>GET BRAIN OS</span>
          </button>
        </div>
      </div>
    </header>
  );
};
