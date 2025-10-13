'use client';

import Link from "next/link";
import { useState } from "react";

// Define menu structure similar to BHHSCP
const menuItems = [
  {
    label: "HOME",
    href: "/",
    hasDropdown: false,
  },
  {
    label: "BUYING",
    href: "/buying",
    hasDropdown: true,
    children: [
      { label: "Buying", href: "/buying" },
      { label: "Tips For Buyers", href: "/buying/tips" },
      { label: "Finance Information", href: "/buying/finance" },
      { label: "Real Estate Updates", href: "/buying/updates" },
      { label: "Real Estate Lifestyle & Planning Guide", href: "/buying/guide" },
    ],
  },
  {
    label: "SELLING",
    href: "/selling",
    hasDropdown: true,
    children: [
      { label: "Selling", href: "/selling" },
      { label: "Tips For Sellers", href: "/selling/tips" },
      { label: "Home Value Report", href: "/selling/valuation" },
      { label: "Market Activity", href: "/selling/market" },
    ],
  },
  {
    label: "LISTINGS",
    href: "/listings",
    hasDropdown: true,
    children: [
      { label: "Search", href: "/listings/search" },
      { label: "Featured Properties", href: "/listings/featured" },
      { label: "Luxury Collection", href: "/listings/luxury" },
      { label: "Open Houses", href: "/listings/open-houses" },
      { label: "For Lease", href: "/listings/lease" },
      { label: "Our Communities", href: "/listings/communities" },
    ],
  },
  {
    label: "REALTORS",
    href: "/realtors",
    hasDropdown: false,
  },
  {
    label: "CAREERS",
    href: "/careers",
    hasDropdown: false,
  },
  {
    label: "ABOUT",
    href: "/about",
    hasDropdown: true,
    children: [
      { label: "About Dr. Janet Duffy", href: "/about" },
      { label: "Our Brand", href: "/about/brand" },
      { label: "Leadership Team", href: "/about/team" },
      { label: "Testimonials", href: "/about/testimonials" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
    hasDropdown: true,
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Our Offices", href: "/contact/offices" },
    ],
  },
    {
      label: "BLOG",
      href: "/blog",
      hasDropdown: true,
      children: [
        { label: "Blog", href: "/blog" },
        { label: "Market Updates", href: "/blog?category=market-updates" },
        { label: "Buying Tips", href: "/blog?category=buying-tips" },
        { label: "Selling Tips", href: "/blog?category=selling-tips" },
        { label: "Neighborhoods", href: "/blog?category=neighborhoods" },
        { label: "Investment", href: "/blog?category=investment" },
        { label: "Luxury Properties", href: "/blog?category=luxury-properties" },
      ],
    },
];

interface MenuItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  children?: Array<{
    label: string;
    href: string;
  }>;
}

interface DropdownMenuProps {
  children: MenuItem["children"];
  isOpen: boolean;
}

function DropdownMenu({ children, isOpen }: DropdownMenuProps) {
  if (!children) return null;

  return (
    <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
      isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
    }`}>
      {children.map((child, index) => (
        <Link 
          key={index} 
          href={child.href} 
          className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
        >
          {child.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-amber-600">Dr. Janet Duffy</span>
                    <span className="text-sm text-gray-600">Real Estate Expert</span>
                  </div>
                  <div className="hidden lg:block text-xs text-gray-500 ml-4 pl-4 border-l border-gray-300">
                    <div className="font-semibold text-amber-700">BERKSHIRE HATHAWAY</div>
                    <div className="font-semibold text-amber-700">HOMESERVICES</div>
                    <div className="text-gray-600">California Properties</div>
                  </div>
                </Link>
              </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <DropdownMenu
                    children={item.children}
                    isOpen={activeDropdown === item.label}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/contact" className="text-gray-600 hover:text-amber-600 font-medium">
              Sign In
            </Link>
            <Link href="/contact" className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
