import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Sovereignty Charter',
  description: 'Statutory privacy policy, minimal data collection, and 100% offline data sovereignty for Brain OS.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black font-sans">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 font-mono">
        <div className="card-neo-lg p-6 sm:p-8 space-y-3 bg-white">
          <div className="flex items-center justify-between text-xs border-b-2 border-black pb-3">
            <span className="px-2 py-0.5 bg-neo-cyan text-black font-black uppercase border border-black shadow-neo-sm">
              PRIVACY CHARTER
            </span>
            <span className="font-bold text-neutral-600">DPDPA &amp; GDPR</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Privacy Policy &amp; Sovereignty Charter
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Governing data handling, cryptographic delivery tokens, and transaction logging across <strong className="text-black font-mono">brainos.site</strong>.
          </p>
          <div className="p-4 bg-neo-lime border-2 border-black text-xs text-black font-sans shadow-neo-sm">
            <strong className="font-black font-mono text-xs uppercase block mb-1">
              CORE PRINCIPLE: 100% OFFLINE DIGITAL SOVEREIGNTY
            </strong>
            Brain OS operates on a Privacy-by-Design architecture. Your Obsidian vault lives 100% locally on your computer with zero cloud telemetry, zero tracking scripts, and zero note analytics.
          </div>
        </div>

        <div className="card-neo-lg p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans bg-white">
          <section className="space-y-2">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 01 ] Minimal Data Collection</h2>
            <p>
              We collect strictly the minimum transactional information required to process payment and deliver your digital archive:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Full Name and Email Address entered during checkout to deliver your token and receipt.</li>
              <li>Razorpay Order ID, Payment ID, and HMAC signatures. We NEVER store or see your raw credit card numbers or UPI PINs.</li>
              <li>Server verification logs (IP address, timestamp) retained solely for cryptographic download token validation and fraud defense.</li>
            </ul>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 02 ] Zero Note Telemetry</h2>
            <p>
              The Brain OS vault consists of pure Markdown files. There is zero phone-home tracking code or analytics beacon embedded in any note. When querying AI models (Claude, ChatGPT, Ollama), your interactions occur directly with your AI provider without passing through our servers.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 03 ] No Third-Party Data Selling</h2>
            <p>
              We will never sell, rent, or monetize your contact information to third-party data brokers or advertising networks.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 04 ] Data Subject Rights</h2>
            <p>
              Under Indian DPDPA 2023 and EU GDPR, You retain the right to request deletion of your order records once delivery is completed. Contact <code className="text-black font-mono font-bold">support@brainos.site</code> with subject <em>&ldquo;Data Erasure Request&rdquo;</em>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
