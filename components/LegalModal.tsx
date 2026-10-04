'use client';

import React, { useState } from 'react';
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border-[3px] border-black p-5 sm:p-7 text-black shadow-neo-xl flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-neo-gray border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer z-10"
          aria-label="Close Legal Window"
        >
          <X className="w-5 h-5 font-black" />
        </button>

        {/* Modal Header with Brand Logo (identical aesthetic to checkout modal) */}
        <div className="flex items-center gap-3 border-b-2 border-black pb-4 shrink-0">
          <div className="w-10 h-10 bg-neo-yellow border-2 border-black flex items-center justify-center p-1.5 shadow-neo-sm shrink-0">
            <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
            </svg>
          </div>
          <div>
            <div className="font-mono text-base font-black uppercase text-black tracking-wider">
              BRAIN OS
            </div>
            <div className="font-mono text-[9px] font-bold text-neutral-600 uppercase tracking-widest">
              OFFICIAL LEGAL POLICIES &bull; STATUTORY GOVERNANCE SHIELD
            </div>
          </div>
        </div>

        {/* =========================================================
            TWO ROWS OF POLICY LINKS (AS REQUESTED)
        ========================================================= */}
        <div className="py-3 border-b-2 border-black space-y-2 shrink-0 bg-neo-bg/50 px-2 sm:px-3 rounded-none my-2 font-mono text-xs">
          {/* ROW 1: PRIMARY FOUNDATIONAL POLICIES */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[10px] font-black uppercase text-neutral-500 w-full sm:w-auto sm:mr-1">
              ROW 1 &bull;
            </span>

            {/* Link 1: Privacy Policy */}
            <button
              onClick={() => setActivePolicy('privacy')}
              className={`px-3 py-1.5 text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
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
              className={`px-3 py-1.5 text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
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
              className={`px-3 py-1.5 text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
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
              className={`px-3 py-1.5 text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
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
              className={`px-3 py-1.5 text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
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
              className={`px-3 py-1.5 text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
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
              className={`px-3 py-1.5 text-[11px] font-black uppercase border-2 border-black transition-all cursor-pointer ${
                activePolicy === 'arbitration'
                  ? 'bg-neutral-800 text-white shadow-neo-sm -translate-y-0.5'
                  : 'bg-white hover:bg-neutral-100 text-black'
              }`}
            >
              Arbitration &amp; Waiver
            </button>
          </div>
        </div>

        {/* Policy Content Scroll Area */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-5 text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
          {/* ==========================================
              POLICY 1: PRIVACY POLICY
          ========================================== */}
          {activePolicy === 'privacy' && (
            <div className="space-y-4 pt-1">
              <div className="p-3 bg-neo-cyan/20 border-2 border-black flex items-center justify-between font-mono text-xs">
                <span className="font-black uppercase text-black">
                  [ PRIVACY CHARTER &bull; DPDPA &amp; GDPR COMPLIANT ]
                </span>
                <Link
                  href="/privacy"
                  target="_blank"
                  className="inline-flex items-center gap-1 font-bold underline hover:text-neo-coral"
                >
                  <span>Open Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  1.0 Minimal Data Collection Protocol
                </h3>
                <p>
                  Brain OS strictly collects the minimum transactional data necessary to execute payment token verification and electronic fulfillment: your Delivery Email Address and Full Name. All payment card details, UPI IDs, and banking authentication credentials are processed exclusively via PCI-DSS compliant payment gateway (Razorpay). Brain OS never sees, accesses, or stores raw payment instrument data.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  2.0 100% Offline Data Sovereignty (Zero Note Telemetry)
                </h3>
                <p>
                  The Brain OS master archive contains standard Markdown (.md) documents and Obsidian canvas files. There is zero proprietary phone-home tracking code, zero telemetry scripts, and zero note analytics. Your knowledge base runs 100% locally and privately on your personal hardware.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  3.0 Artificial Intelligence Prompt Confidentiality
                </h3>
                <p>
                  When utilizing the Master AI Connection Engine with third-party neural networks (Anthropic Claude, OpenAI ChatGPT, or local Ollama), your interactions occur strictly between your personal device and the external LLM provider. Brain OS operates zero intermediary proxy servers and captures zero prompt queries.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  4.0 Non-Sale of User Records &amp; Data Erasure Rights
                </h3>
                <p>
                  Brain OS does not sell, rent, monetize, or disclose customer email addresses or purchase logs to third-party data aggregators. Licensees may request complete deletion of order records post-delivery by contacting <code className="bg-neo-gray px-1 py-0.5 border border-black font-mono">support@brainos.site</code>.
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
                  [ MASTER TERMS OF SERVICE &amp; IP LICENSE ]
                </span>
                <Link
                  href="/terms"
                  target="_blank"
                  className="inline-flex items-center gap-1 font-bold underline hover:text-neo-yellow text-white"
                >
                  <span>Open Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  1.0 Acceptance of Master Terms
                </h3>
                <p>
                  By accessing, ordering, or downloading Brain OS, you agree to be irrevocably bound by this Master Agreement. If you do not accept every clause herein, you are strictly unauthorized to download or utilize the vault assets.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  2.0 Single-User Commercial License Grant
                </h3>
                <p>
                  Purchaser is granted a single-seat, revocable, non-exclusive, non-transferable license to implement the strategic frameworks, copy formulas, and pricing economics to create, market, and sell Purchaser&apos;s own independent products, software, or client services.
                </p>
                <p className="font-bold text-black">
                  Strict Prohibition: Reselling, sub-licensing, syndicating, publicly hosting on GitHub/GitLab, torrenting, file-sharing, or distributing the raw vault markdown notes in whole or in part is strictly prohibited and constitutes willful copyright infringement.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  3.0 Absolute Limitation of Financial Liability
                </h3>
                <p>
                  To the maximum extent permitted by applicable law, in no event shall Brain OS, its creators, or affiliates be liable for any indirect, punitive, or consequential damages. Maximum aggregate liability under any legal theory is strictly capped at the purchase price paid (₹999 INR / ₹1,399 INR).
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
                  [ OPERATING CONDITIONS &amp; STATUTORY COVENANTS ]
                </span>
                <span className="font-bold text-neutral-700">CODE: TC-COND-2026</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  1.0 Hardware &amp; Environmental Conditions
                </h3>
                <p>
                  Brain OS is engineered for deployment within Markdown-compatible knowledge engines (specifically Obsidian). The Purchaser acknowledges that possession of compatible computing hardware (Windows, macOS, Linux, iOS, or Android) and the free Obsidian application is an operational precondition. The Creator provides zero warranty for obsolete or incompatible third-party operating systems.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  2.0 AI Prompt Injection &amp; Deterministic Sandboxing Conditions
                </h3>
                <p>
                  The <code className="bg-neo-gray px-1 py-0.5 border border-black font-mono font-bold">Master AI Connection Engine.md</code> is provided as an advanced context framework for neural network prompt engineering. The Purchaser assumes full commercial, editorial, and legal responsibility for verifying and validating all text, scripts, and code generated by external AI runtimes before deploying them commercially.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  3.0 Seat License Allocation &amp; Anti-Leak Conditions
                </h3>
                <p>
                  Each purchase authorizes exactly one (1) primary user seat. Corporate sharing, unauthorized deployment across organizational intranets without an enterprise license, or sharing download credentials immediately revokes the license and triggers statutory copyright enforcement.
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
                  [ DIGITAL ASSETS DELIVERY &amp; NO-REFUND POLICY ]
                </span>
                <Link
                  href="/refund-policy"
                  target="_blank"
                  className="inline-flex items-center gap-1 font-bold underline hover:text-black"
                >
                  <span>Open Page</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  1.0 Irrevocable Digital Delivery &amp; Statutory Exclusion
                </h3>
                <p>
                  Brain OS consists of an intangible digital archive (.zip) delivered instantaneously via automated server token upon transaction completion. Under international electronic commerce laws, digital products that are immediately accessible and un-returnable are excluded from statutory remorse or cooling-off refund periods.
                </p>
                <p className="font-black font-mono text-xs bg-red-50 p-2.5 border-2 border-black text-red-950">
                  ALL SALES ARE FINAL. NO REFUNDS WILL BE ISSUED FOR CHANGE OF MIND, BUYER REMORSE, OR LACK OF PERSONAL EXECUTION.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  2.0 The 48-Hour Technical Defect Guarantee (Sole Remedy)
                </h3>
                <p>
                  If the downloaded <code className="bg-white px-1 border border-black font-mono font-bold">BrainOS-Master-Vault.zip</code> file is verified cryptographically corrupt or unreadable, the Purchaser must email <code className="bg-white px-1 border border-black font-mono font-bold">support@brainos.site</code> with their Order ID within 48 hours. The support desk will supply an authenticated replacement download within 24 hours. If the defect cannot be remedied within 48 hours, a 100% refund will be promptly issued.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  3.0 Fraudulent Chargeback Covenant
                </h3>
                <p>
                  Initiating a bank dispute or chargeback without exhausting the 48-Hour Technical Defect Guarantee constitutes a breach of contract. All cryptographic download server timestamps, IP logs, and Razorpay HMAC signatures will be submitted to card networks to vigorously contest fraudulent claims.
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
                  [ STATUTORY EARNINGS &amp; SIMULATION DISCLAIMER ]
                </span>
                <span className="font-bold text-white/90">FTC &amp; SEBI COMPLIANT</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  1.0 Academic &amp; Mathematical Simulations (Non-Guarantee)
                </h3>
                <p>
                  Any mathematical formulas, unit economics tables, benchmark P&amp;L models (including illustrative calculations for 10,000 visitors, ₹999 pricing sweetspots, and ROAS break-even equations) displayed on this storefront or inside the vault notes are <strong>strictly hypothetical computational simulation models for instructional and pedagogical purposes only</strong>.
                </p>
                <p>
                  They do NOT constitute certified historical revenue audits, guarantees of income, or projections of realized bank deposits.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  2.0 Complete Disclaimer of Realized Commercial Outcomes
                </h3>
                <p>
                  The Creator and operators make <strong>ZERO REPRESENTATIONS, PROMISES, OR WARRANTIES</strong> that any licensee will earn any money, recoup the purchase price, or attain commercial success. Entrepreneurial results vary entirely based on personal skill, marketing execution, audience trust, and market conditions. Purchaser disclaims any reliance on mathematical illustrations as an inducement to purchase.
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
                  [ ENFORCEABLE ANTI-DEFAMATION &amp; EXTORTION COVENANT ]
                </span>
                <span className="font-bold text-white/90">LEGAL SHIELD</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  1.0 Covenant Against Unverified Defamatory Claims
                </h3>
                <p>
                  Purchaser expressly covenants that they shall not publish, post, broadcast, or circulate false, defamatory, deceptive, or disparaging statements regarding Brain OS, its creators, or products across any public forum, social network (X, YouTube, Reddit, Instagram), or private chat.
                </p>
                <p>
                  Specifically, Purchaser agrees not to publish bad-faith allegations claiming that the materials are &ldquo;fake,&rdquo; that the Creator is &ldquo;faking everything and just earning money,&rdquo; or that the offering constitutes a &ldquo;scam.&rdquo;
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  2.0 Liquidated Damages &amp; Legal Fee Indemnification
                </h3>
                <p>
                  Breach of this covenant causes immediate and irreparable commercial harm to brand reputation. Parties agree to liquidated damages of <strong>USD $25,000 (INR 20,00,000)</strong> per defamatory publication or instance, plus immediate injunctive relief and full reimbursement of legal costs, attorney fees, and forensic investigation expenses.
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
                  [ MANDATORY INDIVIDUAL ARBITRATION &amp; CLASS ACTION WAIVER ]
                </span>
                <span className="font-bold text-white/80">BINDING DISPUTE PROTOCOL</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  1.0 Governing Jurisdiction
                </h3>
                <p>
                  This Agreement is governed strictly by the substantive laws of India, without regard to choice of law principles.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  2.0 Mandatory Confidential Arbitration
                </h3>
                <p>
                  All disputes arising under or related to Brain OS shall be resolved solely through confidential, binding individual arbitration conducted under the Arbitration and Conciliation Act, 1996 before a sole neutral arbitrator.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <h3 className="font-mono font-black text-sm uppercase text-black">
                  3.0 Absolute Class Action Waiver
                </h3>
                <p className="font-bold text-black uppercase font-mono text-xs">
                  PURCHASER IRREVOCABLY WAIVES ALL RIGHTS TO COMMENCE, JOIN, OR PARTICIPATE IN ANY CLASS ACTION, CONSOLIDATED LITIGATION, OR REPRESENTATIVE PROCEEDING AGAINST BRAIN OS OR ITS CREATORS.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer / Acknowledge */}
        <div className="border-t-2 border-black pt-3 mt-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 font-mono text-xs shrink-0 bg-white">
          <div className="flex items-center gap-1.5 text-neutral-600">
            <Lock className="w-3.5 h-3.5 text-black" />
            <span className="font-bold text-[11px]">ALL RIGHTS RESERVED &bull; ATTORNEY CERTIFIED</span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-black uppercase tracking-wider btn-neo cursor-pointer"
          >
            CLOSE LEGAL WINDOW
          </button>
        </div>
      </div>
    </div>
  );
};
