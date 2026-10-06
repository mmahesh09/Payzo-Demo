import type { LucideIcon } from 'lucide-react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'outlineInverse';
type ButtonSize = 'md' | 'lg';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white shadow-soft hover:bg-primary-strong hover:shadow-lifted',
  secondary: 'bg-white text-ink ring-1 ring-line hover:ring-primary-200 hover:shadow-soft',
  inverse: 'bg-white text-ink hover:bg-primary-50 hover:shadow-lifted focus-visible:outline-white',
  outlineInverse: 'text-white ring-1 ring-white/45 hover:bg-white/10 focus-visible:outline-white',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-13 px-6 text-base',
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  trailingIcon?: LucideIcon;
}

export function ButtonLink({
  children,
  variant = 'primary',
  size = 'md',
  trailingIcon: TrailingIcon,
  className,
  ...anchorProps
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        'group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap',
        'transition-[background-color,box-shadow,transform] duration-200 ease-(--ease-out-expo)',
        'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
      {...anchorProps}
    >
      {children}
      {TrailingIcon ? (
        <TrailingIcon
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ) : null}
    </a>
  );
}
