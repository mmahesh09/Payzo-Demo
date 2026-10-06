import { Car, Carrot, Shirt, ShoppingBasket, UtensilsCrossed, type LucideIcon } from 'lucide-react';

/** Illustrative data for the in-page app mockups. Not real stores or figures. */

export type ScreenId =
  'home' | 'discover' | 'business' | 'payment' | 'success' | 'cashback' | 'rewards';

export type BusinessId = 'spice' | 'bloom' | 'shine' | 'thread' | 'greens';

export interface Business {
  id: BusinessId;
  name: string;
  category: string;
  distanceKm: number;
  cashbackRate: number;
  icon: LucideIcon;
  avatarClassName: string;
}

export const businesses: Record<BusinessId, Business> = {
  spice: {
    id: 'spice',
    name: 'Spice Route',
    category: 'Restaurant',
    distanceKm: 0.6,
    cashbackRate: 6,
    icon: UtensilsCrossed,
    avatarClassName: 'bg-[#FBE9E4] text-[#9A3B2E]',
  },
  greens: {
    id: 'greens',
    name: 'Fresh Greens',
    category: 'Vegetable market',
    distanceKm: 0.4,
    cashbackRate: 4,
    icon: Carrot,
    avatarClassName: 'bg-success-50 text-success-strong',
  },
  shine: {
    id: 'shine',
    name: 'Shine Car Wash',
    category: 'Car wash',
    distanceKm: 2.1,
    cashbackRate: 8,
    icon: Car,
    avatarClassName: 'bg-primary-100 text-primary-strong',
  },
  bloom: {
    id: 'bloom',
    name: 'Bloom Grocers',
    category: 'Grocery store',
    distanceKm: 1.1,
    cashbackRate: 3,
    icon: ShoppingBasket,
    avatarClassName: 'bg-[#FFF3D6] text-[#8A5A00]',
  },
  thread: {
    id: 'thread',
    name: 'Thread Story',
    category: 'Clothing',
    distanceKm: 1.4,
    cashbackRate: 5,
    icon: Shirt,
    avatarClassName: 'bg-[#F6E6F1] text-[#8A2F6B]',
  },
};

export const nearbyBusinessIds: BusinessId[] = ['greens', 'spice', 'bloom'];

export const discoverBusinessIds: BusinessId[] = ['spice', 'greens', 'shine', 'bloom', 'thread'];

export const discoverCategories = ['All', 'Food', 'Grocery', 'Car wash', 'Clothing'];

export const userFirstName = 'Aarav';

export const userArea = 'Indiranagar';

export const walletSummary = {
  balance: 1284.5,
  earnedThisMonth: 164.3,
};

export const examplePayment = {
  businessId: 'spice' as BusinessId,
  amount: 245,
  cashback: 14.7,
  methodLabel: 'UPI',
  methodDetail: 'aarav@upi',
};

export interface BusinessDetail {
  label: string;
  value: string;
}

export const featuredBusinessDetails: BusinessDetail[] = [
  { label: 'Open today', value: '11:00 – 23:00' },
  { label: 'Address', value: '100 Feet Rd, Indiranagar' },
  { label: 'Cashback', value: 'Instant, on every bill' },
];

export interface CashbackEntry {
  businessId: BusinessId;
  dateLabel: string;
  amount: number;
  cashback: number;
}

export const cashbackHistory: CashbackEntry[] = [
  { businessId: 'spice', dateLabel: 'Today', amount: 245, cashback: 14.7 },
  { businessId: 'shine', dateLabel: 'Sep 28', amount: 1200, cashback: 96 },
  { businessId: 'bloom', dateLabel: 'Sep 26', amount: 862, cashback: 25.86 },
  { businessId: 'greens', dateLabel: 'Sep 24', amount: 180, cashback: 7.2 },
];

export interface MonthlyCashback {
  month: string;
  amount: number;
}

export const monthlyCashback: MonthlyCashback[] = [
  { month: 'Jun', amount: 112.4 },
  { month: 'Jul', amount: 148.2 },
  { month: 'Aug', amount: 96.5 },
  { month: 'Sep', amount: 164.3 },
];

export const streakProgress = {
  payments: 7,
  nextMilestone: 10,
};

export const streakMilestones = [10, 25, 50];

export const referralCode = 'AARAV50';

export const PREMIUM_MULTIPLIER = 2;
