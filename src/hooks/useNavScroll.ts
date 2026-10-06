import { useEffect, useState } from 'react';

const SCROLLED_OFFSET_PX = 8;
const HIDE_AFTER_PX = 480;
const DIRECTION_THRESHOLD_PX = 6;

interface NavScrollState {
  isScrolled: boolean;
  isHidden: boolean;
}

/**
 * One rAF-throttled scroll listener for the navbar: whether the page has left the top,
 * and whether the bar should tuck away (scrolling down past the hero) or return (scrolling up).
 */
export function useNavScroll(): NavScrollState {
  const [state, setState] = useState<NavScrollState>({ isScrolled: false, isHidden: false });

  useEffect(() => {
    let lastY = window.scrollY;
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) > DIRECTION_THRESHOLD_PX) lastY = y;

      setState((previous) => {
        const isScrolled = y > SCROLLED_OFFSET_PX;
        let isHidden = previous.isHidden;
        if (y < HIDE_AFTER_PX || delta < -DIRECTION_THRESHOLD_PX) isHidden = false;
        else if (delta > DIRECTION_THRESHOLD_PX) isHidden = true;

        const isUnchanged = isScrolled === previous.isScrolled && isHidden === previous.isHidden;
        return isUnchanged ? previous : { isScrolled, isHidden };
      });
    };

    const handleScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(update);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return state;
}
