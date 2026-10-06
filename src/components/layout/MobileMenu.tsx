import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { DOWNLOAD_HREF, primaryNavLinks } from '../../data/navigation';
import { cn } from '../../lib/cn';
import { EASE_OUT_EXPO, fadeUp, staggerChildren } from '../../lib/motion';
import { ButtonLink } from '../common/ButtonLink';
import { Container } from '../common/Container';

interface MobileMenuProps {
  id: string;
  activeSectionId: string | null;
  onNavigate: () => void;
}

export function MobileMenu({ id, activeSectionId, onNavigate }: MobileMenuProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
      className="fixed inset-0 overflow-y-auto bg-white lg:hidden"
    >
      <Container className="flex min-h-full flex-col pt-24 pb-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren(0.05, 0.05)}
          className="flex flex-1 flex-col"
        >
          <nav aria-label="Mobile">
            <ul className="border-t border-line">
              {primaryNavLinks.map((link, index) => {
                const isActive = activeSectionId === link.href.slice(1);
                return (
                  <motion.li key={link.href} variants={fadeUp} className="border-b border-line">
                    <a
                      href={link.href}
                      onClick={onNavigate}
                      aria-current={isActive ? 'location' : undefined}
                      className="group flex items-center gap-4 py-5"
                    >
                      <span className="w-7 text-sm font-semibold text-muted tabular-nums">
                        0{index + 1}
                      </span>
                      <span
                        className={cn(
                          'flex-1 text-[1.75rem] leading-tight font-bold tracking-[-0.03em]',
                          isActive ? 'text-primary' : 'text-ink',
                        )}
                      >
                        {link.label}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <motion.div variants={fadeUp} className="mt-auto pt-10">
            <div className="rounded-[24px] bg-primary p-6 text-white">
              <p className="font-display text-xl font-bold tracking-[-0.02em]">
                Instant cashback on every spend.
              </p>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/90">
                Pay at local partner stores and get cashback right after payment.
              </p>
              <ButtonLink
                href={DOWNLOAD_HREF}
                variant="inverse"
                size="lg"
                onClick={onNavigate}
                className="mt-5 w-full"
              >
                Download app
              </ButtonLink>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
}
