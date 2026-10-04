'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { LOGO_PATH } from '@/components/BrandLogo';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.error || 'Failed to submit message.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neo-bg text-black selection:bg-neo-yellow selection:text-black font-sans">
      <Navbar />

      <main className="flex-1 py-16 max-w-xl mx-auto px-4 sm:px-6 w-full space-y-6 font-mono">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-neo-yellow border-2 border-black shadow-neo-sm flex items-center justify-center p-2 mx-auto">
            <svg viewBox="0 0 100 100" fill="#000000" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
            </svg>
          </div>
          <span className="px-2 py-0.5 bg-neo-coral text-white font-black text-xs uppercase border border-black shadow-neo-sm">
            SUPPORT DESK
          </span>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
            Operator Support Desk
          </h1>
          <p className="text-xs text-neutral-600 font-sans">
            Inquiries regarding vault archive downloads, token regeneration, or licensing.
          </p>
        </div>

        <div className="card-neo-lg p-6 sm:p-8 bg-white">
          {sent ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-neo-lime mx-auto font-black" />
              <h2 className="text-lg font-black uppercase text-black">TRANSMISSION RECEIVED</h2>
              <p className="text-xs text-neutral-600 font-sans">
                Our support desk has received your ticket and will respond within 24 hours.
              </p>
              <button
                onClick={() => { setSent(false); setMessage(''); }}
                className="mt-4 px-4 py-2 bg-neo-yellow border-2 border-black text-xs font-mono font-black uppercase text-black btn-neo cursor-pointer"
              >
                SUBMIT ANOTHER TICKET
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-xs font-black text-black mb-1.5 uppercase">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Founder / Creator"
                  className="w-full px-3.5 py-3 bg-white border-2 border-black text-xs text-black focus:outline-none focus:bg-neo-yellow/10"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-black mb-1.5 uppercase">
                  Contact Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="operator@domain.com"
                  className="w-full px-3.5 py-3 bg-white border-2 border-black text-xs text-black focus:outline-none focus:bg-neo-yellow/10"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-black mb-1.5 uppercase">
                  Message Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your inquiry (include Razorpay Order ID if applicable)..."
                  className="w-full px-3.5 py-3 bg-white border-2 border-black text-xs text-black focus:outline-none focus:bg-neo-yellow/10"
                />
              </div>

              {error && (
                <p className="text-xs text-neo-coral font-bold border-2 border-neo-coral p-2 bg-red-50">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-neo-yellow hover:bg-[#FFE000] text-black font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 btn-neo cursor-pointer"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{loading ? 'TRANSMITTING...' : 'DISPATCH SUPPORT MESSAGE'}</span>
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
