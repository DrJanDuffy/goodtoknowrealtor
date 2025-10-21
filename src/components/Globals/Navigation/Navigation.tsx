'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackMenuClick } from '@/lib/analytics';

// Define menu structure matching IS Luxury's sophisticated navigation
const menuItems = [
  {
    label: 'Our Luxury Listings',
    href: '/listings',
    hasDropdown: true,
    children: [
      { label: 'Active Listings', href: '/listings' },
      { label: 'High Rise / Condos', href: '/luxury/condos' },
      { label: 'Land For Sale', href: '/luxury/land' },
      { label: 'Commercial Properties', href: '/luxury/commercial' },
      { label: 'Investment Properties', href: '/luxury/investment' },
      { label: 'Rental Properties', href: '/luxury/rentals' },
      { label: 'Virtual Tours', href: '/luxury/virtual-tours' },
      { label: 'Luxury Developments', href: '/luxury/developments' },
      { label: 'Recent Sales', href: '/sold-listings' },
    ],
  },
  {
    label: 'Buy a Home',
    href: '/buying',
    hasDropdown: true,
    children: [
      { label: 'Neighborhood Guides', href: '/communities' },
      { label: 'MLS Search', href: '/listings' },
      { label: 'Luxury Communities', href: '/luxury/communities' },
      { label: 'First-Time Buyers', href: '/buyer-guide' },
    ],
  },
  {
    label: 'Sell a Home',
    href: '/selling',
    hasDropdown: true,
    children: [
      { label: 'Sell My Luxury House', href: '/selling/luxury' },
      { label: 'Home Value Estimate', href: '/home-value' },
      { label: 'Why List With Dr. Duffy', href: '/why-list-with-us' },
      { label: 'Cash Offer Program', href: '/cash-offer' },
    ],
  },
  {
    label: 'Exclusive Access',
    href: '/exclusive',
    hasDropdown: true,
    children: [
      { label: 'Off-Market Properties', href: '/exclusive/off-market' },
      { label: 'Pre-Market Listings', href: '/exclusive/pre-market' },
      { label: 'Private Showings', href: '/exclusive/showings' },
      { label: 'VIP Client Services', href: '/exclusive/vip' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    hasDropdown: true,
    children: [
      { label: 'Dr. Jan Duffy', href: '/about' },
      { label: 'Our Team', href: '/about/team' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Our Partners', href: '/about/partners' },
      { label: 'Luxury Estate Management', href: '/services/estate-management' },
      { label: 'Market Insights', href: '/blog' },
    ],
  },
  {
    label: 'Press & Media',
    href: '/press',
    hasDropdown: true,
    children: [
      { label: 'Recent Press', href: '/press/recent' },
      { label: 'Media Kit', href: '/press/media-kit' },
      { label: 'Speaking Engagements', href: '/press/speaking' },
    ],
  },
  {
    label: 'Preferred Vendors',
    href: '/vendors',
    hasDropdown: false,
  },
];


interface DropdownMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
}

function DropdownMenu({ children, isOpen }: DropdownMenuProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className='absolute top-full left-0 mt-3 w-80 bg-white rounded-lg shadow-2xl border border-gray-100 transition-all duration-300 opacity-100 visible translate-y-0 z-50'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
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
                  <div className='text-lg font-bold text-blue-600'>
                    Dr. Jan Duffy
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Horizontal */}
            <div className='hidden lg:flex items-center space-x-8 flex-1 justify-center max-w-6xl'>
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
                    className='text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-300 px-3 py-3 rounded-lg hover:bg-gray-50 whitespace-nowrap text-sm tracking-wide uppercase'
                    role='menuitem'
                    aria-haspopup={item.hasDropdown}
                    onClick={() => trackMenuClick(item.label, item.href)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <DropdownMenu
                      isOpen={activeDropdown === item.label}
                    >
                      <div aria-label={`${item.label} submenu`} className='py-2'>
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className='block px-6 py-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-300 whitespace-nowrap font-medium border-b border-gray-50 last:border-b-0'
                            role='menuitem'
                            onClick={() => trackMenuClick(child.label, child.href)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </DropdownMenu>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className='hidden lg:flex items-center ml-6'>
              <Link
                href='/contact'
                className='bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm whitespace-nowrap tracking-wide uppercase'
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden flex items-center'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors'
                aria-label='Toggle mobile menu'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  ) : (
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden bg-white border-t border-gray-200'
            >
              <div className='px-4 py-4 space-y-2'>
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className='block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium'
                      onClick={() => {
                        trackMenuClick(item.label, item.href);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && item.children && (
                      <div className='ml-4 mt-1 space-y-1'>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className='block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md'
                            onClick={() => {
                              trackMenuClick(child.label, child.href);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className='pt-4 border-t border-gray-200'>
                  <Link
                    href='/contact'
                    className='block w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors tracking-wide uppercase'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </>
  );
}
