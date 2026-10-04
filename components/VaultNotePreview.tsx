'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';

export const VaultNotePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sweetspot' | 'zerocost' | 'breakeven'>('sweetspot');

  return (
    <section id="vault-preview" className="px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
      <div className="card-neo-lg p-5 sm:p-8 bg-white space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-black pb-5 font-mono">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-neo-yellow border border-black font-black text-[10px] uppercase shadow-neo-sm mb-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>AUTHENTIC VAULT SPECIFICATION &bull; PRODUCTION SCHEMATICS</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black tracking-tight text-black uppercase">
              DEEP MATHEMATICAL &amp; ECONOMIC PREVIEW
            </h2>
            <p className="text-xs text-neutral-600 font-sans max-w-xl pt-1">
              Brain OS contains zero generic platitudes. Every note is engineered with rigorous mathematical formulas, empirical unit economics, and deterministic decision trees.
            </p>
          </div>

          {/* Note Switcher Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-neo-gray border-2 border-black shadow-neo-sm self-start md:self-center">
            <button
              onClick={() => setActiveTab('sweetspot')}
              className={`px-3.5 py-2 font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                activeTab === 'sweetspot'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black hover:bg-neutral-200'
              }`}
            >
              ₹999 Unit Economics
            </button>
            <button
              onClick={() => setActiveTab('zerocost')}
              className={`px-3.5 py-2 font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                activeTab === 'zerocost'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black hover:bg-neutral-200'
              }`}
            >
              Zero Marginal Cost
            </button>
            <button
              onClick={() => setActiveTab('breakeven')}
              className={`px-3.5 py-2 font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                activeTab === 'breakeven'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black hover:bg-neutral-200'
              }`}
            >
              Break-Even ROAS
            </button>
          </div>
        </div>

        {/* Live Note Container */}
        <div className="border-2 border-black bg-neo-bg p-4 sm:p-6 shadow-neo space-y-6 font-mono">
          {/* TAB 1: THE ₹999 SWEETSPOT NOTE PREVIEW */}
          {activeTab === 'sweetspot' && (
            <div className="space-y-6">
              {/* YAML Frontmatter Badge */}
              <div className="bg-black text-white p-3 sm:p-4 text-[10px] sm:text-xs leading-relaxed border border-black space-y-1">
                <div className="text-neo-lime font-bold">--- YAML FRONTMATTER METADATA ---</div>
                <div><span className="text-neutral-400">title:</span> &ldquo;The 999 INR Sweetspot: The Definitive Economics of Indian Digital Knowledge Commerce&rdquo;</div>
                <div><span className="text-neutral-400">domain:</span> &ldquo;Pricing Psychology &amp; Behavioral Economics&rdquo;</div>
                <div><span className="text-neutral-400">status:</span> verified &bull; <span className="text-neutral-400">word_count:</span> 4,200 &bull; <span className="text-neutral-400">topics:</span> UPI Checkout &bull; Left-Digit Bias &bull; PPP Models</div>
              </div>

              {/* Executive Thesis Quote */}
              <div className="border-l-4 border-black pl-4 py-2 bg-white border border-neutral-300 space-y-1">
                <span className="text-[10px] font-black text-neo-coral uppercase tracking-wider block">
                  EXECUTIVE THESIS (NODE EXCERPT)
                </span>
                <p className="text-xs sm:text-sm font-sans text-neutral-800 leading-relaxed font-medium">
                  &ldquo;In the Indian consumer and solopreneur ecosystem, <strong>₹999</strong> is the undisputed mathematical and psychological sweet spot. It crosses the critical threshold into a &lsquo;serious professional investment&rsquo; commanding high consumption, while remaining strictly beneath the formidable four-digit (₹1,000) analytical budget wall. When paired with native UPI intent, ₹999 maximizes <strong>Total Net Realized Revenue</strong> (Price &times; Volume &times; Net Margin) while keeping customer acquisition costs sustainably beneath ₹350.&rdquo;
                </p>
              </div>

              {/* Mathematical Equation Box */}
              <div className="p-4 sm:p-5 bg-white border-2 border-black space-y-3 shadow-neo-sm">
                <span className="px-2 py-0.5 bg-neo-yellow border border-black text-[10px] font-black uppercase">
                  MATHEMATICAL UNIT ECONOMICS FORMULA
                </span>
                <div className="p-3 bg-neo-gray border border-black text-center text-xs sm:text-sm font-bold overflow-x-auto">
                  {'Total Net Realized Revenue = Traffic × Conversion Rate (3.8%) × Price (₹999) × Net Margin (97.6%)'}
                </div>
                <p className="text-[11px] font-sans text-neutral-600 leading-relaxed">
                  Notice that ₹999 generates over <strong>3.2x more net bank payout</strong> than a ₹299 low-ticket product, with 77% fewer customer support tickets and zero ongoing cloud egress costs.
                </p>
              </div>

              {/* Real 10,000 Visitors Empirical Table */}
              <div className="space-y-2">
                <span className="text-xs font-black uppercase text-black block">
                  EMPIRICAL BENCHMARK P&amp;L MODEL (10,000 STOREFRONT VISITORS)
                </span>
                <div className="overflow-x-auto border-2 border-black bg-white">
                  <table className="w-full text-left text-[11px] sm:text-xs min-w-[500px]">
                    <thead className="bg-black text-white border-b-2 border-black">
                      <tr>
                        <th className="p-2.5 font-bold uppercase">Financial Metric</th>
                        <th className="p-2.5 font-bold uppercase text-neutral-300">Low-Ticket (₹299)</th>
                        <th className="p-2.5 font-bold uppercase bg-neo-yellow text-black border-l-2 border-black">The Sweetspot (₹999)</th>
                        <th className="p-2.5 font-bold uppercase">High-Ticket (₹2,499)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black font-mono">
                      <tr>
                        <td className="p-2.5 font-bold border-r border-black">Conversion Rate</td>
                        <td className="p-2.5 text-neutral-600 border-r border-black">4.0%</td>
                        <td className="p-2.5 font-bold bg-neo-lime/20 border-r border-black">3.8% (Near identical volume)</td>
                        <td className="p-2.5 text-neutral-600">1.1% (High dropoff)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border-r border-black">Units Sold</td>
                        <td className="p-2.5 text-neutral-600 border-r border-black">400 units</td>
                        <td className="p-2.5 font-bold bg-neo-lime/20 border-r border-black">380 units</td>
                        <td className="p-2.5 text-neutral-600">110 units</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border-r border-black">Gross Revenue</td>
                        <td className="p-2.5 text-neutral-600 border-r border-black">₹1,19,600</td>
                        <td className="p-2.5 font-black text-black bg-neo-yellow/30 border-r border-black">₹3,79,620</td>
                        <td className="p-2.5 text-neutral-600">₹2,74,890</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold border-r border-black">Net Bank Payout</td>
                        <td className="p-2.5 text-neutral-600 border-r border-black">₹1,16,778</td>
                        <td className="p-2.5 font-black text-black bg-neo-lime/30 border-r border-black">₹3,70,661 (317% Profit Gain)</td>
                        <td className="p-2.5 text-neutral-600">₹2,68,403</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ZERO MARGINAL COST NOTE PREVIEW */}
          {activeTab === 'zerocost' && (
            <div className="space-y-6">
              <div className="bg-black text-white p-3 sm:p-4 text-[10px] sm:text-xs leading-relaxed border border-black space-y-1">
                <div className="text-neo-lime font-bold">--- YAML FRONTMATTER METADATA ---</div>
                <div><span className="text-neutral-400">title:</span> &ldquo;The Zero Marginal Cost Revolution&rdquo;</div>
                <div><span className="text-neutral-400">domain:</span> &ldquo;Economic Foundations &amp; Business Architecture&rdquo;</div>
                <div><span className="text-neutral-400">status:</span> verified &bull; <span className="text-neutral-400">tags:</span> digital-products &bull; leverage &bull; economics</div>
              </div>

              <div className="border-l-4 border-black pl-4 py-2 bg-white border border-neutral-300 space-y-1">
                <span className="text-[10px] font-black text-neo-lime uppercase tracking-wider block">
                  OPERATING LEVERAGE LAW (NODE EXCERPT)
                </span>
                <p className="text-xs sm:text-sm font-sans text-neutral-800 leading-relaxed font-medium">
                  &ldquo;Unlike physical goods that incur manufacturing, inventory storage, packaging, and shipping costs for every incremental customer, digital assets scale at zero marginal cost. The financial and operational cost to deliver the 10,000th unit is identical to delivering the first: exactly zero. This creates infinite operating leverage.&rdquo;
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-white border-2 border-black space-y-3 shadow-neo-sm">
                <span className="px-2 py-0.5 bg-neo-cyan border border-black text-[10px] font-black uppercase">
                  ASYMPTOTIC PROFIT EQUATION
                </span>
                <div className="p-3 bg-neo-gray border border-black text-center text-xs sm:text-sm font-bold overflow-x-auto">
                  {'Profit Margin = [(Price × Quantity) - Fixed Overheads] / (Price × Quantity) ⟶ 100% as Quantity ⟶ ∞'}
                </div>
                <p className="text-[11px] font-sans text-neutral-600 leading-relaxed">
                  In physical e-commerce, doubling sales doubles your warehouse, raw material, and shipping overhead. In Brain OS, delivering 10,000 vaults on Cloudflare R2 adds ₹0.00 to unit cost.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: BREAK-EVEN FUNNEL ROAS NOTE PREVIEW */}
          {activeTab === 'breakeven' && (
            <div className="space-y-6">
              <div className="bg-black text-white p-3 sm:p-4 text-[10px] sm:text-xs leading-relaxed border border-black space-y-1">
                <div className="text-neo-lime font-bold">--- YAML FRONTMATTER METADATA ---</div>
                <div><span className="text-neutral-400">title:</span> &ldquo;Break-Even Funnel Metrics &amp; Deterministic Paid Scale&rdquo;</div>
                <div><span className="text-neutral-400">domain:</span> &ldquo;Paid Advertising &amp; Funnel Scaling&rdquo;</div>
                <div><span className="text-neutral-400">status:</span> verified &bull; <span className="text-neutral-400">tags:</span> paid-advertising &bull; break-even-roas &bull; funnel-metrics</div>
              </div>

              <div className="border-l-4 border-black pl-4 py-2 bg-white border border-neutral-300 space-y-1">
                <span className="text-[10px] font-black text-neo-purple uppercase tracking-wider block">
                  DETERMINISTIC ACQUISITION THESIS
                </span>
                <p className="text-xs sm:text-sm font-sans text-neutral-800 leading-relaxed font-medium">
                  &ldquo;Paid performance advertising is not a creative gamble; it is a <strong>Deterministic Mathematical System</strong>. Paid acquisition achieves infinite scalability when it reaches the Self-Liquidating Threshold (ROAS &ge; 1.0). If it costs you ₹650 to acquire a buyer and your order bump + upsell generates ₹650 immediate AOV, your effective acquisition cost is ₹0.00.&rdquo;
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-white border-2 border-black space-y-3 shadow-neo-sm">
                <span className="px-2 py-0.5 bg-neo-yellow border border-black text-[10px] font-black uppercase">
                  SELF-LIQUIDATING CAC EQUATION
                </span>
                <div className="p-3 bg-neo-gray border border-black text-center text-xs sm:text-sm font-bold overflow-x-auto">
                  {'Effective Net CAC = Ad Spend - (Front-end Vault + Order Bump Take Rate × Bump Price) ≤ 0'}
                </div>
                <p className="text-[11px] font-sans text-neutral-600 leading-relaxed">
                  Every customer acquired through a self-liquidating front-end is effectively free, building an owned email audience for all upcoming quarterly drops.
                </p>
              </div>
            </div>
          )}

          {/* Bottom Traversal Ribbon */}
          <div className="pt-3 border-t-2 border-black flex flex-wrap items-center justify-between gap-3 text-[10px] text-neutral-600">
            <span className="font-bold text-black uppercase">
              EXTRACTED DIRECTLY FROM BRAIN OS MASTER VAULT ARCHIVE
            </span>
            <div className="flex items-center gap-2 font-mono">
              <span className="px-1.5 py-0.5 bg-white border border-black font-bold">OBSIDIAN .MD FORMAT</span>
              <span className="px-1.5 py-0.5 bg-white border border-black font-bold">LATEX MATH NATIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
