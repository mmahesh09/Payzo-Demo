import { Check, CreditCard, Share2, Smartphone, Wallet } from 'lucide-react';

import {
  businesses,
  examplePayment,
  referralCode,
  streakProgress,
  type BusinessId,
} from '../../data/app';
import type { FeatureId } from '../../data/features';
import { formatCurrency } from '../../lib/format';
import { BusinessRow } from '../phone/BusinessRow';
import { ProgressBar } from '../phone/ProgressBar';

const PREVIEW_CARD_CLASSES = 'rounded-2xl bg-white p-4 shadow-soft ring-1 ring-line';
const NEARBY_PREVIEW_IDS: BusinessId[] = ['shine', 'spice', 'greens'];
const PAYMENT_OPTIONS = [
  { label: 'UPI', icon: Smartphone },
  { label: 'Cards', icon: CreditCard },
  { label: 'Wallets', icon: Wallet },
];
const featuredBusiness = businesses[examplePayment.businessId];

/** Small product UI shown inside each feature card. Decorative: the card text carries meaning. */
export function FeatureVisual({ featureId }: { featureId: FeatureId }) {
  switch (featureId) {
    case 'nearby':
      return <NearbyPreview />;
    case 'instant':
      return <InstantPreview />;
    case 'payments':
      return <PaymentsPreview />;
    case 'streaks':
      return <StreakPreview />;
    case 'refer':
      return <ReferPreview />;
  }
}

function NearbyPreview() {
  return (
    <div className="divide-y divide-line rounded-2xl bg-white px-4 shadow-soft ring-1 ring-line">
      {NEARBY_PREVIEW_IDS.map((id) => (
        <BusinessRow key={id} business={businesses[id]} />
      ))}
    </div>
  );
}

function InstantPreview() {
  return (
    <div className={`${PREVIEW_CARD_CLASSES} flex items-center gap-3`}>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-success text-white">
        <Check className="size-5" strokeWidth={2.5} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink">Cashback credited</p>
        <p className="truncate text-xs text-muted">{featuredBusiness.name} · Just now</p>
      </div>
      <span className="text-base font-bold text-success-strong tabular-nums">
        +{formatCurrency(examplePayment.cashback)}
      </span>
    </div>
  );
}

function PaymentsPreview() {
  return (
    <div className={PREVIEW_CARD_CLASSES}>
      <p className="text-xs text-muted">Pay {formatCurrency(examplePayment.amount)} with</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {PAYMENT_OPTIONS.map(({ label, icon: Icon }, index) => (
          <span
            key={label}
            className={
              index === 0
                ? 'flex flex-col items-center gap-1.5 rounded-xl bg-primary py-3 text-xs font-semibold text-white'
                : 'flex flex-col items-center gap-1.5 rounded-xl bg-canvas py-3 text-xs font-medium text-body ring-1 ring-line'
            }
          >
            <Icon className="size-4" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function StreakPreview() {
  const paymentsToGo = streakProgress.nextMilestone - streakProgress.payments;

  return (
    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
      <div className="flex items-baseline justify-between text-white">
        <span className="text-3xl font-bold tracking-[-0.03em] tabular-nums">
          {streakProgress.payments}
          <span className="ml-1 text-sm font-medium text-white/85">payment streak</span>
        </span>
      </div>
      <ProgressBar
        value={streakProgress.payments}
        max={streakProgress.nextMilestone}
        trackClassName="mt-3 h-2 bg-white/15"
        fillClassName="bg-success-300"
      />
      <p className="mt-3 text-xs text-white/85">
        {paymentsToGo} more to your {streakProgress.nextMilestone}th-payment reward
      </p>
    </div>
  );
}

function ReferPreview() {
  return (
    <div className={PREVIEW_CARD_CLASSES}>
      <p className="text-xs text-muted">Your referral code</p>
      <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-dashed border-primary-200 bg-primary-50 px-3 py-2.5">
        <span className="font-display text-lg font-bold tracking-[0.08em] text-primary-strong">
          {referralCode}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white">
          <Share2 className="size-3.5" />
          Share
        </span>
      </div>
    </div>
  );
}
