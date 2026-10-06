import {
  Car,
  Carrot,
  Shirt,
  ShoppingBasket,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';

import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { HeroVideoDialog } from '../components/ui/hero-video-dialog';
import { Marquee } from '../components/ui/Marquee';
import { cn } from '../lib/cn';

interface StoreType {
  label: string;
  icon: LucideIcon;
}

const STORE_TYPES: StoreType[] = [
  { label: 'Clothing shops', icon: Shirt },
  { label: 'Car washes', icon: Car },
  { label: 'Grocery stores', icon: ShoppingBasket },
  { label: 'Vegetable markets', icon: Carrot },
  { label: 'Restaurants', icon: UtensilsCrossed },
  { label: 'And many more', icon: Store },
];

interface Audience {
  label: string;
  title: string;
  description: string;
  isHighlighted: boolean;
}

const AUDIENCES: Audience[] = [
  {
    label: 'For shoppers',
    title: 'Pay less, earn more on every bill.',
    description:
      'Find partner stores nearby, pay your way and watch instant cashback and streak rewards add up.',
    isHighlighted: false,
  },
  {
    label: 'For partner stores',
    title: 'Bring more customers through your door.',
    description:
      'Add your store with the Payzo Business app and reach nearby shoppers who are looking for offers.',
    isHighlighted: true,
  },
];

export function WhatIsPayzo() {
  return (
    <Section id="what-is-payzo" labelledBy="what-is-payzo-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <SectionHeading
            id="what-is-payzo-title"
            eyebrow="What is Payzo"
            title="Cashback rewards for everyday local spending."
            className="lg:col-span-6"
          />
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-11" delaySeconds={0.1}>
            <p className="text-lg leading-relaxed">
              Payzo is a cashback rewards platform for the stores you already visit. Pay your bill
              through Payzo at a partner store and cashback is credited to your wallet right after
              payment.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 lg:mt-16" delaySeconds={0.15}>
          <Marquee
            label="Types of partner stores"
            items={STORE_TYPES}
            getKey={(storeType) => storeType.label}
            renderItem={({ label, icon: Icon }) => (
              <span className="inline-flex items-center gap-2 rounded-full bg-canvas px-4 py-2.5 text-[0.9375rem] font-medium text-ink ring-1 ring-line">
                <Icon aria-hidden="true" className="size-4 text-primary" />
                {label}
              </span>
            )}
          />
        </Reveal>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12">
          {AUDIENCES.map((audience, index) => (
            <li key={audience.label}>
              <Reveal
                delaySeconds={index * 0.08}
                className={cn(
                  'h-full rounded-[28px] p-8 sm:p-10',
                  audience.isHighlighted
                    ? 'bg-primary-50 ring-1 ring-primary-100'
                    : 'bg-white ring-1 ring-line',
                )}
              >
                <p className="text-sm font-semibold text-primary">{audience.label}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] sm:text-[1.75rem]">
                  {audience.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed">{audience.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10 lg:mt-12" delaySeconds={0.1}>
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="/media/payzo-launch.mp4"
            thumbnailSrc="/media/payzo-launch-poster.jpg"
            captionsSrc="/media/payzo-launch.en.vtt"
            thumbnailAlt="Payzo in 20 seconds: discover a store, pay, and get cashback instantly"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
