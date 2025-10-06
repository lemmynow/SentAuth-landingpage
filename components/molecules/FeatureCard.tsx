/**
 * FeatureCard Component
 * Icon-led feature cards with progressive disclosure
 * WCAG AA compliant with keyboard navigation
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, ChevronDown } from 'lucide-react';
import Icon from '@/components/atoms/Icon';
import { scaleIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technicalDetails?: string;
  benefits?: string[];
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  technicalDetails,
  benefits,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasExpandableContent = !!(technicalDetails || benefits);

  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'group relative',
        'p-6 sm:p-8',
        'bg-bg-secondary/50 backdrop-blur-sm',
        'border-2 border-border-subtle',
        'rounded-2xl',
        'transition-all duration-base',
        'hover:border-accent-mint/50 hover:shadow-glow',
        className
      )}
    >
      {/* Icon */}
      <div className="relative mb-6">
        <div
          className={cn(
            'inline-flex p-3 rounded-xl',
            'bg-accent-mint-muted',
            'border border-accent-mint/20',
            'transition-all duration-base',
            'group-hover:bg-accent-mint/20 group-hover:border-accent-mint/40'
          )}
        >
          <Icon
            icon={icon}
            size="lg"
            className="text-accent-mint"
            aria-hidden="true"
          />
        </div>

        {/* Glow effect on hover */}
        <div
          className={cn(
            'absolute inset-0 rounded-xl blur-xl opacity-0',
            'bg-accent-mint/20',
            'transition-opacity duration-base',
            'group-hover:opacity-100',
            '-z-10'
          )}
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-text-primary mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed mb-4">
        {description}
      </p>

      {/* Benefits List */}
      {benefits && benefits.length > 0 && (
        <ul className="space-y-2 mb-4">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-text-muted"
            >
              <svg
                className="w-5 h-5 flex-shrink-0 text-accent-mint mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Expandable Technical Details */}
      {hasExpandableContent && (
        <div className="border-t border-border-subtle pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              'flex items-center justify-between w-full',
              'text-sm font-medium text-text-secondary',
              'hover:text-accent-mint transition-colors',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg-secondary',
              'rounded px-2 py-1'
            )}
            aria-expanded={isExpanded}
            aria-controls={`technical-details-${title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <span>Technical details</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon icon={ChevronDown} size="sm" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                id={`technical-details-${title.replace(/\s+/g, '-').toLowerCase()}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-3 text-sm text-text-muted leading-relaxed">
                  {technicalDetails}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Hover gradient effect */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl opacity-0',
          'bg-gradient-to-br from-accent-mint/5 to-transparent',
          'transition-opacity duration-base',
          'group-hover:opacity-100',
          'pointer-events-none'
        )}
      />
    </motion.article>
  );
};

export default FeatureCard;
