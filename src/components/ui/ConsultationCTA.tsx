'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ConsultationModal } from './ConsultationModal';

interface ConsultationCTAProps {
  variant?: 'primary' | 'outline' | 'white';
  source?: string;
  className?: string;
  showPhone?: boolean;
}

export function ConsultationCTA({ 
  variant = 'primary', 
  source = 'inline',
  className = '',
  showPhone = true 
}: ConsultationCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonClasses = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline',
    white: 'bg-white text-blue-800 hover:bg-blue-50',
  };

  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
        <button
          onClick={() => setIsModalOpen(true)}
          className={`${buttonClasses[variant]} px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg`}
        >
          Schedule Consultation
        </button>
        {showPhone && (
          <Link
            href='tel:702-222-1964'
            className={variant === 'white' 
              ? 'border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors duration-200'
              : 'btn btn-outline px-8 py-4 rounded-lg font-bold text-lg'
            }
          >
            Call (702) 222-1964
          </Link>
        )}
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={source}
      />
    </>
  );
}

