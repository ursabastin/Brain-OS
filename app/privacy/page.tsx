import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, Lock, Terminal, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Sovereignty Charter | Brain OS',
  description:
    'Official statutory privacy policy, zero cloud note telemetry, PCI-DSS Level 1 tokenized payments, and international data protection compliance under DPDPA 2023 & GDPR for Brain OS.',
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
            <span className="font-bold text-neutral-600">DPDPA 2023 &bull; GDPR ART 6/13</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Privacy Policy &amp; Data Sovereignty Charter
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Governing personal data handling, cryptographic delivery tokens, and transaction logging across <strong className="text-black font-mono">brainos.site</strong>.
          </p>
          <div className="p-4 bg-neo-lime border-2 border-black text-xs text-black font-sans shadow-neo-sm">
            <strong className="font-black font-mono text-xs uppercase block mb-1">
              CORE ARCHITECTURAL PRINCIPLE: 100% OFFLINE DIGITAL SOVEREIGNTY
            </strong>
            Brain OS operates strictly on a Privacy-by-Design architecture. Your Obsidian vault lives 100% locally on your computer with zero cloud telemetry, zero tracking scripts, zero background analytics, and zero note monitoring.
          </div>
        </div>

        <div className="card-neo-lg p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans bg-white">
          <section className="space-y-3">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 01 ] Corporate Entity &amp; Jurisdiction of Processing</h2>
            <p>
              This Privacy Policy constitutes an official statutory charter executed by Brain OS (&ldquo;the Enterprise&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo;) governing the processing, transmission, and protection of personal data collected via the domain <code className="bg-neo-gray px-1.5 py-0.5 border border-black font-mono font-bold">brainos.site</code>. This instrument complies strictly with the Digital Personal Data Protection Act, 2023 (India), the General Data Protection Regulation (Regulation (EU) 2016/679 - GDPR), and international cryptographic fair information practices.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 02 ] Strict Data Minimization &amp; Tokenized Payment Processing</h2>
            <p>
              We adhere strictly to the principle of absolute Data Minimization. We collect strictly the minimum transactional data required to execute contract fulfillment: the Licensee&apos;s Full Legal Name and authenticated Delivery Email Address. All payment rails operate under PCI-DSS Level 1 certified cryptographic infrastructure managed exclusively by Razorpay Software Private Limited.
            </p>
            <p>
              At no point does Brain OS collect, view, process, or store raw credit/debit card numbers, CVVs, expiration dates, UPI personal identification numbers (PINs), or bank account login credentials. All fiscal handshakes are tokenized using 256-bit AES encryption with HMAC-SHA256 signature verification.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 03 ] 100% Offline Hardware Sovereignty &amp; Zero Note Telemetry</h2>
            <p>
              The foundational architecture of Brain OS is built upon Privacy-by-Design. The product deliverable consists entirely of client-side Markdown (.md) documents and JSON canvas files stored in an unencrypted .ZIP archive. The files execute locally within the Licensee&apos;s native operating environment (e.g. Obsidian).
            </p>
            <div className="p-3 bg-neutral-900 text-white border-2 border-black font-mono text-xs">
              <strong className="text-neo-lime uppercase block mb-1">ZERO TELEMETRY COVENANT:</strong>
              There are ZERO tracking scripts, zero background HTTP analytics beacons, zero phone-home tracking cookies, and zero user-behavior monitoring engines embedded within the vault. The Licensee enjoys 100% offline, cryptographically detached knowledge sovereignty.
            </div>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 04 ] Third-Party Artificial Intelligence Provider Isolation</h2>
            <p>
              When the Licensee ingests the Master AI Connection Engine into large language models (including Anthropic Claude, OpenAI ChatGPT, Google Gemini, or Ollama offline runtimes), all communication occurs directly between the Licensee&apos;s client device and the respective AI infrastructure provider. Brain OS operates zero intermediary data relay proxies and intercepts zero conversational prompts or proprietary trade secrets.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 05 ] Statutory Anti-Brokerage &amp; Data Erasure Protocols</h2>
            <p>
              The Enterprise unconditionally covenants that customer transaction records shall never be sold, leased, rented, barter-exchanged, or disseminated to third-party data brokers, marketing consortia, or programmatic ad exchanges. Licensees maintain the statutory right under Indian DPDPA 2023 and EU GDPR to request permanent purging of historical fulfillment logs by submitting an authenticated request to <code className="bg-neo-gray px-1.5 py-0.5 border border-black font-mono font-bold">support@brainos.site</code> with the subject <em>&ldquo;Data Erasure Request&rdquo;</em>.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 06 ] Cryptographic Download Token Verification &amp; Security Logs</h2>
            <p>
              Our web servers maintain basic operational security access logs (recording client IP address, user-agent string, and timestamp of download token access) exclusively for cryptographic download token verification and prevention of distributed denial-of-service (DDoS) abuse. These logs are permanently purged on rolling 30-day schedules and are never correlated with vault reading habits.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
