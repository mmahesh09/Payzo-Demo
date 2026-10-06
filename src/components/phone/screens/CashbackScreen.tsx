import { Zap } from 'lucide-react';

import { businesses, cashbackHistory, monthlyCashback, walletSummary } from '../../../data/app';
import { cn } from '../../../lib/cn';
import { formatCurrency } from '../../../lib/format';
import { AppCard } from '../AppCard';
import { AppTabBar } from '../AppTabBar';
import { BusinessAvatar } from '../BusinessAvatar';
import { ScreenBody } from '../ScreenBody';
import { ScreenHeader } from '../ScreenHeader';

const MAX_MONTHLY_AMOUNT = Math.max(...monthlyCashback.map((month) => month.amount));
const CURRENT_MONTH_INDEX = monthlyCashback.length - 1;

export function CashbackScreen() {
  return (
    <>
      <ScreenBody>
        <ScreenHeader title="Cashback" />

        <AppCard className="p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] text-muted">Available balance</p>
              <p className="text-[26px] leading-tight font-bold tracking-[-0.03em]">
                {formatCurrency(walletSummary.balance)}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-success-50 px-2 py-1 text-[10.5px] font-semibold whitespace-nowrap text-success-strong">
              <Zap className="size-3" />
              Instant credit
            </span>
          </div>

          <div className="mt-4 flex h-[76px] gap-3">
            {monthlyCashback.map((month, index) => (
              <div key={month.month} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex w-full flex-1 items-end">
                  <span
                    className={cn(
                      'w-full rounded-md',
                      index === CURRENT_MONTH_INDEX ? 'bg-primary' : 'bg-primary-100',
                    )}
                    style={{ height: `${(month.amount / MAX_MONTHLY_AMOUNT) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] text-muted">{month.month}</span>
              </div>
            ))}
          </div>
        </AppCard>

        <div>
          <p className="text-[14px] font-bold">History</p>
          <AppCard className="mt-1.5 divide-y divide-line px-3">
            {cashbackHistory.map((entry) => {
              const business = businesses[entry.businessId];
              return (
                <div
                  key={`${entry.businessId}-${entry.dateLabel}`}
                  className="flex items-center gap-3 py-2"
                >
                  <BusinessAvatar business={business} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12.5px] font-semibold">{business.name}</p>
                    <p className="text-[10.5px] text-muted">
                      {entry.dateLabel} · {formatCurrency(entry.amount)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[12.5px] font-bold">+{formatCurrency(entry.cashback)}</p>
                    <p className="text-[10px] font-semibold text-success-strong">Credited</p>
                  </div>
                </div>
              );
            })}
          </AppCard>
        </div>
      </ScreenBody>
      <AppTabBar active="wallet" />
    </>
  );
}
