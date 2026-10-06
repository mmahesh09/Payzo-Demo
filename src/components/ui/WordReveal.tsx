import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';
import { EASE_OUT_EXPO, REVEAL_VIEWPORT, staggerChildren } from '../../lib/motion';

const WORD_STAGGER_SECONDS = 0.05;

const wordUp: Variants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

type RevealTrigger = 'mount' | 'inView';

interface RevealGroupProps {
  children: ReactNode;
  trigger?: RevealTrigger;
  delaySeconds?: number;
}

/**
 * Staggers its RevealWord children up from behind a mask (21st.dev "text reveal" pattern).
 * Visual only: pair it with an sr-only copy of the text.
 */
export function RevealGroup({ children, trigger = 'inView', delaySeconds = 0 }: RevealGroupProps) {
  const triggerProps =
    trigger === 'mount'
      ? { animate: 'visible' }
      : { whileInView: 'visible', viewport: REVEAL_VIEWPORT };

  return (
    <motion.span
      aria-hidden="true"
      initial="hidden"
      variants={staggerChildren(WORD_STAGGER_SECONDS, delaySeconds)}
      {...triggerProps}
    >
      {children}
    </motion.span>
  );
}

interface RevealWordProps {
  children: ReactNode;
  className?: string;
}

export function RevealWord({ children, className }: RevealWordProps) {
  return (
    <>
      <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-top">
        <motion.span variants={wordUp} className={cn('inline-block', className)}>
          {children}
        </motion.span>
      </span>{' '}
    </>
  );
}

interface SplitRevealProps {
  text: string;
  accent?: string;
  accentClassName?: string;
  trigger?: RevealTrigger;
  delaySeconds?: number;
}

/** Word-by-word reveal for a plain-text heading, with an optional highlighted ending. */
export function SplitReveal({
  text,
  accent,
  accentClassName,
  trigger,
  delaySeconds,
}: SplitRevealProps) {
  const words = text.split(' ');
  const accentWords = accent ? accent.split(' ') : [];

  return (
    <>
      <span className="sr-only">{accent ? `${text} ${accent}` : text}</span>
      <RevealGroup trigger={trigger} delaySeconds={delaySeconds}>
        {words.map((word, index) => (
          <RevealWord key={`word-${index}`}>{word}</RevealWord>
        ))}
        {accentWords.map((word, index) => (
          <RevealWord key={`accent-${index}`} className={accentClassName}>
            {word}
          </RevealWord>
        ))}
      </RevealGroup>
    </>
  );
}
