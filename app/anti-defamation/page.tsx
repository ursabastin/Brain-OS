import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldAlert, AlertTriangle, Scale, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Anti-Defamation Shield & Dispute Covenant | Brain OS',
  description:
    'Enforceable negative covenant against public disparagement, smear campaigns, social media extortion, liquidated damages of $25,000 USD, and mandatory individual arbitration.',
};

export default function AntiDefamationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black font-sans">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 font-mono">
        <div className="card-neo-lg p-6 sm:p-8 space-y-3 bg-white">
          <div className="flex items-center justify-between text-xs border-b-2 border-black pb-3">
            <span className="px-2 py-0.5 bg-neo-purple text-white font-black uppercase border border-black shadow-neo-sm">
              LEGAL SHIELD
            </span>
            <span className="font-bold text-neutral-600">ENFORCEABLE COVENANT</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Anti-Defamation Shield &amp; Dispute Covenant
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Enforceable legal protection prohibiting bad-faith smear campaigns, false accusations of fraud, and online extortion against Brain OS.
          </p>
          <div className="p-4 bg-yellow-50 border-2 border-black text-xs text-black font-sans shadow-neo-sm">
            <strong className="font-black font-mono text-xs uppercase block mb-1 text-black flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-neo-coral" />
              MANDATORY LEGAL WARNING &bull; BINDING NEGATIVE COVENANT:
            </strong>
            This instrument creates an enforceable contractual covenant prohibiting bad-faith public accusations, extortionate reviews, and false claims of fraud or counterfeit knowledge.
          </div>
        </div>

        <div className="card-neo-lg p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans bg-white">
          <section className="space-y-3">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 01 ] Absolute Covenant Against Defamatory Statements &amp; False Claims</h2>
            <p>
              The Purchaser covenants and agrees unconditionally that they shall not, directly or indirectly, publish, post, broadcast, circulate, or cause to be circulated, any false, disparaging, libelous, slanderous, deceptive, or derogatory statements concerning Brain OS, the Creator, the Master Vault, or affiliated products across any public or private medium, including but not limited to X (Twitter), YouTube, Reddit, LinkedIn, Instagram, TikTok, review aggregators, public forums, or private group chats.
            </p>
            <p>
              Specifically, the Purchaser is strictly prohibited from publishing unverified, malicious statements alleging that the product is &ldquo;fake,&rdquo; that the Creator is &ldquo;just earning money and faking everything,&rdquo; that the enterprise is a &ldquo;scam,&rdquo; or that the materials constitute &ldquo;counterfeit&rdquo; knowledge. The Purchaser acknowledges that the product delivers authentic, comprehensive, deterministic Obsidian Markdown notes matching all specifications published on the storefront.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 02 ] Mandatory Pre-Dispute Confidential Grievance Requirement (14 Days)</h2>
            <p>
              In the event the Purchaser experiences any technical grievance, dissatisfaction, or inquiry, the Purchaser is legally mandated to submit a confidential inquiry directly to official support (<code className="bg-neo-gray px-1.5 py-0.5 border border-black font-mono font-bold">support@brainos.site</code>) and afford the Creator a minimum period of fourteen (14) business days to investigate and resolve the matter before initiating any formal legal dispute.
            </p>
            <p>
              Bypassing this confidential resolution protocol to publish public smear campaigns or social media disparagement constitutes an immediate and willful material breach of contract.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 03 ] Enforceable Liquidated Damages &amp; Legal Fee Indemnification</h2>
            <p>
              The Purchaser acknowledges and agrees that the publication of unverified defamatory, false, or extortionate claims inflicts severe, immediate, and irreparable damage upon the Creator&apos;s brand reputation, customer goodwill, and commercial enterprise, the precise financial value of which is difficult to quantify.
            </p>
            <p>
              Accordingly, the parties agree that upon any breach of this Anti-Defamation Covenant, the Purchaser shall pay to the Creator, as agreed <strong>Liquidated Damages</strong> and not as a penalty, the sum of <strong>USD $25,000 (or INR 20,00,000 equivalent)</strong> per defamatory post, communication, or instance, in addition to reimbursing all reasonable legal expenses, attorney fees, and forensic investigation costs incurred by the Creator in securing injunctive relief and damages.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 04 ] Mandatory Individual Arbitration &amp; Class Action Waiver</h2>
            <p>
              Any dispute, controversy, claim, or breach arising out of or relating to this contract shall be settled exclusively by confidential, binding individual arbitration administered under the Arbitration and Conciliation Act, 1996 in India. The Purchaser expressly waives all rights to initiate, join, or maintain any class action lawsuit or representative proceeding.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
