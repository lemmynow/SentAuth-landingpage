/**
 * Logo Component - SentAuth Brand
 * Animated SVG logo with accessibility
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
  showText?: boolean;
}

const sizeMap = {
  sm: { width: 32, height: 32, textSize: 'text-lg' },
  md: { width: 40, height: 40, textSize: 'text-xl' },
  lg: { width: 48, height: 48, textSize: 'text-2xl' },
  xl: { width: 64, height: 64, textSize: 'text-3xl' },
};

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className,
  animated = true,
  showText = true,
}) => {
  const { width, height, textSize } = sizeMap[size];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {/* Logo Icon */}
      <motion.svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="sentauth-logo-title"
        role="img"
        initial={animated ? { opacity: 0, scale: 0.8 } : undefined}
        animate={animated ? { opacity: 1, scale: 1 } : undefined}
        transition={animated ? { duration: 0.6, ease: [0.22, 1, 0.36, 1] } : undefined}
      >
        <title id="sentauth-logo-title">SentAuth Logo</title>
        
        {/* Outer Circle - represents security perimeter */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="var(--accent-mint)"
          strokeWidth="3"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
          transition={animated ? { duration: 1.5, ease: [0.22, 1, 0.36, 1] } : undefined}
        />
        
        {/* Fingerprint-like pattern - behavioral identity */}
        <motion.path
          d="M 50 20 Q 35 25, 30 40 T 25 60"
          stroke="var(--accent-mint)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 0.7 } : undefined}
          transition={animated ? { duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] } : undefined}
        />
        
        <motion.path
          d="M 50 25 Q 40 30, 35 45 T 30 65"
          stroke="var(--accent-mint)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 0.5 } : undefined}
          transition={animated ? { duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] } : undefined}
        />
        
        <motion.path
          d="M 50 20 Q 65 25, 70 40 T 75 60"
          stroke="var(--accent-mint)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 0.7 } : undefined}
          transition={animated ? { duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] } : undefined}
        />
        
        <motion.path
          d="M 50 25 Q 60 30, 65 45 T 70 65"
          stroke="var(--accent-mint)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 0.5 } : undefined}
          transition={animated ? { duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] } : undefined}
        />
        
        {/* Central pulse point - active detection */}
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill="var(--accent-mint)"
          initial={animated ? { scale: 0, opacity: 0 } : undefined}
          animate={animated ? {
            scale: [0, 1, 1],
            opacity: [0, 1, 1],
          } : undefined}
          transition={animated ? { duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] } : undefined}
        />
        
        {/* Animated pulse ring */}
        {animated && (
          <motion.circle
            cx="50"
            cy="50"
            r="8"
            stroke="var(--accent-mint)"
            strokeWidth="2"
            fill="none"
            animate={{
              r: [8, 20, 8],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
          />
        )}
      </motion.svg>

      {/* Logo Text */}
      {showText && (
        <motion.span
          className={cn(
            'font-bold tracking-tight text-text-primary',
            textSize
          )}
          initial={animated ? { opacity: 0, x: -10 } : undefined}
          animate={animated ? { opacity: 1, x: 0 } : undefined}
          transition={animated ? { duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] } : undefined}
        >
          Sent<span className="text-accent-mint">Auth</span>
        </motion.span>
      )}
    </div>
  );
};

export default Logo;
