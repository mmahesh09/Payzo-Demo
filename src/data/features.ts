import { Flame, MapPin, Smartphone, Users, Zap, type LucideIcon } from 'lucide-react';

export type FeatureId = 'nearby' | 'instant' | 'payments' | 'streaks' | 'refer';
export type FeatureLayout = 'wide' | 'regular';
export type FeatureTone = 'light' | 'primary';

export interface Feature {
  id: FeatureId;
  title: string;
  description: string;
  icon: LucideIcon;
  layout: FeatureLayout;
  tone: FeatureTone;
}

export const features: Feature[] = [
  {
    id: 'nearby',
    title: 'Stores nearby',
    description:
      'Shop smarter with location-based offers. Find nearby stores with real-time cashback based on where you are.',
    icon: MapPin,
    layout: 'wide',
    tone: 'light',
  },
  {
    id: 'instant',
    title: 'Instant cashback',
    description: 'Earn cashback on every payment, credited right after you pay. No waiting.',
    icon: Zap,
    layout: 'regular',
    tone: 'light',
  },
  {
    id: 'payments',
    title: 'Pay your way',
    description: 'Use UPI, cards or wallets. Multiple payment options on one secure platform.',
    icon: Smartphone,
    layout: 'regular',
    tone: 'light',
  },
  {
    id: 'streaks',
    title: 'Streaks and milestones',
    description:
      'Every bill adds to your streak. Hit your 10th, 25th and 50th payment to unlock rewards.',
    icon: Flame,
    layout: 'regular',
    tone: 'primary',
  },
  {
    id: 'refer',
    title: 'Refer and earn',
    description: 'Invite friends with your referral code and earn rewards when they join.',
    icon: Users,
    layout: 'regular',
    tone: 'light',
  },
];
