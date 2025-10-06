/**
 * PricingCard Component
 * Accessible pricing card with monthly/annual toggle
 * Fires analytics events and supports keyboard navigation
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import { scaleIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export interface PricingCardProps {
  tier: PricingTier;
  isAnnual: boolean;
  onSelect: (tierName: string, isAnnual: boolean) => void;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  isAnnual,
  onSelect,
  className,
}) => {
  const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
  const annualSavings = tier.monthlyPrice * 12 - tier.annualPrice;
  const savingsPercentage = Math.round((annualSavings / (tier.monthlyPrice * 12)) * 100);

  const handleSelect = () => {
    // Fire analytics event
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('signup_clicked', {
        tier: tier.name,
        billing: isAnnual ? 'annual' : 'monthly',
        price,
      });
    }
    onSelect(tier.name, isAnnual);
  };

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'relative flex flex-col',
        'p-8',
        'bg-bg-secondary/50 backdrop-blur-sm',
        'border-2',
        tier.highlighted
          ? 'border-accent-mint shadow-glow-strong scale-105 z-10'
          : 'border-border-subtle',
        'rounded-2xl',
        'transition-all duration-base',
        'hover:border-accent-mint/50',
        className
      )}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-accent-mint text-text-inverse text-sm font-semibold shadow-lg">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Tier Name */}
      <h3 className="text-2xl font-bold text-text-primary mb-2">
        {tier.name}
      </h3>

      {/* Description */}
      <p className="text-text-muted mb-6">
        {tier.description}
      </p>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-text-primary">
            ${price}
          </span>
          <span className="text-text-muted">
            /{isAnnual ? 'year' : 'month'}
          </span>
        </div>

        {/* Savings Badge */}
        {isAnnual && annualSavings > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-success/10 border border-status-success/20"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-status-success" />
            <span className="text-sm font-medium text-status-success">
              Save {savingsPercentage}% (${annualSavings}/year)
            </span>
          </motion.div>
        )}
      </div>

      {/* CTA Button */}
      <Button
        variant={tier.highlighted ? 'primary' : 'outline'}
        size="lg"
        fullWidth
        onClick={handleSelect}
        rightIcon={<Icon icon={ArrowRight} size="sm" />}
        className="mb-8"
      >
        {tier.cta}
      </Button>

      {/* Features List */}
      <div className="flex-1">
        <p className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wide">
          What's included
        </p>
        <ul className="space-y-3" role="list">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-mint/10 flex items-center justify-center mt-0.5">
                <Icon
                  icon={Check}
                  size="xs"
                  className="text-accent-mint"
                  aria-hidden="true"
                />
              </div>
              <span className="text-text-secondary leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Highlight Glow Effect */}
      {tier.highlighted && (
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-mint/10 to-transparent opacity-50 pointer-events-none"
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
};

/**
 * Pricing Toggle Component
 * Monthly/Annual billing toggle
 */
export interface PricingToggleProps {
  isAnnual: boolean;
  onChange: (isAnnual: boolean) => void;
  className?: string;
}

export const PricingToggle: React.FC<PricingToggleProps> = ({
  isAnnual,
  onChange,
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 p-1 rounded-full bg-bg-tertiary border-2 border-border-subtle',
        className
      )}
      role="radiogroup"
      aria-label="Billing frequency"
    >
      <button
        onClick={() => onChange(false)}
        className={cn(
          'px-6 py-2.5 rounded-full font-medium transition-all duration-base',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
          !isAnnual
            ? 'bg-text-primary text-text-inverse shadow-md'
            : 'text-text-muted hover:text-text-secondary'
        )}
        role="radio"
        aria-checked={!isAnnual}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange(true)}
        className={cn(
          'px-6 py-2.5 rounded-full font-medium transition-all duration-base',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
          'flex items-center gap-2',
          isAnnual
            ? 'bg-text-primary text-text-inverse shadow-md'
            : 'text-text-muted hover:text-text-secondary'
        )}
        role="radio"
        aria-checked={isAnnual}
      >
        <span>Annual</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-status-success/20 text-status-success">
          Save 20%
        </span>
      </button>
    </div>
  );
};

export default PricingCard;
