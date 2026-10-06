import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

export type SectionTone = 'white' | 'canvas' | 'tint' | 'dark';

const TONE_CLASSES: Record<SectionTone, string> = {
  white: 'bg-white',
  canvas: 'bg-canvas',
  tint: 'bg-primary-50',
  dark: 'bg-ink text-white/70',
};

interface SectionProps {
  id: string;
  labelledBy: string;
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
}

export function Section({ id, labelledBy, tone = 'white', className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('relative py-20 sm:py-24 lg:py-32', TONE_CLASSES[tone], className)}
    >
      {children}
    </section>
  );
}
