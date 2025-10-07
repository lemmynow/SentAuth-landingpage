/**
 * Button Component - Atomic Design
 * Premium, accessible button with multiple variants
 * WCAG AA compliant with keyboard navigation and focus states
 */

'use client';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { hoverPop } from '@/lib/animations';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-accent-mint text-text-inverse font-semibold
    hover:bg-accent-mint-hover
    focus:ring-2 focus:ring-accent-mint focus:ring-offset-2 focus:ring-offset-bg-primary
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent-mint
    shadow-glow hover:shadow-glow-strong
    transition-all duration-base
  `,
  secondary: `
    bg-bg-tertiary text-text-primary font-semibold
    hover:bg-bg-elevated
    focus:ring-2 focus:ring-border-strong focus:ring-offset-2 focus:ring-offset-bg-primary
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-base
  `,
  outline: `
    bg-transparent text-text-primary font-semibold
    border-2 border-border-medium
    hover:border-accent-mint hover:text-accent-mint
    focus:ring-2 focus:ring-accent-mint focus:ring-offset-2 focus:ring-offset-bg-primary
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-base
  `,
  ghost: `
    bg-transparent text-text-secondary font-medium
    hover:bg-bg-tertiary hover:text-text-primary
    focus:ring-2 focus:ring-border-strong focus:ring-offset-2 focus:ring-offset-bg-primary
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-base
  `,
  danger: `
    bg-status-error text-white font-semibold
    hover:bg-red-600
    focus:ring-2 focus:ring-status-error focus:ring-offset-2 focus:ring-offset-bg-primary
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-base
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
  md: 'px-4 py-2.5 text-base rounded-lg gap-2',
  lg: 'px-6 py-3 text-lg rounded-lg gap-2',
  xl: 'px-8 py-4 text-xl rounded-xl gap-3',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className,
      children,
      type = 'button',
      onClick,
      onAnimationStart,
      onDragStart,
      onDragEnd,
      onDrag,
      ...props
    },
    ref
  ) => {
    const MotionButton = motion.button;

    return (
      <MotionButton
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        onClick={onClick}
        className={cn(
          'inline-flex items-center justify-center',
          'font-sans leading-none',
          'outline-none focus-visible:outline-none',
          'relative overflow-hidden',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        variants={hoverPop}
        initial="initial"
        whileHover={!disabled && !isLoading ? 'hover' : undefined}
        whileTap={!disabled && !isLoading ? 'tap' : undefined}
        aria-busy={isLoading}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5 absolute"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {/* Content */}
        <span className={cn('flex items-center gap-inherit', isLoading && 'invisible')}>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </span>
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
