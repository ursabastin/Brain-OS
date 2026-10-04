'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Download, CheckCircle2, Copy, Check, Terminal } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LOGO_PATH } from '@/components/BrandLogo';

function SuccessContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const orderId = searchParams.get('orderId');

  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const samplePrompt = `I have ingested Master AI Connection Engine.md into this session.
Please act as my elite Digital Product Systems Strategist.
Analyze my current digital product concept:
- Niche / Target Audience: [e.g., Freelance Developers / Solopreneurs]
- Core Problem Solved: [e.g., Fragmented client workflows / Pricing under-valuation]
- Proposed Price Point: [e.g., $49 or ₹1,499]
Using the frameworks from the vault, what is the optimal 3-tier pricing matrix, what decoy tier should I introduce, and draft a high-converting PAS hero headline and objection annihilation matrix for my launch.`;

  const copyPrompt = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (token) {
      setDownloading(true);
      window.location.href = `/api/download?token=${token}`;
    }
  };

  useEffect(() => {
    if (token && !downloading) {
      const timer = setTimeout(() => handleDownload(), 600);
      return () => clearTimeout(timer);
    }
  }, [token]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-8 text-black font-mono">
      {/* Success Hero Box */}
      <div className="card-neo-lg p-8 sm:p-12 text-center space-y-5 bg-white">
        <div className="w-16 h-16 bg-neo-yellow border-2 border-black shadow-neo flex items-center justify-center p-3 mx-auto">
          <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
            <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 bg-neo-lime border border-black font-black text-xs uppercase shadow-neo-sm">
            PAYMENT CONFIRMED &bull; TOKEN ISSUED
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-1">
            WELCOME TO BRAIN OS
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-sans max-w-lg mx-auto">
            Your transaction has cleared. Your 360-node Obsidian Master Vault is ready for immediate extraction.
          </p>
        </div>

        {/* Download action card */}
        <div className="pt-2 max-w-md mx-auto space-y-3">
          {token ? (
            <button
              onClick={handleDownload}
              className="w-full py-5 bg-neo-yellow hover:bg-[#FFE000] text-black font-mono text-sm font-black uppercase tracking-wider flex items-center justify-center gap-3 btn-neo cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>{downloading ? 'STREAMING VAULT...' : 'DOWNLOAD BRAIN OS VAULT (.ZIP)'}</span>
            </button>
          ) : (
            <div className="p-4 bg-neo-gray border-2 border-black text-xs text-neutral-600 font-bold">
              Token missing or expired. Please check your delivery email for the secure link.
            </div>
          )}

          {orderId && (
            <p className="text-xs text-neutral-500 font-bold">
              ORDER REFERENCE: <span className="text-black font-black">{orderId}</span>
            </p>
          )}
        </div>
      </div>

      {/* 3-Minute Deployment Instructions */}
      <div className="card-neo p-6 space-y-4 bg-white text-xs">
        <div className="flex items-center justify-between border-b-2 border-black pb-2">
          <h2 className="font-black uppercase text-black text-sm">⚡ 3-MINUTE VAULT DEPLOYMENT</h2>
          <span className="px-2 py-0.5 bg-neo-lime border border-black font-black text-[10px] uppercase">
            QUICKSTART
          </span>
        </div>

        <ol className="list-decimal list-inside space-y-2 text-neutral-700 leading-relaxed font-sans text-xs">
          <li>
            <strong className="text-black font-mono font-bold">Unzip Archive:</strong> Extract <code className="font-mono bg-neo-gray px-1 py-0.5 border border-black text-black font-bold">BrainOS-Master-Vault.zip</code> to your chosen directory (e.g. <code className="font-mono text-black">Documents/Obsidian/BrainOS</code>).
          </li>
          <li>
            <strong className="text-black font-mono font-bold">Launch Obsidian:</strong> Open the free Obsidian application and click <em>&ldquo;Open folder as vault&rdquo;</em>.
          </li>
          <li>
            <strong className="text-black font-mono font-bold">Open Interactive Graph:</strong> Press <kbd className="bg-neo-gray px-1.5 py-0.5 border border-black font-mono font-bold text-black">Ctrl + G</kbd> (or <kbd className="bg-neo-gray px-1.5 py-0.5 border border-black font-mono font-bold text-black">Cmd + G</kbd>) to witness the full 360-node constellation.
          </li>
        </ol>
      </div>

      {/* Claude / GPT Activation Directives */}
      <div className="card-neo p-6 space-y-4 bg-white text-xs">
        <div className="flex items-center justify-between border-b-2 border-black pb-2">
          <h2 className="font-black uppercase text-black text-sm">🤖 MASTER AI REASONING PROMPT</h2>
          <button
            onClick={copyPrompt}
            className="px-2.5 py-1 bg-neo-yellow border border-black font-mono font-black text-[10px] uppercase btn-neo flex items-center gap-1 cursor-pointer"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'COPIED' : 'COPY PROMPT'}</span>
          </button>
        </div>

        <p className="text-neutral-600 text-xs font-sans">
          Upload <code className="font-mono bg-neo-gray px-1 py-0.5 border border-black text-black font-bold">Master AI Connection Engine.md</code> to your Claude Project or Custom GPT, then paste:
        </p>

        <pre className="p-4 bg-black text-white border-2 border-black text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto">
          {samplePrompt}
        </pre>
      </div>

      <div className="text-center pt-2">
        <Link
          href="/"
          className="text-xs text-black font-mono font-black uppercase hover:text-neo-coral underline decoration-2 underline-offset-4 inline-flex items-center gap-1 transition-colors"
        >
          <span>&larr; RETURN TO CATALOG HOME</span>
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="p-16 text-center font-mono text-xs font-bold">LOADING CONSOLE...</div>}>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
