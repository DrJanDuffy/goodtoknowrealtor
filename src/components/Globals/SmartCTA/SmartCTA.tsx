'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconSymbol, type IconSymbolKey } from '@/components/ui/IconSymbol';

interface SmartCTAProps {
  location: 'hero' | 'sidebar' | 'footer' | 'inline';
  variant?: 'primary' | 'secondary' | 'urgent';
  className?: string;
}

interface CTAConfig {
  text: string;
  href: string;
  icon: IconSymbolKey;
}

const ctaVariants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-green-600 hover:bg-green-700 text-white',
  urgent: 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
};

const ctaContent: Record<SmartCTAProps['location'], Record<string, CTAConfig>> = {
  hero: {
    default: {
      text: 'Get Started Today',
      href: '/contact',
      icon: '🚀'
    },
    homeValue: {
      text: 'Get My Home Value',
      href: '/home-value',
      icon: '💰'
    },
    listings: {
      text: 'View Listings',
      href: '/listings',
      icon: '🏠'
    },
    urgent: {
      text: 'Limited Time: Free Consultation',
      href: '/contact',
      icon: '⚡'
    }
  },
  sidebar: {
    default: {
      text: 'Schedule Consultation',
      href: '/contact',
      icon: '📅'
    },
    marketReport: {
      text: 'Get Market Report',
      href: '/reports',
      icon: '📊'
    },
    homeValue: {
      text: 'Home Value Report',
      href: '/home-value',
      icon: '💰'
    }
  },
  footer: {
    default: {
      text: 'Contact Dr. Duffy',
      href: '/contact',
      icon: '📞'
    },
    homeValue: {
      text: 'Free Home Valuation',
      href: '/home-value',
      icon: '🏠'
    }
  },
  inline: {
    default: {
      text: 'Learn More',
      href: '/about',
      icon: '→'
    },
    listings: {
      text: 'Browse Properties',
      href: '/listings',
      icon: '🏠'
    },
    contact: {
      text: 'Get In Touch',
      href: '/contact',
      icon: '📞'
    }
  }
};

export function SmartCTA({ location, variant = 'primary', className = '' }: SmartCTAProps) {
  const [currentCTA, setCurrentCTA] = useState(ctaContent[location].default);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollDepth(scrollPercent);
    };

    // Track time on page
    const startTime = Date.now();
    const timer = setInterval(() => {
      setTimeOnPage(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    window.addEventListener('scroll', handleScroll);

    // Smart CTA logic based on user behavior
    const updateCTA = () => {
      if (location === 'hero') {
        if (timeOnPage > 30 && scrollDepth > 50) {
          setCurrentCTA(ctaContent[location].homeValue);
        } else if (scrollDepth > 75) {
          setCurrentCTA(ctaContent[location].listings);
        } else if (timeOnPage > 60) {
          setCurrentCTA(ctaContent[location].urgent);
        }
      } else if (location === 'sidebar') {
        if (scrollDepth > 25) {
          setCurrentCTA(ctaContent[location].marketReport);
        } else if (timeOnPage > 45) {
          setCurrentCTA(ctaContent[location].homeValue);
        }
      } else if (location === 'footer') {
        if (scrollDepth > 80) {
          setCurrentCTA(ctaContent[location].homeValue);
        }
      }
    };

    const behaviorTimer = setInterval(updateCTA, 5000);
    updateCTA(); // Initial update

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
      clearInterval(behaviorTimer);
    };
  }, [location, timeOnPage, scrollDepth]);

  const getVariantClass = () => {
    if (currentCTA === ctaContent[location].urgent) {
      return ctaVariants.urgent;
    }
    return ctaVariants[variant];
  };

  return (
    <Link
      href={currentCTA.href}
      className={`
        inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300
        min-h-[44px] text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
        ${getVariantClass()}
        ${className}
      `}
    >
      <IconSymbol symbol={currentCTA.icon} className='mr-2 h-4 w-4' ariaLabel={currentCTA.text} />
      <span>{currentCTA.text}</span>
    </Link>
  );
}
