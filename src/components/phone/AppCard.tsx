import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

interface AppCardProps {
  children: ReactNode;
  className?: string;
}

export function AppCard({ children, className }: AppCardProps) {
  return <div className={cn('rounded-2xl bg-white ring-1 ring-line', className)}>{children}</div>;
}
