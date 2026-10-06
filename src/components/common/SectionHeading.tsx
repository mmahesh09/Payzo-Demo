import { cn } from '../../lib/cn';
import { SplitReveal } from '../ui/WordReveal';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  /** Words appended to the title in the brand colour. */
  titleAccent?: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <Reveal>
        <p
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.8125rem] font-semibold',
            isDark ? 'bg-white/10 text-primary-200' : 'bg-primary-50 text-primary-strong',
          )}
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
          {eyebrow}
        </p>
      </Reveal>
      <h2
        id={id}
        className={cn(
          'mt-4 text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.035em]',
          isDark && 'text-white',
        )}
      >
        <SplitReveal
          text={title}
          accent={titleAccent}
          accentClassName={isDark ? 'text-primary-200' : 'text-primary'}
          delaySeconds={0.1}
        />
      </h2>
      {description ? (
        <Reveal delaySeconds={0.3}>
          <p className={cn('mt-5 text-lg leading-relaxed', isDark ? 'text-white/70' : 'text-body')}>
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
