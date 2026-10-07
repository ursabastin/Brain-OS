import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const viewport: Viewport = {
  themeColor: '#FFE600',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Sovereign Systems for Modern Solopreneurs`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    'Brain OS',
    'Solopreneur Systems',
    'Software Company',
    'Obsidian second brain',
    'Digital product master vault',
    'Pricing psychology',
    'Copywriting frameworks',
    'Claude prompt engineering',
    'ChatGPT business strategy',
  ],
  authors: [{ name: 'Brain OS Architecture' }],
  openGraph: {
    title: `${SITE_CONFIG.name} — Sovereign Systems for Modern Solopreneurs`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [{ url: '/images/vault-macro.png', width: 1461, height: 1042 }],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-neo-bg text-black selection:bg-neo-yellow selection:text-black flex flex-col">
        {children}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
