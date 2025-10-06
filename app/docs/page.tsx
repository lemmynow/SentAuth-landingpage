/**
 * Documentation Page
 * Quick start guide and API reference
 */

'use client';

import React from 'react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { Code, Terminal, BookOpen, Zap } from 'lucide-react';
import Icon from '@/components/atoms/Icon';
import { motion } from 'framer-motion';

export default function DocsPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[250px_1fr] gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <nav className="sticky top-32">
                <p className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-4">
                  Documentation
                </p>
                <ul className="space-y-2">
                  {['Quick Start', 'Installation', 'API Reference', 'Examples', 'SDKs'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="block px-3 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="prose prose-invert max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl font-bold text-text-primary mb-6">
                  Documentation
                </h1>
                <p className="text-xl text-text-secondary mb-12">
                  Get started with SentAuth in minutes. Integrate behavioral biometrics into your application with just a few lines of code.
                </p>

                {/* Quick Start */}
                <section id="quick-start" className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-accent-mint-muted">
                      <Icon icon={Zap} size="md" className="text-accent-mint" />
                    </div>
                    <h2 className="text-3xl font-bold text-text-primary m-0">Quick Start</h2>
                  </div>
                  
                  <p className="text-text-secondary mb-6">
                    Follow these steps to integrate SentAuth into your application:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-bg-secondary/50 border border-border-subtle rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-text-primary mb-3">1. Get your API key</h3>
                      <p className="text-text-secondary mb-4">
                        Sign up for a free account and generate an API key from your dashboard.
                      </p>
                      <a
                        href="/signin?signup=true"
                        className="inline-flex items-center gap-2 text-accent-mint hover:underline"
                      >
                        Create account →
                      </a>
                    </div>

                    <div className="bg-bg-secondary/50 border border-border-subtle rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-text-primary mb-3">2. Install the SDK</h3>
                      <p className="text-text-secondary mb-4">
                        Install the SentAuth SDK for your platform:
                      </p>
                      <div className="bg-bg-primary rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <div className="flex items-center gap-2 mb-2 text-text-muted">
                          <Icon icon={Terminal} size="sm" />
                          <span>npm</span>
                        </div>
                        <code className="text-accent-mint">npm install @sentauth/sdk</code>
                      </div>
                    </div>

                    <div className="bg-bg-secondary/50 border border-border-subtle rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-text-primary mb-3">3. Initialize the SDK</h3>
                      <p className="text-text-secondary mb-4">
                        Add SentAuth to your application:
                      </p>
                      <div className="bg-bg-primary rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <div className="flex items-center gap-2 mb-2 text-text-muted">
                          <Icon icon={Code} size="sm" />
                          <span>JavaScript</span>
                        </div>
                        <pre className="text-text-secondary"><code>{`import { SentAuth } from '@sentauth/sdk';

// Initialize SentAuth
const sentauth = new SentAuth({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Start monitoring user behavior
await sentauth.startSession({
  userId: 'user-123',
  metadata: {
    email: 'user@example.com'
  }
});

// Verify authentication
const result = await sentauth.verify();
if (result.riskScore > 0.8) {
  // High risk - trigger MFA
  await triggerMFA();
}`}</code></pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* API Reference */}
                <section id="api-reference" className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-accent-mint-muted">
                      <Icon icon={BookOpen} size="md" className="text-accent-mint" />
                    </div>
                    <h2 className="text-3xl font-bold text-text-primary m-0">API Reference</h2>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-bg-secondary/50 border border-border-subtle rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        POST /api/v1/sessions/start
                      </h3>
                      <p className="text-text-secondary mb-4">
                        Initiates a new behavioral analysis session for a user.
                      </p>
                      
                      <div className="bg-bg-primary rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                        <pre className="text-text-secondary"><code>{`{
  "userId": "string",
  "metadata": {
    "email": "string",
    "deviceId": "string"
  }
}`}</code></pre>
                      </div>

                      <p className="text-sm text-text-muted">
                        <strong>Response:</strong> Returns a session token and initial risk assessment.
                      </p>
                    </div>

                    <div className="bg-bg-secondary/50 border border-border-subtle rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        POST /api/v1/verify
                      </h3>
                      <p className="text-text-secondary mb-4">
                        Verifies user behavior and returns risk assessment.
                      </p>
                      
                      <div className="bg-bg-primary rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                        <pre className="text-text-secondary"><code>{`{
  "sessionToken": "string",
  "behavioralData": {
    "keystrokeDynamics": {...},
    "mouseMovement": {...}
  }
}`}</code></pre>
                      </div>

                      <p className="text-sm text-text-muted">
                        <strong>Response:</strong> Risk score (0-1), confidence level, and recommended action.
                      </p>
                    </div>
                  </div>
                </section>

                {/* SDKs */}
                <section id="sdks" className="mb-16">
                  <h2 className="text-3xl font-bold text-text-primary mb-6">Available SDKs</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: 'JavaScript/TypeScript', status: 'Available' },
                      { name: 'Python', status: 'Available' },
                      { name: 'Java', status: 'Available' },
                      { name: 'Go', status: 'Beta' },
                      { name: 'Ruby', status: 'Coming Soon' },
                      { name: 'PHP', status: 'Coming Soon' },
                    ].map((sdk) => (
                      <div
                        key={sdk.name}
                        className="flex items-center justify-between p-4 bg-bg-secondary/50 border border-border-subtle rounded-lg"
                      >
                        <span className="font-medium text-text-primary">{sdk.name}</span>
                        <span
                          className={`text-sm px-3 py-1 rounded-full ${
                            sdk.status === 'Available'
                              ? 'bg-status-success/10 text-status-success'
                              : sdk.status === 'Beta'
                              ? 'bg-status-info/10 text-status-info'
                              : 'bg-text-muted/10 text-text-muted'
                          }`}
                        >
                          {sdk.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Next Steps */}
                <div className="bg-gradient-to-br from-accent-mint-muted to-transparent border border-border-subtle rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    Ready to get started?
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Create a free account and start protecting your users today.
                  </p>
                  <a
                    href="/signin?signup=true"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-accent-mint text-text-inverse hover:bg-accent-mint-hover transition-all shadow-glow"
                  >
                    Get API Key
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
