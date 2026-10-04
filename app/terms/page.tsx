import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Scale, AlertOctagon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service & License Agreement',
  description: 'Legal terms, digital license, earnings disclaimer, AI liability shield, and dispute resolution for Brain OS.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black font-sans">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 font-mono">
        <div className="card-neo-lg p-6 sm:p-8 space-y-3 bg-white">
          <div className="flex items-center justify-between text-xs border-b-2 border-black pb-3">
            <span className="px-2 py-0.5 bg-neo-coral text-white font-black uppercase border border-black shadow-neo-sm">
              LEGAL COVENANTS
            </span>
            <span className="font-bold text-neutral-600">EFFECTIVE OCT 2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Terms of Service &amp; License Agreement
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Operating Domain: <strong className="text-black font-mono">brainos.site</strong> &bull; Governed under the Laws of India &amp; International Treaties.
          </p>
          <div className="p-4 bg-neo-yellow border-2 border-black text-xs text-black space-y-1 font-sans shadow-neo-sm">
            <p className="font-black font-mono text-xs uppercase flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-black" />
              MANDATORY LEGAL NOTICE:
            </p>
            <p>
              Please review this agreement carefully. It contains absolute earnings disclaimers, AI liability shields, single-user anti-piracy covenants, an irrevocable digital goods no-refund policy, and a binding individual arbitration covenant.
            </p>
          </div>
        </div>

        <div className="card-neo-lg p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans bg-white">
          <section className="space-y-2">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 01 ] Acceptance of Terms</h2>
            <p>
              By accessing, purchasing, or extracting Brain OS (&ldquo;the Service&rdquo;, &ldquo;the Vault&rdquo;), You agree to be legally bound by this Agreement. If You do not agree to every provision, You are strictly prohibited from accessing our digital assets.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 02 ] Absolute Earnings &amp; Results Disclaimer</h2>
            <p>
              Brain OS is an educational knowledge repository containing strategy frameworks, pricing formulas, and copy swipe files. <strong className="text-black font-bold">We do not sell a business opportunity, get-rich-quick program, or guaranteed financial return.</strong>
            </p>
            <p>
              We make ZERO representations or warranties that your use of the frameworks will yield any revenue, client acquisition, or commercial profit. Your results depend 100% on your own skill, execution, product-market fit, and market conditions. All mathematical formulas represent illustrative modeling.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 03 ] AI Generative Systems Disclaimer</h2>
            <p>
              Brain OS includes prompts and context directives (including <code className="font-mono bg-neo-gray px-1 py-0.5 border border-black text-black font-bold">Master AI Connection Engine.md</code>) to interface with third-party LLMs (Claude, OpenAI, Gemini, Ollama). AI models are probabilistic neural networks that may hallucinate or generate inaccurate copy. You bear 100% legal, commercial, and editorial responsibility for reviewing and fact-checking any marketing copy or calculations before commercial deployment.
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 04 ] Single-User Commercial License &amp; Anti-Piracy Covenants</h2>
            <p>
              Upon purchase, You are granted a revocable, non-exclusive, non-transferable, single-user commercial license:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-black font-bold">Permitted:</strong> Applying the frameworks to launch, price, copywrite, and market your own products, SaaS apps, courses, or client services.</li>
              <li><strong className="text-black font-bold">Strictly Prohibited:</strong> Reselling, redistributing, syndicating, publicly hosting on GitHub, torrenting, file-sharing, or sub-licensing the vault notes, raw markdown files, or prompt matrices in whole or in part.</li>
            </ul>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 05 ] Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Brain OS, its creators, or affiliates be liable for any indirect, punitive, incidental, special, or consequential damages. In all circumstances, our maximum aggregate liability is capped at the exact amount paid by You (₹999 INR / ₹1,399 INR).
            </p>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 06 ] Governing Law &amp; Individual Arbitration</h2>
            <p>
              This Agreement is governed by the laws of India. Any controversy or claim arising out of or relating to this contract shall be settled by binding individual arbitration. You expressly waive any right to participate in class actions or representative proceedings.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
