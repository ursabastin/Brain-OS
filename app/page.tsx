'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Zap,
  Check,
  Calendar,
  Layers,
  Terminal,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CheckoutModal } from '@/components/CheckoutModal';
import { ReleaseCalendar } from '@/components/ReleaseCalendar';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { LOGO_PATH } from '@/components/BrandLogo';
import { SITE_CONFIG } from '@/lib/config';

export default function HomePage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [vaultView, setVaultView] = useState<'macro' | 'detail'>('macro');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const domains = [
    {
      num: '01',
      title: 'Pricing Psychology & Economics',
      count: '34 Notes',
      color: 'bg-neo-yellow',
      highlights: [
        'Decoy pricing architectures & anchor thresholds',
        'The ₹999 INR / $49 USD impulse conversion sweetspot',
        'Purchasing Power Parity (PPP) localization grids',
        'Post-purchase price elasticity & daily cost framing',
      ],
    },
    {
      num: '02',
      title: 'Product Architecture & Unbundling',
      count: '34 Notes',
      color: 'bg-neo-lime',
      highlights: [
        'Zero marginal cost digital product engineering',
        'Tiered deliverable matrices & unbundled assets',
        'Digital asset longevity & obsolescence defense',
        'Micro-tools vs high-ticket knowledge packaging',
      ],
    },
    {
      num: '03',
      title: 'Copywriting & PAS Sales Systems',
      count: '32 Notes',
      color: 'bg-neo-coral text-white',
      highlights: [
        'The Objection Annihilation matrix & friction triage',
        'Problem-Agitate-Solve (PAS) hero copywriting formulas',
        'The Sticky Buy Button & micro-commitment CTAs',
        'The Video Sales Letter (VSL) blueprint & P.S. closer',
      ],
    },
    {
      num: '04',
      title: 'Traffic, Distribution Moats & Funnels',
      count: '31 Notes',
      color: 'bg-neo-cyan',
      highlights: [
        'The Content-to-Commerce perpetual pipeline',
        'The Build-in-Public distribution flywheel',
        'Viral bookmark catalogs & educational thread hooks',
        'Organic search indexing (SEO) for digital assets',
      ],
    },
    {
      num: '05',
      title: 'Paid Advertising & Scalable ROAS',
      count: '30 Notes',
      color: 'bg-neo-purple text-white',
      highlights: [
        'Ad creative testing frameworks & dynamic iteration',
        'Break-even customer acquisition cost (CAC) models',
        'Meta & Google Video hook formulas that print ROAS',
        'The self-liquidating lead magnet funnel',
      ],
    },
    {
      num: '06',
      title: 'Master AI Connection Engine',
      count: '31 Notes',
      color: 'bg-neo-yellow',
      highlights: [
        'Claude Projects & Custom GPT ingestion directive',
        '360-node semantic grounding (Zero AI hallucination)',
        'Prompt chaining for high-converting sales letters',
        'Deterministic execution sandboxes & Ollama offline ops',
      ],
    },
    {
      num: '07',
      title: 'Market Validation & Pre-Selling',
      count: '34 Notes',
      color: 'bg-neo-lime',
      highlights: [
        'Smoke test funnels & pre-sale validation grids',
        'Customer discovery inquiry scripts & demand traps',
        'Competitive monitoring & gap exploitation audits',
        'Audience demographic & psychographic profiling',
      ],
    },
    {
      num: '08',
      title: 'Ecommerce Rails & Frictionless Checkout',
      count: '34 Notes',
      color: 'bg-neo-coral text-white',
      highlights: [
        'Indian UPI instant QR checkout optimization',
        'Razorpay & Stripe webhook automation architectures',
        'Cart abandonment recovery sequences & thresholds',
        'Apple Pay & Google Pay 1-click frictionless buy',
      ],
    },
    {
      num: '09',
      title: 'Post-Purchase Retention & Ascension',
      count: '33 Notes',
      color: 'bg-neo-cyan',
      highlights: [
        'The 60-second unboxing win & onboarding loop',
        'One-Click Upsell (OTO) expansion & AOV multipliers',
        'High-ticket ascension ladders from low-ticket frontends',
        'Organic viral referral & word-of-mouth engines',
      ],
    },
    {
      num: '10',
      title: 'Foundations, Unit Economics & Leverage',
      count: '33 Notes',
      color: 'bg-neo-purple text-white',
      highlights: [
        'The Solopreneur high-leverage tech stack',
        'Micro SaaS vs Digital Products risk-reward metrics',
        'Automated PDF compilation & digital delivery pipelines',
        'Curated database compendiums & asset monetization',
      ],
    },
    {
      num: '11',
      title: 'Legal, Banking, GST & Compliance',
      count: '31 Notes',
      color: 'bg-neo-yellow',
      highlights: [
        'Indian GST, OIDAR tax & export LUT compliance',
        'Storefront terms, privacy & anti-chargeback shields',
        'Payment settlement schedules & threshold management',
        'IP protection, anti-piracy covenants & licensing',
      ],
    },
  ];

  const comparison = [
    {
      feature: 'Knowledge Architecture',
      broken: '400 scattered browser bookmarks & lost Twitter saves',
      brainos: '360 structured, interconnected nodes in 1 unified vault',
    },
    {
      feature: 'Speed of Execution',
      broken: 'Starting from a blank screen on every product & offer',
      brainos: 'Instant access to battle-tested formulas & decision trees',
    },
    {
      feature: 'AI Output Quality',
      broken: 'ChatGPT gives generic, polite, generic fluffy advice',
      brainos: 'AI inherits 360-node context to act as an elite strategist',
    },
    {
      feature: 'Data Ownership & Fees',
      broken: '$20–$40/month SaaS platforms that lock your data',
      brainos: '100% offline, local Markdown files forever. ₹0 monthly fees',
    },
    {
      feature: 'Connections & Discovery',
      broken: 'Siloed folders where knowledge goes to die',
      brainos: '3,255 bidirectional [[Wikilinks]] linking psychology to code',
    },
  ];

  const faqs = [
    {
      q: 'What is Brain OS Studio and how does the 3-year release calendar work?',
      a: 'Brain OS Studio operates on a disciplined 3-year syndicate roadmap: releasing 1 specialized, high-leverage digital product every 3 months (4 per year, 12 total). Product 01 (Brain OS 360-Node Master Vault) is our foundational flagship, available right now for instant download.',
    },
    {
      q: 'Do I need paid Obsidian Sync or paid subscriptions to use Product 01?',
      a: 'No. Obsidian is 100% free for personal use across Windows, macOS, Linux, iOS, and Android. Brain OS requires zero paid plugins, zero API subscriptions, and zero cloud hosting. It lives entirely offline on your local device.',
    },
    {
      q: 'How does the Master AI Connection Engine work with Claude or ChatGPT?',
      a: 'Inside the vault root sits Master AI Connection Engine.md. When you upload this file to a Claude Project or OpenAI Custom GPT, your model ingests the entire 360-node framework. You can then ask it to audit your pricing, write objection-handling sales copy, or build an entire launch funnel grounded in first-principles business engineering.',
    },
    {
      q: 'What happens immediately after I pay ₹999?',
      a: 'Your payment clears securely via Razorpay (supporting UPI, Google Pay, PhonePe, Cards, and NetBanking). You are immediately redirected to your fulfillment console where you download the complete 1.6 MB BrainOS-Master-Vault.zip archive instantly.',
    },
    {
      q: 'Can I use these frameworks for my commercial business and client projects?',
      a: 'Yes! You receive a Single-User Commercial Implementation License. You can apply every framework, formula, and swipe file to build, launch, price, and sell your own products, SaaS apps, courses, or client projects.',
    },
    {
      q: 'What is your refund guarantee?',
      a: 'Because Brain OS is an instant digital download delivered via cryptographic token, all sales are final upon delivery. However, we provide a 48-Hour Technical Defect Guarantee: if your archive is verified corrupt or damaged, we provide an immediate replacement or 100% refund.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black pb-20 md:pb-0">
      <Navbar onOpenCheckout={() => setIsCheckoutOpen(true)} />

      <main className="flex-1 space-y-16 sm:space-y-24 py-8 sm:py-16">
        {/* =========================================================
            SECTION 1 : NEO-BRUTALIST HERO WITH PROMINENT BRAND LOGO
        ========================================================= */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="card-neo-lg p-6 sm:p-12 relative overflow-hidden bg-white">
            {/* Top pill tags */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-neo-coral text-white font-black uppercase border border-black shadow-neo-sm">
                  STUDIO ARCHITECTURE
                </span>
                <span className="font-bold text-black uppercase text-[11px] sm:text-xs">
                  12-PRODUCT SYNDICATE &bull; 3-YEAR CALENDAR
                </span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 font-bold text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-neo-lime border border-black" />
                <span>PRODUCT 01: AVAILABLE NOW</span>
              </div>
            </div>

            {/* Hero Main Content */}
            <div className="py-6 sm:py-10 space-y-6 sm:space-y-8 text-center max-w-3xl mx-auto">
              {/* Brand Logo Display Badge */}
              <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 bg-neo-yellow border-2 border-black shadow-neo">
                <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center p-1 bg-black text-white shrink-0">
                  <svg viewBox="0 0 100 100" fill="#FFFFFF" className="w-full h-full">
                    <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
                  </svg>
                </div>
                <div className="text-left leading-none font-mono">
                  <span className="text-xs sm:text-sm font-black tracking-widest text-black uppercase block">
                    BRAIN OS STUDIO
                  </span>
                  <span className="text-[9px] font-bold text-neutral-700 tracking-wider uppercase">
                    SOVEREIGN DIGITAL PRODUCTS
                  </span>
                </div>
              </div>

              {/* Punchy Brutalist Headline */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-black uppercase leading-[1.1]">
                  STOP RUNNING YOUR BUSINESS ON CHAOTIC BOOKMARKS.
                </h1>
                <p className="text-sm sm:text-lg font-mono text-neutral-700 max-w-2xl mx-auto leading-relaxed">
                  We engineer 12 flagship digital product architectures released quarterly over 3 years. Start with our foundation: the 360-node Obsidian Second Brain &amp; AI Connection Engine.
                </p>
              </div>

              {/* Price Anchor & Primary CTA */}
              <div className="space-y-4 pt-2">
                <div className="inline-flex items-center gap-3 p-2.5 sm:p-3 bg-neo-gray border-2 border-black font-mono text-xs font-bold">
                  <span>REGULAR VALUE: <span className="line-through text-neutral-500">₹{SITE_CONFIG.comparePriceInr}</span></span>
                  <span className="px-2 py-0.5 bg-neo-lime border border-black font-black text-black">
                    TODAY ONLY: ₹{SITE_CONFIG.priceInr} ($49 USD)
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsCheckoutOpen(true)}
                    className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-neo-yellow hover:bg-[#FFE000] text-black font-mono text-sm sm:text-base font-black uppercase tracking-wider btn-neo flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>UNLOCK PRODUCT 01 &bull; ₹{SITE_CONFIG.priceInr}</span>
                  </button>

                  <a
                    href="#calendar"
                    className="w-full sm:w-auto px-6 py-4 sm:py-5 bg-white hover:bg-neutral-100 text-black font-mono text-sm font-bold uppercase tracking-wider btn-neo flex items-center justify-center gap-2"
                  >
                    <span>VIEW 12-PRODUCT CALENDAR</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="font-mono text-[11px] sm:text-xs text-neutral-600">
                  ⚡ Instant direct .zip download &bull; Zero subscriptions &bull; 100% private offline architecture
                </p>
              </div>
            </div>

            {/* Brutalist Telemetry Grid */}
            <div className="border-t-2 border-black pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono text-center">
              <div className="p-3 bg-neo-bg border-2 border-black shadow-neo-sm">
                <div className="text-xl sm:text-3xl font-black text-black">12</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase">QUARTERLY DROPS</div>
              </div>
              <div className="p-3 bg-neo-bg border-2 border-black shadow-neo-sm">
                <div className="text-xl sm:text-3xl font-black text-black">360</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase">PRODUCT 01 NODES</div>
              </div>
              <div className="p-3 bg-neo-bg border-2 border-black shadow-neo-sm">
                <div className="text-xl sm:text-3xl font-black text-black">3,255</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase">[[WIKILINKS]]</div>
              </div>
              <div className="p-3 bg-neo-bg border-2 border-black shadow-neo-sm">
                <div className="text-xl sm:text-3xl font-black text-black">100%</div>
                <div className="text-[9px] sm:text-[10px] font-bold text-neutral-600 uppercase">LOCAL &amp; PRIVATE</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2 : THE 3-YEAR / 12-PRODUCT QUARTERLY RELEASE CALENDAR
        ========================================================= */}
        <ReleaseCalendar onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* =========================================================
            SECTION 3 : VISUAL PROOF — PRODUCT 01 REAL OBSIDIAN GRAPH (IMAGES 3 & 4)
        ========================================================= */}
        <section id="vault-proof" className="px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="card-neo-lg p-6 sm:p-8 space-y-6 bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black pb-4 font-mono">
              <div>
                <span className="px-2 py-0.5 bg-neo-yellow border border-black font-black text-[10px] uppercase shadow-neo-sm">
                  PRODUCT 01 EVIDENCE
                </span>
                <h2 className="text-lg sm:text-2xl font-black tracking-tight text-black uppercase mt-1">
                  WITNESS THE 360-NODE GRAPH TOPOLOGY
                </h2>
              </div>

              {/* Interactive View Switcher */}
              <div className="inline-flex p-1 bg-neo-gray border-2 border-black shadow-neo-sm self-start sm:self-auto">
                <button
                  onClick={() => setVaultView('macro')}
                  className={`px-3 py-1.5 font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                    vaultView === 'macro'
                      ? 'bg-black text-white shadow-sm'
                      : 'text-black hover:bg-neutral-200'
                  }`}
                >
                  [ 01 : MACRO CONSTELLATION ]
                </button>
                <button
                  onClick={() => setVaultView('detail')}
                  className={`px-3 py-1.5 font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                    vaultView === 'detail'
                      ? 'bg-black text-white shadow-sm'
                      : 'text-black hover:bg-neutral-200'
                  }`}
                >
                  [ 02 : NODE TRAVERSAL ]
                </button>
              </div>
            </div>

            {/* Actual Screenshot Frame */}
            <div className="border-2 border-black bg-neutral-50 p-2 sm:p-4 shadow-neo relative">
              <div className="relative aspect-[16/10] w-full bg-white overflow-hidden border-2 border-black">
                <Image
                  src={vaultView === 'macro' ? '/images/vault-macro.png' : '/images/vault-detail.png'}
                  alt={
                    vaultView === 'macro'
                      ? 'Brain OS Obsidian Vault Macro Graph Constellation'
                      : 'Brain OS Obsidian Vault Detailed Node View'
                  }
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-3 pt-2 border-t-2 border-black font-mono text-xs">
                <span className="font-bold text-black text-[11px] sm:text-xs">
                  {vaultView === 'macro'
                    ? 'PLATE 2.1: The Macro Constellation — 360 notes mapped in native Obsidian Light canvas.'
                    : 'PLATE 2.2: Deep cluster traversal showing Content-to-Commerce Pipeline & Solopreneur Tech Stack.'}
                </span>
                <span className="px-2 py-0.5 bg-neo-lime border border-black font-bold text-[10px] uppercase">
                  ZERO PLUGINS REQUIRED
                </span>
              </div>
            </div>

            {/* What this visual proof means */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 bg-neo-bg border-2 border-black shadow-neo-sm space-y-1">
                <div className="font-black text-black uppercase">🔗 3,255 BIDIRECTIONAL WIKILINKS</div>
                <p className="text-neutral-700 leading-relaxed font-sans text-xs">
                  Traverse effortlessly from Pricing Psychology directly to Stripe Webhooks and Copywriting formulas. Zero lost context.
                </p>
              </div>
              <div className="p-4 bg-neo-bg border-2 border-black shadow-neo-sm space-y-1">
                <div className="font-black text-black uppercase">💾 100% LOCAL OBSIDIAN SOVEREIGNTY</div>
                <p className="text-neutral-700 leading-relaxed font-sans text-xs">
                  Standard Markdown (.md). Runs permanently on your device. No cloud outages, zero vendor lock-in, zero ongoing bills.
                </p>
              </div>
              <div className="p-4 bg-neo-bg border-2 border-black shadow-neo-sm space-y-1">
                <div className="font-black text-black uppercase">🤖 PRE-TRAINED AI CONTEXT</div>
                <p className="text-neutral-700 leading-relaxed font-sans text-xs">
                  Engineered specifically to ground Claude 3.5 Sonnet and GPT-4o in disciplined business frameworks rather than generic advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 4 : THE BRUTAL COMPARISON (WHY CHAOS LOSES)
        ========================================================= */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="card-neo-lg p-6 sm:p-8 space-y-6 bg-white">
            <div className="border-b-2 border-black pb-4 font-mono">
              <span className="px-2 py-0.5 bg-neo-coral text-white border border-black font-black text-[10px] uppercase shadow-neo-sm">
                THE STRATEGIC REALITY
              </span>
              <h2 className="text-lg sm:text-2xl font-black tracking-tight text-black uppercase mt-1">
                FRAGMENTED CHAOS VS. THE UNIFIED BRAIN OS
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-2 border-black min-w-[500px]">
                <thead>
                  <tr className="bg-neo-black text-white border-b-2 border-black">
                    <th className="p-3.5 uppercase font-black">DECISION VECTOR</th>
                    <th className="p-3.5 uppercase font-black bg-neutral-900 text-neutral-300">THE TYPICAL SOLOPRENEUR WAY</th>
                    <th className="p-3.5 uppercase font-black bg-neo-yellow text-black border-l-2 border-black">THE BRAIN OS ADVANTAGE</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black">
                  {comparison.map((item, idx) => (
                    <tr key={idx} className="bg-white hover:bg-neutral-50 transition-colors">
                      <td className="p-3.5 font-bold text-black border-r-2 border-black">{item.feature}</td>
                      <td className="p-3.5 text-neutral-600 bg-red-50/40 border-r-2 border-black">{item.broken}</td>
                      <td className="p-3.5 font-bold text-black bg-neo-lime/20">{item.brainos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 5 : THE 11 SOVEREIGN KNOWLEDGE DOMAINS (CURIOSITY CATALOG)
        ========================================================= */}
        <section id="domains" className="px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="card-neo-lg p-6 sm:p-8 space-y-6 bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black pb-4 font-mono">
              <div>
                <span className="px-2 py-0.5 bg-neo-yellow border border-black font-black text-[10px] uppercase shadow-neo-sm">
                  PRODUCT 01 SCHEMATICS
                </span>
                <h2 className="text-lg sm:text-2xl font-black tracking-tight text-black uppercase mt-1">
                  THE 11 VAULT DOMAINS &amp; TACTICAL BLUEPRINTS
                </h2>
              </div>
              <span className="font-mono text-xs font-bold text-neutral-600">
                360 SYSTEMATIC FORMULAS
              </span>
            </div>

            <p className="font-mono text-xs text-neutral-700 leading-relaxed">
              Every folder inside Product 01 contains battle-tested formulas, Mermaid flowcharts, and exact pricing/copywriting frameworks:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-mono">
              {domains.map((dom) => (
                <div
                  key={dom.num}
                  className="card-neo p-5 space-y-3 flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b-2 border-black pb-2">
                      <span className={`px-2 py-0.5 border border-black text-xs font-black shadow-neo-sm ${dom.color}`}>
                        [{dom.num}]
                      </span>
                      <span className="text-[10px] font-bold bg-neo-gray px-1.5 py-0.5 border border-black">
                        {dom.count}
                      </span>
                    </div>

                    <h3 className="font-black text-sm uppercase text-black tracking-tight pt-1">
                      {dom.title}
                    </h3>

                    <ul className="space-y-1.5 pt-2 text-[11px] font-sans text-neutral-700">
                      {dom.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-neo-coral font-bold font-mono">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-neutral-200 text-[10px] font-mono text-neutral-500 uppercase flex items-center justify-between">
                    <span>STATUS: INGESTED</span>
                    <span>WIKILINKS READY</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 6 : MASTER AI CONNECTION ENGINE (THE SUPERCHARGER)
        ========================================================= */}
        <section id="ai-engine" className="px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="card-neo-lg p-6 sm:p-8 space-y-6 bg-neo-yellow">
            <div className="border-b-2 border-black pb-4 font-mono">
              <span className="px-2 py-0.5 bg-black text-white border border-black font-black text-[10px] uppercase shadow-neo-sm">
                THE REASONING ENGINE
              </span>
              <h2 className="text-lg sm:text-2xl font-black tracking-tight text-black uppercase mt-1">
                MASTER AI CONNECTION ENGINE (CLAUDE &amp; CHATGPT)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4 font-mono text-xs">
                <p className="text-neutral-900 leading-relaxed font-sans text-sm font-medium">
                  Why do AI models give you generic, polite answers? Because they have <strong>zero context</strong> about your pricing models, objection handling, or funnel psychology.
                </p>
                <p className="text-neutral-900 leading-relaxed font-sans text-sm">
                  Brain OS includes <code className="bg-white px-1.5 py-0.5 border border-black font-bold">Master AI Connection Engine.md</code>.
                  Drop it into Claude Projects or Custom GPT Knowledge to instantly bestow your model with the complete 360-node business architecture.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 font-bold text-black">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>Upload to Claude Projects (Anthropic 3.5 Sonnet)</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-black">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>Attach to Custom GPTs (OpenAI GPT-4o)</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-black">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>Deploy 100% offline via Ollama / LM Studio models</span>
                  </div>
                </div>
              </div>

              {/* Terminal Box */}
              <div className="bg-black text-white border-2 border-black p-4 font-mono text-xs shadow-neo space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-700 pb-2 text-[10px] text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-neo-lime" />
                    <span>CLAUDE_PROJECT_INGESTION.MD</span>
                  </span>
                  <span className="text-neo-lime font-bold">ACTIVE</span>
                </div>
                <pre className="text-neutral-300 text-[11px] leading-relaxed whitespace-pre-wrap">
{`---
system_persona: "BrainOS Digital Product Systems Strategist"
knowledge_nodes: 360
capabilities:
  - "Decoy Pricing & Elasticity Audit"
  - "Objection Annihilation Copy Synthesis"
  - "High-Converting VSL Script Drafting"
  - "Frictionless Checkout Architecture"
---
"Ingested 360 nodes. Standing by to engineer your digital product funnel."`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 7 : EXACT DELIVERABLES MANIFEST
        ========================================================= */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="card-neo-lg p-6 sm:p-8 space-y-6 bg-white">
            <div className="flex items-center gap-3 border-b-2 border-black pb-4">
              <div className="w-10 h-10 bg-neo-yellow border-2 border-black flex items-center justify-center p-1.5 shadow-neo-sm shrink-0">
                <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
                  <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
                </svg>
              </div>
              <div>
                <span className="px-2 py-0.5 bg-neo-lime border border-black font-black text-[10px] uppercase font-mono shadow-neo-sm">
                  PRODUCT 01 ARCHIVE
                </span>
                <h2 className="text-lg sm:text-2xl font-black font-mono tracking-tight text-black uppercase mt-0.5">
                  THE COMPLETE DELIVERABLES MANIFEST
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 bg-neo-bg border-2 border-black shadow-neo-sm flex items-start gap-3">
                <Check className="w-5 h-5 text-black shrink-0 mt-0.5 font-black" />
                <div>
                  <span className="font-black text-black uppercase block">The 360-Node Master Vault (.zip)</span>
                  <span className="text-neutral-600 font-sans text-xs">Complete 1.6 MB archive containing all 360 Markdown notes organized in 11 sovereign domains.</span>
                </div>
              </div>

              <div className="p-4 bg-neo-bg border-2 border-black shadow-neo-sm flex items-start gap-3">
                <Check className="w-5 h-5 text-black shrink-0 mt-0.5 font-black" />
                <div>
                  <span className="font-black text-black uppercase block">3,255 Interconnected [[Wikilinks]]</span>
                  <span className="text-neutral-600 font-sans text-xs">Every note links bi-directionally to related pricing, copy, psychology, and technical rails.</span>
                </div>
              </div>

              <div className="p-4 bg-neo-bg border-2 border-black shadow-neo-sm flex items-start gap-3">
                <Check className="w-5 h-5 text-black shrink-0 mt-0.5 font-black" />
                <div>
                  <span className="font-black text-black uppercase block">Master AI Connection Engine.md</span>
                  <span className="text-neutral-600 font-sans text-xs">Pre-formatted prompt &amp; knowledge base ingestion file for Claude Projects, Custom GPTs, or Ollama.</span>
                </div>
              </div>

              <div className="p-4 bg-neo-bg border-2 border-black shadow-neo-sm flex items-start gap-3">
                <Check className="w-5 h-5 text-black shrink-0 mt-0.5 font-black" />
                <div>
                  <span className="font-black text-black uppercase block">Single-User Commercial License</span>
                  <span className="text-neutral-600 font-sans text-xs">Full commercial authorization to implement every framework across your own products and client projects.</span>
                </div>
              </div>

              <div className="p-4 bg-neo-bg border-2 border-black shadow-neo-sm flex items-start gap-3">
                <Check className="w-5 h-5 text-black shrink-0 mt-0.5 font-black" />
                <div>
                  <span className="font-black text-black uppercase block">Zero Subscriptions Forever</span>
                  <span className="text-neutral-600 font-sans text-xs">No monthly SaaS fees, no cloud lock-in. You own the files on your local drive for life.</span>
                </div>
              </div>

              <div className="p-4 bg-neo-bg border-2 border-black shadow-neo-sm flex items-start gap-3">
                <Check className="w-5 h-5 text-black shrink-0 mt-0.5 font-black" />
                <div>
                  <span className="font-black text-black uppercase block">48-Hour Technical Defect Guarantee</span>
                  <span className="text-neutral-600 font-sans text-xs">If your archive is damaged or corrupt, get an instant replacement or 100% refund.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 8 : FREQUENTLY ADDRESSED INQUIRIES (FAQ)
        ========================================================= */}
        <section id="faq" className="px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="card-neo-lg p-6 sm:p-8 space-y-6 bg-white">
            <div className="border-b-2 border-black pb-4 font-mono">
              <span className="px-2 py-0.5 bg-neo-yellow border border-black font-black text-[10px] uppercase shadow-neo-sm">
                CLARITY &amp; POLICIES
              </span>
              <h2 className="text-lg sm:text-2xl font-black tracking-tight text-black uppercase mt-1">
                FREQUENTLY ADDRESSED INQUIRIES
              </h2>
            </div>

            <div className="divide-y-2 divide-black font-mono text-xs">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-black text-black hover:text-neo-coral transition-colors gap-4 cursor-pointer"
                  >
                    <span>[ 0{idx + 1} ] {faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        openFaq === idx ? 'rotate-180 text-black' : 'text-neutral-500'
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <p className="mt-3 text-neutral-700 font-sans text-xs leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 9 : FINAL ACQUISITION CARD (BUY PRODUCT 01 NOW)
        ========================================================= */}
        <section id="checkout" className="px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="card-neo-lg p-6 sm:p-12 relative text-center space-y-6 bg-neo-yellow">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-mono text-xs font-black uppercase shadow-neo-sm">
              <Zap className="w-4 h-4 text-neo-yellow" />
              <span>IMMEDIATE UNLOCK CONSOLE</span>
            </div>

            <h2 className="text-2xl sm:text-5xl font-black font-mono tracking-tight text-black uppercase leading-tight">
              INSTALL BRAIN OS IN 60 SECONDS
            </h2>

            <p className="text-xs sm:text-base text-neutral-800 font-mono max-w-xl mx-auto leading-relaxed">
              Unlock the entire 360-node Obsidian second brain, 11 domains, and the Master AI Connection Engine right now.
            </p>

            <div className="py-2">
              <div className="inline-flex items-baseline gap-3 p-3 sm:p-4 bg-white border-2 border-black shadow-neo font-mono">
                <span className="text-3xl sm:text-5xl font-black text-black">₹{SITE_CONFIG.priceInr}</span>
                <span className="text-sm sm:text-base text-neutral-500 line-through">₹{SITE_CONFIG.comparePriceInr}</span>
                <span className="px-2 py-0.5 bg-neo-lime border border-black font-black text-[10px] sm:text-xs text-black uppercase">
                  LIFETIME ACCESS
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-black hover:bg-neutral-800 text-white font-mono text-sm sm:text-base font-black uppercase tracking-wider btn-neo flex items-center justify-center gap-3 cursor-pointer"
              >
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-neo-yellow" />
                <span>UNLOCK PRODUCT 01 &bull; ₹{SITE_CONFIG.priceInr}</span>
              </button>
            </div>

            <div className="border-t-2 border-black pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-[11px] sm:text-xs text-neutral-800 font-bold">
              <span>🛡️ RAZORPAY 256-BIT SECURE CHECKOUT</span>
              <span>⚡ INSTANT .ZIP DOWNLOAD</span>
              <span>🔒 100% PRIVATE OFFLINE ARCHITECTURE</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Friction-free Mobile 1-Tap Sticky Buy Bar */}
      <MobileStickyBar onOpenCheckout={() => setIsCheckoutOpen(true)} />

      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
}
