/**
 * Hero Component - Landing Page Hero Section
 * Includes A/B testing variants, animations, and trust badges
 * WCAG AA compliant
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Zap } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';
import BehavioralRipple from './RippleEffect';


export type HeadlineVariant = 1 | 2 | 3;
export type CTAVariant = 1 | 2 | 3;
export type LayoutVariant = 'primary' | 'alternate';

export interface HeroProps {
  headlineVariant?: HeadlineVariant;
  ctaVariant?: CTAVariant;
  layoutVariant?: LayoutVariant;
  onCTAClick?: () => void;
  className?: string;
}

const headlines: Record<HeadlineVariant, { title: string; subtitle: string }> = {
  1: {
    title: 'Know users by how they move, not what they enter.',
    subtitle: 'Continuous behavioral biometrics for adaptive, real-time fraud prevention.',
  },
  2: {
    title: 'Behavior is identity. Patterns are proof.',
    subtitle: 'Passive risk detection that learns from every session.',
  },
  3: {
    title: 'Stop account takeover before credentials are stolen.',
    subtitle: 'Privacy-first behavioral analysis that protects without friction.',
  },
};

const ctas: Record<CTAVariant, string> = {
  1: 'Get started — free',
  2: 'Request a demo',
  3: 'See it in action',
};

const trustBadges = [
  { icon: Shield, text: 'SOC-2 ready workflows. GDPR friendly.' },
  { icon: Lock, text: 'No passwords required for detection — privacy-first models.' },
  { icon: Zap, text: 'Real-time behavioral analysis' },
];

const Hero: React.FC<HeroProps> = ({
  headlineVariant = 1,
  ctaVariant = 1,
  layoutVariant = 'primary',
  onCTAClick,
  className,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const { title, subtitle } = headlines[headlineVariant];
  const ctaText = ctas[ctaVariant];

  const handleCTAClick = () => {
    // Fire analytics event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('signup_clicked', {
        variant: `headline_${headlineVariant}_cta_${ctaVariant}`,
        layout: layoutVariant,
      });
    }
    onCTAClick?.();
  };

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        'px-4 py-20 sm:px-6 lg:px-8',
        'overflow-hidden',
        'z-0', // Ensure hero stays below navbar
        className
      )}
      aria-labelledby="hero-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary -z-10" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px),
                             linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-mint rounded-full filter blur-[120px] opacity-20 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-mint rounded-full filter blur-[120px] opacity-10 -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div
          className={cn(
            'grid gap-12 items-center',
            layoutVariant === 'primary' ? 'lg:grid-cols-[1.2fr,1fr]' : 'lg:grid-cols-1 text-center'
          )}
        >
          {/* Text Content */}
          <div className={cn('space-y-8', layoutVariant === 'alternate' && 'max-w-4xl mx-auto')}>
            {/* Tagline */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-mint-muted border border-border-subtle"
            >
              <div className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
              <span className="text-sm font-medium text-text-secondary">
                Your users aren't just passwords. They're patterns, behaviors, habits.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-title"
              variants={fadeInUp}
              className={cn(
                'font-bold text-text-primary tracking-tight',
                'font-display relative', // Space Grotesk for display text + relative for ripple positioning
                layoutVariant === 'primary' ? 'text-5xl sm:text-6xl lg:text-7xl' : 'text-6xl sm:text-7xl lg:text-display'
              )}
              style={{
                letterSpacing: '-0.02em', // Tighter letter spacing for premium feel
              }}
            >
              {/* Behavioral Ripple - Visual metaphor for SentAuth's core value */}
              <BehavioralRipple trigger={true} delay={0.5} text={title} />
              
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className={cn(
                'text-xl sm:text-2xl text-text-secondary leading-relaxed max-w-2xl',
                layoutVariant === 'alternate' && 'mx-auto'
              )}
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className={cn(
                'flex flex-wrap gap-4',
                layoutVariant === 'alternate' && 'justify-center'
              )}
            >
              <Button
                size="xl"
                onClick={handleCTAClick}
                rightIcon={<Icon icon={ArrowRight} size="sm" />}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {ctaText}
              </Button>
              
              <Button
                size="xl"
                variant="outline"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn more
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className={cn(
                'flex flex-wrap gap-6 pt-4',
                layoutVariant === 'alternate' && 'justify-center'
              )}
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-text-muted"
                >
                  <Icon icon={badge.icon} size="sm" className="text-accent-mint" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element (Primary Layout Only) */}
          {layoutVariant === 'primary' && (
            <motion.div
              variants={fadeInUp}
              className="relative block"
            >
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-accent-mint rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

/**
 * Behavioral Pattern Visualization
 * Interactive SVG showing behavioral analysis
 */
const BehavioralPatternVisualization: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="var(--border-subtle)"
          strokeWidth="2"
        />

        {/* Behavioral Pattern Rings */}
        {[120, 90, 60].map((radius, index) => (
          <motion.circle
            key={radius}
            cx="200"
            cy="200"
            r={radius}
            fill="none"
            stroke="var(--accent-mint)"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity={0.3 - index * 0.1}
            animate={isActive ? {
              rotate: [0, 360],
            } : {}}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ originX: '200px', originY: '200px' }}
          />
        ))}

        {/* Data Points - representing behavioral signals */}
        {[
          { x: 200, y: 80, delay: 0 },
          { x: 320, y: 200, delay: 0.2 },
          { x: 200, y: 320, delay: 0.4 },
          { x: 80, y: 200, delay: 0.6 },
          { x: 280, y: 120, delay: 0.8 },
          { x: 280, y: 280, delay: 1 },
          { x: 120, y: 280, delay: 1.2 },
          { x: 120, y: 120, delay: 1.4 },
        ].map((point, index) => (
          <motion.g key={index}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="var(--accent-mint)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: point.delay, duration: 0.6 }}
            />
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="none"
              stroke="var(--accent-mint)"
              strokeWidth="2"
              animate={{
                r: [6, 16, 6],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: point.delay + 1,
              }}
            />
          </motion.g>
        ))}

        {/* Center indicator */}
        <motion.circle
          cx="200"
          cy="200"
          r="12"
          fill="var(--accent-mint)"
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
          }}
          transition={{
            duration: 1.5,
            repeat: isActive ? Infinity : 0,
          }}
        />
      </svg>

      {/* Floating Labels */}
      <motion.div
        className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-bg-tertiary/80 backdrop-blur-sm border border-border-subtle"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-xs text-text-muted">Typing Pattern</p>
        <p className="text-sm font-semibold text-accent-mint">98.2% Match</p>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-bg-tertiary/80 backdrop-blur-sm border border-border-subtle"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-xs text-text-muted">Device Fingerprint</p>
        <p className="text-sm font-semibold text-status-success">Verified</p>
      </motion.div>
    </div>
  );
};

export default Hero;
