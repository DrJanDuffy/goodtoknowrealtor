'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Define menu structure for Dr. Janet Duffy
const menuItems = [
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    children: [
      { label: 'Buying a Home', href: '/buying' },
      { label: 'Selling Your Home', href: '/selling' },
      { label: 'Luxury Properties', href: '/luxury' },
      { label: 'Investment Properties', href: '/investing' },
      { label: 'Home Valuation', href: '/home-value' },
    ],
  },
  {
    label: 'Las Vegas Areas',
    href: '/areas',
    hasDropdown: true,
    children: [
      { label: 'Summerlin', href: '/areas/summerlin' },
      { label: 'Henderson', href: '/areas/henderson' },
      { label: 'North Las Vegas', href: '/areas/north-las-vegas' },
      { label: 'Downtown Las Vegas', href: '/areas/downtown' },
      { label: 'Green Valley', href: '/areas/green-valley' },
    ],
  },
  {
    label: 'About Dr. Duffy',
    href: '/about',
    hasDropdown: false,
  },
  {
    label: 'Resources',
    href: '/resources',
    hasDropdown: true,
    children: [
      { label: 'Market Reports', href: '/reports' },
      { label: 'Blog', href: '/blog' },
      { label: 'Listings', href: '/listings' },
      { label: 'Buyer Guide', href: '/buyer-guide' },
      { label: 'Seller Guide', href: '/seller-guide' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    hasDropdown: false,
  },
];


interface DropdownMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
}

function DropdownMenu({ children, isOpen }: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <div className='absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 opacity-100 visible translate-y-0'>
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

  return (
    <>
      {/* Utility Header */}
      <div className='bg-blue-900 text-white py-2 hidden lg:block'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-end items-center space-x-6 text-sm'>
            <Link
              href='/listings'
              className='hover:text-blue-200 transition-colors'
            >
              💾 Saved Properties
            </Link>
            <Link
              href='/listings'
              className='hover:text-blue-200 transition-colors'
            >
              🔍 Property Search
            </Link>
            <Link
              href='/contact'
              className='hover:text-blue-200 transition-colors'
            >
              📞 (702) 222-1964
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className='bg-white shadow-lg sticky top-0 z-50' role='navigation'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <div className='flex items-center'>
              <Link href='/' className='flex items-center space-x-4'>
                <div className='flex flex-col'>
                  <Image
                    src='/images/bhhs/logo.svg'
                    alt='Berkshire Hathaway HomeServices Premier Properties'
                    width={120}
                    height={48}
                    className='h-12 w-auto'
                  />
                  <span className='text-xs text-gray-600 mt-1'>
                    Dr. Jan Duffy - Premier Good To Know REALTOR®
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>
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
                    className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1'
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    )}
                  </Link>
                  {item.hasDropdown && (
                    <DropdownMenu
                      isOpen={activeDropdown === item.label}
                    >
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors'
                        >
                          {child.label}
                        </Link>
                      ))}
                    </DropdownMenu>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className='hidden lg:flex items-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
              aria-label='Toggle mobile menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='lg:hidden bg-white border-t border-gray-200'>
            <div className='container mx-auto px-4 py-4 space-y-4'>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className='pt-4 border-t border-gray-200 space-y-2'>
                <Link
                  href='/listings'
                  className='block text-gray-600 py-2'
                >
                  💾 Property Search
                </Link>
                <Link
                  href='/contact'
                  className='block text-gray-600 py-2'
                >
                  📞 (702) 222-1964
                </Link>
                <Link 
                  href='/contact' 
                  className='block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-center'
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
