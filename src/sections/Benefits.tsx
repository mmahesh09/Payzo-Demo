import { motion } from 'framer-motion';

import { Container } from '../components/common/Container';
import { IconBadge } from '../components/common/IconBadge';
import { Reveal } from '../components/common/Reveal';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { CashbackEstimator } from '../components/estimator/CashbackEstimator';
import { benefits } from '../data/benefits';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren } from '../lib/motion';

export function Benefits() {
  return (
    <Section id="benefits" labelledBy="benefits-title">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <SectionHeading
            id="benefits-title"
            eyebrow="Benefits"
            title="Pay less. Earn more."
            description="Turn the bills you already pay into cashback, streaks and rewards. Here's what you get with every payment."
          />

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={REVEAL_VIEWPORT}
            variants={staggerChildren(0.07)}
            className="mt-10 divide-y divide-line border-y border-line"
          >
            {benefits.map((benefit) => (
              <motion.li key={benefit.title} variants={fadeUp} className="flex gap-5 py-6">
                <IconBadge icon={benefit.icon} />
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.02em] sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed">{benefit.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delaySeconds={0.1} className="lg:sticky lg:top-28">
            <CashbackEstimator />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
