import type { Business } from '../../data/app';
import { BusinessAvatar } from './BusinessAvatar';
import { CashbackPill } from './CashbackPill';

export function BusinessRow({ business }: { business: Business }) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <BusinessAvatar business={business} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-ink">{business.name}</p>
        <p className="truncate text-[11px] text-muted">
          {business.category} · {business.distanceKm} km
        </p>
      </div>
      <CashbackPill rate={business.cashbackRate} />
    </div>
  );
}
