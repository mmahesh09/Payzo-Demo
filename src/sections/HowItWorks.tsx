import { AnimatePresence, motion } from 'framer-motion';

import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { SectionHeading } from '../components/common/SectionHeading';
import { AppScreen } from '../components/phone/AppScreen';
import { PhoneMockup } from '../components/phone/PhoneMockup';
import { journeySteps } from '../data/steps';
import { useRovingTabs } from '../hooks/useRovingTabs';
import { cn } from '../lib/cn';
import { EASE_OUT_EXPO } from '../lib/motion';

const PANEL_ID = 'journey-step-panel';

function getTabId(stepId: string) {
  return `journey-tab-${stepId}`;
}

export function HowItWorks() {
  const { activeIndex, setActiveIndex, handleKeyDown, registerTab } = useRovingTabs(
    journeySteps.length,
  );
  const activeStep = journeySteps[activeIndex];

  return (
    <Section id="how-it-works" labelledBy="how-it-works-title" tone="canvas">
      <Container>
        <SectionHeading
          id="how-it-works-title"
          eyebrow="How Payzo works"
          title="Discover. Choose. Pay. Earn."
          description="From finding a partner store to cashback in your wallet. Select a step to see it in the app."
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div
            role="tablist"
            aria-label="Payzo journey steps"
            className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1"
          >
            {journeySteps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={step.id}
                  ref={registerTab(index)}
                  id={getTabId(step.id)}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={PANEL_ID}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={handleKeyDown}
                  className={cn(
                    'flex cursor-pointer flex-col items-start gap-1 rounded-2xl p-4 text-left transition-[background-color,box-shadow] duration-200 lg:flex-row lg:gap-6 lg:rounded-[24px] lg:p-6',
                    isActive ? 'bg-white shadow-soft ring-1 ring-line' : 'hover:bg-white/70',
                  )}
                >
                  <span
                    className={cn(
                      'text-sm font-semibold tabular-nums lg:pt-1.5',
                      isActive ? 'text-primary' : 'text-muted',
                    )}
                  >
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-lg font-bold tracking-[-0.02em] text-ink lg:text-[1.75rem] lg:tracking-[-0.03em]">
                      {step.title}
                    </span>
                    <span className="mt-1 hidden text-base text-body lg:block">{step.summary}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={PANEL_ID}
            aria-labelledby={getTabId(activeStep.id)}
            tabIndex={0}
            className="mx-auto rounded-[32px]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="flex flex-col items-center gap-6"
              >
                <PhoneMockup
                  label={activeStep.screenLabel}
                  className="[--phone-scale:0.82] sm:[--phone-scale:0.9] lg:[--phone-scale:0.95]"
                >
                  <AppScreen screenId={activeStep.screenId} />
                </PhoneMockup>
                <p className="max-w-[22rem] text-center text-base leading-relaxed">
                  {activeStep.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
