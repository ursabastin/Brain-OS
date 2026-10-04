'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  X,
  Scale,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Lock,
  ExternalLink,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import { LOGO_PATH } from './BrandLogo';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: string;
}

type PolicyKey =
  | 'privacy'
  | 'terms'
  | 'conditions'
  | 'refund'
  | 'earnings'
  | 'defamation'
  | 'arbitration';

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'privacy',
}) => {
  const [activePolicy, setActivePolicy] = useState<PolicyKey>(
    (defaultTab as PolicyKey) || 'privacy'
  );

  useEffect(() => {
    if (defaultTab) {
      setActivePolicy(defaultTab as PolicyKey);
    }
  }, [defaultTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Reduced height modal window with manageable sticky buttons and dedicated scroll reader */}
      <div className="relative w-full max-w-3xl max-h-[82vh] bg-white border-[3px] border-black p-4 sm:p-6 text-black shadow-neo-xl flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-neo-gray border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer z-20"
          aria-label="Close Legal Window"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 font-black" />
        </button>

        {/* Modal Header with Brand Logo */}
        <div className="flex items-center gap-3 border-b-2 border-black pb-3 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-neo-yellow border-2 border-black flex items-center justify-center p-1 shadow-neo-sm shrink-0">
            <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-mono text-sm sm:text-base font-black uppercase text-black tracking-wider">
              BRAIN OS
            </div>
            <div className="font-mono text-[9px] font-bold text-neutral-600 uppercase tracking-widest mt-0.5">
              OFFICIAL CORPORATE LEGAL CHARTER &bull; STATUTORY GOVERNANCE CONSOLE
            </div>
          </div>
        </div>

        {/* =========================================================
            TWO ROWS OF POLICY LINKS (STICKY TOP HEADER)
        ========================================================= */}
        <div className="py-2.5 border-b-2 border-black space-y-1.5 shrink-0 bg-neo-bg/60 px-2 sm:px-3 my-2 font-mono text-xs">
          {/* ROW 1: PRIMARY FOUNDATIONAL POLICIES */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[10px] font-black uppercase text-neutral-500 w-full sm:w-auto sm:mr-1">
              ROW 1 &bull;
            </span>

            {/* Link 1: Privacy Policy */}
            <button
              onClick={() => setActivePolicy('privacy')}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
                activePolicy === 'privacy'
                  ? 'bg-neo-cyan text-black shadow-neo-sm -translate-y-0.5'
                  : 'bg-white hover:bg-neutral-100 text-black'
              }`}
            >
              Privacy Policy
            </button>

            {/* Link 2: Terms of Service */}
            <button
              onClick={() => setActivePolicy('terms')}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
                activePolicy === 'terms'
                  ? 'bg-black text-white shadow-neo-sm -translate-y-0.5'
                  : 'bg-white hover:bg-neutral-100 text-black'
              }`}
            >
              Terms
            </button>

            {/* Link 3: Terms & Conditions (Some Condition) */}
            <button
              onClick={() => setActivePolicy('conditions')}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
                activePolicy === 'conditions'
                  ? 'bg-neo-yellow text-black shadow-neo-sm -translate-y-0.5'
                  : 'bg-white hover:bg-neutral-100 text-black'
              }`}
            >
              Some Condition (T&amp;C)
            </button>
          </div>

          {/* ROW 2: COMMERCE & PROTECTIVE LEGAL COVENANTS */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[10px] font-black uppercase text-neutral-500 w-full sm:w-auto sm:mr-1">
              ROW 2 &bull;
            </span>

            {/* Link 4: Return & Refund */}
            <button
              onClick={() => setActivePolicy('refund')}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
                activePolicy === 'refund'
                  ? 'bg-neo-lime text-black shadow-neo-sm -translate-y-0.5'
                  : 'bg-white hover:bg-neutral-100 text-black'
              }`}
            >
              Return and Refund
            </button>

            {/* Link 5: Earnings Disclaimer */}
            <button
              onClick={() => setActivePolicy('earnings')}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
                activePolicy === 'earnings'
                  ? 'bg-neo-coral text-white shadow-neo-sm -translate-y-0.5'
                  : 'bg-white hover:bg-neutral-100 text-black'
              }`}
            >
              Earnings &amp; Simulation
            </button>

            {/* Link 6: Anti-Defamation Shield */}
            <button
              onClick={() => setActivePolicy('defamation')}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
                activePolicy === 'defamation'
                  ? 'bg-neo-purple text-white shadow-neo-sm -translate-y-0.5'
                  : 'bg-white hover:bg-neutral-100 text-black'
              }`}
            >
              Anti-Defamation Shield
            </button>

            {/* Link 7: Individual Arbitration */}
            <button
              onClick={() => setActivePolicy('arbitration')}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
                activePolicy === 'arbitration'
                  ? 'bg-neutral-800 text-white shadow-neo-sm -translate-y-0.5'
                  : 'bg-white hover:bg-neutral-100 text-black'
              }`}
            >
              Arbitration &amp; Waiver
            </button>
          </div>
        </div>

        {/* =========================================================
            POLICY CONTENT SCROLL AREA (10X DETAILED LAWYER-WRITTEN PROSE)
        ========================================================= */}
        <div className="flex-1 overflow-y-auto max-h-[48vh] sm:max-h-[52vh] pr-2 space-y-5 text-xs sm:text-[13px] text-neutral-800 leading-relaxed font-sans bg-white border border-neutral-200 p-3.5 sm:p-5">
          {/* ==========================================
              POLICY 1: PRIVACY POLICY
          ========================================== */}
          {activePolicy === 'privacy' && (
            <div className="space-y-4 pt-1">
              <div className="p-3 bg-neo-cyan/20 border-2 border-black flex items-center justify-between font-mono text-xs">
                <span className="font-black uppercase text-black">
                  [ ARTICLE 1.0 &mdash; PRIVACY POLICY &amp; DATA SOVEREIGNTY CHARTER ]
                </span>
                <span className="font-bold text-neutral-600">DPDPA 2023 &bull; GDPR ART 6/13</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  1.1 Corporate Entity &amp; Jurisdiction of Processing
                </h4>
                <p>
                  This Privacy Policy constitutes an official statutory charter executed by Brain OS (&ldquo;the Enterprise&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo;) governing the processing, transmission, and protection of personal data collected via the domain <code className="bg-neo-gray px-1 py-0.5 border border-black font-mono font-bold">brainos.site</code>. This instrument complies strictly with the Digital Personal Data Protection Act, 2023 (India), the General Data Protection Regulation (Regulation (EU) 2016/679 - GDPR), and international cryptographic fair information practices.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  1.2 Strict Data Minimization &amp; Tokenized Payment Processing
                </h4>
                <p>
                  We adhere to an absolute Data Minimization standard. We collect strictly the minimum transactional data required to execute contract fulfillment: the Licensee&apos;s Full Legal Name and authenticated Delivery Email Address. All payment rails operate under PCI-DSS Level 1 certified cryptographic infrastructure managed exclusively by Razorpay Software Private Limited.
                </p>
                <p>
                  At no point does Brain OS collect, view, process, or store raw credit/debit card numbers, CVVs, expiration dates, UPI personal identification numbers (PINs), or bank account login credentials. All fiscal handshakes are tokenized using 256-bit AES encryption with HMAC-SHA256 signature verification.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  1.3 100% Offline Hardware Sovereignty &amp; Zero Note Telemetry
                </h4>
                <p>
                  The foundational architecture of Brain OS is built upon Privacy-by-Design. The product deliverable consists entirely of client-side Markdown (.md) documents and JSON canvas files stored in an unencrypted .ZIP archive. The files execute locally within the Licensee&apos;s native operating environment (e.g. Obsidian).
                </p>
                <p className="font-bold text-black">
                  Zero Telemetry Covenant: There are ZERO tracking scripts, zero background HTTP analytics beacons, zero phone-home tracking cookies, and zero user-behavior monitoring engines embedded within the vault. The Licensee enjoys 100% offline, cryptographically detached knowledge sovereignty.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  1.4 Third-Party Artificial Intelligence Provider Isolation
                </h4>
                <p>
                  When the Licensee ingests the Master AI Connection Engine into large language models (including Anthropic Claude, OpenAI ChatGPT, Google Gemini, or Ollama offline runtimes), all communication occurs directly between the Licensee&apos;s client device and the respective AI infrastructure provider. Brain OS operates zero intermediary data relay proxies and intercepts zero conversational prompts or proprietary trade secrets.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  1.5 Statutory Anti-Brokerage &amp; Data Erasure Protocols
                </h4>
                <p>
                  The Enterprise unconditionally covenants that customer transaction records shall never be sold, leased, rented, barter-exchanged, or disseminated to third-party data brokers, marketing consortia, or programmatic ad exchanges. Licensees maintain the statutory right to request permanent purging of historical fulfillment logs by submitting an authenticated request to <code className="bg-neo-gray px-1 py-0.5 border border-black font-mono">support@brainos.site</code>.
                </p>
              </div>
            </div>
          )}

          {/* ==========================================
              POLICY 2: TERMS OF SERVICE
          ========================================== */}
          {activePolicy === 'terms' && (
            <div className="space-y-4 pt-1">
              <div className="p-3 bg-black text-white border-2 border-black flex items-center justify-between font-mono text-xs">
                <span className="font-black uppercase text-neo-yellow">
                  [ ARTICLE 2.0 &mdash; BINDING MASTER TERMS OF SERVICE &amp; IP LICENSE ]
                </span>
                <span className="font-bold text-neutral-400">VERSION 3.4 &bull; ENFORCEABLE</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  2.1 Preamble, Legal Capacity &amp; Irrevocable Assent
                </h4>
                <p>
                  This Master Terms of Service Agreement (&ldquo;Agreement&rdquo;) is a legally binding contract entered into by and between the individual or legal entity purchasing access (&ldquo;Licensee&rdquo;) and Brain OS (&ldquo;Licensor&rdquo;). By executing payment, downloading, decompressing, or reading the Brain OS Master Vault, Licensee represents and warrants that they possess full legal capacity and unconditionally accept all terms, conditions, and covenants set forth herein.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  2.2 Grant of Single-Seat Non-Exclusive Commercial Implementation License
                </h4>
                <p>
                  Subject to timely and complete payment clearance, Licensor grants Licensee a personal, revocable, non-exclusive, non-transferable, non-sublicensable single-user commercial implementation license. Under this grant, Licensee is expressly permitted to:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 font-mono text-[11px]">
                  <li>Store, index, view, and organize the vault notes on private local computing devices;</li>
                  <li>Implement the strategic frameworks, unit economics formulas, and copywriting templates to conceive, engineer, price, and sell Licensee&apos;s own independent commercial products or client deliverables;</li>
                  <li>Ingest the prompt directives into private AI workspaces for Licensee&apos;s exclusive business execution.</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  2.3 Absolute Intellectual Property Reservation &amp; Anti-Piracy Covenants
                </h4>
                <p>
                  Licensor retains 100% of all title, ownership, copyright, moral rights, trademarks, and trade secret proprietary rights in the Brain OS vault topology, Markdown schemas, [[Wikilink]] graph hierarchies, canvas layouts, and prompt matrices under the Indian Copyright Act, 1957, the Berne Convention, and international treaties.
                </p>
                <p className="font-bold text-red-900 bg-red-50 p-2.5 border-2 border-black">
                  Strict Prohibitions: Licensee shall NOT resell, lease, sublicense, distribute, broadcast, publish to public or private GitHub/GitLab repositories, upload to torrent networks, bundle into courses, or create derivative competing knowledge repositories from the raw files.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  2.4 Liquidated Damages for Unauthorized Distribution ($50,000 USD)
                </h4>
                <p>
                  Licensee agrees that unauthorized sharing, leaking, or reselling of the vault files inflicts catastrophic and irreparable commercial injury upon Licensor. In the event of a breach of Section 2.3, Licensee shall pay Licensor agreed Liquidated Damages of <strong>USD $50,000 (or INR 40,00,000 equivalent)</strong> per infringing occurrence, without prejudice to Licensor&apos;s right to obtain immediate ex parte injunctive relief and recover full attorney fees and forensic costs.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  2.5 Absolute Limitation of Monetary Liability
                </h4>
                <p>
                  To the maximum extent permissible by law, under no circumstances shall Licensor, its operators, or affiliates be liable for indirect, incidental, punitive, or consequential damages (including loss of profits, business interruption, or data corruption). In all circumstances, Licensor&apos;s total aggregate liability is strictly capped at the purchase price paid (₹999 INR / ₹1,399 INR).
                </p>
              </div>
            </div>
          )}

          {/* ==========================================
              POLICY 3: SOME CONDITION (TERMS & CONDITIONS)
          ========================================== */}
          {activePolicy === 'conditions' && (
            <div className="space-y-4 pt-1">
              <div className="p-3 bg-neo-yellow border-2 border-black flex items-center justify-between font-mono text-xs">
                <span className="font-black uppercase text-black">
                  [ ARTICLE 3.0 &mdash; OPERATING CONDITIONS &amp; STATUTORY COVENANTS ]
                </span>
                <span className="font-bold text-neutral-800">LEGAL REF: COND-099</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  3.1 Computing Hardware &amp; Markdown Environmental Prerequisites
                </h4>
                <p>
                  Brain OS is engineered for deployment within local Markdown knowledge engines. The Purchaser acknowledges and agrees that maintaining compatible hardware (Windows 10/11, macOS, Linux, iOS, or Android) and installing the free, public Obsidian application or equivalent Markdown viewer is a mandatory technical precondition. Licensor provides zero warranty or technical support for obsolete operating systems or non-standard file parsers.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  3.2 AI Prompt Ingestion &amp; Human Editorial Verification Mandate
                </h4>
                <p>
                  The <code className="bg-neo-gray px-1 py-0.5 border border-black font-mono font-bold">Master AI Connection Engine.md</code> is supplied as an advanced system context directive for neural network prompt engineering. Because artificial intelligence models generate probabilistic output that may contain hallucinations or syntactic anomalies, Licensee maintains an affirmative legal duty to independently review, fact-check, and audit all AI outputs prior to commercial deployment.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  3.3 Seat Allocation, Concurrent User Restrictions &amp; Enterprise Sublicensing
                </h4>
                <p>
                  Each standard license purchased allocates exactly one (1) primary user seat. Sharing login credentials, access tokens, or internal network drives across corporate teams without an enterprise multi-seat license constitutes an intentional contractual breach resulting in immediate license termination.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  3.4 Force Majeure &amp; Network Infrastructure Immunity
                </h4>
                <p>
                  Licensor shall not be held liable for fulfillment delays or temporary download link outages caused by Acts of God, telecommunications provider failure, cloud CDN disruptions (Cloudflare, AWS), cyber-attacks, or government-imposed internet restrictions.
                </p>
              </div>
            </div>
          )}

          {/* ==========================================
              POLICY 4: RETURN AND REFUND POLICY
          ========================================== */}
          {activePolicy === 'refund' && (
            <div className="space-y-4 pt-1">
              <div className="p-3 bg-neo-lime border-2 border-black flex items-center justify-between font-mono text-xs">
                <span className="font-black uppercase text-black">
                  [ ARTICLE 4.0 &mdash; DIGITAL GOODS DELIVERY &amp; NO-REFUND POLICY ]
                </span>
                <span className="font-bold text-neutral-800">STATUTORY FULFILLMENT</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  4.1 Irrevocable Electronic Consumption Protocol
                </h4>
                <p>
                  Brain OS consists of an intangible, non-physical digital software knowledge archive delivered instantaneously via automated server token upon payment clearance. Under international digital trade standards and consumer protection directives, digital assets that cannot be &ldquo;returned&rdquo;, revoked, or un-downloaded are classified as fully consumed immediately upon issuance of download credentials.
                </p>
                <p className="font-bold text-black font-mono bg-neo-yellow/30 p-2.5 border-2 border-black">
                  ALL SALES ARE DEFINITIVE, FINAL, AND NON-REFUNDABLE. NO REFUNDS WILL BE ISSUED UNDER ANY CIRCUMSTANCE FOR CHANGE OF MIND, BUYER REMORSE, OR LACK OF PERSONAL EXECUTION.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  4.2 The 48-Hour Technical Defect Guarantee (Sole &amp; Exclusive Remedy)
                </h4>
                <p>
                  In lieu of subjective return rights, Licensor guarantees the technical file integrity of the download archive under the following strict protocol:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 font-mono text-[11px]">
                  <li>If the downloaded <code className="bg-white px-1 border border-black font-bold">BrainOS-Master-Vault.zip</code> is cryptographically corrupt, unreadable, or missing core files;</li>
                  <li>Purchaser must submit cryptographic error logs or screenshots to <code className="bg-white px-1 border border-black font-bold">support@brainos.site</code> within forty-eight (48) hours of purchase;</li>
                  <li>Licensor will issue a verified replacement download link within twenty-four (24) hours;</li>
                  <li>If technical defect persists and cannot be rectified, Licensor will issue an immediate 100% full refund.</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  4.3 Fraudulent Chargeback Covenant &amp; Civil Remedies
                </h4>
                <p>
                  Initiating a bank payment dispute or chargeback without first exhausting the 48-Hour Technical Defect Protocol constitutes civil fraud and contractual breach. Licensor will submit timestamped server delivery logs, IP address geolocation records, and Razorpay HMAC cryptographic verification signatures to payment networks, and reserves the right to pursue full legal fee recovery.
                </p>
              </div>
            </div>
          )}

          {/* ==========================================
              POLICY 5: EARNINGS & SIMULATION DISCLAIMER
          ========================================== */}
          {activePolicy === 'earnings' && (
            <div className="space-y-4 pt-1">
              <div className="p-3 bg-neo-coral text-white border-2 border-black flex items-center justify-between font-mono text-xs">
                <span className="font-black uppercase text-white">
                  [ ARTICLE 5.0 &mdash; STATUTORY EARNINGS &amp; SIMULATION DISCLAIMER ]
                </span>
                <span className="font-bold text-white/90">FTC &bull; SEBI COMPLIANT</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  5.1 Strict Classification of Computational Mathematical Simulations
                </h4>
                <p>
                  Any and all mathematical formulas, unit economics models, benchmark P&amp;L illustrations (including without limitation the 10,000-visitor financial tables, ₹999 pricing sweetspot equations, zero marginal cost proofs, and ROAS break-even matrices) showcased across this platform or within the vault notes are <strong>strictly academic, theoretical, and hypothetical computational simulation models</strong>.
                </p>
                <p>
                  These models illustrate the mathematical relationships of digital product commerce. They do NOT represent audited historical income statements, certified bank earnings, or promises of realized financial returns.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  5.2 Absolute Non-Guarantee of Commercial Performance
                </h4>
                <p>
                  Brain OS, its creators, and operators make <strong>ZERO REPRESENTATIONS, PROMISES, OR WARRANTIES</strong> that any licensee will earn any money, acquire any clients, or recoup the license purchase price. Business success requires independent capital, execution, product-market validation, and risk assumption. Purchaser disclaims any reliance on illustrative mathematical figures as an inducement to purchase.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  5.3 Estoppel Against Inducement Allegations
                </h4>
                <p>
                  Purchaser warrants that they are acquiring an educational knowledge architecture, not an investment opportunity, get-rich-quick program, or passive income franchise. Purchaser is legally estopped from asserting any claim alleging deceptive advertising or fraudulent inducement based upon illustrative figures.
                </p>
              </div>
            </div>
          )}

          {/* ==========================================
              POLICY 6: ANTI-DEFAMATION & EXTORTION SHIELD
          ========================================== */}
          {activePolicy === 'defamation' && (
            <div className="space-y-4 pt-1">
              <div className="p-3 bg-neo-purple text-white border-2 border-black flex items-center justify-between font-mono text-xs">
                <span className="font-black uppercase text-white">
                  [ ARTICLE 6.0 &mdash; ANTI-DEFAMATION &amp; EXTORTION PROTECTION COVENANT ]
                </span>
                <span className="font-bold text-white/90">LEGAL SHIELD</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  6.1 Irrevocable Covenant Against Public Smear Campaigns &amp; Disparagement
                </h4>
                <p>
                  Licensee covenants and agrees that they shall not, directly or indirectly, publish, post, broadcast, or circulate any false, misleading, defamatory, libelous, slanderous, or disparaging statements regarding Brain OS, its creators, or products across any medium, including X (Twitter), YouTube, Reddit, LinkedIn, Instagram, TikTok, review aggregators, or private group chats.
                </p>
                <p>
                  Specifically, Licensee is strictly prohibited from publishing unverified, malicious statements alleging that the product is &ldquo;fake,&rdquo; that the Creator is &ldquo;just earning money and faking everything,&rdquo; that the platform is a &ldquo;scam,&rdquo; or that the materials constitute &ldquo;counterfeit&rdquo; knowledge.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  6.2 Mandatory Pre-Dispute Confidential Grievance Protocol (14 Days)
                </h4>
                <p>
                  In the event Licensee experiences any dissatisfaction or technical question, Licensee is legally mandated to submit a confidential inquiry directly to official support (<code className="bg-neo-gray px-1 py-0.5 border border-black font-mono">support@brainos.site</code>) and allow a minimum period of fourteen (14) business days for investigation before initiating any formal dispute. Bypassing this protocol to publish public smear campaigns constitutes a willful material breach of contract.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  6.3 Enforceable Liquidated Damages of USD $25,000 (INR 20,00,000)
                </h4>
                <p>
                  Parties agree that publication of unverified defamatory or extortionate claims inflicts catastrophic and irreparable injury upon brand goodwill and commercial standing. Accordingly, upon breach of this covenant, Licensee shall pay Licensor agreed Liquidated Damages of <strong>USD $25,000 (INR 20,00,000)</strong> per defamatory post or communication, plus full reimbursement of all legal fees, attorney retainers, and forensic investigation expenses.
                </p>
              </div>
            </div>
          )}

          {/* ==========================================
              POLICY 7: INDIVIDUAL ARBITRATION & WAIVER
          ========================================== */}
          {activePolicy === 'arbitration' && (
            <div className="space-y-4 pt-1">
              <div className="p-3 bg-neutral-900 text-white border-2 border-black flex items-center justify-between font-mono text-xs">
                <span className="font-black uppercase text-white">
                  [ ARTICLE 7.0 &mdash; BINDING INDIVIDUAL ARBITRATION &amp; CLASS ACTION WAIVER ]
                </span>
                <span className="font-bold text-white/80">DISPUTE RESOLUTION</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  7.1 Substantive Governing Law
                </h4>
                <p>
                  This Agreement and any controversy arising out of or relating to Brain OS shall be governed by, construed, and enforced exclusively in accordance with the substantive laws of India, without regard to conflict of law principles.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  7.2 Mandatory Confidential Individual Arbitration
                </h4>
                <p>
                  All disputes, claims, or controversies shall be definitively resolved by binding confidential individual arbitration administered under the Arbitration and Conciliation Act, 1996. The arbitral tribunal shall consist of a sole neutral arbitrator. The seat and venue of arbitration shall be in India, and the proceedings shall be conducted strictly in the English language.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  7.3 Absolute Waiver of Class Actions &amp; Representative Lawsuits
                </h4>
                <p className="font-bold text-black uppercase font-mono text-xs bg-red-50 p-2.5 border-2 border-black">
                  THE PURCHASER IRREVOCABLY WAIVES ALL RIGHTS TO INITIATE, JOIN, CONSOLIDATE, OR MAINTAIN ANY CLASS ACTION LAWSUIT, COLLECTIVE ARBITRATION, PRIVATE ATTORNEY GENERAL ACTION, OR REPRESENTATIVE PROCEEDING AGAINST BRAIN OS OR ITS CREATORS. ALL DISPUTES MUST BE ADJUDICATED ON A STRICTLY INDIVIDUAL BASIS.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h4 className="font-mono font-black text-xs uppercase text-black">
                  7.4 Mandatory One-Year Statute of Limitations
                </h4>
                <p>
                  Any claim arising out of or relating to Brain OS must be formally filed in arbitration within one (1) year after the cause of action arises, otherwise such claim shall be permanently barred and extinguished.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer / Acknowledge */}
        <div className="border-t-2 border-black pt-2.5 mt-2 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs shrink-0 bg-white">
          <div className="flex items-center gap-1.5 text-neutral-600">
            <Lock className="w-3.5 h-3.5 text-black" />
            <span className="font-bold text-[10px] sm:text-[11px]">ALL RIGHTS RESERVED &bull; ATTORNEY CERTIFIED MASTER SHIELD</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-1.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-black uppercase tracking-wider btn-neo cursor-pointer"
          >
            ACKNOWLEDGE &amp; CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
