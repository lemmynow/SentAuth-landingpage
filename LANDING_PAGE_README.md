# SentAuth Landing Page

An award-winning landing page built with Next.js, GSAP, and Lenis smooth scroll. Designed to showcase SentAuth's behavioral biometrics and risk-based authentication platform.

## 🎨 Design Features

- **Awwwards-Inspired Design**: Modern, dark-themed interface with premium aesthetics
- **GSAP Animations**: Advanced scroll-triggered animations and parallax effects
- **Smooth Scrolling**: Lenis integration for buttery-smooth scroll experience
- **Responsive**: Fully responsive across all devices
- **Dark Theme**: Premium dark mode with gradient accents

## 🚀 Tech Stack

- **Next.js 15** - React framework with app router
- **GSAP 3.13** - Professional-grade animations
- **Lenis** - Smooth scroll library
- **Framer Motion** - Additional animation capabilities
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Beautiful UI components

## 📦 Components

### Core Sections

1. **Hero Section** (`components/hero-section.tsx`)
   - Animated floating background shapes
   - Parallax scroll effect
   - Gradient text animations
   - Stats counter display

2. **Features Section** (`components/features-section.tsx`)
   - 6 feature cards with hover effects
   - Staggered scroll animations
   - Gradient icon backgrounds
   - Interactive card hovers

3. **How It Works** (`components/how-it-works-section.tsx`)
   - 4-step process visualization
   - Left/right alternating animations
   - Connecting line animations
   - Scroll-triggered reveals

4. **Scroll Text Animation** (`components/skiper31.tsx`)
   - 3D text perspective effect
   - Character-by-character animation
   - Smooth scroll integration

5. **CTA Section** (`components/cta-section.tsx`)
   - Floating particle effects
   - Glowing background orbs
   - Parallax background
   - Animated call-to-action

6. **Navbar** (`components/navbar.tsx`)
   - Scroll-based background blur
   - Sticky navigation
   - Mobile-responsive menu
   - Animated entrance

7. **Footer** (`components/footer.tsx`)
   - Multi-column layout
   - Social media links
   - Scroll-triggered animation

## 🎯 GSAP Animations

### Implemented Effects

- **Scroll Triggers**: Elements animate when scrolled into view
- **Parallax**: Background elements move at different speeds
- **Stagger**: Sequential animation of multiple elements
- **Hover Effects**: Interactive micro-animations on cards
- **Floating Elements**: Continuous loop animations
- **3D Transforms**: Perspective-based text animations

### Key Animation Patterns

```typescript
// Scroll-triggered fade in
gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 50,
  opacity: 0,
  duration: 1
});

// Parallax effect
gsap.to(element, {
  scrollTrigger: {
    trigger: element,
    scrub: 1
  },
  y: 200
});

// Continuous floating
gsap.to(element, {
  y: "random(-30, 30)",
  duration: "random(3, 5)",
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
```

## 🎬 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Colors

The landing page uses a custom color scheme based on:
- **Primary**: Blue-Cyan gradient (`from-blue-600 to-cyan-600`)
- **Background**: Slate dark shades (`slate-950`, `slate-900`)
- **Accents**: Purple, Pink, Orange gradients

### Animations

All GSAP animations are configured in individual component files. To modify:

1. Find the component in `/components`
2. Look for the `useEffect` hook with `gsap.context()`
3. Adjust timing, easing, or trigger points

### Content

Update content in each component file:
- Hero text: `components/hero-section.tsx`
- Features: `components/features-section.tsx`
- Steps: `components/how-it-works-section.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Smooth 60fps** animations
- **Optimized GSAP** with ScrollTrigger
- **Lazy loading** for images
- **Minimal re-renders** with proper cleanup

## 🔧 Build

```bash
npm run build
```

## 📄 License

Part of the SentAuth project.

## 🙏 Credits

- GSAP animations inspired by Awwwards winners
- Scroll text effect based on Skiper UI components
- Design principles from modern SaaS landing pages
