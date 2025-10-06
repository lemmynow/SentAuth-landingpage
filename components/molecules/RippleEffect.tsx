// components/BehavioralRipple.tsx
/**
 * BehavioralRipple - Premium Text Outline Animation
 *
 * Visual Metaphor: Understanding user behavior through subtle observation
 *
 * Elegant outline tracing effect that draws attention without distraction
 */

'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BehavioralRippleProps {
  trigger?: boolean;
  delay?: number;
  text: string;
  className?: string;
}

const BehavioralRipple: React.FC<BehavioralRippleProps> = ({
  trigger = true,
  delay = 0.5,
  text,
  className = '',
}) => {
  const [isTracing, setIsTracing] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    const traceTimer = window.setTimeout(() => {
      setIsTracing(true);
    }, Math.round(delay * 1000));

    return () => {
      clearTimeout(traceTimer);
    };
  }, [trigger, delay]);

  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ overflow: 'visible' }}
    >
      {/* Subtle outline glow effect - just appears softly */}
      {isTracing && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.6] }}
          transition={{
            duration: 2,
            times: [0, 0.4, 1],
            ease: 'easeOut'
          }}
        >
          <div
            className="font-bold font-display text-transparent text-5xl sm:text-6xl lg:text-7xl tracking-tight"
            style={{
              letterSpacing: '-0.02em',
              WebkitTextStroke: '4px rgba(108, 229, 182, 0.6)',
              filter: 'drop-shadow(0 0 8px rgba(108, 229, 182, 0.5)) drop-shadow(0 0 20px rgba(108, 229, 182, 0.3))',
            }}
          >
            {text}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BehavioralRipple;
