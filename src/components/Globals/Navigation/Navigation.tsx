'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackMenuClick } from '@/lib/analytics';

// Define menu structure with engaging, action-oriented labels (no emojis for better formatting)
const menuItems = [
  {
    label: 'Find My Home',
    href: '/buying',
    hasDropdown: true,
    children: [
      { label: 'Am I Ready to Buy?', href: '/assessments/buyer-readiness' },
      { label: 'Search Vegas Homes', href: '/listings' },
      { label: 'First-Time Buyer Guide', href: '/buyer-guide' },
      { label: 'Common Buyer Mistakes', href: '/first-time-buyer-challenges' },
      { label: 'Complete Buying Process', href: '/buying' },
    ],
  },
  {
    label: 'Sell My Home',
    href: '/selling',
    hasDropdown: true,
    children: [
      { label: 'Get Cash Offer', href: '/cash-offer' },
      { label: 'What\'s My Home Worth?', href: '/home-value' },
      { label: 'Am I Ready to Sell?', href: '/assessments/seller-readiness' },
      { label: 'Why Choose Dr. Duffy?', href: '/why-list-with-us' },
      { label: 'Complete Selling Process', href: '/selling' },
    ],
  },
  {
    label: 'Vegas Areas',
    href: '/communities',
    hasDropdown: true,
    children: [
      { label: 'Downtown Las Vegas', href: '/areas/downtown' },
      { label: 'Summerlin', href: '/areas/summerlin' },
      { label: 'Henderson', href: '/areas/henderson' },
      { label: 'North Las Vegas', href: '/areas/north-las-vegas' },
      { label: 'Green Valley', href: '/areas/green-valley' },
      { label: 'All Vegas Areas', href: '/communities' },
    ],
  },
  {
    label: 'Market News',
    href: '/blog',
    hasDropdown: false,
  },
  {
    label: 'Get Started',
    href: '/contact',
    hasDropdown: false,
  },
  {
    label: 'About',
    href: '#',
    hasDropdown: true,
    children: [
      { label: 'Client Success Stories', href: '/testimonials' },
      { label: 'Meet Dr. Jan Duffy', href: '/team' },
      { label: 'Recent Sales', href: '/sold-listings' },
      { label: 'Market Insights', href: '/market-insights' },
      { label: 'Our Services', href: '/services' },
      { label: 'Resources', href: '/resources' },
    ],
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
          className='absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 transition-all duration-200 opacity-100 visible translate-y-0 z-50'
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
      <nav id="navigation" className='bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100' role='navigation' aria-label='Main navigation'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16 w-full'>
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
            <div className='hidden md:flex items-center space-x-3 flex-1 justify-center max-w-4xl'>
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
                    className='text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-2 rounded-lg hover:bg-blue-50 whitespace-nowrap text-sm'
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
                            className='block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap font-medium'
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
            <div className='hidden md:flex items-center ml-4'>
              <Link
                href='/contact'
                className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm whitespace-nowrap'
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center'>
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
              className='md:hidden bg-white border-t border-gray-200'
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
                    className='block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-green-600 hover:to-emerald-700 transition-all duration-300'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
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
