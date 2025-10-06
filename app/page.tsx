/**
 * Landing Page - SentAuth
 * Production-ready, conversion-optimized landing page
 */

'use client';

import React, { useState } from 'react';
import { Activity, Shield, Zap, Users, Lock, BarChart3 } from 'lucide-react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import Hero from '@/components/molecules/Hero';
import FeatureCard from '@/components/molecules/FeatureCard';
import CookieBanner from '@/components/molecules/CookieBanner';
import StickyCTA from '@/components/molecules/StickyCTA';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

export default function Home() {
  const [heroVariant] = useState<1 | 2 | 3>(1); // Can be controlled by A/B testing
  const [ctaVariant] = useState<1 | 2 | 3>(1);

  const features = [
    {
      icon: Activity,
      title: 'Behavioral Biometrics',
      description: 'Analyze typing patterns, mouse movements, and device interactions to create unique behavioral profiles for each user.',
      benefits: [
        'Continuous authentication without interruption',
        'Detect anomalies in real-time',
        'Reduce false positives by 85%',
      ],
      technicalDetails: 'Uses machine learning models trained on millions of behavioral signals. Features include keystroke dynamics (dwell time, flight time), mouse trajectory analysis, touch pressure patterns, and device orientation metrics.',
    },
    {
      icon: Shield,
      title: 'Risk-Based Authentication',
      description: 'Adaptive verification that responds to threat levels. Challenge users only when suspicious behavior is detected.',
      benefits: [
        'Seamless UX for legitimate users',
        'Dynamic step-up authentication',
        'Context-aware risk scoring',
      ],
      technicalDetails: 'Multi-factor risk engine considering device trust, geolocation, behavioral consistency, session context, and threat intelligence feeds. Configurable risk thresholds and response actions.',
    },
    {
      icon: Zap,
      title: 'Real-Time Detection',
      description: 'Identify account takeover attempts and fraud as they happen, not hours later.',
      benefits: [
        'Sub-100ms decision latency',
        'Event streaming architecture',
        'Immediate threat response',
      ],
      technicalDetails: 'Built on event-driven architecture with Kafka/Pulsar for streaming behavioral events. In-memory feature store with Redis for low-latency lookups. Optimized TensorFlow models deployed at the edge.',
    },
    {
      icon: Users,
      title: 'Passive Enrollment',
      description: 'No additional setup required. User profiles are built automatically during normal interactions.',
      benefits: [
        'Zero friction for end users',
        'Profiles improve over time',
        'Works with existing auth flows',
      ],
      technicalDetails: 'Silent enrollment captures behavioral baselines during the first 3-5 sessions. Incremental learning updates user models with each interaction. Compatible with OAuth2, SAML, and custom authentication systems.',
    },
    {
      icon: Lock,
      title: 'Privacy-First Design',
      description: 'All behavioral analysis happens on hashed, anonymized data. GDPR and CCPA compliant by default.',
      benefits: [
        'No PII required for detection',
        'Encrypted data in transit and at rest',
        'Configurable data retention',
      ],
      technicalDetails: 'End-to-end encryption with AES-256. Behavioral features are extracted from hashed session tokens. Differential privacy techniques applied to aggregate analytics. SOC-2 Type II certified infrastructure.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive dashboard showing threat patterns, user behavior trends, and security posture.',
      benefits: [
        'Real-time threat visualization',
        'Exportable compliance reports',
        'Custom alert rules',
      ],
      technicalDetails: 'Powered by ClickHouse for high-speed analytics queries. Grafana integration for custom dashboards. REST and GraphQL APIs for data export. Webhook support for alerting and SIEM integration.',
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <Hero
          headlineVariant={heroVariant}
          ctaVariant={ctaVariant}
          layoutVariant="primary"
          onCTAClick={() => {
            // Navigate to signup or open modal
            window.location.href = '/signin?signup=true';
          }}
        />

        {/* Features Section */}
        <section
          id="features"
          className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-primary to-bg-secondary"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
                Security that adapts to your users
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Stop relying on static passwords. Start protecting accounts with intelligent behavioral analysis.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  benefits={feature.benefits}
                  technicalDetails={feature.technicalDetails}
                />
              ))}
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-mint rounded-full filter blur-[150px] opacity-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-mint rounded-full filter blur-[150px] opacity-10" />
          </div>
        </section>

        {/* Trust Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-bg-tertiary/50 border-y border-border-subtle">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-8">
                Trusted by security teams at
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
                {/* Placeholder for customer logos */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-32 h-12 bg-border-subtle rounded animate-pulse"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-secondary to-bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
                Ready to stop guessing?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Join companies protecting millions of accounts with behavioral intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signin?signup=true"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-accent-mint text-text-inverse hover:bg-accent-mint-hover transition-all shadow-glow hover:shadow-glow-strong"
                >
                  Start free trial
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-border-medium text-text-primary hover:border-accent-mint hover:text-accent-mint transition-all"
                >
                  Read documentation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
      
      {/* Sticky CTA - appears after 60% scroll */}
      <StickyCTA
        threshold={0.6}
        ctaText="Get started — free"
        onCTAClick={() => {
          window.location.href = '/signin?signup=true';
        }}
      />
    </>
  );
}
