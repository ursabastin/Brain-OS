'use client';

import React, { useState } from 'react';
import { X, ShieldAlert, Scale, FileText, AlertTriangle, ShieldCheck, Lock, ExternalLink } from 'lucide-react';

interface LegalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalDrawer: React.FC<LegalDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'disclaimer' | 'defamation' | 'terms' | 'refund' | 'ai' | 'arbitration'>('disclaimer');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border-[3px] border-black shadow-neo-xl flex flex-col overflow-hidden">
        {/* Modal Top Header */}
        <div className="bg-neo-black text-white p-4 sm:p-5 flex items-center justify-between border-b-2 border-black">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-neo-yellow text-black flex items-center justify-center font-black border border-white">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-mono text-sm sm:text-base font-black uppercase tracking-wider text-white">
                LEGAL SHIELD &bull; STATUTORY GOVERNANCE &amp; POLICIES
              </h2>
              <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block">
                COMPREHENSIVE ATTORNEY-DRAFTED PROTECTIVE INSTRUMENT &bull; BINDING MASTER COVENANT
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 bg-neo-coral text-white border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
            aria-label="Close Legal Shield"
          >
            <X className="w-5 h-5 font-black" />
          </button>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="bg-neo-gray border-b-2 border-black p-2 flex flex-wrap gap-1.5 font-mono text-[11px] overflow-x-auto">
          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`px-3 py-1.5 font-black uppercase border border-black transition-all cursor-pointer ${
              activeTab === 'disclaimer'
                ? 'bg-neo-yellow text-black shadow-neo-sm font-black'
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
          >
            01: EARNINGS &amp; SIMULATION DISCLAIMER
          </button>
          <button
            onClick={() => setActiveTab('defamation')}
            className={`px-3 py-1.5 font-black uppercase border border-black transition-all cursor-pointer ${
              activeTab === 'defamation'
                ? 'bg-neo-coral text-white shadow-neo-sm font-black'
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
          >
            02: ANTI-DEFAMATION &amp; EXTORTION SHIELD
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 font-black uppercase border border-black transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-black text-white shadow-neo-sm font-black'
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
          >
            03: MASTER TERMS &amp; IP LICENSE
          </button>
          <button
            onClick={() => setActiveTab('refund')}
            className={`px-3 py-1.5 font-black uppercase border border-black transition-all cursor-pointer ${
              activeTab === 'refund'
                ? 'bg-neo-lime text-black shadow-neo-sm font-black'
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
          >
            04: DIGITAL DELIVERY &amp; NO-REFUND
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-3 py-1.5 font-black uppercase border border-black transition-all cursor-pointer ${
              activeTab === 'ai'
                ? 'bg-neo-cyan text-black shadow-neo-sm font-black'
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
          >
            05: AI NON-LIABILITY
          </button>
          <button
            onClick={() => setActiveTab('arbitration')}
            className={`px-3 py-1.5 font-black uppercase border border-black transition-all cursor-pointer ${
              activeTab === 'arbitration'
                ? 'bg-neo-purple text-white shadow-neo-sm font-black'
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
          >
            06: INDIVIDUAL ARBITRATION
          </button>
        </div>

        {/* Policy Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 font-sans text-xs sm:text-sm text-neutral-800 leading-relaxed bg-white">
          {/* TAB 1: EARNINGS & HYPOTHETICAL SIMULATION DISCLAIMER */}
          {activeTab === 'disclaimer' && (
            <div className="space-y-5">
              <div className="p-3.5 bg-red-50 border-2 border-neo-coral text-black space-y-1 font-mono text-xs">
                <span className="font-black text-neo-coral uppercase flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  SECTION 1.0 &mdash; STATUTORY NON-GUARANTEE OF COMMERCIAL PERFORMANCE
                </span>
                <p className="font-sans text-xs leading-relaxed text-neutral-800">
                  Brain OS is strictly an academic, educational, and workflow knowledge repository. The platform does NOT sell, promote, or guarantee any financial returns, business opportunities, client acquisition quotas, or passive income schemes.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  1.1 Explicit Characterization of Mathematical Simulations &amp; Unit Economics
                </h3>
                <p>
                  Any and all mathematical formulas, unit economics diagrams, benchmark P&amp;L illustrations (including but not limited to the 10,000-visitor financial models, ₹999 pricing sweetspot calculations, ROAS break-even equations, and gross/net revenue comparisons) displayed across this storefront, within marketing literature, or embedded inside the Markdown notes of the vault are <strong>strictly theoretical, academic, and hypothetical computational simulations</strong>.
                </p>
                <p>
                  These models are engineered exclusively to illustrate the mechanical arithmetic of digital product commerce and financial modeling. Under no circumstances do these computational demonstrations constitute representations of actual historical earnings, certified financial audits, or promises of realized bank payouts.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  1.2 Complete Disclaimer of Realized Results &amp; Individual Variance
                </h3>
                <p>
                  The Creator, operators, and corporate entities associated with Brain OS make <strong>ZERO WARRANTIES, EXPRESS OR IMPLIED, THAT ANY LICENSEE WILL GENERATE A SINGLE RUPEE OR DOLLAR IN REVENUE, RECOUP THEIR ACQUISITION COST, OR ATTAIN ANY COMMERCIAL TRACTION</strong>.
                </p>
                <p>
                  Realized commercial performance is dictated exclusively by individual factors entirely outside the Creator&apos;s control, including but not limited to: individual work ethic, product-market fit, audience trust, market saturation, third-party platform algorithm volatility, capital reserves, pricing execution, and macroeconomic conditions. The Purchaser expressly agrees that they assume 100% of the commercial, financial, and entrepreneurial risks associated with building, launching, or marketing any product.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  1.3 Estoppel &amp; Non-Reliance Covenant
                </h3>
                <p>
                  By completing the checkout process, the Purchaser warrants and affirms that they have NOT relied on any oral, written, or implied statement, simulation, or visual chart as a promise of income or as an inducement to purchase. The Purchaser is legally estopped from asserting any claim alleging deceptive advertising or fraudulent inducement based upon illustrative mathematical figures.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ANTI-DEFAMATION, ANTI-DISPARAGEMENT & ANTI-EXTORTION */}
          {activeTab === 'defamation' && (
            <div className="space-y-5">
              <div className="p-3.5 bg-yellow-50 border-2 border-black text-black space-y-1 font-mono text-xs">
                <span className="font-black text-black uppercase flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-neo-coral" />
                  SECTION 2.0 &mdash; IRREVOCABLE ANTI-DEFAMATION &amp; EXTORTION PROTECTION COVENANT
                </span>
                <p className="font-sans text-xs leading-relaxed text-neutral-800">
                  This section constitutes an enforceable negative covenant prohibiting bad-faith public accusations, smear campaigns, social media extortion, and unfounded claims of fraud or deception.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  2.1 Absolute Covenant Against Defamatory Statements &amp; False Accusations
                </h3>
                <p>
                  The Purchaser covenants and covenants unconditionally that they shall not, directly or indirectly, publish, post, broadcast, circulate, or cause to be circulated, any false, disparaging, libelous, slanderous, deceptive, or derogatory statements concerning Brain OS, the Creator, the Master Vault, or affiliated software across any medium, including but not limited to X (Twitter), YouTube, Reddit, LinkedIn, Instagram, TikTok, review aggregators, public forums, or private group chats.
                </p>
                <p>
                  Specifically, the Purchaser is strictly prohibited from publishing unverified, malicious statements alleging that the product is &ldquo;fake,&rdquo; that the Creator is &ldquo;just earning money and faking everything,&rdquo; that the enterprise is a &ldquo;scam,&rdquo; or that the materials constitute &ldquo;counterfeit&rdquo; knowledge. The Purchaser acknowledges that the product delivers authentic, comprehensive, deterministic Obsidian Markdown notes and schemas matching all specifications published on the storefront.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  2.2 Pre-Dispute Confidential Grievance Requirement
                </h3>
                <p>
                  In the event the Purchaser experiences any dissatisfaction, technical grievance, or conceptual question, the Purchaser is legally mandated to submit a confidential inquiry directly to the Creator via official support channels (<code className="bg-neo-gray px-1.5 py-0.5 border border-black font-mono">support@brainos.site</code>) and afford the Creator a minimum period of fourteen (14) business days to investigate and resolve the matter before initiating any formal legal dispute. Bypassing this protocol to publish public disparagement constitutes a willful breach of contract.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  2.3 Liquidated Damages &amp; Full Legal Indemnification
                </h3>
                <p>
                  The Purchaser acknowledges and agrees that the publication of unverified defamatory or extortionate claims inflicts severe, immediate, and irreparable damage upon the Creator&apos;s brand reputation, customer relationships, and commercial goodwill, the precise monetary quantum of which is difficult to quantify.
                </p>
                <p>
                  Accordingly, the parties agree that upon any breach of this Anti-Defamation Covenant, the Purchaser shall pay to the Creator, as agreed <strong>Liquidated Damages</strong> and not as a penalty, the sum of <strong>USD $25,000 (or INR 20,00,000 equivalent)</strong> per defamatory post, communication, or instance, in addition to reimbursing all reasonable legal expenses, attorney fees, and forensic investigation costs incurred by the Creator in securing injunctive relief and damages.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: MASTER TERMS & IP LICENSE */}
          {activeTab === 'terms' && (
            <div className="space-y-5">
              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  3.1 Proprietary Ownership &amp; Intellectual Property Rights
                </h3>
                <p>
                  All components of Brain OS—including but not limited to the 360 Markdown notes, folder directory topologies, Mermaid flowcharts, [[Wikilink]] graph data, Master AI Connection Engine context directives, mathematical models, copy templates, logos, and digital assets—are the exclusive intellectual property and proprietary trade secrets of Brain OS and its Creator, fully protected under the Indian Copyright Act, 1957, the Berne Convention, and international IP treaties.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  3.2 Scope of Single-User Commercial License
                </h3>
                <p>
                  Upon confirmed payment clearance, the Purchaser is granted a limited, personal, revocable, non-exclusive, non-transferable, non-sublicensable single-user license to:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-3 font-mono text-xs">
                  <li>Store, view, and organize the Obsidian vault locally on devices owned by the Purchaser;</li>
                  <li>Implement the business frameworks, copy formulas, and pricing systems to create, market, and sell the Purchaser&apos;s own independent products or client deliverables;</li>
                  <li>Ingest the markdown prompts into private AI project environments for the Purchaser&apos;s sole commercial benefit.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  3.3 Strict Anti-Piracy, Anti-Leak &amp; Distribution Prohibitions
                </h3>
                <p>
                  The Purchaser is <strong>STRICTLY PROHIBITED</strong> from:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-3 font-mono text-xs text-red-800">
                  <li>Reselling, leasing, sub-licensing, renting, or donating the Brain OS archive or raw Markdown files;</li>
                  <li>Uploading the vault or any subset of notes to public repositories (including GitHub, GitLab, Google Drive, Notion, Pastebin, or torrent trackers);</li>
                  <li>Extracting, repackaging, or transforming the notes into a competing knowledge base, course, or digital asset;</li>
                  <li>Sharing cryptographic download links or tokenized fulfillment URLs with third parties.</li>
                </ul>
                <p>
                  Any unauthorized dissemination will result in immediate license revocation, permanent hardware blacklisting, and civil prosecution for statutory copyright infringement.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: DIGITAL DELIVERY & STRICT NO-REFUND */}
          {activeTab === 'refund' && (
            <div className="space-y-5">
              <div className="p-3.5 bg-neutral-100 border-2 border-black space-y-1 font-mono text-xs">
                <span className="font-black text-black uppercase">
                  SECTION 4.0 &mdash; DIGITAL GOODS IRREVOCABLE DELIVERY PROTOCOL
                </span>
                <p className="font-sans text-xs leading-relaxed text-neutral-800">
                  Statutory consumer notices regarding intangible, instantly consumed electronic downloads.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  4.1 Instant Consumption of Cryptographic Digital Assets
                </h3>
                <p>
                  Brain OS consists of an intangible, digital software knowledge base delivered instantaneously via cryptographic secure download token upon transaction clearance. Under international digital trade regulations and consumer protection frameworks, digital assets that cannot be &ldquo;returned&rdquo; or &ldquo;un-downloaded&rdquo; are deemed fully consumed and irreversible immediately upon transmission of access credentials.
                </p>
                <p>
                  <strong>ALL SALES ARE FINAL. NO REFUNDS, CHARGEBACKS, OR REVERSALS ARE PERMITTED UNDER ANY CIRCUMSTANCE BASED ON SUBJECTIVE DISSATISFACTION, CHANGE OF MIND, BUYER&apos;S REMORSE, OR LACK OF EXECUTION.</strong>
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  4.2 The 48-Hour Technical Defect Guarantee (Sole Remedy)
                </h3>
                <p>
                  In lieu of general returns, the Creator provides a strict <strong>48-Hour Technical Defect Guarantee</strong>:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-3 font-mono text-xs">
                  <li>If the downloaded <code className="bg-white px-1 border border-black font-bold">BrainOS-Master-Vault.zip</code> archive is cryptographically corrupt, unreadable, or missing core files;</li>
                  <li>The Purchaser must submit verifiable photographic or cryptographic error evidence within 48 hours of purchase to <code className="bg-white px-1 border border-black font-bold">support@brainos.site</code>;</li>
                  <li>The Creator will supply an authenticated replacement download link within twenty-four (24) hours;</li>
                  <li>If technical defect persists and cannot be resolved, the Creator will issue a 100% refund of the purchase price.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  4.3 Prohibition of Fraudulent Chargebacks
                </h3>
                <p>
                  Filing a payment dispute or chargeback with a financial institution without first exhausting the 48-Hour Technical Defect Guarantee constitutes civil breach of contract and fraudulent financial reporting. The Creator reserves the right to report unauthorized chargebacks to global fraud registries and pursue collection for all fees, bank fines, and legal recovery expenses.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: AI SYSTEMS NON-LIABILITY */}
          {activeTab === 'ai' && (
            <div className="space-y-5">
              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  5.1 Third-Party Artificial Intelligence Platforms &amp; API Independence
                </h3>
                <p>
                  Brain OS includes system directives and markdown templates (such as <code className="bg-neo-gray px-1.5 py-0.5 border border-black font-mono font-bold">Master AI Connection Engine.md</code>) intended to assist the Purchaser in configuring third-party large language models (including Anthropic Claude, OpenAI ChatGPT, and local Ollama runtimes).
                </p>
                <p>
                  Brain OS is completely independent of, and maintains no affiliation with, Anthropic PBC, OpenAI Inc., or any other third-party AI provider. The Creator makes no warranty regarding the uptime, API access, pricing, or continued availability of third-party platforms.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  5.2 Disclaimer of AI Hallucinations &amp; Output Accuracy
                </h3>
                <p>
                  Generative artificial intelligence models operate via probabilistic neural token prediction and may occasionally produce hallucinations, factual inaccuracies, or flawed copywriting. The Purchaser acknowledges that all AI outputs must be independently vetted, fact-checked, and approved by human editorial oversight prior to commercial use.
                </p>
                <p>
                  The Creator shall have zero liability for any commercial loss, copyright dispute, regulatory violation, or reputational damage resulting from AI-generated copy or strategies produced by the Purchaser.
                </p>
              </div>
            </div>
          )}

          {/* TAB 6: INDIVIDUAL ARBITRATION & JURISDICTION */}
          {activeTab === 'arbitration' && (
            <div className="space-y-5">
              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  6.1 Governing Law &amp; Exclusive Jurisdiction
                </h3>
                <p>
                  This Agreement, and all matters arising out of or relating to the purchase or use of Brain OS, shall be governed by, construed, and enforced in accordance with the substantive laws of India, without regard to conflict of law principles.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  6.2 Mandatory Binding Individual Arbitration
                </h3>
                <p>
                  Any dispute, controversy, claim, or breach arising out of or relating to this contract shall be definitively settled by confidential, binding individual arbitration administered under the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in the English language before a sole neutral arbitrator. The arbitral award shall be final and binding on all parties.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  6.3 Absolute Waiver of Class Actions &amp; Collective Lawsuits
                </h3>
                <p>
                  <strong>THE PURCHASER EXPLICITLY WAIVES ANY CONSTITUTIONAL OR STATUTORY RIGHT TO COMMENCE, JOIN, CONSOLIDATE, OR MAINTAIN ANY CLASS ACTION LAWSUIT, PRIVATE ATTORNEY GENERAL ACTION, REPRESENTATIVE PROCEEDING, OR COLLECTIVE LITIGATION AGAINST BRAIN OS OR ITS CREATOR. ALL DISPUTES MUST BE RESOLVED ON AN EXCLUSIVELY INDIVIDUAL BASIS.</strong>
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-black text-base uppercase text-black">
                  6.4 Absolute Limitation of Financial Liability
                </h3>
                <p>
                  To the maximum extent permitted by applicable jurisprudence, the aggregate financial liability of Brain OS, its creators, directors, agents, and licensors under any legal theory (whether in contract, tort, warranty, negligence, or strict liability) shall be strictly capped at and shall not exceed the exact monetary amount actually paid by the Purchaser for the license (₹999 INR / ₹1,399 INR).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Affirmation Bar */}
        <div className="bg-neo-bg border-t-2 border-black p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-neutral-700">
            <Lock className="w-4 h-4 text-black" />
            <span className="font-bold">LEGALLY BINDING INSTRUMENT &bull; ALL RIGHTS RESERVED</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-black uppercase tracking-wider btn-neo cursor-pointer"
          >
            ACKNOWLEDGE &amp; CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
