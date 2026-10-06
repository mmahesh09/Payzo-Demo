import type { LucideIcon } from 'lucide-react';

import { cn } from '../../lib/cn';

type IconBadgeTone = 'primary' | 'inverse';

const TONE_CLASSES: Record<IconBadgeTone, string> = {
  primary: 'bg-primary-50 text-primary ring-primary-100',
  inverse: 'bg-white/15 text-white ring-white/20',
};

interface IconBadgeProps {
  icon: LucideIcon;
  tone?: IconBadgeTone;
  className?: string;
}

export function IconBadge({ icon: Icon, tone = 'primary', className }: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-2xl ring-1 ring-inset',
        TONE_CLASSES[tone],
        className,
      )}
    >
      <Icon className="size-5" strokeWidth={2} />
    </span>
  );
}
