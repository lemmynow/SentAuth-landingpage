/**
 * SentAuth Motion DNA
 * 
 * Philosophy: Every animation should feel inevitable, not decorative.
 * Motion creates rhythm, guides attention, and builds trust through predictability.
 */

import { Variants, Transition } from 'framer-motion';

/**
 * Core easing curves — the "voice" of SentAuth motion
 */
export const easing = {
  sentauth: [0.22, 1, 0.36, 1] as const,
  enter: [0.16, 1, 0.3, 1] as const,
  exit: [0.7, 0, 0.84, 0] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
} as const;

/**
 * Duration system — matches design tokens
 */
export const duration = {
  instant: 0.15,
  fast: 0.3,
  medium: 0.6,
  slow: 0.9,
  cinematic: 1.4,
} as const;

/**
 * Primary entrance animation — used across all components
 */
export const sentAuthEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.medium,
      ease: easing.sentauth,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: duration.fast,
      ease: easing.exit,
    },
  },
};

/**
 * Fade-only entrance (for subtle elements)
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.medium,
      ease: easing.sentauth,
    },
  },
};

/**
 * Scale entrance (for cards and modals)
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.medium,
      ease: easing.enter,
    },
  },
};

/**
 * Stagger container — for sequential reveals
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger items — children of stagger container
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.medium,
      ease: easing.sentauth,
    },
  },
};

/**
 * Letter-by-letter reveal (for hero headlines)
 */
export const letterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: duration.medium,
      ease: easing.enter,
    },
  }),
};

/**
 * Card tilt on hover (3D perspective effect)
 */
export const cardTilt = {
  rest: {
    rotateY: 0,
    rotateX: 0,
    transition: {
      duration: duration.fast,
      ease: easing.sentauth,
    },
  },
  hover: (tiltAmount: number = 2) => ({
    rotateY: tiltAmount,
    rotateX: tiltAmount * 0.5,
    transition: {
      duration: duration.fast,
      ease: easing.spring,
    },
  }),
};

/**
 * Button magnetic effect
 */
export const magneticButton = {
  rest: {
    scale: 1,
    transition: {
      duration: duration.fast,
      ease: easing.sentauth,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: duration.fast,
      ease: easing.spring,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: duration.instant,
      ease: easing.exit,
    },
  },
};

/**
 * Glow pulse animation (for CTAs and accents)
 */
export const glowPulse: Variants = {
  initial: {
    opacity: 0.6,
  },
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Breathing scale animation (for logo, icons)
 */
export const breathe: Variants = {
  animate: {
    scale: [1, 1.015, 1],
    opacity: [1, 0.95, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Scroll-triggered reveal (use with IntersectionObserver)
 */
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.enter,
    },
  },
};

/**
 * Parallax motion values
 */
export const parallaxConfig = {
  subtle: { y: [0, -20], transition: { duration: 1, ease: easing.sentauth } },
  medium: { y: [0, -50], transition: { duration: 1, ease: easing.sentauth } },
  strong: { y: [0, -100], transition: { duration: 1, ease: easing.sentauth } },
};

/**
 * Dissolve transition (for adaptive CTA text)
 */
export const dissolve: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.fast,
      ease: easing.enter,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: duration.fast,
      ease: easing.exit,
    },
  },
};

/**
 * Underline slide animation (for ghost buttons)
 */
export const underlineSlide: Variants = {
  rest: {
    scaleX: 0,
    originX: 0,
  },
  hover: {
    scaleX: 1,
    transition: {
      duration: duration.fast,
      ease: easing.sentauth,
    },
  },
};

/**
 * Viewport-based animation config
 */
export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: '-100px',
};
