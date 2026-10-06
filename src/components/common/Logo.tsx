import { cn } from '../../lib/cn';

interface LogoProps {
  tone?: 'dark' | 'light';
  className?: string;
}

export function Logo({ tone = 'dark', className }: LogoProps) {
  return (
    <a
      href="#top"
      aria-label="Payzo home"
      className={cn('inline-flex items-center gap-2.5 rounded-lg', className)}
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8">
        <rect width="32" height="32" rx="9" className="fill-primary" />
        <path
          d="M11 24V9h6a5.5 5.5 0 0 1 0 11h-6"
          fill="none"
          stroke="#fff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="23.5" r="2.4" fill="#86EFAC" />
      </svg>
      <span
        className={cn(
          'font-display text-[1.375rem] font-extrabold tracking-[-0.03em]',
          tone === 'dark' ? 'text-ink' : 'text-white',
        )}
      >
        Payzo
      </span>
    </a>
  );
}
