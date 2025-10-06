/**
 * CookieBanner Component
 * GDPR-compliant cookie consent with granular controls
 * Blocks analytics until consent is given
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import { slideInRight } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'sentauth_cookie_consent';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already consented
    const savedPreferences = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedPreferences) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      // Load saved preferences and initialize analytics if consented
      const parsed = JSON.parse(savedPreferences) as CookiePreferences;
      setPreferences(parsed);
      initializeAnalytics(parsed);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    initializeAnalytics(prefs);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleAcceptNecessary = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const initializeAnalytics = (prefs: CookiePreferences) => {
    // Initialize analytics only if user has consented
    if (prefs.analytics && typeof window !== 'undefined') {
      // Placeholder for analytics initialization
      // Example: window.analytics?.load('YOUR_ANALYTICS_KEY');
      console.log('Analytics initialized with consent');
    }

    if (prefs.marketing && typeof window !== 'undefined') {
      // Placeholder for marketing pixels
      console.log('Marketing tracking initialized with consent');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-md z-modal"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          exit="hidden"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
        >
          <div className="relative bg-bg-secondary/95 backdrop-blur-lg border-2 border-border-medium rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={handleAcceptNecessary}
              className={cn(
                'absolute top-4 right-4 p-1 rounded-lg',
                'text-text-muted hover:text-text-primary',
                'hover:bg-bg-tertiary transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint'
              )}
              aria-label="Decline optional cookies"
            >
              <Icon icon={X} size="sm" />
            </button>

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-mint-muted">
                  <Icon icon={Cookie} size="md" className="text-accent-mint" />
                </div>
                <div>
                  <h2
                    id="cookie-banner-title"
                    className="text-lg font-semibold text-text-primary"
                  >
                    Cookie Preferences
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p
                id="cookie-banner-description"
                className="text-sm text-text-secondary mb-4 leading-relaxed"
              >
                We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                You can customize your preferences below.
              </p>

              {/* Detailed Preferences */}
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-3 mb-4 pb-4 border-b border-border-subtle"
                >
                  {/* Necessary Cookies */}
                  <label className="flex items-start gap-3 cursor-not-allowed opacity-60">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="mt-1 rounded border-border-medium"
                      aria-label="Necessary cookies (required)"
                    />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Necessary Cookies <span className="text-text-muted">(Required)</span>
                      </p>
                      <p className="text-xs text-text-muted mt-0.5">
                        Essential for site functionality and security.
                      </p>
                    </div>
                  </label>

                  {/* Analytics Cookies */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className={cn(
                        'mt-1 rounded border-border-medium',
                        'focus:ring-2 focus:ring-accent-mint focus:ring-offset-2 focus:ring-offset-bg-secondary'
                      )}
                      aria-label="Analytics cookies"
                    />
                    <div>
                      <p className="text-sm font-medium text-text-primary group-hover:text-accent-mint transition-colors">
                        Analytics Cookies
                      </p>
                      <p className="text-xs text-text-muted mt-0.5">
                        Help us understand how visitors use our site.
                      </p>
                    </div>
                  </label>

                  {/* Marketing Cookies */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className={cn(
                        'mt-1 rounded border-border-medium',
                        'focus:ring-2 focus:ring-accent-mint focus:ring-offset-2 focus:ring-offset-bg-secondary'
                      )}
                      aria-label="Marketing cookies"
                    />
                    <div>
                      <p className="text-sm font-medium text-text-primary group-hover:text-accent-mint transition-colors">
                        Marketing Cookies
                      </p>
                      <p className="text-xs text-text-muted mt-0.5">
                        Used to deliver personalized advertisements.
                      </p>
                    </div>
                  </label>
                </motion.div>
              )}

              {/* Actions */}
              <div className="flex flex-col gap-2">
                {showDetails ? (
                  <>
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      onClick={handleSavePreferences}
                    >
                      Save Preferences
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      fullWidth
                      onClick={() => setShowDetails(false)}
                    >
                      Hide Details
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      onClick={handleAcceptAll}
                    >
                      Accept All
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        onClick={handleAcceptNecessary}
                      >
                        Necessary Only
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        fullWidth
                        onClick={() => setShowDetails(true)}
                      >
                        Customize
                      </Button>
                    </div>
                  </>
                )}
              </div>

              {/* Privacy Policy Link */}
              <p className="mt-3 text-xs text-text-muted text-center">
                Read our{' '}
                <a
                  href="/privacy"
                  className="text-accent-mint hover:underline focus:outline-none focus-visible:underline"
                >
                  Privacy Policy
                </a>{' '}
                for more information.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
