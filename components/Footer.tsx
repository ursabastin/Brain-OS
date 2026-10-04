'use client';

import React, { useState } from 'react';
import { LOGO_PATH } from './BrandLogo';
import { LegalDrawer } from './LegalDrawer';

interface FooterProps {
  onOpenLegal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const [internalLegalOpen, setInternalLegalOpen] = useState(false);

  const handleToggle = () => {
    if (onOpenLegal) {
      onOpenLegal();
    } else {
      setInternalLegalOpen(true);
    }
  };

  return (
    <>
      <footer className="border-t-2 border-black bg-neo-black text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand mark only */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neo-yellow border-2 border-white flex items-center justify-center p-1 shadow-sm shrink-0">
              <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
                <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
              </svg>
            </div>
            <span className="font-mono font-black text-base sm:text-lg text-white uppercase tracking-wider">
              BRAIN OS
            </span>
          </div>

          {/* Small 3-Line Policy Toggle Button */}
          <div className="flex items-center">
            <button
              onClick={handleToggle}
              title="Legal Policies & Protective Instruments"
              aria-label="Open Legal Policies"
              className="w-10 h-10 bg-neo-yellow hover:bg-[#FFE000] text-black border-2 border-white flex flex-col items-center justify-center gap-1 p-2 shadow-neo-sm hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              {/* Clean 3-line hamburger toggle */}
              <span className="w-5 h-0.5 bg-black transition-transform group-hover:scale-x-110" />
              <span className="w-5 h-0.5 bg-black transition-transform group-hover:scale-x-110" />
              <span className="w-5 h-0.5 bg-black transition-transform group-hover:scale-x-110" />
            </button>
          </div>
        </div>
      </footer>

      {/* Lawyer-grade Legal Policies Drawer */}
      <LegalDrawer
        isOpen={internalLegalOpen}
        onClose={() => setInternalLegalOpen(false)}
      />
    </>
  );
};
