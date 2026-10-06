import { Check, Sparkles } from 'lucide-react';

import { businesses, examplePayment } from '../../../data/app';
import { formatCurrency } from '../../../lib/format';
import { AppButton } from '../AppButton';
import { AppCard } from '../AppCard';
import { DetailRow } from '../DetailRow';
import { ScreenBody } from '../ScreenBody';

const business = businesses[examplePayment.businessId];

const RECEIPT_DETAILS = [
  { label: 'Date', value: 'Today, 20:24' },
  { label: 'Paid with', value: examplePayment.methodLabel },
  { label: 'Reference', value: 'PZ-20481' },
];

export function PaymentSuccessScreen() {
  return (
    <ScreenBody className="items-center pt-8 pb-7 text-center">
      <span className="grid size-20 place-items-center rounded-full bg-success-50">
        <span className="grid size-14 place-items-center rounded-full bg-success text-white">
          <Check className="size-7" strokeWidth={3} />
        </span>
      </span>

      <div>
        <p className="text-[22px] font-bold tracking-[-0.025em]">Payment complete</p>
        <p className="mt-1 text-[12.5px] text-muted">
          {formatCurrency(examplePayment.amount)} paid to {business.name}
        </p>
      </div>

      <AppCard className="w-full divide-y divide-line px-3 text-left">
        {RECEIPT_DETAILS.map((detail) => (
          <DetailRow key={detail.label} label={detail.label} value={detail.value} />
        ))}
      </AppCard>

      <div className="flex w-full items-center gap-3 rounded-2xl bg-primary p-3 text-left text-white">
        <span className="grid size-9 place-items-center rounded-xl bg-white/15">
          <Sparkles className="size-[18px]" />
        </span>
        <div>
          <p className="text-[14px] font-bold">
            +{formatCurrency(examplePayment.cashback)} cashback
          </p>
          <p className="text-[11px] text-white/75">Credited to your wallet instantly</p>
        </div>
      </div>

      <AppButton variant="secondary" className="mt-auto">
        Done
      </AppButton>
    </ScreenBody>
  );
}
