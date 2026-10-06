import { Crown, Flame, Share2, Users } from 'lucide-react';

import {
  PREMIUM_MULTIPLIER,
  referralCode,
  streakMilestones,
  streakProgress,
} from '../../../data/app';
import { cn } from '../../../lib/cn';
import { AppCard } from '../AppCard';
import { AppTabBar } from '../AppTabBar';
import { ProgressBar } from '../ProgressBar';
import { ScreenBody } from '../ScreenBody';
import { ScreenHeader } from '../ScreenHeader';

const paymentsToGo = streakProgress.nextMilestone - streakProgress.payments;

export function RewardsScreen() {
  return (
    <>
      <ScreenBody>
        <ScreenHeader title="Rewards" />

        <div className="relative overflow-hidden rounded-[22px] bg-ink p-4 text-white">
          <span className="absolute -right-8 -bottom-12 size-32 rounded-full bg-primary/45" />
          <p className="flex items-center gap-1.5 text-[11px] text-white/70">
            <Flame className="size-3.5 text-success-300" />
            Current streak
          </p>
          <p className="mt-1 text-[20px] font-bold tracking-[-0.02em]">
            {streakProgress.payments} payments
          </p>
          <ProgressBar
            value={streakProgress.payments}
            max={streakProgress.nextMilestone}
            trackClassName="mt-4 h-2 bg-white/15"
            fillClassName="bg-success-300"
          />
          <p className="relative mt-2 text-[11px] text-white/75">
            {paymentsToGo} more to unlock your{' '}
            <span className="font-semibold text-white">
              {streakProgress.nextMilestone}th-payment reward
            </span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {streakMilestones.map((milestone) => {
            const isNext = milestone === streakProgress.nextMilestone;
            return (
              <span
                key={milestone}
                className={cn(
                  'rounded-xl py-2 text-center text-[11px] font-semibold ring-1',
                  isNext
                    ? 'bg-primary-50 text-primary ring-primary-100'
                    : 'bg-white text-muted ring-line',
                )}
              >
                {milestone}th
                <span className="block text-[9.5px] font-medium">payment</span>
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-primary p-3 text-white">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/15">
            <Crown className="size-[18px]" />
          </span>
          <div className="flex-1">
            <p className="text-[13px] font-bold">Premium</p>
            <p className="text-[11px] text-white/85">{PREMIUM_MULTIPLIER}x cashback</p>
          </div>
          <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-ink">
            Upgrade
          </span>
        </div>

        <AppCard className="flex items-center gap-3 p-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-success-50 text-success-strong">
            <Users className="size-[18px]" />
          </span>
          <div className="flex-1">
            <p className="text-[13px] font-semibold">Refer & earn</p>
            <p className="text-[11px] text-muted">
              Your code <span className="font-semibold text-ink">{referralCode}</span>
            </p>
          </div>
          <Share2 className="size-4 text-primary" />
        </AppCard>
      </ScreenBody>
      <AppTabBar active="rewards" />
    </>
  );
}
