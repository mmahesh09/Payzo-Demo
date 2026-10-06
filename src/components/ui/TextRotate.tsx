import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '../../lib/cn';
import { EASE_OUT_EXPO } from '../../lib/motion';

interface TextRotateProps {
  words: string[];
  intervalMs?: number;
  /** Stops after this many full loops so the text doesn't move forever (WCAG 2.2.2). */
  maxLoops?: number;
  className?: string;
}

interface RotationState {
  current: number;
  previous: number | null;
}

/**
 * Cycles through words in place (21st.dev "text rotate" pattern). Every word sits in the
 * same grid cell, so the box keeps the width of the longest word and nothing shifts.
 */
export function TextRotate({ words, intervalMs = 2200, maxLoops = 2, className }: TextRotateProps) {
  const prefersReducedMotion = useReducedMotion();
  const [rotation, setRotation] = useState<RotationState>({ current: 0, previous: null });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const totalSteps = words.length * maxLoops;
    let step = 0;
    const timerId = window.setInterval(() => {
      step += 1;
      setRotation((state) => ({ current: step % words.length, previous: state.current }));
      if (step >= totalSteps) window.clearInterval(timerId);
    }, intervalMs);

    return () => window.clearInterval(timerId);
  }, [prefersReducedMotion, words.length, maxLoops, intervalMs]);

  const getOffset = (index: number) => {
    if (index === rotation.current) return '0%';
    return index === rotation.previous ? '-110%' : '110%';
  };

  return (
    <span className={cn('relative inline-grid overflow-hidden align-bottom', className)}>
      <span className="sr-only">{words.join(', ')}</span>
      {words.map((word, index) => (
        <motion.span
          key={word}
          aria-hidden="true"
          initial={false}
          animate={{ y: getOffset(index), opacity: index === rotation.current ? 1 : 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
