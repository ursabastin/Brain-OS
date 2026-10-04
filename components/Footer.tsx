'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Zap,
  ArrowUpRight,
  ExternalLink,
  Layers,
  FileText,
  Calendar,
  Scale,
  Sparkles,
} from 'lucide-react';
import { LOGO_PATH } from './BrandLogo';
import { LegalModal } from './LegalModal';

interface FooterProps {
  onOpenLegal?: (tab?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const [internalLegalOpen, setInternalLegalOpen] = useState(false);
  const [selectedPolicyTab, setSelectedPolicyTab] = useState<string>('privacy');

  const handleOpenPolicy = (tab: string) => {
    setSelectedPolicyTab(tab);
    if (onOpenLegal) {
      onOpenLegal(tab);
    } else {
      setInternalLegalOpen(true);
    }
  };

  return (
    <>
      <footer className="border-t-[3px] border-black bg-neo-black text-white pt-12 pb-8 font-mono">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          {/* Main 4-Column Neo-Brutalist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* COLUMN 1: BRAND IDENTITY & PURPOSE */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neo-yellow border-2 border-white flex items-center justify-center p-1.5 shadow-neo-sm shrink-0">
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
              </div>

              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Engineering 12 flagship digital product architectures released quarterly over 3 years. Powered by the foundational 360-node Obsidian Second Brain. 100% private and offline.
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
                  [ ECOSYSTEM MAP ]
                </span>
              </div>
              <ul className="space-y-2 text-xs font-bold text-neutral-300">
                <li>
                  <a
                    href="/#calendar"
                    className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>12-Product Calendar</span>
                    <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#vault-proof"
                    className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>Master Vault Graph</span>
                    <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#vault-preview"
                    className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>Unit Economics &amp; Math</span>
                    <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#domains"
                    className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>11 Knowledge Domains</span>
                    <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#ai-engine"
                    className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>AI Connection Engine</span>
                    <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#faq"
                    className="hover:text-neo-yellow transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span>FAQ &amp; Architecture</span>
                    <span className="text-neutral-500 group-hover:text-neo-yellow transition-colors">&rarr;</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: ALL SIX LEGAL POLICIES (REQUESTED SPECIFICALLY) */}
            <div className="space-y-3">
              <div className="border-b border-neutral-800 pb-2 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-neo-coral">
                  [ LEGAL POLICIES &bull; ALL 6 ]
                </span>
                <Scale className="w-3.5 h-3.5 text-neutral-400" />
              </div>
              <ul className="space-y-2 text-xs font-bold text-neutral-300">
                {/* 1. Privacy Policy */}
                <li>
                  <button
                    onClick={() => handleOpenPolicy('privacy')}
                    className="hover:text-neo-coral transition-colors flex items-center justify-between w-full text-left group py-0.5 cursor-pointer"
                  >
                    <span>1. Privacy Policy</span>
                    <span className="text-[10px] font-mono px-1 bg-neutral-900 border border-neutral-700 text-neutral-400 group-hover:border-neo-coral group-hover:text-white transition-colors">
                      DPDPA
                    </span>
                  </button>
                </li>
                {/* 2. Terms of Service */}
                <li>
                  <button
                    onClick={() => handleOpenPolicy('terms')}
                    className="hover:text-neo-coral transition-colors flex items-center justify-between w-full text-left group py-0.5 cursor-pointer"
                  >
                    <span>2. Terms of Service</span>
                    <span className="text-[10px] font-mono px-1 bg-neutral-900 border border-neutral-700 text-neutral-400 group-hover:border-neo-coral group-hover:text-white transition-colors">
                      LICENSE
                    </span>
                  </button>
                </li>
                {/* 3. Operating Conditions (Some Condition) */}
                <li>
                  <button
                    onClick={() => handleOpenPolicy('conditions')}
                    className="hover:text-neo-coral transition-colors flex items-center justify-between w-full text-left group py-0.5 cursor-pointer"
                  >
                    <span>3. Operating Conditions (T&amp;C)</span>
                    <span className="text-[10px] font-mono px-1 bg-neutral-900 border border-neutral-700 text-neutral-400 group-hover:border-neo-coral group-hover:text-white transition-colors">
                      COND
                    </span>
                  </button>
                </li>
                {/* 4. Return and Refund */}
                <li>
                  <button
                    onClick={() => handleOpenPolicy('refund')}
                    className="hover:text-neo-coral transition-colors flex items-center justify-between w-full text-left group py-0.5 cursor-pointer"
                  >
                    <span>4. Return &amp; Refund Policy</span>
                    <span className="text-[10px] font-mono px-1 bg-neutral-900 border border-neutral-700 text-neutral-400 group-hover:border-neo-coral group-hover:text-white transition-colors">
                      FINAL
                    </span>
                  </button>
                </li>
                {/* 5. Earnings Disclaimer */}
                <li>
                  <button
                    onClick={() => handleOpenPolicy('earnings')}
                    className="hover:text-neo-coral transition-colors flex items-center justify-between w-full text-left group py-0.5 cursor-pointer"
                  >
                    <span>5. Earnings Disclaimer</span>
                    <span className="text-[10px] font-mono px-1 bg-neutral-900 border border-neutral-700 text-neutral-400 group-hover:border-neo-coral group-hover:text-white transition-colors">
                      SIMULATION
                    </span>
                  </button>
                </li>
                {/* 6. Anti-Defamation Shield */}
                <li>
                  <button
                    onClick={() => handleOpenPolicy('defamation')}
                    className="hover:text-neo-coral transition-colors flex items-center justify-between w-full text-left group py-0.5 cursor-pointer"
                  >
                    <span>6. Anti-Defamation Shield</span>
                    <span className="text-[10px] font-mono px-1 bg-neutral-900 border border-neutral-700 text-neutral-400 group-hover:border-neo-coral group-hover:text-white transition-colors">
                      SHIELD
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: TRUST SIGNALS & SPECIFICATIONS */}
            <div className="space-y-3">
              <div className="border-b border-neutral-800 pb-2">
                <span className="text-xs font-black uppercase tracking-wider text-neo-lime">
                  [ SECURITY &bull; SPECIFICATIONS ]
                </span>
              </div>
              <ul className="space-y-2 text-xs font-bold text-neutral-300">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-neo-lime shrink-0" />
                  <span>48-Hour Technical Defect Guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-neo-yellow shrink-0" />
                  <span>Razorpay 256-Bit SSL Encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-neo-coral shrink-0" />
                  <span>Instant 1.6 MB .ZIP Direct Delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-neo-cyan shrink-0" />
                  <span>100% Offline Local Markdown Files</span>
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-neo-lime shrink-0" />
                  <span>Zero Recurring Cloud Egress Fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-neo-yellow shrink-0" />
                  <span>Single-User Commercial License</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider & Base Ribbon */}
          <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white uppercase">BRAIN OS STUDIO</span>
              <span>&bull;</span>
              <span>SOVEREIGN KNOWLEDGE INFRASTRUCTURE</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block px-2 py-0.5 bg-neutral-900 text-neutral-300 font-bold text-[10px] border border-neutral-700 uppercase">
                NEO-BRUTALIST ARCHITECTURE
              </span>
              <span className="inline-block px-2 py-0.5 bg-neo-lime text-black font-black text-[10px] border border-black uppercase">
                100% OFFLINE
              </span>
              <button
                onClick={() => handleOpenPolicy('privacy')}
                title="Manage & Read Legal Policies"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-neo-yellow hover:bg-[#FFE000] text-black font-black text-[10px] border border-black uppercase cursor-pointer"
              >
                <span>LEGAL CONSOLE</span>
                <span>&equiv;</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Lawyer-grade Legal Policies Pop-up Modal */}
      <LegalModal
        isOpen={internalLegalOpen}
        onClose={() => setInternalLegalOpen(false)}
        defaultTab={selectedPolicyTab}
      />
    </>
  );
};
