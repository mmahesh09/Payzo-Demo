import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

interface AppButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

/** Visual-only button for app mockups; the mockup is not interactive. */
export function AppButton({ children, variant = 'primary', className }: AppButtonProps) {
  return (
    <span
      className={cn(
        'flex h-12 w-full shrink-0 items-center justify-center rounded-2xl text-[14px] font-semibold',
        variant === 'primary' ? 'bg-primary text-white' : 'bg-white text-ink ring-1 ring-line',
        className,
      )}
    >
      {children}
    </span>
  );
}
