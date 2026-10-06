import { cn } from '../../lib/cn';

interface ProgressBarProps {
  value: number;
  max: number;
  trackClassName?: string;
  fillClassName?: string;
}

export function ProgressBar({ value, max, trackClassName, fillClassName }: ProgressBarProps) {
  const percent = max > 0 ? Math.min(100, (value / max) * 100) : 0;

  return (
    <span className={cn('block h-1.5 overflow-hidden rounded-full bg-canvas', trackClassName)}>
      <span
        className={cn('block h-full rounded-full bg-primary', fillClassName)}
        style={{ width: `${percent}%` }}
      />
    </span>
  );
}
