import { Compass, CreditCard, Gift, House, Wallet, type LucideIcon } from 'lucide-react';

import { cn } from '../../lib/cn';

type AppTab = 'home' | 'discover' | 'wallet' | 'rewards';

interface TabItem {
  id: AppTab;
  label: string;
  icon: LucideIcon;
}

const LEADING_TABS: TabItem[] = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'discover', label: 'Discover', icon: Compass },
];

const TRAILING_TABS: TabItem[] = [
  { id: 'wallet', label: 'Wallet', icon: Wallet },
  { id: 'rewards', label: 'Rewards', icon: Gift },
];

function TabButton({ tab, isActive }: { tab: TabItem; isActive: boolean }) {
  const Icon = tab.icon;
  return (
    <span
      className={cn(
        'flex w-12 flex-col items-center gap-1 text-[10px] font-medium',
        isActive ? 'text-primary' : 'text-muted',
      )}
    >
      <Icon className="size-5" strokeWidth={isActive ? 2.4 : 1.9} />
      {tab.label}
    </span>
  );
}

export function AppTabBar({ active }: { active: AppTab }) {
  return (
    <div className="mt-auto flex h-[78px] shrink-0 items-start justify-around border-t border-line bg-white px-2 pt-2.5">
      {LEADING_TABS.map((tab) => (
        <TabButton key={tab.id} tab={tab} isActive={tab.id === active} />
      ))}
      <span className="-mt-5 grid size-12 place-items-center rounded-2xl bg-primary text-white shadow-lifted">
        <CreditCard className="size-5" />
      </span>
      {TRAILING_TABS.map((tab) => (
        <TabButton key={tab.id} tab={tab} isActive={tab.id === active} />
      ))}
    </div>
  );
}
