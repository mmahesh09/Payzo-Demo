import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { businesses, examplePayment } from '../../data/app';
import { formatCurrency } from '../../lib/format';
import { EASE_OUT_EXPO } from '../../lib/motion';
import { AppScreen } from '../phone/AppScreen';
import { PhoneMockup } from '../phone/PhoneMockup';

const featuredBusiness = businesses[examplePayment.businessId];

/** Two overlapping phones that bleed off the bottom of the hero panel. */
export function HeroVisual() {
  return (
    <div className="relative flex h-[430px] justify-center sm:h-[500px] lg:h-[600px]">
      <div className="relative -translate-x-[22%]">
        <motion.div
          initial={{ opacity: 0, y: 48, rotate: 9 }}
          animate={{ opacity: 1, y: 0, rotate: 9 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.3 }}
          className="absolute top-20 left-[58%] origin-top-left"
        >
          <PhoneMockup
            label="Payzo cashback wallet with balance, monthly chart and history"
            className="[--phone-scale:0.62] sm:[--phone-scale:0.8] lg:[--phone-scale:0.74] xl:[--phone-scale:0.86]"
          >
            <AppScreen screenId="cashback" />
          </PhoneMockup>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.15 }}
          className="relative"
        >
          <PhoneMockup
            label="Payzo home screen showing a ₹1,284.50 cashback balance, a 7-payment streak and nearby partner stores"
            className="[--phone-scale:0.72] sm:[--phone-scale:0.9] lg:[--phone-scale:0.86] xl:[--phone-scale:1]"
          >
            <AppScreen screenId="home" />
          </PhoneMockup>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.7 }}
          className="absolute top-[62%] -left-2 flex items-center gap-3 rounded-2xl bg-white py-3 pr-5 pl-3 shadow-lifted ring-1 ring-line sm:-left-24 lg:-left-16 xl:-left-40"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-success text-white">
            <Check className="size-[18px]" strokeWidth={2.5} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-ink">Cashback credited</span>
            <span className="block text-xs text-muted">
              +{formatCurrency(examplePayment.cashback)} · {featuredBusiness.name}
            </span>
          </span>
        </motion.div>

        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
          animate={{ opacity: 1, scale: 1, rotate: 8 }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.9 }}
          className="absolute top-10 -right-[62%] hidden rounded-full bg-success-300 px-4 py-2 text-sm font-bold text-ink shadow-lifted sm:block lg:-right-[48%] xl:-right-[62%]"
        >
          No waiting!
        </motion.span>
      </div>
    </div>
  );
}
