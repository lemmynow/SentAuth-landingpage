# SentAuth Flagship Design — Implementation Guide

**Quick Start:** How to integrate the new flagship components

---

## 🚀 Step 1: Update Your Main Page

Replace the current Hero component with the new FlagshipHero:

```tsx
// app/page.tsx
import { FlagshipHero } from '@/components/organisms/FlagshipHero';
import { ProceduralBackground } from '@/components/organisms/ProceduralBackground';

export default function Home() {
  return (
    <>
      {/* Add procedural background */}
      <ProceduralBackground />
      
      <Navbar />
      
      <main>
        {/* Replace existing Hero with FlagshipHero */}
        <FlagshipHero />
        
        {/* Rest of your sections */}
        <FeaturesSection />
        <CTASection />
      </main>
      
      <Footer />
    </>
  );
}
```

---

## 📦 Step 2: Install Required Fonts

Add Space Grotesk to your layout:

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
});

const spaceGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/SpaceGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-display',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Alternative (using Google Fonts):**
```tsx
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700'],
});
```

---

## 🎨 Step 3: Update Tailwind Config

Ensure your `tailwind.config.ts` includes the design tokens:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neural-mint': '#5BF3B8',
        'mint-glow': '#6CE5B6',
        'deep-slate': '#0B0D12',
        'ash-slate': '#0D0E10',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
```

---

## 🔄 Step 4: Use Motion Library in Components

Apply the unified motion system to your sections:

```tsx
// Example: Features section
import { motion } from 'framer-motion';
import { sentAuthEnter, staggerContainer, viewportConfig } from '@/lib/motion';

export function FeaturesSection() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="py-24"
    >
      <motion.h2 variants={sentAuthEnter}>
        Features
      </motion.h2>
      
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div key={i} variants={sentAuthEnter}>
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
```

---

## 🎯 Step 5: Update Button Components

Enhance buttons with magnetic effects:

```tsx
// components/atoms/Button.tsx
import { motion } from 'framer-motion';
import { magneticButton } from '@/lib/motion';

export default function Button({ children, variant = 'primary', ...props }) {
  return (
    <motion.button
      variants={magneticButton}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`px-8 py-4 rounded-full font-semibold ${
        variant === 'primary' 
          ? 'bg-gradient-to-r from-neural-mint to-mint-glow text-deep-slate'
          : 'bg-white/5 border border-white/10 text-white'
      }`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
```

---

## 🌊 Step 6: Add Behavioral Waveform to Hero

The waveform is already imported in FlagshipHero, but you can also use it standalone:

```tsx
import { BehavioralWaveform } from '@/components/molecules/BehavioralWaveform';

<section className="relative">
  {/* Background waveform */}
  <div className="absolute inset-0 overflow-hidden">
    <BehavioralWaveform />
  </div>
  
  {/* Your content */}
  <div className="relative z-10">
    <h1>Your headline</h1>
  </div>
</section>
```

---

## 🎬 Step 7: Performance Checklist

✅ **Preload critical fonts:**
```tsx
// app/layout.tsx
<link
  rel="preload"
  href="/fonts/SpaceGrotesk-Bold.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

✅ **Enable GPU acceleration:**
```css
/* Already in tokens.css */
.gpu-accelerated {
  will-change: transform, opacity;
  transform: translateZ(0);
}
```

✅ **Lazy load non-critical animations:**
```tsx
const BehavioralWaveform = lazy(() => import('@/components/molecules/BehavioralWaveform'));
```

---

## 🧪 Testing Checklist

- [ ] Hero animates on page load (1.4s entrance)
- [ ] Waveform responds to mouse movement
- [ ] CTA button glows and scales on hover
- [ ] Background gradient shifts on scroll
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Mobile performance: < 2% CPU, 60fps
- [ ] LCP < 1.8s on mobile
- [ ] No layout shift (CLS < 0.1)

---

## 🔧 Troubleshooting

### Issue: Fonts not loading
**Solution:** Check font paths and ensure WOFF2 files are in `/public/fonts/`

### Issue: Animations stuttering
**Solution:** 
1. Check GPU acceleration with DevTools Performance tab
2. Reduce particle count in ProceduralBackground (line 85)
3. Disable waveform on mobile if needed

### Issue: Waveform not rendering
**Solution:**
1. Verify Canvas API support: `!!document.createElement('canvas').getContext`
2. Check console for errors
3. Ensure `canvasRef` is mounted before animation starts

---

## 📚 Component Reference

| Component | Path | Usage |
|-----------|------|-------|
| FlagshipHero | `organisms/FlagshipHero.tsx` | Main hero with cinematic entrance |
| ProceduralBackground | `organisms/ProceduralBackground.tsx` | Living background system |
| BehavioralWaveform | `molecules/BehavioralWaveform.tsx` | Reactive waveform visualization |
| Motion Library | `lib/motion.ts` | Unified animation variants |
| Design Tokens | `app/tokens.css` | Color, spacing, typography system |

---

## 🎨 Customization

### Change Accent Color
```css
/* app/tokens.css */
--color-neural-mint: #YOUR_COLOR;
--color-mint-glow: #YOUR_GLOW_COLOR;
```

### Adjust Animation Speed
```ts
// lib/motion.ts
export const duration = {
  cinematic: 1.0, // Faster (was 1.4)
};
```

### Modify Particle Density
```ts
// organisms/ProceduralBackground.tsx (line 85)
const particleCount = Math.min(30, Math.floor(window.innerWidth / 50)); // Fewer particles
```

---

## 🚀 Go Live

1. Run dev server: `npm run dev`
2. Test on localhost:3000
3. Check mobile responsiveness
4. Run Lighthouse audit (target: 90+ score)
5. Deploy to production

**Congrats!** You now have a flagship-tier landing page. 🎉

---

**Need help?** Check DESIGN_CHANGELOG.md for detailed philosophy and technical decisions.
