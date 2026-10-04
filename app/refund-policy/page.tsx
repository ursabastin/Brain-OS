import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Goods Refund & Cancellation Policy',
  description: 'Digital asset non-refundable delivery terms, 48-hour defect replacement guarantee, and anti-fraud protocols for Brain OS.',
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
            <span className="font-bold text-neutral-600">VERSION 3.0</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Governing all digital downloads, Markdown notes, prompts, and templates purchased on <strong className="text-black font-mono">brainos.site</strong>.
          </p>
          <div className="p-4 bg-neo-yellow border-2 border-black text-xs text-black font-sans shadow-neo-sm">
            <strong className="font-black font-mono text-xs uppercase block mb-1">
              POLICY SUMMARY:
            </strong>
            Brain OS is delivered instantly via cryptographic token generation and direct unencrypted .ZIP archive extraction. Because digital files cannot be revoked or returned once delivered, all sales are final upon purchase, backed by our 48-Hour Technical Defect Guarantee.
          </div>
        </div>

        <div className="card-neo-lg p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans bg-white">
          <section className="space-y-2">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 01 ] Irrevocability of Digital Assets</h2>
            <p>
              In accordance with international consumer standards for electronic content, digital assets delivered immediately upon transaction completion are excluded from statutory cooling-off or remorse withdrawal periods. Once your cryptographic token is issued, digital possession has occurred and returns are impossible.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 02 ] 48-Hour Technical Defect Replacement Guarantee</h2>
            <p>
              We stand behind the technical integrity of our files. If You encounter a verified defect under the following criteria:
            </p>
            <div className="p-4 bg-neo-gray border-2 border-black space-y-2 font-mono text-xs text-black shadow-neo-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 font-black" />
                <span><strong>Defect Criteria:</strong> The downloaded .ZIP file is corrupted, fails extraction with standard utilities, or contains unreadable binary data.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 font-black" />
                <span><strong>Replacement SLA:</strong> Email support at <code className="text-black font-bold">support@brainos.site</code> with your Razorpay Order ID within 48 hours. Our team will provide a fresh direct download within 24 hours.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5 font-black" />
                <span><strong>100% Refund Safeguard:</strong> If We cannot provide an operable file within 48 hours of your report, We will promptly issue a full 100% refund.</span>
              </div>
            </div>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 03 ] Unacceptable Refund Requests</h2>
            <p>
              Refunds will strictly NOT be issued for:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Change of mind, buyer remorse, or personal disinterest.</li>
              <li>Inability or lack of technical familiarity with running Obsidian or Claude.</li>
              <li>Unrealistic commercial expectations or failure to achieve specific business revenue.</li>
            </ul>
          </section>

          <section className="space-y-2 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 04 ] Anti-Fraud Chargeback Covenant</h2>
            <p>
              Initiating a fraudulent payment dispute or chargeback without first contacting our support desk constitutes a breach of contract. We vigorously contest fraudulent chargebacks by submitting cryptographic server download logs, IP address access records, and timestamped delivery tokens to payment gateways.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
