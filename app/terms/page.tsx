import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Scale, AlertOctagon, ShieldCheck, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service & IP License Agreement | Brain OS',
  description:
    'Legally binding Master Terms of Service, single-seat commercial implementation license, anti-piracy covenants, $50,000 USD liquidated damages, and mandatory arbitration for Brain OS.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black font-sans">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 font-mono">
        <div className="card-neo-lg p-6 sm:p-8 space-y-3 bg-white">
          <div className="flex items-center justify-between text-xs border-b-2 border-black pb-3">
            <span className="px-2 py-0.5 bg-black text-white font-black uppercase border border-black shadow-neo-sm">
              LEGAL CHARTER
            </span>
            <span className="font-bold text-neutral-600">VERSION 3.4 &bull; ENFORCEABLE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Terms of Service &amp; Master License Agreement
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Operating Domain: <strong className="text-black font-mono">brainos.site</strong> &bull; Governed under the Arbitration and Conciliation Act, 1996 and International Copyright Treaties.
          </p>
          <div className="p-4 bg-neo-yellow border-2 border-black text-xs text-black space-y-1 font-sans shadow-neo-sm">
            <p className="font-black font-mono text-xs uppercase flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-black" />
              MANDATORY STATUTORY NOTICE &bull; BINDING MASTER CONTRACT:
            </p>
            <p>
              Please review this instrument carefully. It contains absolute intellectual property reservations, single-seat commercial implementation terms, enforceable liquidated damages of USD $50,000 for unauthorized sharing or distribution, total disclaimers of subjective commercial performance, and an irrevocable binding individual arbitration covenant.
            </p>
          </div>
        </div>

        <div className="card-neo-lg p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans bg-white">
          <section className="space-y-3">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 01 ] Preamble, Legal Capacity &amp; Irrevocable Assent</h2>
            <p>
              This Master Terms of Service Agreement (&ldquo;Agreement&rdquo;) is an enforceable legal contract executed between the individual or commercial entity acquiring access (&ldquo;Licensee&rdquo;) and Brain OS (&ldquo;Licensor&rdquo;). By completing payment checkout, receiving a cryptographic download token, decompressing the .ZIP archive, or indexing the Brain OS Master Vault, Licensee represents and warrants that they possess full legal capacity under their governing jurisdiction and unconditionally assent to each and every covenant, condition, and restriction set forth herein.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 02 ] Grant of Single-Seat Non-Exclusive Commercial Implementation License</h2>
            <p>
              Subject to verified payment clearance through authorized payment processors, Licensor hereby grants Licensee a personal, revocable, non-exclusive, non-transferable, non-sublicensable single-user commercial implementation license. Under this grant, Licensee is expressly permitted to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-700 font-mono text-xs">
              <li>Store, index, view, and organize the vault notes on private local computing devices owned and operated by Licensee;</li>
              <li>Implement the strategic frameworks, unit economics formulas, and copywriting swipe files to engineer, price, launch, and monetize Licensee&apos;s own independent commercial products or client deliverables;</li>
              <li>Ingest the prompt directives into private AI workspaces (Claude Projects, Custom GPTs, Ollama runtimes) for Licensee&apos;s exclusive business execution.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 03 ] Absolute Intellectual Property Reservation &amp; Anti-Piracy Covenants</h2>
            <p>
              Licensor retains 100% of all title, ownership, copyright, moral rights, trademarks, and trade secret proprietary rights in the Brain OS vault topology, Markdown schemas, [[Wikilink]] graph hierarchies, canvas layouts, and prompt matrices under the Indian Copyright Act, 1957, the Berne Convention, and international treaties.
            </p>
            <div className="font-bold text-red-900 bg-red-50 p-3 border-2 border-black font-mono text-xs">
              <strong>STRICT STATUTORY PROHIBITIONS:</strong> Licensee shall NOT resell, lease, sublicense, distribute, broadcast, publish to public or private GitHub/GitLab repositories, upload to torrent networks, bundle into courses, or create derivative competing knowledge repositories from the raw files.
            </div>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 04 ] Liquidated Damages for Unauthorized Distribution ($50,000 USD / INR 40,00,000)</h2>
            <p>
              Licensee agrees and acknowledges that unauthorized sharing, leaking, or reselling of the vault files inflicts catastrophic, immediate, and irreparable commercial injury upon Licensor. In the event of a breach of Section 3, Licensee shall pay Licensor agreed Liquidated Damages of <strong>USD $50,000 (or INR 40,00,000 equivalent)</strong> per infringing occurrence, without prejudice to Licensor&apos;s right to obtain immediate ex parte injunctive relief and recover full attorney fees, forensic discovery costs, and incidental damages.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 05 ] Absolute Limitation of Monetary Liability</h2>
            <p>
              To the maximum extent permissible by law, under no circumstances shall Licensor, its operators, or affiliates be liable for indirect, incidental, punitive, special, or consequential damages (including loss of profits, business interruption, or data corruption). In all circumstances, Licensor&apos;s total aggregate liability is strictly capped at the purchase price paid (₹999 INR / ₹1,399 INR).
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 06 ] Indemnification &amp; Hold Harmless Covenant</h2>
            <p>
              Licensee agrees to defend, indemnify, and hold harmless Licensor, its creators, contractors, and agents against any claims, liabilities, losses, damages, and expenses (including legal fees) arising from: (a) Licensee&apos;s commercial deployment of products or marketing copy derived from the vault; (b) Licensee&apos;s breach of third-party AI platform terms of service; or (c) Licensee&apos;s violation of any applicable consumer protection or tax regulations.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 07 ] Mandatory Individual Arbitration &amp; Class Action Waiver</h2>
            <p>
              Any dispute, controversy, claim, or breach arising out of or relating to this Agreement shall be settled exclusively by confidential, binding individual arbitration administered under the Arbitration and Conciliation Act, 1996 in India. Licensee expressly waives any right to initiate, join, or participate in class action lawsuits, class arbitrations, or private attorney general actions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
