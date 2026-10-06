export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const DOWNLOAD_HREF = '#download';

/** Store listings and vendor pages live on payzopartner.com. */
export const APP_DOWNLOAD_URL = 'https://www.payzopartner.com/';
export const PARTNER_URL = 'https://www.payzopartner.com/';
export const CONTACT_EMAIL = 'hello@payzopartner.com';
export const LEGAL_ENTITY = 'BISSI YAAZI TECHNOLOGIES PVT. LTD.';

export const primaryNavLinks: NavLink[] = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Premium', href: '#premium' },
];

/** Paths mirror payzopartner.com; confirm final URLs with the client. */
export const footerColumns: FooterColumn[] = [
  {
    title: 'For vendors',
    links: [
      { label: 'Partner with us', href: PARTNER_URL },
      { label: 'Add your store', href: PARTNER_URL },
      { label: 'How it works', href: '#how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#what-is-payzo' },
      { label: 'Book a call', href: `mailto:${CONTACT_EMAIL}` },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms & conditions', href: '/terms' },
      { label: 'SLA agreement', href: '/sla' },
      { label: 'Cancellation & refund', href: '/refund' },
      { label: 'Delete account', href: '/delete-account' },
    ],
  },
];
