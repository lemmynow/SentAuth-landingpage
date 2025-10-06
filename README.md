# SentAuth Landing Page# SentAuth Landing Page



> **Stop guessing. Start knowing.**  > **Stop guessing. Start knowing.**  

> Production-ready, conversion-optimized SaaS landing page for SentAuth — behavioral biometrics and risk-based authentication.> Production-ready, conversion-optimized SaaS landing page for SentAuth — behavioral biometrics and risk-based authentication.



## 🎯 OverviewThis is a [Next.js](https://nextjs.org) project built with performance, accessibility, and conversion optimization in mind.



This is a premium, non-generic Next.js landing page built specifically for SentAuth. It emphasizes:## Getting Started



- **Original design** — No cookie-cutter templatesFirst, run the development server:

- **Conversion optimization** — A/B testing variants, persuasive microcopy

- **Performance** — Lighthouse mobile score ≥ 90```bash

- **Accessibility** — WCAG AA compliantnpm run dev

- **Privacy-first** — GDPR-friendly cookie consent# or

yarn dev

## ✨ Features# or

pnpm dev

### Design & UX# or

- **Design tokens** system with 3 palette options (Tech-Trust default)bun dev

- **Centralized animations** using Framer Motion with reduced-motion support```

- **Atomic design** structure (atoms, molecules, layouts)

- **Responsive** and mobile-firstOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.



### ComponentsYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- ✅ Hero with 3 headline variants + 3 CTA variants for A/B testing

- ✅ Feature cards with progressive disclosureThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- ✅ Pricing cards with monthly/annual toggle

- ✅ Cookie consent banner with granular controls## Learn More

- ✅ Navbar with mobile menu

- ✅ Footer with comprehensive linksTo learn more about Next.js, take a look at the following resources:

- ✅ Custom Logo with animated SVG

- ✅ Button, Input, Icon atomic components- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Pages

- ✅ Landing page (`/`)You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

- ✅ Pricing (`/pricing`)

- ✅ Documentation (`/docs`)## Deploy on Vercel

- ✅ Sign In/Sign Up (`/signin`)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## 🚀 Quick Start

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```bash
# Install dependencies
npm install

# Install missing Tailwind plugins
npm install @tailwindcss/forms @tailwindcss/typography

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Landing page
│   ├── pricing/page.tsx     # Pricing page
│   ├── docs/page.tsx        # Documentation
│   └── signin/page.tsx      # Auth (placeholder)
├── components/
│   ├── atoms/               # Button, Input, Icon, Logo
│   ├── molecules/           # Hero, FeatureCard, PricingCard
│   └── layouts/             # Navbar, Footer
├── lib/
│   ├── animations.ts        # Framer Motion configs
│   └── utils.ts             # Utilities
├── styles/
│   └── tokens.css           # Design tokens
└── experiment.json          # A/B test configs
```

## 🎨 Design System

### Color Palettes

1. **Tech-Trust** (default) — Mint (#6CE5B6) on deep navy
2. **Night-Analyst** — Purple (#7C5CFF)
3. **Clean-Modern** — Coral (#FF6B6B)

### Typography
- **Font:** Inter Variable
- **Scale:** 12px → 72px
- **Spacing:** 4px base unit

All tokens in `styles/tokens.css` and `tailwind.config.ts`.

## 🧪 A/B Testing

Configured in `experiment.json`:
- Hero headline variants (3)
- Pricing display options
- Color palette tests

## 🚢 Deployment

### Vercel (Recommended)

```bash
vercel
```

or connect GitHub repo for automatic deployments.

## ✅ Production Checklist

- [x] Responsive design
- [x] Dark mode optimized
- [x] SEO metadata & JSON-LD schemas
- [x] Cookie consent with analytics blocking
- [x] Accessible (WCAG AA)
- [ ] OG image API (TODO)
- [ ] Unit tests (TODO)
- [ ] Storybook (TODO)

## 🔒 Integrations

**Auth Placeholder:** Replace `/signin` with Clerk, Auth0, or NextAuth  
**Analytics:** Add Segment/Plausible/PostHog  
**Payments:** Integrate Stripe Checkout for pricing flow

## 📊 Performance

Target Lighthouse scores:
- Performance: ≥ 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📝 Changelog

### v1.0.0
- Tech-Trust palette
- Atomic component library
- Hero with 3 A/B variants
- GDPR cookie consent
- Full page suite

## 📄 License

Proprietary - © 2025 SentAuth

---

**Questions?** Contact: hello@sentauth.com
