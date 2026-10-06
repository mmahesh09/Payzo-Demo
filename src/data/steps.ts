import type { ScreenId } from './app';

export interface JourneyStep {
  id: string;
  title: string;
  summary: string;
  description: string;
  screenId: ScreenId;
  screenLabel: string;
}

export const journeySteps: JourneyStep[] = [
  {
    id: 'discover',
    title: 'Discover',
    summary: 'Find Payzo partner stores near you.',
    description:
      'Detect your location or enter it manually to see nearby partner stores, from restaurants and grocers to car washes and clothing shops.',
    screenId: 'discover',
    screenLabel: 'Payzo Discover screen listing nearby partner stores with their cashback rates',
  },
  {
    id: 'choose',
    title: 'Choose',
    summary: 'Pick a store and see its offer upfront.',
    description:
      'Open any store to check its cashback rate, timings and location before you head over.',
    screenId: 'business',
    screenLabel: 'Payzo store details screen for Spice Route showing 6% instant cashback',
  },
  {
    id: 'pay',
    title: 'Pay',
    summary: 'Pay your bill with UPI, cards or wallets.',
    description:
      'Pay your bill through Payzo using the method you prefer. Every bill counts, small or big.',
    screenId: 'payment',
    screenLabel: 'Payzo payment screen for a ₹245 bill paid with UPI and instant cashback shown',
  },
  {
    id: 'earn',
    title: 'Earn',
    summary: 'Get cashback credited instantly.',
    description:
      'Your cashback is credited right after payment, no waiting. Every payment also adds to your streak.',
    screenId: 'cashback',
    screenLabel: 'Payzo cashback wallet with balance, monthly chart and instantly credited history',
  },
];

export interface GettingStartedStep {
  title: string;
  description: string;
}

export const gettingStartedSteps: GettingStartedStep[] = [
  {
    title: 'Download the app',
    description: 'Get the Payzo customer app from Google Play or the App Store.',
  },
  {
    title: 'Set your location',
    description: 'Detect your location or enter it manually to see partner stores nearby.',
  },
  {
    title: 'Pay at a partner store',
    description: 'Scan and pay your bill through Payzo with UPI, cards or wallets.',
  },
  {
    title: 'Earn and build streaks',
    description:
      'Cashback lands instantly, and every bill moves you closer to your next milestone.',
  },
];
