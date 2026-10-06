import { Pause, Play } from 'lucide-react';
import { useState, type ReactNode } from 'react';

import { cn } from '../../lib/cn';

interface MarqueeProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  getKey: (item: T) => string;
  label: string;
  className?: string;
}

/**
 * Infinite horizontal ticker (21st.dev "marquee" pattern). Pauses on hover and has a
 * pause button for keyboard and touch users; stops entirely under reduced motion.
 */
export function Marquee<T>({ items, renderItem, getKey, label, className }: MarqueeProps<T>) {
  const [isPaused, setIsPaused] = useState(false);

  const renderCopy = (isDuplicate: boolean) => (
    <ul
      aria-hidden={isDuplicate || undefined}
      aria-label={isDuplicate ? undefined : label}
      className="flex shrink-0 items-center gap-3 pr-3"
    >
      {items.map((item) => (
        <li key={getKey(item)} className="shrink-0">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="marquee min-w-0 flex-1 overflow-hidden">
        <div
          className={cn('marquee-track flex w-max', isPaused && '[animation-play-state:paused]')}
        >
          {renderCopy(false)}
          {renderCopy(true)}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsPaused((wasPaused) => !wasPaused)}
        aria-label={isPaused ? 'Play scrolling list' : 'Pause scrolling list'}
        className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full bg-white text-muted ring-1 ring-line transition-colors hover:text-ink motion-reduce:hidden"
      >
        {isPaused ? <Play className="size-4" /> : <Pause className="size-4" />}
      </button>
    </div>
  );
}
