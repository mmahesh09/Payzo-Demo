import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';
import { StatusBar } from './StatusBar';

interface PhoneMockupProps {
  /** Describes the screen for assistive technology; inner UI is decorative. */
  label: string;
  children: ReactNode;
  /** Size with the `--phone-scale` custom property, e.g. `[--phone-scale:0.8]`. */
  className?: string;
}

export function PhoneMockup({ label, children, className }: PhoneMockupProps) {
  return (
    <div role="img" aria-label={label} className={cn('phone-mockup relative shrink-0', className)}>
      <div
        aria-hidden="true"
        className="phone-mockup__device relative rounded-[48px] bg-ink p-[9px] shadow-phone ring-1 ring-white/15"
      >
        <span className="absolute top-[132px] -left-[3px] h-14 w-[3px] rounded-l bg-ink-soft" />
        <span className="absolute top-[150px] -right-[3px] h-20 w-[3px] rounded-r bg-ink-soft" />

        <div className="relative flex h-full flex-col overflow-hidden rounded-[39px] bg-canvas tracking-[-0.01em] text-ink select-none">
          <span className="absolute top-[10px] left-1/2 z-20 h-[26px] w-[86px] -translate-x-1/2 rounded-full bg-ink" />
          <StatusBar />
          {children}
          <span className="absolute bottom-[7px] left-1/2 z-20 h-1 w-[104px] -translate-x-1/2 rounded-full bg-ink/80" />
        </div>
      </div>
    </div>
  );
}
