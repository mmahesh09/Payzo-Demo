import { Download } from 'lucide-react';

import { ButtonLink } from '../components/common/ButtonLink';
import { Container } from '../components/common/Container';
import { Reveal } from '../components/common/Reveal';
import { AppScreen } from '../components/phone/AppScreen';
import { PhoneMockup } from '../components/phone/PhoneMockup';
import { SplitReveal } from '../components/ui/WordReveal';
import { APP_DOWNLOAD_URL, PARTNER_URL } from '../data/navigation';

export function FinalCta() {
  return (
    <section
      id="download"
      aria-labelledby="final-cta-title"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <Reveal className="relative overflow-hidden rounded-[32px] bg-ink px-6 pt-14 text-white sm:px-12 sm:pt-16 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-8 lg:px-16 lg:pt-0">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-48 -left-24 size-[480px] rounded-full bg-primary/25"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-56 size-[460px] rounded-full bg-primary/55"
          />

          <div className="relative lg:self-center lg:py-20">
            <h2
              id="final-cta-title"
              className="text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] font-bold tracking-[-0.04em] text-white"
            >
              <SplitReveal
                text="Start earning on"
                accent="your next bill."
                accentClassName="text-success-300"
                delaySeconds={0.2}
              />
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
              Download the Payzo app, find a partner store nearby and get instant cashback every
              time you pay.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={APP_DOWNLOAD_URL}
                variant="primary"
                size="lg"
                trailingIcon={Download}
              >
                Download app
              </ButtonLink>
              <ButtonLink href={PARTNER_URL} variant="outlineInverse" size="lg">
                Partner with us
              </ButtonLink>
            </div>
          </div>

          <div className="relative mt-12 flex h-[372px] justify-center overflow-hidden sm:h-[420px] lg:mt-16 lg:h-[500px]">
            <PhoneMockup
              label="Payzo payment complete screen with ₹14.70 cashback credited instantly"
              className="[--phone-scale:0.8] sm:[--phone-scale:0.9] lg:[--phone-scale:0.95]"
            >
              <AppScreen screenId="success" />
            </PhoneMockup>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
