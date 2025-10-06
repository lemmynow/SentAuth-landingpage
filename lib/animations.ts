/**
 * Centralized Animation Configuration for SentAuth
 * Uses Framer Motion with consistent timing and easing
 * Respects prefers-reduced-motion
 */

import { Variants, Transition } from 'framer-motion';

// Custom easing function
export const customEase = [0.22, 1, 0.36, 1] as const;

// Base transition configurations
export const transitions = {
  fast: {
    duration: 0.15,
    ease: customEase,
  },
  base: {
    duration: 0.3,
    ease: customEase,
  },
  slow: {
    duration: 0.6,
    ease: customEase,
  },
  slower: {
    duration: 0.9,
    ease: customEase,
  },
} as const;

// Stagger configurations
export const stagger = {
  small: 0.06,
  medium: 0.1,
  large: 0.15,
} as const;

/**
 * Fade in from bottom animation
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

/**
 * Fade in animation (no movement)
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.base,
  },
};

/**
 * Scale pop animation for hover states
 */
export const hoverPop: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.04,
    transition: transitions.fast,
  },
  tap: {
    scale: 0.98,
    transition: transitions.fast,
  },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.small,
      delayChildren: 0.1,
    },
  },
};

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.slow,
  },
};

/**
 * Glow pulse animation for accents
 */
export const glowPulse: Variants = {
  initial: {
    opacity: 0.5,
    scale: 1,
  },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Draw line animation for SVG paths
 */
export const drawLine: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.5,
        ease: customEase,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

/**
 * Utility to check if reduced motion is preferred
 */
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get transition with reduced motion support
 */
export const getTransition = (transition: Transition): Transition => {
  if (shouldReduceMotion()) {
    return { duration: 0 };
  }
  return transition;
};

/**
 * Animation presets for common patterns
 */
export const animationPresets = {
  // Hero section entrance
  heroTitle: {
    variants: fadeInUp,
    initial: 'hidden',
    animate: 'visible',
    transition: { delay: 0.2, ...transitions.slow },
  },
  
  // Feature cards
  featureCard: {
    variants: scaleIn,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-100px' },
  },
  
  // CTA buttons
  ctaButton: {
    variants: hoverPop,
    initial: 'initial',
    whileHover: 'hover',
    whileTap: 'tap',
  },
  
  // Navigation items
  navItem: {
    variants: fadeIn,
    initial: 'hidden',
    animate: 'visible',
  },
} as const;

/**
 * Page transition variants
 */
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: transitions.base,
  },
};
