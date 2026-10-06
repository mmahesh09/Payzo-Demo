import { MotionConfig } from 'framer-motion';

import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { AppShowcase } from './sections/AppShowcase';
import { Benefits } from './sections/Benefits';
import { Features } from './sections/Features';
import { FinalCta } from './sections/FinalCta';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { HowToUse } from './sections/HowToUse';
import { WhatIsPayzo } from './sections/WhatIsPayzo';
import { WhyPayzo } from './sections/WhyPayzo';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <WhatIsPayzo />
        <HowItWorks />
        <AppShowcase />
        <Features />
        <HowToUse />
        <Benefits />
        <WhyPayzo />
        <FinalCta />
      </main>
      <Footer />
    </MotionConfig>
  );
}
