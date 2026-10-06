import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface NumberTickerProps {
  value: number;
  format: (value: number) => string;
  className?: string;
}

/** Counts smoothly to each new value (21st.dev "number ticker" pattern). Visual only. */
export function NumberTicker({ value, format, className }: NumberTickerProps) {
  const prefersReducedMotion = useReducedMotion();
  const spring = useSpring(value, { stiffness: 140, damping: 26, mass: 0.6 });
  const displayValue = useTransform(spring, (latest) => format(latest));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  if (prefersReducedMotion) {
    return (
      <span aria-hidden="true" className={className}>
        {format(value)}
      </span>
    );
  }

  return (
    <motion.span aria-hidden="true" className={className}>
      {displayValue}
    </motion.span>
  );
}
