'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Define menu structure matching Christopher DeWitt Group
const menuItems = [
  {
    label: 'Buy',
    href: '/buying',
    hasDropdown: true,
    children: [
      { label: 'Buying Process', href: '/buying' },
      { label: 'First-Time Buyer Guide', href: '/buyer-guide' },
      { label: 'First-Time Buyer Challenges', href: '/first-time-buyer-challenges' },
      { label: 'Property Search', href: '/listings' },
      { label: 'Buyer Readiness Assessment', href: '/assessments/buyer-readiness' },
    ],
  },
  {
    label: 'Sell',
    href: '/selling',
    hasDropdown: true,
    children: [
      { label: 'Cash Offer', href: '/cash-offer' },
      { label: 'Home Valuation', href: '/home-value' },
      { label: 'Why List With Us', href: '/why-list-with-us' },
      { label: 'Seller Readiness Assessment', href: '/assessments/seller-readiness' },
    ],
  },
  {
    label: 'Communities',
    href: '/communities',
    hasDropdown: true,
    children: [
      { label: 'All Communities', href: '/communities' },
      { label: 'Las Vegas', href: '/areas/las-vegas' },
      { label: 'Summerlin', href: '/areas/summerlin' },
      { label: 'Henderson', href: '/areas/henderson' },
      { label: 'North Las Vegas', href: '/areas/north-las-vegas' },
      { label: 'Downtown Las Vegas', href: '/areas/downtown' },
      { label: 'Green Valley', href: '/areas/green-valley' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    hasDropdown: false,
  },
  {
    label: 'Contact',
    href: '/contact',
    hasDropdown: false,
  },
  {
    label: 'More',
    href: '#',
    hasDropdown: true,
    children: [
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Team', href: '/team' },
      { label: 'Sold Listings', href: '/sold-listings' },
      { label: 'Market Insights', href: '/market-insights' },
      { label: 'Services', href: '/services' },
      { label: 'Resources', href: '/resources' },
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
    <div className='absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 opacity-100 visible translate-y-0'>
      {children}
    </div>
  );
}

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Main Navigation */}
      <nav id="navigation" className='bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100' role='navigation' aria-label='Main navigation'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16 w-full'>
            {/* Logo */}
            <div className='flex items-center'>
              <Link href='/' className='flex items-center space-x-3'>
                <div className='flex flex-col'>
                  <div className='text-xl font-bold text-blue-600 leading-tight'>
                    Dr. Janet Duffy Group
                  </div>
                  <span className='text-xs text-gray-500 font-medium'>
                    Premier Good To Know REALTOR®
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Horizontal */}
            <div className='hidden lg:flex items-center space-x-6 flex-1 justify-center'>
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
                    className='text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-blue-50'
                    role='menuitem'
                    aria-haspopup={item.hasDropdown}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
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
                      <div aria-label={`${item.label} submenu`}>
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors'
                            role='menuitem'
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

            {/* CTA Button (Desktop) */}
            <div className='hidden lg:flex items-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm'
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500'
              aria-label='Toggle mobile menu'
              aria-controls='mobile-menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} id="mobile-menu" className='lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto' aria-label='Mobile navigation menu'>
            <div className='container mx-auto px-4 py-6 space-y-2'>
              {menuItems.map((item, index) => (
                <div key={index}>
                <Link
                  href={item.href}
                    className='block text-gray-700 hover:text-blue-600 font-medium py-4 px-2 transition-colors min-h-[44px] flex items-center'
                  onClick={() => setIsMobileMenuOpen(false)}
                    role='menuitem'
                >
                  {item.label}
                </Link>
                  {item.hasDropdown && item.children && (
                    <div className='ml-4 space-y-1'>
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className='block text-gray-600 hover:text-blue-600 py-3 px-2 transition-colors min-h-[44px] flex items-center text-sm'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile-specific CTAs */}
              <div className='pt-6 border-t border-gray-200 space-y-3'>
                <Link
                  href='/listings'
                  className='block text-gray-600 py-4 px-2 min-h-[44px] flex items-center'
                >
                  <span className='mr-3'>💾</span>
                  Property Search
                </Link>
                <Link
                  href='tel:702-222-1964'
                  className='block text-gray-600 py-4 px-2 min-h-[44px] flex items-center'
                >
                  <span className='mr-3'>📞</span>
                  (702) 222-1964
                </Link>
                <Link
                  href='sms:702-222-1964'
                  className='block text-gray-600 py-4 px-2 min-h-[44px] flex items-center'
                >
                  <span className='mr-3'>💬</span>
                  Send Text
                </Link>
                <Link 
                  href='/contact' 
                  className='block bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-center min-h-[44px] flex items-center justify-center mt-4'
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
