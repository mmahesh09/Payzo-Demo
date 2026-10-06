import type { Variants } from 'framer-motion';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const REVEAL_VIEWPORT = { once: true, amount: 0.2 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

/** Same motion as fadeUp, with a per-element delay passed through `custom`. */
export const revealUp: Variants = {
  hidden: fadeUp.hidden,
  visible: (delaySeconds: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: delaySeconds },
  }),
};

export function staggerChildren(stepSeconds = 0.08, delaySeconds = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stepSeconds, delayChildren: delaySeconds } },
  };
}
