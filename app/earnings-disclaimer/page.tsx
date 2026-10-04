import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AlertTriangle, Calculator, ShieldAlert, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Statutory Earnings & Simulation Disclaimer | Brain OS',
  description:
    'Mandatory FTC 16 CFR Part 255 and SEBI compliance disclaimer classifying all unit economics, 10,000-visitor P&L models, and ROAS formulas as theoretical mathematical simulations.',
};

export default function EarningsDisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black font-sans">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 font-mono">
        <div className="card-neo-lg p-6 sm:p-8 space-y-3 bg-white">
          <div className="flex items-center justify-between text-xs border-b-2 border-black pb-3">
            <span className="px-2 py-0.5 bg-neo-coral text-white font-black uppercase border border-black shadow-neo-sm">
              STATUTORY COMPLIANCE
            </span>
            <span className="font-bold text-neutral-600">FTC 16 CFR PART 255 &bull; SEBI GUIDELINES</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Earnings &amp; Mathematical Simulation Disclaimer
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Formal legal notice classifying all mathematical models and financial illustrations on <strong className="text-black font-mono">brainos.site</strong> as academic simulations.
          </p>
          <div className="p-4 bg-red-50 border-2 border-neo-coral text-xs text-black font-sans shadow-neo-sm">
            <strong className="font-black font-mono text-xs uppercase block mb-1 text-neo-coral flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-neo-coral" />
              MANDATORY STATUTORY NON-GUARANTEE:
            </strong>
            Brain OS is strictly an educational knowledge repository and strategic architecture. The platform does NOT sell, represent, or guarantee any business opportunities, income claims, client acquisition quotas, or passive revenue streams.
          </div>
        </div>

        <div className="card-neo-lg p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans bg-white">
          <section className="space-y-3">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 01 ] Academic Characterization of Computational Simulations</h2>
            <p>
              Any and all mathematical formulas, unit economics diagrams, benchmark P&amp;L illustrations (including but not limited to the 10,000-visitor financial models, ₹999 pricing sweetspot calculations, zero marginal cost proofs, and ROAS break-even equations) displayed across this storefront, within marketing literature, or embedded inside the Markdown notes of the vault are <strong>strictly theoretical, academic, and hypothetical computational simulation models</strong>.
            </p>
            <p>
              These computational models are engineered exclusively to demonstrate the mechanical arithmetic of digital product pricing, traffic elasticity, and financial unit economics. Under no circumstances do these computational demonstrations constitute representations of actual historical earnings, audited financial statements, or guarantees of realized bank deposits.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 02 ] Complete Disclaimer of Realized Commercial Outcomes</h2>
            <p>
              Brain OS, its creators, operators, and corporate entities make <strong>ZERO WARRANTIES, EXPRESS OR IMPLIED, THAT ANY LICENSEE WILL GENERATE A SINGLE RUPEE OR DOLLAR IN REVENUE, RECOUP THEIR ACQUISITION COST, OR ATTAIN ANY COMMERCIAL TRACTION</strong>.
            </p>
            <p>
              Realized commercial performance is dictated entirely by external factors beyond the creator&apos;s control, including individual execution, skill, audience trust, market saturation, third-party platform algorithm shifts, capital reserves, and macroeconomic conditions. The Purchaser expressly agrees that they assume 100% of the commercial, financial, and entrepreneurial risks associated with building, pricing, or marketing any digital asset.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 03 ] Estoppel &amp; Non-Reliance Covenant</h2>
            <p>
              By completing the checkout transaction, the Purchaser warrants and affirms that they have NOT relied on any oral, written, or implied statement, simulation, or visual table as a promise of income or as an inducement to purchase. The Purchaser is legally estopped from asserting any claim alleging deceptive advertising, fraud, or fraudulent inducement based upon illustrative mathematical figures.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t-2 border-black">
            <h2 className="text-sm font-black text-black font-mono uppercase">[ 04 ] No Professional Financial, Legal, or Tax Advice Formed</h2>
            <p>
              The frameworks contained within Brain OS do not constitute certified public accounting (CPA) advice, chartered accountant tax counsel, investment advisory, or formal legal opinions. Licensees are legally advised to consult qualified independent attorneys and chartered accountants regarding local GST filings, corporate formations, and tax obligations.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
