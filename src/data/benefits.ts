import {
  ChartLine,
  Clock,
  ReceiptIndianRupee,
  Store,
  TicketPercent,
  type LucideIcon,
} from 'lucide-react';

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    title: 'Cashback on every bill',
    description: 'Small bill or big bill, every payment through Payzo earns you instant cashback.',
    icon: ReceiptIndianRupee,
  },
  {
    title: 'Discounts near you',
    description: 'See nearby stores offering real-time deals, based on where you are right now.',
    icon: TicketPercent,
  },
  {
    title: 'Track everything',
    description: 'Your full transaction history, cashback earned and streaks, all in one place.',
    icon: ChartLine,
  },
  {
    title: 'A growing partner network',
    description:
      'From local shops to major retailers, partner stores offer special deals and cashback.',
    icon: Store,
  },
  {
    title: 'Works around the clock',
    description: 'Pay at partner stores, earn cashback and manage your account any time.',
    icon: Clock,
  },
];
