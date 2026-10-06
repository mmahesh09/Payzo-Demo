const LOCALE = 'en-IN';
const CURRENCY = 'INR';

const currencyFormatter = new Intl.NumberFormat(LOCALE, {
  style: 'currency',
  currency: CURRENCY,
});

const wholeCurrencyFormatter = new Intl.NumberFormat(LOCALE, {
  style: 'currency',
  currency: CURRENCY,
  maximumFractionDigits: 0,
});

export function formatCurrency(amount: number): string {
  return currencyFormatter.format(amount);
}

export function formatWholeCurrency(amount: number): string {
  return wholeCurrencyFormatter.format(amount);
}

export function formatPercent(rate: number): string {
  return `${rate}%`;
}
