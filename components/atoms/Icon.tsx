/**
 * Icon Component - Wrapper for Lucide Icons
 * Consistent sizing and accessibility
 */

'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IconProps {
  icon: LucideIcon;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  'aria-label'?: string;
}

const sizeMap = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'md',
  className,
  'aria-label': ariaLabel,
}) => {
  return (
    <IconComponent
      size={sizeMap[size]}
      className={cn('flex-shrink-0', className)}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    />
  );
};

export default Icon;
