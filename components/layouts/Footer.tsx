/**
 * Footer Component - Site Footer
 * Comprehensive footer with links, social, and legal
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from '@/components/atoms/Logo';
import Icon from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';

export interface FooterProps {
  className?: string;
}

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/docs/api' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security', href: '/security' },
    { label: 'Compliance', href: '/compliance' },
  ],
  resources: [
    { label: 'Community', href: '/community' },
    { label: 'Support', href: '/support' },
    { label: 'Status', href: '/status' },
    { label: 'Changelog', href: '/changelog' },
  ],
};

const socialLinks = [
  { icon: Github, href: 'https://github.com/sentauth', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/sentauth', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/sentauth', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@sentauth.com', label: 'Email' },
];

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'relative border-t border-border-subtle',
        'bg-bg-secondary',
        className
      )}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo size="md" animated={false} />
            <p className="mt-4 text-text-muted max-w-xs leading-relaxed">
              Your users aren't just passwords. They're patterns, behaviors, habits. 
              We analyze the way they move to keep them safe.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'p-2 rounded-lg',
                    'text-text-muted hover:text-accent-mint',
                    'bg-bg-tertiary hover:bg-bg-elevated',
                    'transition-all duration-base',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint'
                  )}
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} size="sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Product</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-text-muted hover:text-text-primary',
                      'transition-colors duration-base',
                      'focus:outline-none focus-visible:underline'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-text-muted hover:text-text-primary',
                      'transition-colors duration-base',
                      'focus:outline-none focus-visible:underline'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Resources</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-text-muted hover:text-text-primary',
                      'transition-colors duration-base',
                      'focus:outline-none focus-visible:underline'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-text-muted hover:text-text-primary',
                      'transition-colors duration-base',
                      'focus:outline-none focus-visible:underline'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              © {currentYear} SentAuth. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent opacity-50 pointer-events-none"
        aria-hidden="true"
      />
    </footer>
  );
};

export default Footer;
