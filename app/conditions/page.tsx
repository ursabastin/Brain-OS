import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, AlertOctagon, Terminal, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions (Operating Covenants) | Brain OS',
  description:
    'Mandatory operating conditions, hardware prerequisites, neural network prompt verification mandates, seat limitations, and force majeure clauses for Brain OS.',
};

export default function ConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black font-sans">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 font-mono">
        <div className="card-neo-lg p-6 sm:p-8 space-y-3 bg-white">
          <div className="flex items-center justify-between text-xs border-b-2 border-black pb-3">
            <span className="px-2 py-0.5 bg-neo-yellow text-black font-black uppercase border border-black shadow-neo-sm">
              OPERATING COVENANTS
            </span>
            <span className="font-bold text-neutral-600">DOCUMENT ID: TC-COND-2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Terms &amp; Conditions (Operating Covenants)
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Technical environment prerequisites, seat licensing protocols, and operational compliance governing <strong className="text-black font-mono">brainos.site</strong>.
          </p>
          <div className="p-4 bg-neo-yellow/30 border-2 border-black text-xs text-black font-sans shadow-neo-sm">
            <strong className="font-black font-mono text-xs uppercase block mb-1 flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-black" />
              MANDATORY OPERATIONAL NOTICE:
            </strong>
            These Terms &amp; Conditions govern the technical execution, system compatibility, seat license allocations, and editorial duties associated with deploying the Brain OS Master Vault and AI Connection Engine.
          </div>
        </div>

        <div className="card-neo-lg p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans bg-white">
          <section className="space-y-3">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 01 ] Technical Prerequisites &amp; Operating Environment</h2>
            <p>
              Brain OS is engineered as an offline-first knowledge architecture formatted in universal Markdown (.md) and JSON canvas schemas. The Purchaser acknowledges and agrees that maintaining compatible computing hardware (Windows 10/11, macOS, Linux, iOS, or Android) and installing a Markdown viewer (specifically the official, free Obsidian application) is a mandatory technical precondition.
            </p>
            <p>
              The Enterprise provides zero warranty, technical troubleshooting, or refunds for incompatibilities resulting from outdated operating systems, third-party plugin conflicts, corrupt user-installed file managers, or non-standard file parsers.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 02 ] Artificial Intelligence Prompt Ingestion &amp; Editorial Verification Duty</h2>
            <p>
              The <code className="bg-neo-gray px-1.5 py-0.5 border border-black font-mono font-bold">Master AI Connection Engine.md</code> is supplied as an advanced system context directive for experimental neural network prompt engineering. Because commercial large language models (including Anthropic Claude, OpenAI ChatGPT, and Google Gemini) generate probabilistic responses that may exhibit hallucinations, syntactic anomalies, or contextual drift:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-700 font-mono text-xs">
              <li>Licensee retains an affirmative legal and commercial duty to review, fact-check, and validate all AI-generated copy, financial figures, and technical workflows prior to public deployment;</li>
              <li>Under no circumstances shall Brain OS or its creators be held liable for commercial damages, customer disputes, regulatory fines, or reputational injuries arising from Licensee&apos;s reliance on unverified AI outputs;</li>
              <li>Licensee is strictly responsible for complying with the Acceptable Use Policies of third-party AI platform providers.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 03 ] Seat License Allocation &amp; Anti-Circumvention</h2>
            <p>
              Each standard purchase allocates exactly one (1) primary user seat. The license authorizes installation across multiple personal devices owned and operated exclusively by the single registered Purchaser.
            </p>
            <p>
              The deployment of vault notes across shared corporate intranets, public network drives, enterprise knowledge portals, or collaborative team drives without an explicit multi-seat Enterprise License agreement is strictly prohibited. Any circumventive sharing of cryptographic fulfillment links or decrypted vault folders triggers immediate license forfeiture and civil enforcement.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 04 ] Independent Contractor Status &amp; No Fiduciary Agency</h2>
            <p>
              Nothing contained within Brain OS, marketing materials, or communications shall be construed to create an agency, partnership, joint venture, employment, or fiduciary relationship between Licensee and the Enterprise. Licensee operates as a completely independent commercial entity exercising independent professional judgment.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 05 ] Force Majeure &amp; Network Infrastructure Immunity</h2>
            <p>
              The Enterprise shall not be held liable for delivery delays or server unavailability resulting from causes beyond reasonable commercial control, including but not limited to: Acts of God, telecommunications provider failure, cloud CDN disruptions (Cloudflare, AWS), cyber-attacks, distributed denial-of-service (DDoS) incidents, or state-level telecommunication restrictions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
