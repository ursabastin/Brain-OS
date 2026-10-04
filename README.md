# Brain OS — Sovereign Digital Product Syndicate & 360-Node Second Brain

A minimalist, high-converting digital storefront and cryptographic asset delivery engine built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Featuring a neo-brutalist, high-contrast dark aesthetic, integrated **Razorpay** checkout, and an HMAC-SHA256 signed time-limited asset streaming gateway.

---

## ⚡ Key Architecture & Features

- **Cyber-Clinical Brutalist UI**: Custom high-contrast aesthetic with tactile badges, interactive node graph preview, and seamless mobile stickiness.
- **80/20 Minimalist Core**: Zero bloated dependencies; direct path from product revelation to checkout and download.
- **Razorpay Payment Gateway**: Supports UPI, Credit/Debit Cards, and NetBanking with automated HMAC signature verification and local mock-mode fallback for testing.
- **Cryptographic Asset Delivery**:
  - Time-limited signed download tokens (HMAC-SHA256 with 7-day TTL).
  - Secure streaming endpoint (`/api/download`) that shields the real filesystem and asset paths from direct public exposure.
  - Zero hot-linking vulnerability.
- **Data & Commercial Asset Protection**:
  - Full `.gitignore` protection guarding all proprietary `.zip` archives, customer data, and local `.env` secrets.
  - Public repository safe: commercial vault deliverables remain strictly local or cloud-hosted.
- **Legal Compliance Suite**:
  - Terms of Service
  - Privacy Policy (Indian DPDPA 2023 & EU GDPR compliant)
  - Refund & Replacement Policy
  - Interactive Operator Support Desk (`/contact`)

---

## 📁 Repository Structure

```text
├── app/
│   ├── api/
│   │   ├── checkout/
│   │   │   ├── create-order/      # Razorpay order generation & test fallback
│   │   │   └── verify/            # HMAC-SHA256 signature verification & token minting
│   │   ├── contact/               # Support inquiry dispatch API
│   │   └── download/              # Cryptographic streaming gateway for protected assets
│   ├── contact/                   # Support Desk UI
│   ├── privacy/                   # Privacy Policy
│   ├── refund-policy/             # Refund Policy
│   ├── success/                   # Post-purchase download & token verification page
│   ├── terms/                     # Terms of Service
│   ├── globals.css                # Neo-brutalist utility classes & theme
│   ├── layout.tsx                 # Root layout & SEO metadata
│   └── page.tsx                   # Main conversion landing page & interactive modal
├── components/
│   ├── BrandLogo.tsx              # SVG logo vectors & brand standard marks
│   ├── CheckoutModal.tsx          # Razorpay checkout & purchase flow
│   ├── Footer.tsx                 # Standardized footer & compliance links
│   ├── MobileStickyBar.tsx        # High-conversion sticky mobile checkout bar
│   ├── Navbar.tsx                 # Minimalist header navigation
│   └── ReleaseCalendar.tsx        # 12-quarter product roadmaps & node explorer
├── lib/
│   ├── config.ts                  # Site configuration, pricing, & copy constants
│   ├── security.ts                # Cryptographic token creation, verification & timing-safe checks
│   └── storage.ts                 # Local asset resolver & streaming helper
├── public/                        # Static brand imagery & icon assets
├── storage/
│   └── protected/                 # Protected folder for digital products (ignored by Git)
├── .env.example                   # Environment configuration template
├── .gitignore                     # Git exclusion rules for secrets & commercial assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**, **yarn**, or **pnpm**

### 2. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/brain-os.git
cd brain-os
npm install
```

### 3. Configure Environment Variables
Copy the template environment file to `.env.local`:
```bash
cp .env.example .env.local
```

Open `.env.local` and configure your credentials:
```env
# Application URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"

# Razorpay Credentials (from dashboard.razorpay.com)
# Leave blank to enable built-in mock checkout mode for testing
NEXT_PUBLIC_RAZORPAY_KEY_ID=""
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
RAZORPAY_WEBHOOK_SECRET=""

# Cryptographic Token Signing Secrets (Generate 32+ character random strings)
AUTH_SECRET="your-high-entropy-random-auth-secret-min-32-chars"
DOWNLOAD_TOKEN_SECRET="your-high-entropy-random-download-secret-min-32-chars"

# Asset Storage
STORAGE_DRIVER="local"
STORAGE_LOCAL_PATH="./storage/protected"
```

### 4. Provide the Digital Deliverable (Product Archive)
Place your digital product file in:
```text
storage/protected/BrainOS-Master-Vault.zip
```
> **Security Note:** All archive files in `storage/protected/` are strictly ignored by `.gitignore` to prevent committing commercial digital products to public Git repositories.

### 5. Run the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Security & Data Protection

- **No Secrets in Source Control**: All sensitive keys (`RAZORPAY_KEY_SECRET`, `AUTH_SECRET`, `DOWNLOAD_TOKEN_SECRET`) are isolated to `.env.local` and never checked into GitHub.
- **Timing-Safe Token Verification**: HMAC signatures are verified using `crypto.timingSafeEqual` to defend against timing attacks.
- **Protected File Access**: Direct access to digital products via public URL paths is blocked; downloads must pass through `/api/download?token=...`.
- **Test Mode Fallback**: If Razorpay credentials are not yet configured in `.env.local`, the checkout modal automatically switches to simulated test mode for local UI and download testing without crashing.

---

## 🛠️ Production Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub (ensure `.gitignore` is present).
2. Import the project into [Vercel](https://vercel.com).
3. Add your production environment variables in the Vercel Project Settings.
4. For large file storage in production, configure an S3-compatible bucket (e.g. AWS S3, Cloudflare R2) or deploy to a persistent container/VPS with mounted volumes.

### Deploy to Docker / VPS
```bash
npm run build
npm run start
```

---

## 📄 License & Proprietary Rights

- **Source Code**: Licensed under the [MIT License](LICENSE).
- **Proprietary Notice**: All commercial trademarks, branding graphics, product designs, proprietary templates, Obsidian vault contents, and digital deliverables remain the exclusive intellectual property of Brain OS and are not included under the MIT code license.
