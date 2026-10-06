import { motion } from 'framer-motion';
import { ArrowRight, Crown } from 'lucide-react';

import { ButtonLink } from '../components/common/ButtonLink';
import { Container } from '../components/common/Container';
import { IconBadge } from '../components/common/IconBadge';
import { Reveal } from '../components/common/Reveal';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { SplitReveal } from '../components/ui/WordReveal';
import { DOWNLOAD_HREF } from '../data/navigation';
import { premiumBenefits, principles } from '../data/principles';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren } from '../lib/motion';

export function WhyPayzo() {
  return (
    <Section id="why-payzo" labelledBy="why-payzo-title" tone="tint">
      <Container>
        <SectionHeading
          id="why-payzo-title"
          eyebrow="Why Payzo"
          title="Cashback that lands"
          titleAccent="the moment you pay."
          className="max-w-3xl"
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={staggerChildren(0.08)}
          className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-primary-100 ring-1 ring-primary-100 sm:grid-cols-2 lg:mt-20"
        >
          {principles.map((principle, index) => (
            <motion.li key={principle.title} variants={fadeUp} className="bg-white p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <IconBadge icon={principle.icon} />
                <span className="text-sm font-semibold text-muted tabular-nums">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-2xl font-bold tracking-[-0.025em]">{principle.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed">{principle.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        <PremiumPanel />
      </Container>
    </Section>
  );
}

function PremiumPanel() {
  return (
    <Reveal className="mt-6">
      <div
        id="premium"
        className="relative scroll-mt-28 overflow-hidden rounded-[32px] bg-ink p-8 text-white/80 sm:p-12 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-32 size-[420px] rounded-full bg-primary/35"
        />

        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full bg-success-300 px-3 py-1 text-[0.8125rem] font-semibold text-ink">
            <Crown aria-hidden="true" className="size-4" />
            Payzo Premium
          </p>
          <h3 className="mt-5 text-[clamp(1.875rem,3.6vw,2.75rem)] leading-[1.08] font-bold tracking-[-0.03em] text-white">
            <SplitReveal
              text="Go Premium."
              accent="Double your rewards."
              accentClassName="text-success-300"
              delaySeconds={0.15}
            />
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed">
            Upgrade to Payzo Premium and earn double the cashback of free users, plus exclusive
            offers and priority support.
          </p>
          <ButtonLink href={DOWNLOAD_HREF} trailingIcon={ArrowRight} size="lg" className="mt-8">
            Explore Premium
          </ButtonLink>
        </div>

        <ul className="relative mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:mt-0">
          {premiumBenefits.map((benefit) => (
            <li key={benefit.title} className="flex gap-4">
              <IconBadge icon={benefit.icon} tone="inverse" />
              <div>
                <p className="font-display text-base font-bold text-white">{benefit.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
