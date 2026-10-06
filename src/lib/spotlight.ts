import type { PointerEvent } from 'react';

/**
 * Pointer handler for `.spotlight-card` (21st.dev "spotlight card" pattern): writes the
 * cursor position to CSS variables so the glow follows it without React re-renders.
 */
export function trackSpotlight(event: PointerEvent<HTMLElement>): void {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
  card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
}
