/**
 * Pricing Page
 * Three-tier pricing with monthly/annual toggle
 */

'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import PricingCard, { PricingToggle, type PricingTier } from '@/components/molecules/PricingCard';
import CookieBanner from '@/components/molecules/CookieBanner';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Perfect for small teams and side projects',
    monthlyPrice: 49,
    annualPrice: 470,
    features: [
      'Up to 10,000 active users',
      'Basic behavioral analytics',
      'Risk scoring engine',
      'Email support',
      'Standard SLA (99.5%)',
      '30-day data retention',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Professional',
    description: 'For growing companies with advanced security needs',
    monthlyPrice: 199,
    annualPrice: 1910,
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Up to 100,000 active users',
      'Advanced ML models',
      'Real-time threat detection',
      'Custom risk rules',
      'Priority support (24/7)',
      'Standard SLA (99.9%)',
      '90-day data retention',
      'Compliance reports',
      'API access',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large-scale deployments',
    monthlyPrice: 999,
    annualPrice: 9590,
    features: [
      'Unlimited active users',
      'Custom ML model training',
      'Dedicated infrastructure',
      'Advanced threat intelligence',
      'Dedicated account manager',
      'Enterprise SLA (99.99%)',
      'Custom data retention',
      'White-label options',
      'On-premise deployment',
      'Custom integrations',
      'Security audits',
    ],
    cta: 'Contact sales',
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const handlePricingSelect = (tierName: string, isAnnual: boolean) => {
    if (tierName === 'Enterprise') {
      window.location.href = '/contact?tier=enterprise';
    } else {
      window.location.href = `/signin?signup=true&tier=${tierName.toLowerCase()}&billing=${isAnnual ? 'annual' : 'monthly'}`;
    }
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
            
            {/* Billing Toggle */}
            <PricingToggle
              isAnnual={isAnnual}
              onChange={setIsAnnual}
            />
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {pricingTiers.map((tier) => (
              <PricingCard
                key={tier.name}
                tier={tier}
                isAnnual={isAnnual}
                onSelect={handlePricingSelect}
              />
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="max-w-3xl mx-auto mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Frequently asked questions
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-bg-secondary/50 rounded-xl border border-border-subtle p-6">
                <summary className="text-lg font-semibold text-text-primary cursor-pointer list-none flex justify-between items-center">
                  <span>What counts as an active user?</span>
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-text-secondary">
                  An active user is someone who has at least one authenticated session during your billing period. 
                  We only count unique users, not sessions.
                </p>
              </details>

              <details className="group bg-bg-secondary/50 rounded-xl border border-border-subtle p-6">
                <summary className="text-lg font-semibold text-text-primary cursor-pointer list-none flex justify-between items-center">
                  <span>Can I change plans later?</span>
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-text-secondary">
                  Yes! You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle, 
                  and we'll prorate charges accordingly.
                </p>
              </details>

              <details className="group bg-bg-secondary/50 rounded-xl border border-border-subtle p-6">
                <summary className="text-lg font-semibold text-text-primary cursor-pointer list-none flex justify-between items-center">
                  <span>What payment methods do you accept?</span>
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-text-secondary">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover) via Stripe. 
                  Enterprise customers can also pay via wire transfer or invoice.
                </p>
              </details>

              <details className="group bg-bg-secondary/50 rounded-xl border border-border-subtle p-6">
                <summary className="text-lg font-semibold text-text-primary cursor-pointer list-none flex justify-between items-center">
                  <span>Is there a free trial?</span>
                  <svg
                    className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-text-secondary">
                  Yes! All paid plans include a 14-day free trial. No credit card required to start. 
                  You can cancel anytime during the trial period.
                </p>
              </details>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16 p-12 rounded-2xl bg-gradient-to-br from-accent-mint-muted to-transparent border border-border-subtle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Our team is here to help. Get in touch to discuss your specific needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-accent-mint text-text-inverse hover:bg-accent-mint-hover transition-all shadow-glow"
            >
              Contact sales
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
