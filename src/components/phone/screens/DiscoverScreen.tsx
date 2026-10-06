import { MapPin, Search, SlidersHorizontal } from 'lucide-react';

import { businesses, discoverBusinessIds, discoverCategories, userArea } from '../../../data/app';
import { cn } from '../../../lib/cn';
import { AppCard } from '../AppCard';
import { AppTabBar } from '../AppTabBar';
import { BusinessRow } from '../BusinessRow';
import { ScreenBody } from '../ScreenBody';
import { ScreenHeader } from '../ScreenHeader';

export function DiscoverScreen() {
  return (
    <>
      <ScreenBody>
        <ScreenHeader
          title="Discover"
          trailing={
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted">
              <MapPin className="size-3.5" />
              {userArea}
            </span>
          }
        />

        <div className="flex h-10 shrink-0 items-center gap-2 rounded-xl bg-white px-3 text-[12px] text-muted ring-1 ring-line">
          <Search className="size-4" />
          Search businesses
          <SlidersHorizontal className="ml-auto size-4 text-ink" />
        </div>

        <div className="flex gap-1.5 overflow-hidden">
          {discoverCategories.map((category, index) => (
            <span
              key={category}
              className={cn(
                'shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold',
                index === 0 ? 'bg-ink text-white' : 'bg-white text-body ring-1 ring-line',
              )}
            >
              {category}
            </span>
          ))}
        </div>

        <div>
          <p className="text-[12px] font-medium text-muted">
            {discoverBusinessIds.length} places near you
          </p>
          <AppCard className="mt-1.5 divide-y divide-line px-3">
            {discoverBusinessIds.map((id) => (
              <BusinessRow key={id} business={businesses[id]} />
            ))}
          </AppCard>
        </div>
      </ScreenBody>
      <AppTabBar active="discover" />
    </>
  );
}
