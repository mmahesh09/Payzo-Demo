import { formatPercent } from '../../lib/format';

export function CashbackPill({ rate }: { rate: number }) {
  return (
    <span className="shrink-0 rounded-full bg-success-50 px-2 py-1 text-[11px] font-semibold text-success-strong">
      {formatPercent(rate)} back
    </span>
  );
}
