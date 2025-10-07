/**
 * Hero Section — Flagship Design
 * 
 * Philosophy: "Intelligent Calm"
 * - Cinematic entrance with letter-by-letter reveal
 * - Reactive background that responds to mouse movement
 * - Magnetic CTA button with glow pulse
 * - Ghost secondary button with underline animation
 * 
 * Visual Reference: Linear + Humane + Apple
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Button from '@/components/atoms/Button';
import { BehavioralWaveform } from '@/components/molecules/BehavioralWaveform';
import {
  sentAuthEnter,
  staggerContainer,
  magneticButton,
  glowPulse,
  easing,
  duration,
} from '@/lib/motion';

export const FlagshipHero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for parallax
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transforms (subtle 1-2° movement)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['2deg', '-2deg']);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['-2deg', '2deg']);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Split headline into words for animation
  const headline = "Stop guessing. Start knowing.";
  const words = headline.split(' ');

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Behavioral Waveform Background */}
      <div className="absolute inset-0">
        <BehavioralWaveform />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        {/* Kicker text */}
        <motion.div
          variants={sentAuthEnter}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[var(--color-text-secondary)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-neural-mint)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-neural-mint)]"></span>
            </span>
            Behavioral Authentication 2.0
          </span>
        </motion.div>

        {/* Hero Headline — Word-by-word reveal */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
          variants={staggerContainer}
        >
          {words.map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className="inline-block"
              variants={sentAuthEnter}
              custom={wordIndex}
            >
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: wordIndex * 0.15 + charIndex * 0.03,
                    duration: duration.medium,
                    ease: easing.enter,
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={sentAuthEnter}
          className="text-xl sm:text-2xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Authentication that adapts to <span className="text-gradient font-semibold">how users move</span>,
          not what they enter. Behavioral biometrics for the intelligent era.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={sentAuthEnter}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA with glow */}
          <motion.div
            variants={magneticButton}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-[var(--color-neural-mint)] blur-xl"
              variants={glowPulse}
              initial="initial"
              animate="animate"
            />
            <Button
              variant="primary"
              size="lg"
              className="relative bg-gradient-to-r from-[var(--color-neural-mint)] to-[var(--color-mint-glow)] text-[var(--color-deep-slate)] font-semibold px-8 py-4 text-lg rounded-full hover:shadow-[var(--shadow-glow-lg)] transition-shadow duration-300"
            >
              Get Started
            </Button>
          </motion.div>

          {/* Secondary Ghost CTA */}
          <motion.div
            className="relative group"
            initial="rest"
            whileHover="hover"
          >
            <Button
              variant="ghost"
              size="lg"
              className="relative text-[var(--color-text-primary)] font-medium px-8 py-4 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Watch demo
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Button>
            {/* Sliding underline */}
            <motion.div
              className="absolute bottom-3 left-8 right-8 h-[2px] bg-[var(--color-neural-mint)] origin-left"
              initial={{ scaleX: 0 }}
              variants={{
                rest: { scaleX: 0 },
                hover: {
                  scaleX: 1,
                  transition: { duration: duration.fast, ease: easing.sentauth },
                },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={sentAuthEnter}
          className="mt-16 flex items-center justify-center gap-8 opacity-40"
        >
          <span className="text-sm text-[var(--color-text-secondary)]">Trusted by teams at</span>
          <div className="flex items-center gap-6">
            {/* Placeholder logos */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-20 h-8 rounded bg-white/5 animate-pulse-slow"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: duration.slow }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-[var(--color-text-secondary)] text-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span>Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
