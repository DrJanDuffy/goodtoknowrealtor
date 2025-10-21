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
              <Link href='/' className='flex items-center space-x-3'>
                <Image
                  src='/images/bhhs/logo.svg'
                  alt='Berkshire Hathaway HomeServices Premier Properties'
                  width={120}
                  height={30}
                  className='h-8 w-auto'
                />
                <div className='flex flex-col'>
                  <div className='text-lg font-bold text-blue-600 leading-tight'>
                    Dr. Jan Duffy
                  </div>
                  <span className='text-xs text-gray-500 font-medium'>
                    Top 1% Las Vegas Agent
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Horizontal */}
            <div className='flex items-center space-x-3 flex-1 justify-center max-w-4xl'>
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

            {/* CTA Button */}
            <div className='flex items-center ml-4'>
              <Link
                href='/contact'
                className='bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm whitespace-nowrap'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
}
