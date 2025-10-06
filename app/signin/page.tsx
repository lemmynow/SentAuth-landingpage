/**
 * Sign In / Sign Up Page
 * Placeholder for authentication
 */

'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Logo from '@/components/atoms/Logo';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

function SignInContent() {
  const searchParams = useSearchParams();
  const isSignUp = searchParams.get('signup') === 'true';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Placeholder for actual authentication
    // In production, integrate with Clerk, Auth0, or custom backend
    setTimeout(() => {
      console.log('Auth attempt:', { email, password, isSignUp });
      setIsLoading(false);
      alert('Authentication integration placeholder. Connect to your auth provider.');
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen flex items-center justify-center px-4 py-32 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
        <motion.div
          className="w-full max-w-md"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>

          {/* Card */}
          <div className="bg-bg-secondary/50 backdrop-blur-sm border-2 border-border-subtle rounded-2xl p-8 shadow-2xl">
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="text-text-secondary mb-8">
              {isSignUp
                ? 'Start your 14-day free trial. No credit card required.'
                : 'Sign in to your SentAuth account'}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                label="Email address"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftIcon={<Mail size={18} />}
                required
                fullWidth
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                leftIcon={<Lock size={18} />}
                required
                fullWidth
              />

              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-text-secondary">
                    <input
                      type="checkbox"
                      className="rounded border-border-medium text-accent-mint focus:ring-accent-mint"
                    />
                    Remember me
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-accent-mint hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isLoading}
                rightIcon={<ArrowRight size={18} />}
              >
                {isSignUp ? 'Create account' : 'Sign in'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-subtle" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-bg-secondary text-text-muted">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login Placeholders */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                fullWidth
                onClick={() => alert('Google OAuth integration placeholder')}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                fullWidth
                onClick={() => alert('GitHub OAuth integration placeholder')}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </Button>
            </div>

            {/* Toggle */}
            <p className="mt-8 text-center text-sm text-text-secondary">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <Link
                href={isSignUp ? '/signin' : '/signin?signup=true'}
                className="text-accent-mint hover:underline font-medium"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </Link>
            </p>

            {/* Terms */}
            {isSignUp && (
              <p className="mt-4 text-center text-xs text-text-muted">
                By signing up, you agree to our{' '}
                <a href="/terms" className="text-accent-mint hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-accent-mint hover:underline">
                  Privacy Policy
                </a>
              </p>
            )}
          </div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-mint rounded-full filter blur-[150px] opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-mint rounded-full filter blur-[150px] opacity-10" />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg-primary" />}>
      <SignInContent />
    </Suspense>
  );
}
