'use client';

import Link from 'next/link';

interface StandardCTAProps {
  variant?: 'primary' | 'secondary' | 'both';
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
  className?: string;
  showIcon?: boolean;
  phoneNumber?: string;
}

/**
 * StandardCTA - Standardized call-to-action buttons used site-wide
 * 
 * PRIMARY: Green button - "Call (702) 222-1964"
 * SECONDARY: White with border - "Text (702) 222-1964"
 * 
 * Usage:
 * <StandardCTA variant="primary" />
 * <StandardCTA variant="secondary" />
 * <StandardCTA variant="both" />
 */
export function StandardCTA({
  variant = 'both',
  size = 'md',
  layout = 'horizontal',
  className = '',
  showIcon = true,
  phoneNumber = '702-222-1964'
}: StandardCTAProps) {
  
  const sizeClasses = {
    sm: {
      button: 'px-6 py-2.5 text-sm rounded-lg',
      icon: 'w-3 h-3',
      gap: 'gap-2'
    },
    md: {
      button: 'px-8 py-3.5 text-base rounded-xl',
      icon: 'w-4 h-4',
      gap: 'gap-3'
    },
    lg: {
      button: 'px-10 py-4 text-lg rounded-xl',
      icon: 'w-5 h-5',
      gap: 'gap-3'
    }
  };

  const currentSize = sizeClasses[size];
  const displayPhone = `(702) 222-1964`;

  // Primary CTA Button Styles
  const primaryButtonClasses = `
    ${currentSize.button}
    bg-gradient-to-r from-green-500 to-emerald-600
    text-white font-bold
    hover:from-green-600 hover:to-emerald-700
    transition-all duration-300
    shadow-lg hover:shadow-xl
    transform hover:-translate-y-0.5
    active:scale-98
    min-h-[44px]
    inline-flex items-center justify-center
    ${currentSize.gap}
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
  `;

  // Secondary CTA Button Styles
  const secondaryButtonClasses = `
    ${currentSize.button}
    bg-white border-2 border-gray-300
    text-gray-900 font-bold
    hover:bg-gray-50 hover:border-gray-400
    transition-all duration-300
    shadow-lg hover:shadow-xl
    transform hover:-translate-y-0.5
    active:scale-98
    min-h-[44px]
    inline-flex items-center justify-center
    ${currentSize.gap}
    focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
  `;

  const containerClasses = `
    flex
    ${layout === 'horizontal' ? 'flex-row' : 'flex-col'}
    ${layout === 'horizontal' ? 'gap-4' : 'gap-3'}
    ${variant === 'both' ? 'w-full sm:w-auto' : ''}
    ${className}
  `;

  const PhoneIcon = () => (
    <svg 
      className={currentSize.icon} 
      fill='none' 
      stroke='currentColor' 
      viewBox='0 0 24 24'
      aria-hidden="true"
    >
      <path 
        strokeLinecap='round' 
        strokeLinejoin='round' 
        strokeWidth={2} 
        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' 
      />
    </svg>
  );

  const TextIcon = () => (
    <svg 
      className={currentSize.icon} 
      fill='none' 
      stroke='currentColor' 
      viewBox='0 0 24 24'
      aria-hidden="true"
    >
      <path 
        strokeLinecap='round' 
        strokeLinejoin='round' 
        strokeWidth={2} 
        d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4                                          .03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' 
      />
    </svg>
  );

  const PrimaryButton = () => (
    <Link
      href={`tel:${phoneNumber}`}
      className={primaryButtonClasses.trim().replace(/\s+/g, ' ')}
      aria-label={`Call Dr. Janet Duffy at ${displayPhone}`}
    >
      {showIcon && <PhoneIcon />}
      <span>Call {displayPhone}</span>
    </Link>
  );

  const SecondaryButton = () => (
    <Link
      href={`sms:${phoneNumber}`}
      className={secondaryButtonClasses.trim().replace(/\s+/g, ' ')}
      aria-label={`Text Dr. Janet Duffy at ${displayPhone}`}
    >
      {showIcon && <TextIcon />}
      <span>Text {displayPhone}</span>
    </Link>
  );

  if (variant === 'primary') {
    return (
      <div className={containerClasses.trim().replace(/\s+/g, ' ')}>
        <PrimaryButton />
      </div>
    );
  }

  if (variant === 'secondary') {
    return (
      <div className={containerClasses.trim().replace(/\s+/g, ' ')}>
        <SecondaryButton />
      </div>
    );
  }

  // variant === 'both'
  return (
    <div className={containerClasses.trim().replace(/\s+/g, ' ')}>
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}
