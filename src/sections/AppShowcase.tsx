import { motion } from 'framer-motion';

import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { AppScreen } from '../components/phone/AppScreen';
import { PhoneMockup } from '../components/phone/PhoneMockup';
import type { ScreenId } from '../data/app';
import { cn } from '../lib/cn';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren } from '../lib/motion';

interface ShowcaseScreen {
  screenId: ScreenId;
  title: string;
  caption: string;
  label: string;
}

const SHOWCASE_SCREENS: ShowcaseScreen[] = [
  {
    screenId: 'discover',
    title: 'Discover',
    caption: 'Partner stores near you',
    label: 'Discover screen listing nearby partner stores and their cashback rates',
  },
  {
    screenId: 'business',
    title: 'Store details',
    caption: 'Cashback rate before you go',
    label: 'Store details screen for Spice Route with 6% instant cashback',
  },
  {
    screenId: 'success',
    title: 'Payment complete',
    caption: 'Cashback credited instantly',
    label: 'Payment complete screen showing ₹14.70 cashback credited instantly',
  },
  {
    screenId: 'rewards',
    title: 'Rewards',
    caption: 'Streaks, Premium and referrals',
    label: 'Rewards screen with streak progress, milestones, Premium and referral code',
  },
];

export function AppShowcase() {
  return (
    <Section id="app" labelledBy="app-showcase-title" tone="dark" className="overflow-hidden">
      <Container>
        <SectionHeading
          id="app-showcase-title"
          tone="dark"
          eyebrow="Inside the app"
          title="Every screen built to be clear."
          description="From finding a store to tracking your streak, Payzo keeps what matters in plain view."
        />
      </Container>

      <motion.ul
        aria-label="Payzo app screens"
        initial="hidden"
        whileInView="visible"
        viewport={REVEAL_VIEWPORT}
        variants={staggerChildren(0.1)}
        className="mx-auto mt-14 flex max-w-[1240px] snap-x snap-mandatory scroll-px-4 scrollbar-none gap-6 overflow-x-auto px-4 pb-6 sm:scroll-px-8 sm:px-8 lg:mt-20 lg:justify-between lg:overflow-visible"
      >
        {SHOWCASE_SCREENS.map((screen, index) => (
          <motion.li key={screen.screenId} variants={fadeUp} className="shrink-0 snap-start">
            <figure
              className={cn('flex flex-col items-center gap-6', index % 2 === 1 && 'lg:mt-16')}
            >
              <PhoneMockup
                label={screen.label}
                className="[--phone-scale:0.78] lg:[--phone-scale:0.72] xl:[--phone-scale:0.82]"
              >
                <AppScreen screenId={screen.screenId} />
              </PhoneMockup>
              <figcaption className="text-center">
                <span className="block text-base font-semibold text-white">{screen.title}</span>
                <span className="mt-1 block text-sm text-white/65">{screen.caption}</span>
              </figcaption>
            </figure>
          </motion.li>
        ))}
      </motion.ul>

      <Container>
        <p className="mt-4 text-sm text-white/65 lg:hidden" aria-hidden="true">
          Swipe to see more screens
        </p>
      </Container>
    </Section>
  );
}
