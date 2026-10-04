'use client';

import React, { useState } from 'react';
import { Calendar, Lock, ArrowRight, Bell, Sparkles, CheckCircle2, Clock } from 'lucide-react';

interface ReleaseCalendarProps {
  onOpenCheckout: () => void;
}

export interface SyndicateProduct {
  id: string;
  year: number;
  quarter: string;
  month: string;
  title: string;
  category: string;
  status: 'available' | 'next' | 'development' | 'scheduled';
  price: string;
  comparePrice: string;
  problem: string;
  deliverables: string[];
}

export const SYNDICATE_PRODUCTS: SyndicateProduct[] = [
  // --- YEAR 1 ---
  {
    id: 'prod-01',
    year: 1,
    quarter: 'Q1',
    month: 'MONTH 01',
    title: 'Brain OS: 360-Node Second Brain & AI Connection Engine',
    category: 'Second Brain & Digital Economics',
    status: 'available',
    price: '₹999',
    comparePrice: '₹7,399',
    problem: 'Eliminates 100+ hours of chaotic trial-and-error in conceiving, packaging, pricing, and scaling sovereign digital knowledge products.',
    deliverables: [
      '360 Interconnected production Markdown notes organized in 11 sovereign domains',
      'Master AI Connection Engine.md prompt system for Claude 3.5 Sonnet & GPT-4o',
      '3,255 [[Wikilinks]] graph topology with interactive Obsidian Canvas visual roadmaps',
      '100% Offline, private, local file system architecture with zero recurring cloud subscriptions',
    ],
  },
  {
    id: 'prod-02',
    year: 1,
    quarter: 'Q2',
    month: 'MONTH 04',
    title: 'The Full-Stack Skill Accelerator & Curated Video Roadmap',
    category: 'Curated Education & Learning Paths',
    status: 'next',
    price: '₹999',
    comparePrice: '₹2,499',
    problem: 'Replaces disorganized clickbait YouTube tutorials with an elite, noise-free 4-week execution syllabus.',
    deliverables: [
      '4-week step-by-step interactive skill roadmap structured natively in Obsidian & Notion',
      'Top 50 high-signal, fluff-free video breakdowns with verified key learning timestamps',
      'Deep Markdown lecture syntheses, copy-paste production code snippets & weekly project briefs',
      'Self-directed competency rubrics to track mastery from foundational concepts to production launch',
    ],
  },
  {
    id: 'prod-03',
    year: 1,
    quarter: 'Q3',
    month: 'MONTH 07',
    title: 'The Autonomous AI Prompt & Workflow Engine',
    category: 'AI Engineering & Automation',
    status: 'development',
    price: '₹999',
    comparePrice: '₹2,999',
    problem: 'Eliminates shallow AI hallucinations; turns Claude, Cursor & ChatGPT into deterministic staff-level strategists.',
    deliverables: [
      '100+ fine-tuned chain-of-thought system prompts for Claude Projects, Cursor & Custom GPTs',
      '15 exportable Make.com and n8n JSON automation blueprints for webhook workflows',
      'Pre-configured .cursorrules and CLAUDE.md project directives for autonomous code generation',
      'Prompt chaining architectures for objection-handling sales copy and funnel engineering',
    ],
  },
  {
    id: 'prod-04',
    year: 1,
    quarter: 'Q4',
    month: 'MONTH 10',
    title: 'Direct-Response Copywriting & Landing Page Swipe Vault',
    category: 'Direct-Response & CRO',
    status: 'scheduled',
    price: '₹999',
    comparePrice: '₹2,499',
    problem: 'Solves storefront visitor drop-off with battle-tested direct response formulas that systematically convert traffic.',
    deliverables: [
      '50+ proven headline formulas, PAS frameworks & objection annihilation FAQ matrices',
      '10 complete high-converting sales page wireframes in Markdown + responsive Tailwind CSS blocks',
      'Micro-copy swipe file for sticky buy buttons, risk-reversal guarantee badges & value stacks',
      'High-converting Video Sales Letter (VSL) script templates and postscript (P.S.) closing formulas',
    ],
  },

  // --- YEAR 2 ---
  {
    id: 'prod-05',
    year: 2,
    quarter: 'Q1',
    month: 'MONTH 13',
    title: 'Content-to-Commerce Short-Form Video & Reel Engine',
    category: 'Organic Distribution & Virality',
    status: 'scheduled',
    price: '₹1,199',
    comparePrice: '₹2,999',
    problem: 'Solves creative paralysis by enabling a solo operator to script, film, and schedule 60 viral reels in 4 hours.',
    deliverables: [
      '60 word-for-word short-form video scripts engineered for high retention with visual direction cues',
      '31 psychological hook formulas optimized for the first 3 seconds of viewer attention',
      'CapCut and Premiere Pro project presets with dynamic caption styling and kinetic typography',
      'ManyChat automated comment-to-DM conversion funnels for hands-free lead capture',
    ],
  },
  {
    id: 'prod-06',
    year: 2,
    quarter: 'Q2',
    month: 'MONTH 16',
    title: 'The Agency & Solo Consultant SOP Vault',
    category: 'Operations & Scale',
    status: 'scheduled',
    price: '₹1,499',
    comparePrice: '₹3,999',
    problem: 'Frees agency owners and consultants from manual onboarding chaos, scope creep, and payment disputes.',
    deliverables: [
      '45 turnkey standard operating procedures (SOPs) formatted in Obsidian and Notion',
      'Bulletproof client service agreements, NDA templates & milestone payment schedules',
      'Scope creep defense playbooks and automated invoice reminder email sequences',
      'Client onboarding intake forms and automated asynchronous project delivery portals',
    ],
  },
  {
    id: 'prod-07',
    year: 2,
    quarter: 'Q3',
    month: 'MONTH 19',
    title: 'Next.js & Supabase Solopreneur SaaS / Storefront Boilerplate',
    category: 'Developer Tooling & Codebases',
    status: 'scheduled',
    price: '₹1,999',
    comparePrice: '₹4,999',
    problem: 'Saves 50+ hours of repetitive plumbing: pre-configures authentication, payment rails, and asset streaming.',
    deliverables: [
      'Production-ready Next.js 14 App Router codebase with Tailwind CSS, Lucide React & TypeScript',
      'Native Razorpay UPI checkout integration with HMAC webhook cryptographic verification',
      'Supabase database schemas, Row Level Security (RLS) policies & magic link authentication',
      'Cloudflare R2 tokenized asset download streaming gateway preventing link piracy',
    ],
  },
  {
    id: 'prod-08',
    year: 2,
    quarter: 'Q4',
    month: 'MONTH 22',
    title: 'Financial Command, Valuation & Unit Economics Calculator',
    category: 'Financial Modeling & Forecasting',
    status: 'scheduled',
    price: '₹999',
    comparePrice: '₹2,499',
    problem: 'Prevents founders from burning marketing capital blindly by giving deterministic visibility into margins and CAC.',
    deliverables: [
      'Interactive financial models: Break-Even CAC simulator and dynamic ROAS forecast spreadsheet',
      'Customer Lifetime Value (LTV) and Average Order Value (AOV) expansion modeling calculators',
      'Indian GST, OIDAR tax compliance worksheets and export LUT reconciliation templates',
      'Cash-flow velocity planner and digital product valuation estimation spreadsheets',
    ],
  },

  // --- YEAR 3 ---
  {
    id: 'prod-09',
    year: 3,
    quarter: 'Q1',
    month: 'MONTH 25',
    title: 'High-Intent B2B Client Acquisition & Outreach Compendium',
    category: 'B2B Sales & High-Ticket Lead Gen',
    status: 'scheduled',
    price: '₹1,499',
    comparePrice: '₹3,999',
    problem: 'Eliminates revenue inconsistency by providing an actionable system to source and close high-ticket B2B accounts.',
    deliverables: [
      'Curated directory of 1,000 verified high-intent decision-makers across tech, media, and agency verticals',
      '5-stage personalized cold email outreach sequences with 40%+ open rate benchmarks',
      'LinkedIn social selling frameworks, connection request scripts, and conversation starters',
      'High-ticket discovery call inquiry outlines, objection handling matrix, and proposal templates',
    ],
  },
  {
    id: 'prod-10',
    year: 3,
    quarter: 'Q2',
    month: 'MONTH 28',
    title: 'Micro-SaaS & Python Automation Utilities Library',
    category: 'Code Utilities & Automation',
    status: 'scheduled',
    price: '₹1,299',
    comparePrice: '₹2,999',
    problem: 'Replaces expensive recurring SaaS tools with lightweight local Python automation scripts you own 100%.',
    deliverables: [
      '25 standalone Python utility scripts for data scraping, automated reporting, and competitor monitoring',
      '1-click local terminal launcher and lightweight browser-based GUI for non-technical execution',
      'Batch PDF compilation, cryptographic watermarking & digital stamping automation utilities',
      'Automated SEO keyword clustering and search intent categorization scripts',
    ],
  },
  {
    id: 'prod-11',
    year: 3,
    quarter: 'Q3',
    month: 'MONTH 31',
    title: 'Autonomous Audience Growth & Newsletter Syndicate Engine',
    category: 'Audience Assets & Monetization',
    status: 'scheduled',
    price: '₹1,299',
    comparePrice: '₹3,499',
    problem: 'Builds an owned media distribution moat that insulates your revenue from social platform algorithm shifts.',
    deliverables: [
      'Automated content curation pipelines and high-converting newsletter onboarding sequences',
      'Sponsorship media kit presentation templates and programmatic advertising rate card calculators',
      'Multi-platform syndication scripts for simultaneous cross-posting to Substack, Beehiiv, and X',
      'Organic referral program architectures with milestone rewards for viral subscriber growth',
    ],
  },
  {
    id: 'prod-12',
    year: 3,
    quarter: 'Q4',
    month: 'MONTH 34',
    title: 'The Annual All-Access Pass & Knowledge Empire Vault',
    category: 'Master Syndicate Keystone',
    status: 'scheduled',
    price: '₹4,999',
    comparePrice: '₹18,500',
    problem: 'Single universal credential providing lifetime sovereign access to all 12 products across the 3-year syndicate.',
    deliverables: [
      'Universal master license unlocking all 12 digital product repositories and codebases',
      'Private syndicate member forum access with quarterly founder roadmap review sessions',
      'Guaranteed lifetime access to all future revisions, major version upgrades, and asset expansions',
      'Direct priority developer support desk and early access to experimental prototype tools',
    ],
  },
];

export const ReleaseCalendar: React.FC<ReleaseCalendarProps> = ({ onOpenCheckout }) => {
  const [activeYear, setActiveYear] = useState<number>(1);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSent, setWaitlistSent] = useState(false);
  const [waitlistLoading, setWaitlistLoading] = useState(false);

  const filteredProducts = SYNDICATE_PRODUCTS.filter((p) => p.year === activeYear);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.includes('@') || waitlistLoading) return;

    setWaitlistLoading(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: waitlistEmail.trim(), source: 'calendar_vip_pass' }),
      });
      const data = await res.json();
      if (data.success) {
        setWaitlistSent(true);
        setTimeout(() => setWaitlistSent(false), 5000);
        setWaitlistEmail('');
      }
    } catch (err) {
      console.error('Waitlist network error:', err);
    } finally {
      setWaitlistLoading(false);
    }
  };

  return (
    <section id="calendar" className="px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
      <div className="card-neo-lg p-6 sm:p-8 bg-white space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-black pb-5 font-mono">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-neo-yellow border border-black font-black text-[10px] uppercase shadow-neo-sm mb-1.5 whitespace-nowrap">
              <Calendar className="w-3.5 h-3.5" />
              <span>3&#8209;YEAR ROADMAP &bull; 12 QUARTERLY RELEASES</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black tracking-tight text-black uppercase">
              THE 12-PRODUCT SYNDICATE CALENDAR
            </h2>
            <p className="text-xs text-neutral-600 font-sans max-w-xl pt-1">
              Brain OS is not just one tool. Every 3 months, our studio deploys a new high-leverage product architecture. 12 master releases over 3 years.
            </p>
          </div>

          {/* Year Tabs */}
          <div className="inline-flex p-1 bg-neo-gray border-2 border-black shadow-neo-sm self-start md:self-center">
            {[1, 2, 3].map((yr) => (
              <button
                key={yr}
                onClick={() => setActiveYear(yr)}
                className={`px-3 sm:px-4 py-2 font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                  activeYear === yr
                    ? 'bg-black text-white shadow-sm'
                    : 'text-black hover:bg-neutral-200'
                }`}
              >
                YEAR {yr}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Quarterly Products for Selected Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono">
          {filteredProducts.map((prod) => {
            const isAvailable = prod.status === 'available';
            const isNext = prod.status === 'next';

            return (
              <div
                key={prod.id}
                className={`card-neo p-5 sm:p-6 space-y-4 flex flex-col justify-between transition-all ${
                  isAvailable
                    ? 'bg-neo-yellow/20 border-black shadow-neo-lg'
                    : 'bg-white hover:-translate-y-0.5'
                }`}
              >
                <div className="space-y-3">
                  {/* Card Meta Tag */}
                  <div className="flex items-center justify-between border-b-2 border-black pb-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-black text-white font-black text-[10px] uppercase">
                        {prod.quarter}
                      </span>
                      <span className="font-bold text-neutral-600 text-[10px]">
                        {prod.month}
                      </span>
                    </div>

                    {isAvailable && (
                      <span className="px-2 py-0.5 bg-neo-lime border border-black font-black text-[10px] uppercase shadow-neo-sm">
                        ● AVAILABLE NOW
                      </span>
                    )}
                    {isNext && (
                      <span className="px-2 py-0.5 bg-neo-coral text-white border border-black font-black text-[10px] uppercase shadow-neo-sm">
                        ⏳ NEXT DROP
                      </span>
                    )}
                    {!isAvailable && !isNext && (
                      <span className="px-2 py-0.5 bg-neo-gray border border-black font-bold text-[10px] uppercase text-neutral-600">
                        SCHEDULED
                      </span>
                    )}
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                      {prod.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-black uppercase text-black tracking-tight pt-0.5">
                      {prod.title}
                    </h3>
                  </div>

                  {/* Problem Solved */}
                  <p className="text-xs text-neutral-700 font-sans leading-relaxed border-l-2 border-black pl-3 py-1 bg-neo-bg/60">
                    <strong className="font-mono text-black font-bold">Solves: </strong>
                    {prod.problem}
                  </p>

                  {/* Deliverables Bullet Points */}
                  <ul className="space-y-1.5 pt-1 text-[11px] font-sans text-neutral-700">
                    {prod.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-black font-bold font-mono">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action / Price Footer */}
                <div className="pt-4 border-t-2 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-black">{prod.price}</span>
                    <span className="text-xs text-neutral-500 line-through">{prod.comparePrice}</span>
                  </div>

                  {isAvailable ? (
                    <button
                      onClick={onOpenCheckout}
                      className="w-full sm:w-auto px-4 py-2.5 bg-black hover:bg-neutral-800 text-white font-mono text-xs font-black uppercase tracking-wider btn-neo flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5 text-neo-yellow" />
                      <span>UNLOCK BRAIN OS</span>
                    </button>
                  ) : (
                    <div className="w-full sm:w-auto text-right">
                      <span className="text-[10px] font-bold text-neutral-500 uppercase">
                        DROP {prod.month}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* VIP Calendar Pass Box */}
        <div className="p-5 sm:p-6 bg-neo-black text-white border-2 border-black shadow-neo space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-700 pb-3">
            <div className="flex items-center gap-2 font-mono text-xs">
              <Sparkles className="w-4 h-4 text-neo-yellow" />
              <span className="font-black uppercase text-neo-yellow">
                QUARTERLY RELEASE NOTIFICATION TRANSMISSION
              </span>
            </div>
            <span className="text-[10px] font-mono text-neutral-400">
              ZERO SPAM &bull; EARLY-BIRD PRICING ALERTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center font-mono">
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Want priority early-bird access as each of the remaining 11 quarterly products drops? Enter your email to be notified the minute new vaults go live.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full">
              <input
                type="email"
                required
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="founder@domain.com"
                className="w-full sm:flex-1 px-3 py-2.5 bg-neutral-900 border border-neutral-700 text-xs text-white font-mono focus:outline-none focus:border-neo-yellow"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-neo-yellow text-black font-black text-xs uppercase btn-neo shrink-0 cursor-pointer"
              >
                {waitlistSent ? 'SUBSCRIBED!' : 'JOIN VIP LIST'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
