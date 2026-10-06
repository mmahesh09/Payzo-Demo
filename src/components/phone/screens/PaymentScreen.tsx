import { ChevronRight, Smartphone } from 'lucide-react';

import { businesses, examplePayment } from '../../../data/app';
import { formatCurrency, formatPercent } from '../../../lib/format';
import { AppButton } from '../AppButton';
import { AppCard } from '../AppCard';
import { BusinessAvatar } from '../BusinessAvatar';
import { ScreenBody } from '../ScreenBody';
import { ScreenHeader } from '../ScreenHeader';

const business = businesses[examplePayment.businessId];

export function PaymentScreen() {
  return (
    <ScreenBody className="pb-7">
      <ScreenHeader title="Pay" hasBackButton />

      <AppCard className="flex items-center gap-3 p-3">
        <BusinessAvatar business={business} />
        <div>
          <p className="text-[13px] font-semibold">{business.name}</p>
          <p className="text-[11px] text-muted">
            {business.category} · {formatPercent(business.cashbackRate)} cashback
          </p>
        </div>
      </AppCard>

      <div className="py-3 text-center">
        <p className="text-[12px] text-muted">Amount</p>
        <p className="mt-1 text-[46px] leading-none font-bold tracking-[-0.04em]">
          {formatCurrency(examplePayment.amount)}
        </p>
      </div>

      <AppCard className="flex items-center gap-3 p-3">
        <span className="grid size-9 place-items-center rounded-xl bg-canvas">
          <Smartphone className="size-[18px]" />
        </span>
        <div className="flex-1">
          <p className="text-[11px] text-muted">Paying with</p>
          <p className="text-[13px] font-semibold">
            {examplePayment.methodLabel} · {examplePayment.methodDetail}
          </p>
        </div>
        <ChevronRight className="size-4 text-muted" />
      </AppCard>

      <div className="flex items-center justify-between rounded-2xl bg-success-50 p-3">
        <div>
          <p className="text-[12px] font-semibold text-success-strong">Instant cashback</p>
          <p className="text-[10.5px] text-body">Credited right after payment</p>
        </div>
        <p className="text-[17px] font-bold text-success-strong">
          +{formatCurrency(examplePayment.cashback)}
        </p>
      </div>

      <AppButton className="mt-auto">Confirm payment</AppButton>
    </ScreenBody>
  );
}
