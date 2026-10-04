'use client';

import React from 'react';
import Link from 'next/link';
import { Scale } from 'lucide-react';
import { LOGO_PATH } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-[3px] border-black bg-neo-black text-white pt-12 pb-8 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Main 3-Column Neo-Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* COLUMN 1: BRAND IDENTITY & PURPOSE */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-neo-yellow border-2 border-white flex items-center justify-center p-1.5 shadow-neo-sm shrink-0 transition-transform group-hover:rotate-3">
                <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
                  <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
                </svg>
              </div>
              <div className="leading-none">
                <span className="font-mono font-black text-lg text-white uppercase tracking-wider block">
                  BRAIN OS
                </span>
                <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                  SOVEREIGN DIGITAL PRODUCTS
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Engineering 12 flagship digital product architectures released quarterly over 3 years. Powered by the foundational 360-node Obsidian Second Brain. Local-first and subscription-free.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-neutral-900 border border-neutral-700 text-[10px] text-neo-lime font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-neo-lime animate-pulse" />
                <span>SYSTEM: PRODUCTION VERIFIED</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: ECOSYSTEM NAVIGATION */}
          <div className="space-y-3">
            <div className="border-b border-neutral-800 pb-2">
              <span className="text-xs font-black uppercase tracking-wider text-neo-yellow">
                ECOSYSTEM MAP
              </span>
            </div>
            <ul className="space-y-2 text-xs font-bold text-neutral-300">
              <li>
                <Link
                  href="/#calendar"
                  className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>12-Product Calendar</span>
                  <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#vault-proof"
                  className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Master Vault Graph</span>
                  <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#vault-preview"
                  className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Unit Economics &amp; Math</span>
                  <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#domains"
                  className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>11 Knowledge Domains</span>
                  <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#ai-engine"
                  className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>AI Connection Engine</span>
                  <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>FAQ &amp; Architecture</span>
                  <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: ALL SIX LEGAL POLICIES (INDIVIDUAL DEDICATED LINKS) */}
          <div className="space-y-3">
            <div className="border-b border-neutral-800 pb-2 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-neo-coral">
                LEGAL POLICIES
              </span>
              <Scale className="w-3.5 h-3.5 text-neutral-400" />
            </div>
            <ul className="space-y-2 text-xs font-bold text-neutral-300">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-neo-coral transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Privacy Policy</span>
                  <span className="text-neutral-500 group-hover:text-neo-coral transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-neo-coral transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Terms of Service</span>
                  <span className="text-neutral-500 group-hover:text-neo-coral transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions"
                  className="hover:text-neo-coral transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Terms &amp; Conditions</span>
                  <span className="text-neutral-500 group-hover:text-neo-coral transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-neo-coral transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Return &amp; Refund Policy</span>
                  <span className="text-neutral-500 group-hover:text-neo-coral transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/earnings-disclaimer"
                  className="hover:text-neo-coral transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Earnings Disclaimer</span>
                  <span className="text-neutral-500 group-hover:text-neo-coral transition-colors">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/anti-defamation"
                  className="hover:text-neo-coral transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Anti-Defamation Shield</span>
                  <span className="text-neutral-500 group-hover:text-neo-coral transition-colors">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Clean Divider & Base Ribbon */}
        <div className="border-t border-neutral-800 pt-6 text-center text-xs font-mono text-neutral-500 text-[11px]">
          &copy; {new Date().getFullYear()} Brain OS &bull; All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
