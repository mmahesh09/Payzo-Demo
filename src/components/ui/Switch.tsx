import { motion } from 'framer-motion';

import { cn } from '../../lib/cn';
import { EASE_OUT_EXPO } from '../../lib/motion';

interface SwitchProps {
  isChecked: boolean;
  onCheckedChange: (isChecked: boolean) => void;
  labelledBy: string;
  describedBy?: string;
}

/** Accessible on/off switch styled for dark surfaces (21st.dev "switch" pattern). */
export function Switch({ isChecked, onCheckedChange, labelledBy, describedBy }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      onClick={() => onCheckedChange(!isChecked)}
      className={cn(
        'relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus-visible:outline-white',
        isChecked ? 'bg-success-300' : 'bg-white/20',
      )}
    >
      <motion.span
        initial={false}
        animate={{ x: isChecked ? 24 : 4 }}
        transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
        className="block size-5 rounded-full bg-white shadow-soft"
      />
    </button>
  );
}
