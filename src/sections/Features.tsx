import { motion } from 'framer-motion';

import { Container } from '../components/common/Container';
import { IconBadge } from '../components/common/IconBadge';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { FeatureVisual } from '../components/features/FeatureVisual';
import { features, type Feature } from '../data/features';
import { cn } from '../lib/cn';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren } from '../lib/motion';
import { trackSpotlight } from '../lib/spotlight';

export function Features() {
  return (
    <Section id="features" labelledBy="features-title">
      <Container>
        <SectionHeading
          id="features-title"
          eyebrow="Why choose Payzo"
          title="Everything you need to earn more."
          description="Payzo turns everyday bills at local stores into instant cashback and rewards."
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={staggerChildren(0.08)}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-6"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const isWide = feature.layout === 'wide';
  const isPrimary = feature.tone === 'primary';

  return (
    <motion.li
      variants={fadeUp}
      onPointerMove={trackSpotlight}
      className={cn(
        'spotlight-card flex flex-col gap-8 overflow-hidden rounded-[28px] p-6 sm:p-8',
        isWide
          ? 'md:col-span-2 lg:col-span-4 lg:flex-row lg:items-center lg:gap-10'
          : 'lg:col-span-2',
        isPrimary
          ? 'bg-primary text-white/90 [--spot-color:rgb(255_255_255/0.16)]'
          : 'bg-canvas ring-1 ring-line',
      )}
    >
      <div className="flex-1">
        <IconBadge icon={feature.icon} tone={isPrimary ? 'inverse' : 'primary'} />
        <h3
          className={cn(
            'mt-6 text-xl font-bold tracking-[-0.02em] sm:text-2xl',
            isPrimary && 'text-white',
          )}
        >
          {feature.title}
        </h3>
        <p className="mt-2 max-w-md text-base leading-relaxed">{feature.description}</p>
      </div>

      <div aria-hidden="true" className={cn('mt-auto', isWide && 'lg:w-[320px] lg:shrink-0')}>
        <FeatureVisual featureId={feature.id} />
      </div>
    </motion.li>
  );
}
