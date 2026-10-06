import { Flame, MapPin, Smartphone, Zap, type LucideIcon } from 'lucide-react';

import { Container } from '../common/Container';
import { IconBadge } from '../common/IconBadge';

interface TrustPoint {
  icon: LucideIcon;
  label: string;
}

const TRUST_POINTS: TrustPoint[] = [
  { icon: Zap, label: 'Instant cashback on every bill' },
  { icon: Smartphone, label: 'Pay with UPI, cards or wallets' },
  { icon: Flame, label: 'Streaks that unlock rewards' },
  { icon: MapPin, label: 'Partner stores near you' },
];

export function TrustStrip() {
  return (
    <Container>
      <ul
        aria-label="What you get with Payzo"
        className="grid gap-x-8 gap-y-5 border-b border-line py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10"
      >
        {TRUST_POINTS.map((point) => (
          <li
            key={point.label}
            className="flex items-center gap-3 text-[0.9375rem] leading-snug font-medium text-ink"
          >
            <IconBadge icon={point.icon} />
            {point.label}
          </li>
        ))}
      </ul>
    </Container>
  );
}
