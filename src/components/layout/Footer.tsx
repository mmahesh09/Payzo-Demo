import { footerColumns, LEGAL_ENTITY } from '../../data/navigation';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[0.9375rem] leading-relaxed">
              Instant cashback on every bill at local partner stores. Pay with UPI, cards or
              wallets, build streaks and unlock rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 min-[400px]:grid-cols-2 sm:grid-cols-3">
            {footerColumns.map((column) => {
              const headingId = `footer-${column.title.toLowerCase().replaceAll(' ', '-')}`;
              return (
                <nav key={column.title} aria-labelledby={headingId}>
                  <h2 id={headingId} className="text-sm font-semibold">
                    {column.title}
                  </h2>
                  <ul className="mt-4 space-y-1">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="inline-block py-1.5 text-[0.9375rem] [overflow-wrap:anywhere] text-body transition-colors duration-200 hover:text-primary"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted md:flex-row md:justify-between md:gap-12">
          <p>
            {LEGAL_ENTITY} © {CURRENT_YEAR} Payzo. All rights reserved.
          </p>
          <p className="max-w-xl md:text-right">
            Cashback rates vary by partner store. App screens shown are illustrative.
          </p>
        </div>
      </Container>
    </footer>
  );
}
