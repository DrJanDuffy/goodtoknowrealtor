'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackMenuClick } from '@/lib/analytics';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

// Simplified navigation structure - 5 items max to reduce decision paralysis
const menuItems = [
  {
    label: 'Luxury Listings',
    href: '/listings',
    hasDropdown: true,
    children: [
      { label: 'Active Listings', href: '/listings' },
      { label: 'Luxury Communities', href: '/luxury/communities' },
      { label: 'Investment Properties', href: '/luxury/investment' },
      { label: 'Recent Sales', href: '/sold-listings' },
    ],
  },
  {
    label: 'Buy',
    href: '/buying',
    hasDropdown: true,
    children: [
      { label: 'Buy a Home', href: '/buying' },
      { label: 'Neighborhood Guides', href: '/communities' },
      { label: 'First-Time Buyers', href: '/buyer-guide' },
      { label: 'Off-Market Properties', href: '/exclusive/off-market' },
    ],
  },
  {
    label: 'Sell',
    href: '/selling',
    hasDropdown: true,
    children: [
      { label: 'Sell a Home', href: '/selling' },
      { label: 'Home Value Estimate', href: '/home-value' },
      { label: 'Luxury Marketing', href: '/selling/luxury' },
      { label: 'Why List With Us', href: '/why-list-with-us' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    children: [
      { label: 'Exclusive Access', href: '/exclusive' },
      { label: 'Private Showings', href: '/exclusive/showings' },
      { label: 'VIP Client Services', href: '/exclusive/vip' },
      { label: 'Estate Management', href: '/services/estate-management' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    hasDropdown: true,
    children: [
      { label: 'Dr. Jan Duffy', href: '/about' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Market Insights', href: '/blog' },
      { label: 'Contact', href: '/contact' },
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
    <div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 z-50 transition-all duration-300 opacity-100 visible translate-y-0 before:content-[""] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white'>
      {children}
    </div>
  );
}

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav id="navigation" className='bg-white shadow-md sticky top-0 z-50 border-b border-gray-100' role='navigation' aria-label='Main navigation'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='flex items-center justify-between h-24 w-full'>
            {/* Logo */}
            <div className='flex items-center'>
              <Link href='/' className='flex items-center hover:opacity-90 transition-all duration-300'>
                <div className='flex items-center gap-4'>
                  {/* BHHS Logo */}
                  <img
                    src='/images/bhhs/logo.svg'
                    alt='Berkshire Hathaway HomeServices'
                    className='h-12 w-auto'
                  />
                  {/* Agent Name */}
                  <div className='hidden sm:flex flex-col border-l-2 border-gray-300 pl-4'>
                    <span className='text-xl font-serif font-semibold text-gray-900 tracking-tight leading-tight'>
                      Dr. Jan Duffy
                    </span>
                    <span className='text-xs text-gray-600 tracking-wide uppercase'>
                      Luxury Real Estate
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-1 flex-1 justify-center max-w-4xl' role='navigation' aria-label='Primary'>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className='relative group'
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={item.href}
                    className='relative text-gray-800 hover:text-blue-700 font-medium transition-all duration-300 px-4 py-2 whitespace-nowrap text-sm tracking-wide uppercase after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-3/4'
                    aria-haspopup={item.hasDropdown}
                    data-track='menu_click'
                    data-label={item.label}
                    data-path={item.href}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setActiveDropdown((prev) => (prev === item.label ? null : item.label));
                      }
                      trackMenuClick(item.label, item.href);
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <DropdownMenu
                      isOpen={activeDropdown === item.label}
                    >
                      <ul aria-label={`${item.label} submenu`} className='py-3 list-none'>
                        {item.children?.map((child, idx) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className='group block px-6 py-3.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 whitespace-nowrap font-medium border-b border-gray-100 last:border-b-0 first:rounded-t-xl last:rounded-b-xl relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-700 before:transform before:scale-y-0 before:transition-transform before:duration-200 hover:before:scale-y-100'
                              data-track='menu_click'
                              data-label={child.label}
                              data-path={child.href}
                              onClick={() => {
                                trackMenuClick(child.label, child.href);
                                closeMobileMenu();
                              }}
                            >
                              <span className='relative z-10'>{child.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </DropdownMenu>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className='lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors'
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={String(isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* CTA Buttons - Schedule Consultation, Call (Primary), and Text (Secondary) - Desktop Only */}
            <div className='hidden lg:flex items-center gap-3 ml-4'>
              <button
                onClick={() => setIsConsultModalOpen(true)}
                className='flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm whitespace-nowrap tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transform'
                aria-label="Schedule Consultation"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Consultation
              </button>
              <Link
                href='tel:702-222-1964'
                className='flex items-center justify-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 text-sm whitespace-nowrap tracking-wide border-2 border-blue-600 shadow-md hover:shadow-lg hover:scale-105 transform'
                aria-label="Call (702) 222-1964"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(702) 222-1964</span>
              </Link>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300'
          onClick={closeMobileMenu}
          aria-hidden='true'
        />
      )}

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          className='fixed top-24 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto transition-transform duration-300 border-l border-gray-200'
        >
            <div className='p-6'>
              {/* Mobile CTA Buttons */}
              <div className='flex flex-col gap-3 mb-6 pb-6 border-b border-gray-200'>
                <button
                  onClick={() => {
                    setIsConsultModalOpen(true);
                    closeMobileMenu();
                  }}
                  className='flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg'
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Consultation
                </button>
                <Link
                  href='tel:702-222-1964'
                  onClick={closeMobileMenu}
                  className='flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 border-2 border-blue-600 shadow-md'
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (702) 222-1964
                </Link>
              </div>

              {/* Mobile Menu Items */}
              <nav className='space-y-2' role='navigation' aria-label='Mobile navigation'>
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className='block px-4 py-3 text-gray-900 font-semibold hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-all duration-200 uppercase text-sm tracking-wide'
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && item.children && (
                      <div className='ml-2 mt-1 space-y-1 pl-4 border-l-2 border-gray-200'>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className='block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-all duration-200 font-medium'
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        source="header"
      />
    </>
  );
}
