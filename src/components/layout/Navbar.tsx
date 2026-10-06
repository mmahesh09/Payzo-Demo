import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, type FocusEvent, type Ref } from 'react';

import { DOWNLOAD_HREF, primaryNavLinks } from '../../data/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { useNavScroll } from '../../hooks/useNavScroll';
import { cn } from '../../lib/cn';
import { EASE_OUT_EXPO } from '../../lib/motion';
import { ButtonLink } from '../common/ButtonLink';
import { Logo } from '../common/Logo';
import { MobileMenu } from './MobileMenu';

const MOBILE_MENU_ID = 'mobile-menu';
const SECTION_IDS = primaryNavLinks.map((link) => link.href.slice(1));
const SLIDE_TRANSITION = { duration: 0.35, ease: EASE_OUT_EXPO };

export function Navbar() {
  const { isOpen: isMenuOpen, toggleRef, toggle: toggleMenu, close: closeMenu } = useMobileMenu();
  const { isScrolled, isHidden } = useNavScroll();
  const activeSectionId = useActiveSection(SECTION_IDS);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);

  const isRaised = isScrolled || isMenuOpen;
  const shouldHide = isHidden && !isMenuOpen && !hasFocusWithin;

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setHasFocusWithin(false);
  };

  return (
    <motion.header
      initial={false}
      animate={{ y: shouldHide ? '-120%' : '0%' }}
      transition={SLIDE_TRANSITION}
      onFocus={() => setHasFocusWithin(true)}
      onBlur={handleBlur}
      className="fixed inset-x-0 top-0 z-50 px-2 pt-2 sm:px-4 sm:pt-3"
    >
      <AnimatePresence>
        {isMenuOpen ? (
          <MobileMenu
            id={MOBILE_MENU_ID}
            activeSectionId={activeSectionId}
            onNavigate={closeMenu}
          />
        ) : null}
      </AnimatePresence>

      <div
        className={cn(
          'relative z-10 mx-auto flex h-[60px] max-w-[1208px] items-center justify-between gap-4 rounded-full pr-2 pl-2 sm:pl-4',
          'transition-[background-color,box-shadow] duration-300',
          isRaised
            ? 'bg-white/85 shadow-soft ring-1 ring-line backdrop-blur-xl'
            : 'bg-transparent ring-1 ring-transparent',
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul
            className={cn(
              'flex items-center gap-0.5 rounded-full p-1 ring-1 transition-colors duration-300',
              isRaised ? 'bg-canvas ring-transparent' : 'bg-white/70 ring-line',
            )}
          >
            {primaryNavLinks.map((link) => {
              const isActive = activeSectionId === link.href.slice(1);
              return (
                <li key={link.href} className="relative">
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={SLIDE_TRANSITION}
                      className="absolute inset-0 rounded-full bg-white shadow-soft ring-1 ring-line"
                    />
                  ) : null}
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'relative block rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors duration-200',
                      isActive ? 'text-ink' : 'text-body hover:text-ink',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="max-[379px]:hidden">
            <ButtonLink href={DOWNLOAD_HREF} trailingIcon={ArrowRight}>
              Download app
            </ButtonLink>
          </span>
          <MenuToggle ref={toggleRef} isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>
      </div>
    </motion.header>
  );
}

interface MenuToggleProps {
  ref: Ref<HTMLButtonElement>;
  isOpen: boolean;
  onToggle: () => void;
}

function MenuToggle({ ref, isOpen, onToggle }: MenuToggleProps) {
  const lineClasses =
    'absolute top-1/2 left-0 -mt-px h-0.5 w-full rounded-full bg-ink transition-transform duration-300 ease-(--ease-out-expo)';

  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={isOpen}
      aria-controls={MOBILE_MENU_ID}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      onClick={onToggle}
      className="grid size-11 cursor-pointer place-items-center rounded-full bg-white ring-1 ring-line transition-colors duration-200 hover:bg-primary-50 lg:hidden"
    >
      <span aria-hidden="true" className="relative block h-3 w-[18px]">
        <span className={cn(lineClasses, isOpen ? 'rotate-45' : '-translate-y-[4px]')} />
        <span className={cn(lineClasses, isOpen ? '-rotate-45' : 'translate-y-[4px]')} />
      </span>
    </button>
  );
}
