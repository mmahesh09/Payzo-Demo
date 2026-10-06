import { useEffect, useRef, useState } from 'react';

import { useLockBodyScroll } from './useLockBodyScroll';

const DESKTOP_QUERY = '(min-width: 1024px)';
const BACKGROUND_SELECTOR = 'main, footer';

/**
 * Open state for the full-screen mobile menu. While open: page scroll is locked,
 * background content is inert, Escape closes and returns focus to the toggle,
 * and widening to desktop closes it.
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const background = document.querySelectorAll<HTMLElement>(BACKGROUND_SELECTOR);
    background.forEach((element) => (element.inert = true));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', handleBreakpointChange);
    return () => {
      background.forEach((element) => (element.inert = false));
      window.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', handleBreakpointChange);
    };
  }, [isOpen]);

  return {
    isOpen,
    toggleRef,
    toggle: () => setIsOpen((wasOpen) => !wasOpen),
    close: () => setIsOpen(false),
  };
}
