'use client';

import Link from 'next/link';
import {
  useEffect,
  useRef,
  useState,
  type FocusEvent as ReactFocusEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import { trackMenuClick } from '@/lib/analytics';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { IconSymbol, type IconSymbolKey } from '@/components/ui/IconSymbol';

type MenuChild = {
  label: string;
  href: string;
  description?: string;
};

type MenuItem = {
  label: string;
  href: string;
  icon: IconSymbolKey;
  description: string;
  cta?: { label: string; href: string };
  children?: MenuChild[];
};

const menuItems: MenuItem[] = [
  {
    label: 'Luxury Listings',
    href: '/listings',
    icon: '🏛️',
    description: 'Handpicked luxury estates, penthouses, and signature properties across Las Vegas.',
    cta: { label: 'Browse Listings', href: '/listings' },
    children: [
      {
        label: 'Active Listings',
        href: '/listings',
        description: 'Newest high-end homes with private showings available.',
      },
      {
        label: 'Luxury Communities',
        href: '/areas',
        description: 'Explore Summerlin, MacDonald Highlands, The Summit, and more.',
      },
      {
        label: 'Investment Properties',
        href: '/investing',
        description: 'Income-producing assets with curated ROI analysis.',
      },
      {
        label: 'Recent Sales',
        href: '/sold-listings',
        description: 'Proof of performance: notable recent closings and success stories.',
      },
    ],
  },
  {
    label: 'Buy',
    href: '/buying',
    icon: '🔑',
    description: 'White-glove guidance for buyers from home discovery to closing day.',
    cta: { label: 'Plan Your Purchase', href: '/buying' },
    children: [
      {
        label: 'Buyer Services',
        href: '/buying',
        description: 'Concierge search, private previews, and negotiation strategy.',
      },
      {
        label: 'Neighborhood Guides',
        href: '/communities',
        description: 'Lifestyle spotlights for Summerlin, Henderson, Downtown, and more.',
      },
      {
        label: 'First-Time Buyers',
        href: '/buyer-guide',
        description: 'Step-by-step playbook tailored to first-time homebuyers.',
      },
      {
        label: 'Off-Market Access',
        href: '/exclusive/off-market',
        description: 'Gain access to private listings before they reach the MLS.',
      },
    ],
  },
  {
    label: 'Sell',
    href: '/selling',
    icon: '🤝',
    description: 'Premium marketing and strategy to secure top dollar for your home.',
    cta: { label: 'Start Selling', href: '/selling' },
    children: [
      {
        label: 'Seller Services',
        href: '/selling',
        description: 'Listing launch strategy, staging, and concierge improvements.',
      },
      {
        label: 'Home Value Estimate',
        href: '/home-value',
        description: 'Pinpoint pricing with AI insights plus expert review.',
      },
      {
        label: 'Luxury Marketing',
        href: '/selling/luxury',
        description: 'Film-quality media, international syndication, and private events.',
      },
      {
        label: 'Why List With Us',
        href: '/why-list-with-us',
        description: 'See the proven approach behind $127M+ in sales volume.',
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    icon: '⚙️',
    description: 'Boutique real estate services for relocations, estates, and VIP clients.',
    cta: { label: 'View All Services', href: '/services' },
    children: [
      {
        label: 'Exclusive Access',
        href: '/exclusive',
        description: 'Private showings and confidentiality for high-profile clientele.',
      },
      {
        label: 'Estate Management',
        href: '/services/estate-management',
        description: 'Full-service care for secondary residences and investment assets.',
      },
      {
        label: 'VIP Client Services',
        href: '/exclusive/vip',
        description: 'Experiences tailored to busy executives and relocation teams.',
      },
      {
        label: 'Market Insights',
        href: '/market-insights',
        description: 'Weekly intelligence reports and upcoming development intel.',
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
    icon: '📚',
    description: 'Get to know Dr. Jan Duffy, the team, and community involvement.',
    cta: { label: 'Meet Dr. Duffy', href: '/about' },
    children: [
      {
        label: 'Our Story',
        href: '/about',
        description: 'Expert leadership backed by Berkshire Hathaway HomeServices.',
      },
      {
        label: 'Testimonials',
        href: '/testimonials',
        description: 'Client success stories from buyers, sellers, and investors.',
      },
      {
        label: 'Market Reports',
        href: '/blog',
        description: 'In-depth analysis of Las Vegas luxury market trends.',
      },
      {
        label: 'Contact',
        href: '/contact',
        description: 'Schedule a consultation or request bespoke guidance.',
      },
    ],
  },
];

interface DropdownMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
}

function DropdownMenu({ children, isOpen }: DropdownMenuProps) {
  if (!isOpen) return null;
  return (
    <div className='absolute top-full left-1/2 mt-3 w-[640px] max-w-[90vw] -translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 transition-all duration-300 opacity-100 visible translate-y-0'>
      {children}
    </div>
  );
}

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
      if (!event.matches) {
        setActiveDropdown(null);
      }
    };

    setIsDesktop(mediaQuery.matches);
    if (!mediaQuery.matches) {
      setActiveDropdown(null);
    }

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuContainerRef.current && !menuContainerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDesktop]);

  const handleMouseEnter = (label: string) => {
    if (!isDesktop) return;
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setActiveDropdown(null);
  };

  const handleFocus = (label: string) => {
    if (!isDesktop) return;
    setActiveDropdown(label);
  };

  const handleBlur = (event: ReactFocusEvent<HTMLLIElement>) => {
    if (!isDesktop) return;
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveDropdown(null);
    }
  };

  const handleKeyDown = (
    event: ReactKeyboardEvent<HTMLAnchorElement>,
    item: MenuItem
  ) => {
    if (!item.children) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (isDesktop) {
        setActiveDropdown((prev: string | null) => (prev === item.label ? null : item.label));
      } else {
        setActiveDropdown(item.label);
      }
    }
  };

  const navPadding = isScrolled ? 'py-3' : 'py-5';
  const navClasses = `sticky top-0 z-50 border-b backdrop-blur-md supports-[backdrop-filter]:bg-white/70 transition-all duration-300 ${
    isScrolled ? 'bg-white/90 shadow-md border-white/40' : 'bg-white shadow-lg/20 border-white/30'
  }`;

  const activeDropdownItem = menuItems.find((item) => item.label === activeDropdown);

  return (
    <>
      <nav
        id='navigation'
        className={`${navClasses} ${navPadding}`}
        role='navigation'
        aria-label='Main navigation'
      >
        <div className='container mx-auto px-4 sm:px-6'>
          <div
            className='flex min-w-0 items-center gap-3 sm:gap-6'
            ref={menuContainerRef}
          >
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link href='/' className='flex items-center gap-3 rounded-lg px-2 py-1 hover:bg-blue-50/60 transition-colors'>
                <div className='flex items-center justify-center w-8 h-8 bg-blue-600 rounded text-white text-sm font-bold shadow-md shadow-blue-500/20'>
                  BHHS
                </div>
                <div className='hidden sm:block text-lg font-bold text-amber-600 tracking-wide'>
                  Dr. Jan Duffy
                </div>
              </Link>
            </div>

            {/* Primary Navigation */}
            <div className='flex min-w-0 flex-1 justify-center'>
              <ul className='flex min-w-0 items-center gap-2 sm:gap-3 overflow-x-auto py-2 px-1 sm:px-2 w-full justify-start lg:justify-center scroll-smooth'>
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className='relative flex-shrink-0'
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    onFocus={() => handleFocus(item.label)}
                    onBlur={handleBlur}
                  >
                    <Link
                      href={item.href}
                      className='flex min-w-max items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 whitespace-nowrap text-sm tracking-wide'
                      aria-haspopup={item.children ? 'true' : undefined}
                      aria-expanded={item.children ? activeDropdown === item.label : undefined}
                      data-track='menu_click'
                      data-label={item.label}
                      data-path={item.href}
                      onClick={(event) => {
                        if (item.children) {
                          event.preventDefault();
                          setActiveDropdown((prev) => (prev === item.label ? null : item.label));
                        } else {
                          setActiveDropdown(null);
                        }
                        trackMenuClick(item.label, item.href);
                      }}
                      onKeyDown={(event: ReactKeyboardEvent<HTMLAnchorElement>) => handleKeyDown(event, item)}
                    >
                      <IconSymbol symbol={item.icon} className='h-4 w-4 text-blue-500' ariaLabel={`${item.label} icon`} />
                      {item.label}
                    </Link>
                    {item.children && isDesktop && (
                      <DropdownMenu isOpen={activeDropdown === item.label}>
                        <div className='grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 p-6'>
                          <div className='flex flex-col gap-3 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-6'>
                            <div className='flex items-center gap-3'>
                              <IconSymbol symbol={item.icon} className='h-6 w-6 text-blue-500' ariaLabel={`${item.label} summary icon`} />
                              <h3 className='text-sm font-semibold text-blue-900 uppercase tracking-[0.15em]'>
                                {item.label}
                              </h3>
                            </div>
                            <p className='text-sm text-gray-600 leading-relaxed'>
                              {item.description}
                            </p>
                            {item.cta && (
                              <Link
                                href={item.cta.href}
                                className='inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors'
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.cta.label}
                                <IconSymbol symbol='arrow' className='h-3 w-3' ariaLabel='Arrow right' />
                              </Link>
                            )}
                          </div>
                          <ul className='grid sm:grid-cols-2 gap-4'>
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className='block rounded-xl border border-transparent bg-white/60 px-4 py-3 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2'
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className='text-sm font-semibold text-gray-900 mb-1'>
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <p className='text-xs text-gray-600 leading-relaxed'>
                                      {child.description}
                                    </p>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </DropdownMenu>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className='flex items-center gap-2 sm:gap-3'>
              <Link
                href='tel:702-222-1964'
                className='flex lg:hidden items-center justify-center gap-2 bg-amber-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-xs uppercase tracking-wide shadow-md shadow-amber-500/20'
                aria-label='Call (702) 222-1964'
              >
                <IconSymbol symbol='phone' className='h-4 w-4' ariaLabel='Phone icon' />
                <span className='hidden sm:inline'>Call</span>
              </Link>
              <div className='hidden lg:flex items-center gap-2 sm:gap-3 ml-2 sm:ml-4'>
                <button
                  onClick={() => setIsConsultModalOpen(true)}
                  className='flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-xs sm:text-sm whitespace-nowrap tracking-wide shadow-md hover:shadow-lg shadow-blue-500/20'
                  aria-label='Schedule Consultation'
                >
                  Schedule Consultation
                </button>
                <Link
                  href='tel:702-222-1964'
                  className='flex items-center justify-center gap-2 bg-amber-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-xs sm:text-sm whitespace-nowrap tracking-wide shadow-md hover:shadow-lg shadow-amber-500/20'
                  aria-label='Call (702) 222-1964'
                >
                  <IconSymbol symbol='phone' className='h-4 w-4' ariaLabel='Phone icon' />
                  <span className='hidden sm:inline'>Call</span>
                </Link>
                <Link
                  href='sms:702-222-1964'
                  className='flex items-center justify-center gap-2 bg-white text-gray-900 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-xs sm:text-sm whitespace-nowrap tracking-wide border-2 border-gray-300 shadow-md hover:shadow-lg'
                  aria-label='Send Text to (702) 222-1964'
                >
                  <IconSymbol symbol='chat' className='h-4 w-4' ariaLabel='Text icon' />
                  <span className='hidden sm:inline'>Text</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown drawer */}
      {!isDesktop && activeDropdownItem?.children && (
        <>
          <div
            className='fixed inset-0 z-40 bg-black/40'
            onClick={() => setActiveDropdown(null)}
            aria-hidden='true'
          />
          <div
            className={`fixed left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl pt-6 pb-10 px-6 transition-transform duration-300 ${isScrolled ? 'top-16' : 'top-20'}`}
          >
            <div className='flex items-center justify-between mb-5'>
              <div className='flex items-center gap-3'>
                <IconSymbol symbol={activeDropdownItem.icon} className='h-6 w-6 text-blue-500' ariaLabel={`${activeDropdownItem.label} icon`} />
                <div>
                  <h3 className='text-base font-semibold text-gray-900'>
                    {activeDropdownItem.label}
                  </h3>
                  <p className='text-xs text-gray-500 max-w-xs'>
                    {activeDropdownItem.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveDropdown(null)}
                className='rounded-full p-2 text-gray-500 hover:bg-gray-100'
                aria-label='Close menu section'
              >
                <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <div className='space-y-4'>
              {activeDropdownItem.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setActiveDropdown(null)}
                  className='block rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-4'
                >
                  <div className='text-sm font-semibold text-gray-900 mb-1'>
                    {child.label}
                  </div>
                  {child.description && (
                    <p className='text-xs text-gray-600 leading-relaxed'>
                      {child.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            {activeDropdownItem.cta && (
              <Link
                href={activeDropdownItem.cta.href}
                onClick={() => setActiveDropdown(null)}
                className='mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20'
              >
                {activeDropdownItem.cta.label}
                <IconSymbol symbol='arrow' className='h-3 w-3' ariaLabel='Arrow right' />
              </Link>
            )}
          </div>
        </>
      )}

      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        source='header'
      />
    </>
  );
}
