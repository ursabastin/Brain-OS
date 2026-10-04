import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RefreshCw, CheckCircle2, ShieldCheck, AlertOctagon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Goods Return & Refund Policy | Brain OS',
  description:
    'Digital goods irrevocability protocol, 48-Hour Technical Defect Guarantee, and civil remedies for fraudulent chargebacks for Brain OS.',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black font-sans">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 font-mono">
        <div className="card-neo-lg p-6 sm:p-8 space-y-3 bg-white">
          <div className="flex items-center justify-between text-xs border-b-2 border-black pb-3">
            <span className="px-2 py-0.5 bg-neo-lime text-black font-black uppercase border border-black shadow-neo-sm">
              COMMERCE POLICIES
            </span>
            <span className="font-bold text-neutral-600">STATUTORY FULFILLMENT</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Digital Goods Return &amp; Refund Policy
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Governing all digital downloads, Markdown notes, prompts, and templates purchased across <strong className="text-black font-mono">brainos.site</strong>.
          </p>
          <div className="p-4 bg-neo-yellow border-2 border-black text-xs text-black font-sans shadow-neo-sm">
            <strong className="font-black font-mono text-xs uppercase block mb-1 flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-black" />
              BINDING COMMERCE DIRECTIVE:
            </strong>
            Brain OS consists of an intangible, non-physical digital software knowledge archive delivered instantaneously via automated server token upon payment clearance. Under international digital trade standards and consumer protection directives, digital assets that cannot be &ldquo;returned&rdquo;, revoked, or un-downloaded are classified as fully consumed immediately upon issuance of download credentials.
          </div>
        </div>

        <div className="card-neo-lg p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans bg-white">
          <section className="space-y-3">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 01 ] Irrevocable Electronic Consumption Protocol</h2>
            <p>
              In accordance with international consumer standards for electronic content, digital assets delivered immediately upon transaction completion are excluded from statutory cooling-off or remorse withdrawal periods. Once your cryptographic token is issued, digital possession has occurred and physical returns are technically impossible.
            </p>
            <div className="font-bold text-black font-mono bg-neo-yellow/30 p-3 border-2 border-black text-xs">
              ALL SALES ARE DEFINITIVE, FINAL, AND NON-REFUNDABLE. NO REFUNDS WILL BE ISSUED UNDER ANY CIRCUMSTANCE FOR CHANGE OF MIND, BUYER REMORSE, OR LACK OF PERSONAL EXECUTION.
            </div>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 02 ] The 48-Hour Technical Defect Guarantee (Sole &amp; Exclusive Remedy)</h2>
            <p>
              In lieu of subjective return rights, Licensor guarantees the technical file integrity of the download archive under the following strict protocol:
            </p>
            <div className="p-4 bg-neo-gray border-2 border-black space-y-2.5 font-mono text-xs text-black shadow-neo-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 font-black" />
                <span><strong>Defect Criteria:</strong> The downloaded <code className="bg-white px-1 border border-black font-bold">BrainOS-Master-Vault.zip</code> is cryptographically corrupted, fails SHA-256 integrity verification, or contains unreadable binary corruption preventing normal operation.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 font-black" />
                <span><strong>Replacement Protocol:</strong> Purchaser must submit cryptographic error logs or screenshots along with Razorpay Order ID to <code className="bg-white px-1 border border-black font-bold">support@brainos.site</code> within forty-eight (48) hours of purchase. Licensor will issue a verified replacement download link within twenty-four (24) hours.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 font-black" />
                <span><strong>100% Refund Safeguard:</strong> If technical defect persists and cannot be rectified by Licensor within 48 hours, Licensor will promptly issue an unconditional 100% full refund to original payment source.</span>
              </div>
            </div>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 03 ] Unacceptable Return Requests</h2>
            <p>
              Refunds will strictly NOT be issued under any circumstances for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-700 font-mono text-xs">
              <li>Change of mind, buyer remorse, or personal lack of time to implement;</li>
              <li>Inability or lack of technical familiarity with running Obsidian, Markdown, or Claude;</li>
              <li>Unrealistic commercial expectations or failure to achieve specific business revenue numbers;</li>
              <li>Dissatisfaction with subjective style, formatting, or personal pedagogical preferences.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 04 ] Fraudulent Chargeback Covenant &amp; Civil Remedies</h2>
            <p>
              Initiating a bank payment dispute or chargeback without first exhausting the 48-Hour Technical Defect Protocol constitutes civil fraud and material breach of contract. Licensor maintains complete audit trails including timestamped server delivery logs, IP address geolocation records, and Razorpay HMAC cryptographic verification signatures.
            </p>
            <p>
              In the event of an unjustified chargeback, Licensor reserves the right to report fraudulent activity to merchant payment protection consortia and pursue full recovery of funds, chargeback arbitration fees, and legal discovery expenses.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
