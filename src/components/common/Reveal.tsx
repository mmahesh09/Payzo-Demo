import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { REVEAL_VIEWPORT, revealUp } from '../../lib/motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delaySeconds?: number;
}

export function Reveal({ children, className, delaySeconds = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={revealUp}
      custom={delaySeconds}
    >
      {children}
    </motion.div>
  );
}
