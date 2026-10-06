import {
  Crown,
  Headphones,
  ChartLine,
  ShieldCheck,
  Sparkles,
  TicketPercent,
  Zap,
  MapPin,
  Flame,
  BadgeCheck,
  type LucideIcon,
} from 'lucide-react';

export interface Principle {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const principles: Principle[] = [
  {
    title: 'Instant, not eventually',
    description: 'Cashback is credited right after payment. No waiting periods, no claim forms.',
    icon: Zap,
  },
  {
    title: 'Local first',
    description: 'Built around the stores on your street, from vegetable markets to car washes.',
    icon: MapPin,
  },
  {
    title: 'Rewards that build',
    description: 'Streaks turn everyday bills into milestones you can actually see progress on.',
    icon: Flame,
  },
  {
    title: 'Secure payments',
    description: 'Pay with UPI, cards or wallets through secure, encrypted payment processing.',
    icon: ShieldCheck,
  },
];

export interface PremiumBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const premiumBenefits: PremiumBenefit[] = [
  {
    title: 'Double cashback',
    description: 'Earn twice the cashback of free users on every transaction.',
    icon: Crown,
  },
  {
    title: 'Exclusive offers',
    description: 'Premium-only features and exclusive merchant offers.',
    icon: TicketPercent,
  },
  {
    title: 'Special rewards',
    description: 'Bonus cashback events and members-only promotions.',
    icon: Sparkles,
  },
  {
    title: 'Track your savings',
    description: 'Subscription history and detailed cashback analytics.',
    icon: ChartLine,
  },
  {
    title: 'Flexible plans',
    description: 'Multiple plans with easy renewal and cancel anytime.',
    icon: BadgeCheck,
  },
  {
    title: '24/7 priority support',
    description: 'Priority help on WhatsApp, day or night.',
    icon: Headphones,
  },
];
