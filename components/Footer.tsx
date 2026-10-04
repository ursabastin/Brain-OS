import React from 'react';
import Link from 'next/link';
import { LOGO_PATH } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-black bg-neo-black text-white py-12 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
          {/* Brand mark */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-neo-yellow border-2 border-white flex items-center justify-center p-1.5 shadow-sm">
              <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
                <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
              </svg>
            </div>
            <div>
              <span className="font-mono font-black text-lg text-white uppercase tracking-wider block">
                BRAIN OS
              </span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                SOVEREIGN KNOWLEDGE ARCHITECTURE
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-5 font-mono text-xs font-bold uppercase text-neutral-300">
            <Link href="/terms" className="hover:text-neo-yellow transition-colors underline decoration-1 underline-offset-4">Terms &amp; License</Link>
            <Link href="/refund-policy" className="hover:text-neo-yellow transition-colors underline decoration-1 underline-offset-4">Refund Policy</Link>
            <Link href="/privacy" className="hover:text-neo-yellow transition-colors underline decoration-1 underline-offset-4">Privacy Charter</Link>
            <Link href="/contact" className="hover:text-neo-yellow transition-colors underline decoration-1 underline-offset-4">Support Desk</Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>&copy; {new Date().getFullYear()} BrainOS.site &bull; 360-Node Obsidian Second Brain &bull; 100% Offline</p>
          <div className="flex items-center gap-2">
            <span className="inline-block px-2 py-0.5 bg-neo-lime text-black font-black text-[10px] border border-black uppercase">
              ZERO CLOUD FEES
            </span>
            <span className="inline-block px-2 py-0.5 bg-neo-coral text-white font-black text-[10px] border border-white uppercase">
              LIFETIME SOVEREIGNTY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
