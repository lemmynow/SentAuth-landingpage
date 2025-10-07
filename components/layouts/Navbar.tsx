/**
 * Navbar Component - Main Navigation
 * Sticky navigation with mobile menu support
 * WCAG AA compliant with keyboard navigation
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/atoms/Logo';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import { fadeIn } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  className?: string;
}

const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'About', href: '#about' },
];

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 transition-all duration-500',
          className
        )}
        style={{ 
          zIndex: 9999,
          isolation: 'isolate',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Glassmorphism Background */}
        <div 
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: isScrolled 
              ? 'rgba(248, 250, 252, 0.85)' // slate-50 - light background
              : 'rgba(248, 250, 252, 0.6)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          }}
        />
        
        {/* Noise texture for glass realism */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
            opacity: isScrolled ? 0.6 : 1,
          }}
        />
        
        {/* Border shimmer effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.5), transparent)',
            opacity: isScrolled ? 1 : 0,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
              aria-label="SentAuth home"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className={cn(
                    'text-slate-700 hover:text-slate-900 relative group',
                    'font-medium transition-all duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
                    'rounded px-4 py-2 hover:bg-slate-100/80 backdrop-blur-sm'
                  )}
                >
                  {link.label}
                  {/* Subtle hover underline */}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/signin">
                <Button variant="ghost" size="md">
                  Sign in
                </Button>
              </Link>
              <Link href="/signin?signup=true">
                <Button variant="primary" size="md">
                  Get started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg',
                'text-slate-700 hover:text-slate-900',
                'hover:bg-slate-100/80 backdrop-blur-sm transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <Icon
                icon={isMobileMenuOpen ? X : Menu}
                size="lg"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[9998] md:hidden"
              style={{
                background: 'rgba(248, 250, 252, 0.95)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed inset-x-0 top-20 bottom-0 z-[9999] md:hidden overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-4 py-8 space-y-6">
                {/* Navigation Links */}
                <nav className="space-y-2" role="navigation">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }
                        }}
                        className={cn(
                          'block px-4 py-3 rounded-lg',
                          'text-lg font-medium text-slate-700 hover:text-slate-900',
                          'hover:bg-slate-100 transition-colors',
                          'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Buttons */}
                <motion.div
                  className="space-y-3 pt-6 border-t border-border-subtle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/signin" className="block">
                    <Button variant="outline" size="lg" fullWidth>
                      Sign in
                    </Button>
                  </Link>
                  <Link href="/signin?signup=true" className="block">
                    <Button variant="primary" size="lg" fullWidth>
                      Get started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
