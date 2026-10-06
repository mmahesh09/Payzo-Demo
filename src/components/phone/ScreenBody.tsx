import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

interface ScreenBodyProps {
  children: ReactNode;
  className?: string;
}

export function ScreenBody({ children, className }: ScreenBodyProps) {
  return (
    <div
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-4 overflow-hidden px-4 pt-2 *:shrink-0',
        className,
      )}
    >
      {children}
    </div>
  );
}
