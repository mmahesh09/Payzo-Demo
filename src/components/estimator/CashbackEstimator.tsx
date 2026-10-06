import { useId, useState, type CSSProperties } from 'react';

import { businesses, PREMIUM_MULTIPLIER, type BusinessId } from '../../data/app';
import { cn } from '../../lib/cn';
import { formatCurrency, formatPercent, formatWholeCurrency } from '../../lib/format';
import { NumberTicker } from '../ui/NumberTicker';
import { Switch } from '../ui/Switch';

const SPEND_MIN = 500;
const SPEND_MAX = 20000;
const SPEND_STEP = 500;
const DEFAULT_SPEND = 4000;
const ESTIMATOR_BUSINESS_IDS: BusinessId[] = ['spice', 'greens', 'shine', 'bloom', 'thread'];

export function CashbackEstimator() {
  const [monthlySpend, setMonthlySpend] = useState(DEFAULT_SPEND);
  const [businessId, setBusinessId] = useState<BusinessId>('spice');
  const [isPremium, setIsPremium] = useState(false);
  const spendInputId = useId();
  const premiumLabelId = useId();
  const premiumHintId = useId();

  const business = businesses[businessId];
  const effectiveRate = business.cashbackRate * (isPremium ? PREMIUM_MULTIPLIER : 1);
  const estimatedCashback = (monthlySpend * effectiveRate) / 100;
  const fillPercent = ((monthlySpend - SPEND_MIN) / (SPEND_MAX - SPEND_MIN)) * 100;

  return (
    <div className="rounded-[28px] bg-ink p-6 text-white/80 sm:p-8">
      <p className="text-sm font-semibold text-primary-200">Cashback estimator</p>
      <h3 className="mt-2 text-2xl font-bold tracking-[-0.025em] text-white">
        See how much you could earn.
      </h3>

      <fieldset className="mt-8">
        <legend className="text-sm font-medium text-white">Where you spend</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {ESTIMATOR_BUSINESS_IDS.map((id) => {
            const option = businesses[id];
            const isSelected = id === businessId;
            return (
              <label
                key={id}
                className={cn(
                  'cursor-pointer rounded-full px-3.5 py-2 text-sm font-medium ring-1 transition-colors duration-200',
                  'has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-white',
                  isSelected
                    ? 'bg-white text-ink ring-white'
                    : 'text-white/85 ring-white/20 hover:bg-white/10',
                )}
              >
                <input
                  type="radio"
                  name="estimator-business"
                  value={id}
                  checked={isSelected}
                  onChange={() => setBusinessId(id)}
                  className="sr-only"
                />
                {option.category} · {formatPercent(option.cashbackRate)}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8">
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor={spendInputId} className="text-sm font-medium text-white">
            Monthly spend
          </label>
          <span className="text-lg font-semibold text-white tabular-nums">
            {formatWholeCurrency(monthlySpend)}
          </span>
        </div>
        <input
          id={spendInputId}
          type="range"
          min={SPEND_MIN}
          max={SPEND_MAX}
          step={SPEND_STEP}
          value={monthlySpend}
          aria-valuetext={formatWholeCurrency(monthlySpend)}
          onChange={(event) => setMonthlySpend(Number(event.target.value))}
          style={{ '--fill': `${fillPercent}%` } as CSSProperties}
          className="estimator-range mt-5 w-full"
        />
        <div className="mt-3 flex justify-between text-xs text-white/60 tabular-nums">
          <span>{formatWholeCurrency(SPEND_MIN)}</span>
          <span>{formatWholeCurrency(SPEND_MAX)}</span>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 rounded-2xl bg-white/[0.06] px-5 py-4 ring-1 ring-white/10">
        <div>
          <p id={premiumLabelId} className="text-sm font-semibold text-white">
            Payzo Premium
          </p>
          <p id={premiumHintId} className="text-xs text-white/65">
            {PREMIUM_MULTIPLIER}x cashback on every bill
          </p>
        </div>
        <Switch
          isChecked={isPremium}
          onCheckedChange={setIsPremium}
          labelledBy={premiumLabelId}
          describedBy={premiumHintId}
        />
      </div>

      <div className="mt-4 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
        <p className="text-sm text-white/75">Estimated cashback per month</p>
        <output htmlFor={spendInputId} className="mt-1 block">
          <span className="sr-only" aria-live="polite">
            {formatCurrency(estimatedCashback)}
          </span>
          <NumberTicker
            value={estimatedCashback}
            format={(amount) => `+${formatCurrency(amount)}`}
            className="font-display text-[2.75rem] leading-none font-extrabold tracking-[-0.04em] text-success-300 tabular-nums"
          />
        </output>
        <p className="mt-2 text-sm text-white/75">
          at {formatPercent(effectiveRate)} with {business.name}
          {isPremium ? ' (Premium)' : ''}
        </p>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-white/60">
        Illustrative estimate using sample rates. Actual cashback depends on each partner store’s
        offer.
      </p>
    </div>
  );
}
