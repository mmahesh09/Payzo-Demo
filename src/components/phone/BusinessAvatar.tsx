import type { Business } from '../../data/app';
import { cn } from '../../lib/cn';

type AvatarSize = 'sm' | 'md';

const SIZE_CLASSES: Record<AvatarSize, { box: string; icon: string }> = {
  sm: { box: 'size-9 rounded-xl', icon: 'size-[18px]' },
  md: { box: 'size-11 rounded-2xl', icon: 'size-5' },
};

interface BusinessAvatarProps {
  business: Business;
  size?: AvatarSize;
}

export function BusinessAvatar({ business, size = 'sm' }: BusinessAvatarProps) {
  const Icon = business.icon;
  const sizeClasses = SIZE_CLASSES[size];

  return (
    <span
      className={cn('grid shrink-0 place-items-center', sizeClasses.box, business.avatarClassName)}
    >
      <Icon className={sizeClasses.icon} strokeWidth={2} />
    </span>
  );
}
