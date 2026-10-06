import { BadgePercent, ChevronLeft, Heart } from 'lucide-react';

import { businesses, examplePayment, featuredBusinessDetails } from '../../../data/app';
import { cn } from '../../../lib/cn';
import { formatPercent } from '../../../lib/format';
import { AppButton } from '../AppButton';
import { AppCard } from '../AppCard';
import { DetailRow } from '../DetailRow';
import { ScreenBody } from '../ScreenBody';

const business = businesses[examplePayment.businessId];

export function BusinessDetailsScreen() {
  const Icon = business.icon;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        className={cn(
          'relative mx-3 grid h-[150px] shrink-0 place-items-center rounded-[26px]',
          business.avatarClassName,
        )}
      >
        <Icon className="size-14" strokeWidth={1.6} />
        <span className="absolute top-3 left-3 grid size-8 place-items-center rounded-full bg-white/90 text-ink">
          <ChevronLeft className="size-4" />
        </span>
        <span className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-white/90 text-ink">
          <Heart className="size-4" />
        </span>
      </div>

      <ScreenBody className="pt-4 pb-7">
        <div>
          <p className="text-[21px] font-bold tracking-[-0.025em]">{business.name}</p>
          <p className="mt-0.5 text-[12px] text-muted">
            {business.category} · {business.distanceKm} km away
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-primary-50 p-3 ring-1 ring-primary-100">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-white">
            <BadgePercent className="size-5" />
          </span>
          <div>
            <p className="text-[15px] font-bold">
              {formatPercent(business.cashbackRate)} instant cashback
            </p>
            <p className="text-[11px] text-body">On every bill paid with Payzo</p>
          </div>
        </div>

        <AppCard className="divide-y divide-line px-3">
          {featuredBusinessDetails.map((detail) => (
            <DetailRow key={detail.label} label={detail.label} value={detail.value} />
          ))}
        </AppCard>

        <AppButton className="mt-auto">Pay at {business.name}</AppButton>
      </ScreenBody>
    </div>
  );
}
