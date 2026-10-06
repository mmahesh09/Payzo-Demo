import { useEffect, useState } from 'react';

/** A section counts as active while it crosses the middle band of the viewport. */
const ACTIVE_BAND_MARGIN = '-45% 0px -50% 0px';

/** Returns the id of the first listed section in view, or null. Pass a stable array. */
export function useActiveSection(sectionIds: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const visibleIds = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleIds.add(entry.target.id);
          else visibleIds.delete(entry.target.id);
        }
        setActiveId(sectionIds.find((id) => visibleIds.has(id)) ?? null);
      },
      { rootMargin: ACTIVE_BAND_MARGIN },
    );

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
