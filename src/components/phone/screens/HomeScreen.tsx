import { ArrowUpRight, Bell, Compass, Flame, QrCode, Users, Wallet } from 'lucide-react';

import {
  businesses,
  nearbyBusinessIds,
  streakProgress,
  userFirstName,
  walletSummary,
} from '../../../data/app';
import { formatCurrency, formatWholeCurrency } from '../../../lib/format';
import { AppCard } from '../AppCard';
import { AppTabBar } from '../AppTabBar';
import { BusinessRow } from '../BusinessRow';
import { ScreenBody } from '../ScreenBody';

const QUICK_ACTIONS = [
  { label: 'Discover', icon: Compass },
  { label: 'Pay', icon: QrCode },
  { label: 'Wallet', icon: Wallet },
  { label: 'Refer', icon: Users },
];

export function HomeScreen() {
  return (
    <>
      <ScreenBody>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] text-muted">Good morning</p>
            <p className="text-[19px] font-bold tracking-[-0.02em]">{userFirstName}</p>
          </div>
          <span className="relative grid size-9 place-items-center rounded-full bg-white ring-1 ring-line">
            <Bell className="size-4" />
            <span className="absolute top-2 right-2.5 size-1.5 rounded-full bg-primary" />
          </span>
        </div>

        <div className="relative overflow-hidden rounded-[22px] bg-primary p-4 text-white">
          <span className="absolute -top-12 -right-10 size-36 rounded-full bg-white/10" />
          <p className="text-[12px] text-white/75">Cashback balance</p>
          <p className="mt-1 text-[30px] leading-none font-bold tracking-[-0.03em]">
            {formatCurrency(walletSummary.balance)}
          </p>
          <div className="mt-4 flex items-center justify-between text-[11px]">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 font-semibold whitespace-nowrap">
              <ArrowUpRight className="size-3" />
              {formatWholeCurrency(walletSummary.earnedThisMonth)} this month
            </span>
            <span className="inline-flex items-center gap-1 whitespace-nowrap text-white/85">
              <Flame className="size-3" />
              {streakProgress.payments} streak
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {QUICK_ACTIONS.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex flex-col items-center gap-1.5 rounded-2xl bg-white py-2.5 text-[10.5px] font-medium ring-1 ring-line"
            >
              <Icon className="size-[18px] text-primary" />
              {label}
            </span>
          ))}
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <p className="text-[14px] font-bold">Near you</p>
            <p className="text-[11px] font-semibold text-primary">See all</p>
          </div>
          <AppCard className="mt-1.5 divide-y divide-line px-3">
            {nearbyBusinessIds.map((id) => (
              <BusinessRow key={id} business={businesses[id]} />
            ))}
          </AppCard>
        </div>
      </ScreenBody>
      <AppTabBar active="home" />
    </>
  );
}
