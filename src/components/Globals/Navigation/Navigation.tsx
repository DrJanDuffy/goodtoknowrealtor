'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackMenuClick } from '@/lib/analytics';
// ConsultationModal removed - using direct Call/Text CTAs instead

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
    <div className='absolute top-full left-0 mt-3 w-80 bg-white rounded-lg shadow-2xl border border-gray-100 z-50 transition-all duration-300 opacity-100 visible translate-y-0'>
      {children}
    </div>
  );
}

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav id="navigation" className='bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200' role='navigation' aria-label='Main navigation'>
        <div className='container mx-auto px-6'>
          <div className='flex items-center justify-between h-20 w-full'>
            {/* Logo */}
            <div className='flex items-center'>
              <Link href='/' className='flex items-center hover:opacity-80 transition-opacity'>
                <div className='flex items-center space-x-3'>
                  <div className='flex items-center justify-center w-8 h-8 bg-blue-600 rounded text-white text-sm font-bold'>
                    BHHS
                  </div>
                  <div className='text-lg font-bold text-amber-600'>
                    Dr. Jan Duffy
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-4 flex-1 justify-center max-w-5xl' role='navigation' aria-label='Primary'>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className='relative'
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={item.href}
                    className='text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 px-2 sm:px-3 py-3 rounded-lg hover:bg-gray-50 whitespace-nowrap text-sm tracking-wide'
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
                      <ul aria-label={`${item.label} submenu`} className='py-2 list-none'>
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className='block px-6 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-300 whitespace-nowrap font-medium border-b border-gray-50 last:border-b-0'
                              data-track='menu_click'
                              data-label={child.label}
                              data-path={child.href}
                              onClick={() => {
                                trackMenuClick(child.label, child.href);
                                closeMobileMenu();
                              }}
                            >
                              {child.label}
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
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* CTA Buttons - Call (Primary) and Text (Secondary) - Desktop Only */}
            <div className='hidden lg:flex items-center gap-2 sm:gap-3 ml-2 sm:ml-4'>
              <Link
                href='tel:702-222-1964'
                className='flex items-center justify-center gap-2 bg-amber-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-xs sm:text-sm whitespace-nowrap tracking-wide shadow-md hover:shadow-lg'
                aria-label="Call (702) 222-1964"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className='hidden sm:inline'>Call</span>
              </Link>
              <Link
                href='sms:702-222-1964'
                className='flex items-center justify-center gap-2 bg-white text-gray-900 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-xs sm:text-sm whitespace-nowrap tracking-wide border-2 border-gray-300 shadow-md hover:shadow-lg'
                aria-label="Send Text to (702) 222-1964"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className='hidden sm:inline'>Text</span>
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
          className='fixed top-20 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto transition-transform duration-300'
        >
            <div className='p-6'>
              {/* Mobile CTA Buttons */}
              <div className='flex flex-col gap-3 mb-6 pb-6 border-b border-gray-200'>
                <Link
                  href='tel:702-222-1964'
                  onClick={closeMobileMenu}
                  className='flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md'
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (702) 222-1964
                </Link>
                <Link
                  href='sms:702-222-1964'
                  onClick={closeMobileMenu}
                  className='flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-300 shadow-md'
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Send Text
                </Link>
              </div>

              {/* Mobile Menu Items */}
              <nav className='space-y-1' role='navigation' aria-label='Mobile navigation'>
                {menuItems.map((item, index) => (
                  <div key={index} className='mb-2'>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className='block px-4 py-3 text-gray-900 font-semibold hover:bg-gray-50 rounded-lg transition-colors'
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && item.children && (
                      <div className='ml-4 mt-1 space-y-1'>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors'
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
    </>
  );
}
