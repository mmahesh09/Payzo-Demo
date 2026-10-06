import { useRef, useState, type KeyboardEvent } from 'react';

const KEY_OFFSETS: Record<string, number> = {
  ArrowRight: 1,
  ArrowDown: 1,
  ArrowLeft: -1,
  ArrowUp: -1,
};

/**
 * WAI-ARIA tabs pattern with automatic activation: arrow keys, Home and End
 * move focus and selection together.
 */
export function useRovingTabs(tabCount: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    let nextIndex: number | undefined;

    if (event.key in KEY_OFFSETS) {
      nextIndex = (activeIndex + KEY_OFFSETS[event.key] + tabCount) % tabCount;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabCount - 1;
    }

    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const registerTab = (index: number) => (element: HTMLButtonElement | null) => {
    tabRefs.current[index] = element;
  };

  return { activeIndex, setActiveIndex, handleKeyDown, registerTab };
}
