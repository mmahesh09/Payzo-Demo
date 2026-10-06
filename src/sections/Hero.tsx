import { motion } from 'framer-motion';
import { ArrowRight, IndianRupee } from 'lucide-react';

import { ButtonLink } from '../components/common/ButtonLink';
import { Container } from '../components/common/Container';
import { HeroVisual } from '../components/hero/HeroVisual';
import { TrustStrip } from '../components/hero/TrustStrip';
import { TextRotate } from '../components/ui/TextRotate';
import { RevealGroup, RevealWord } from '../components/ui/WordReveal';
import { DOWNLOAD_HREF } from '../data/navigation';
import { fadeUp, staggerChildren } from '../lib/motion';

const HEADLINE_WORDS = ['Instant', 'cashback', 'on', 'every'];
const STORE_TYPES = [
  'restaurant',
  'car wash',
  'grocery store',
  'clothing shop',
  'vegetable market',
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="bg-white pt-[76px]">
      <div className="px-2 sm:px-4">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[28px] bg-primary sm:rounded-[40px]">
          <span aria-hidden="true" className="bg-grid-faint pointer-events-none absolute inset-0" />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[8%] -right-[12%] aspect-square w-[70%] rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.16),transparent)]"
          />

          <Container className="relative grid gap-12 pt-12 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-4 lg:pt-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren(0.09, 0.05)}
              className="lg:pb-28"
            >
              <motion.p
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/20"
              >
                <span aria-hidden="true" className="size-2 rounded-full bg-success-300" />
                Cashback at local partner stores
              </motion.p>

              <h1
                id="hero-title"
                className="mt-6 text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-white"
              >
                <span className="sr-only">Instant cashback on every spend.</span>
                <RevealGroup trigger="mount" delaySeconds={0.15}>
                  {HEADLINE_WORDS.map((word) => (
                    <RevealWord key={word}>{word}</RevealWord>
                  ))}
                  <RevealWord>
                    <span className="inline-grid size-[0.82em] -rotate-12 place-items-center rounded-full bg-success-300 align-middle text-ink">
                      <IndianRupee className="size-[0.5em]" strokeWidth={3} />
                    </span>
                  </RevealWord>
                  <RevealWord>spend.</RevealWord>
                </RevealGroup>
              </h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/90"
              >
                Explore local stores and earn instant cashback on every bill, small or big. It's
                credited right after you pay.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-base font-medium text-white/90"
              >
                Earn at your local
                <TextRotate
                  words={STORE_TYPES}
                  className="rounded-full bg-white px-3.5 py-1 font-semibold text-primary-strong"
                />
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={DOWNLOAD_HREF}
                  variant="inverse"
                  size="lg"
                  trailingIcon={ArrowRight}
                >
                  Download app
                </ButtonLink>
                <ButtonLink href="#how-it-works" variant="outlineInverse" size="lg">
                  See how it works
                </ButtonLink>
              </motion.div>
            </motion.div>

            <HeroVisual />
          </Container>
        </div>
      </div>

      <TrustStrip />
    </section>
  );
}
