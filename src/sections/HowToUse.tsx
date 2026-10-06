import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { ButtonLink } from '../components/common/ButtonLink';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { DOWNLOAD_HREF } from '../data/navigation';
import { gettingStartedSteps } from '../data/steps';
import { fadeUp, REVEAL_VIEWPORT, staggerChildren } from '../lib/motion';

export function HowToUse() {
  return (
    <Section id="how-to-use" labelledBy="how-to-use-title" tone="canvas">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="how-to-use-title"
            eyebrow="How to use"
            title="Start earning in four steps."
          />
          <Reveal delaySeconds={0.1}>
            <ButtonLink href={DOWNLOAD_HREF} variant="secondary" trailingIcon={ArrowRight}>
              Download app
            </ButtonLink>
          </Reveal>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={staggerChildren(0.08)}
          className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {gettingStartedSteps.map((step, index) => (
            <motion.li key={step.title} variants={fadeUp} className="border-t-2 border-ink pt-6">
              <span
                aria-hidden="true"
                className="block text-[4.5rem] leading-none font-extrabold tracking-[-0.06em] text-primary-200 tabular-nums sm:text-[5.5rem]"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  );
}
