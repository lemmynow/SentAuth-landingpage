/**
 * Sticky CTA Component
 * Appears after 60% scroll progress
 * Premium slide + opacity animation
 */

'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

interface StickyCTAProps {
  threshold?: number; // Scroll threshold (0-1)
  ctaText?: string;
  onCTAClick?: () => void;
  className?: string;
}

const StickyCTA: React.FC<StickyCTAProps> = ({
  threshold = 0.6,
  ctaText = 'Get started — free',
  onCTAClick,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrolled / (documentHeight - windowHeight);

      setIsVisible(scrollProgress >= threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const handleClick = () => {
    // Fire analytics event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('cta_clicked', {
        source: 'sticky_cta',
        text: ctaText,
      });
    }
    onCTAClick?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            'fixed bottom-6 right-6 z-[9998]', // Below navbar (9999)
            className
          )}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
            mass: 0.8,
          }}
        >
          {/* Glassmorphism container */}
          <div className="relative">
            {/* Background with blur */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-lg rounded-2xl shadow-ambient border border-slate-200/50" />
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-mint/20 to-blue-500/10 rounded-2xl blur-xl opacity-60" />
            
            {/* Content */}
            <div className="relative px-6 py-4 flex items-center gap-4">
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-700">
                  Ready to secure your users?
                </p>
                <p className="text-xs text-slate-500">
                  Start with behavioral biometrics today
                </p>
              </div>
              
              <Button
                size="lg"
                onClick={handleClick}
                rightIcon={<Icon icon={ArrowRight} size="sm" />}
                className="shadow-ambient-sm hover:shadow-ambient-md transition-shadow"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
