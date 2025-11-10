'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconSymbol } from '@/components/ui/IconSymbol';

interface ExitIntentPopupProps {
  onClose: () => void;
}

export function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'buyer',
  });

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top 10% of the viewport
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Trigger on Escape key
      if (e.key === 'Escape') {
        setIsVisible(true);
      }
    };

    // Only show popup if user hasn't seen it recently
    const hasSeenPopup = localStorage.getItem('exitIntentPopupSeen');
    const lastSeen = localStorage.getItem('exitIntentPopupLastSeen');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (!hasSeenPopup || !lastSeen || (now - parseInt(lastSeen)) > oneDay) {
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'lead_generation',
        event_label: 'exit_intent_popup',
        value: 1,
      });
    }

    // Store lead data (in a real app, this would go to your CRM)
    const leadData = {
      ...formData,
      source: 'exit_intent_popup',
      timestamp: new Date().toISOString(),
    };

    // Simulate API call
    console.log('Lead captured:', leadData);
    
    // Mark popup as seen
    localStorage.setItem('exitIntentPopupSeen', 'true');
    localStorage.setItem('exitIntentPopupLastSeen', Date.now().toString());
    
    // Close popup
    setIsVisible(false);
    onClose();
    
    // Redirect to thank you page or show success message
    alert('Thank you! Dr. Jan Duffy will contact you within 24 hours.');
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('exitIntentPopupSeen', 'true');
    localStorage.setItem('exitIntentPopupLastSeen', Date.now().toString());
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close popup"
        >
          <IconSymbol symbol='✕' className='h-5 w-5' ariaLabel='Close' />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <IconSymbol symbol='🏠' className='mx-auto mb-4 h-12 w-12 text-blue-600' ariaLabel='Home icon' />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Wait! Don't Miss Out on Your Dream Home
          </h2>
          <p className="text-gray-600">
            Get exclusive access to off-market properties and expert guidance from Las Vegas's Top 1% agent
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(702) 555-0123"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
              I'm interested in:
            </label>
            <select
              id="interest"
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="buyer">Buying a Home</option>
              <option value="seller">Selling a Home</option>
              <option value="investor">Real Estate Investment</option>
              <option value="luxury">Luxury Properties</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get My Free Consultation
          </button>
        </form>

        {/* Trust Indicators */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span className='inline-flex items-center gap-2'>
              <IconSymbol symbol='✓' className='h-4 w-4 text-green-600' ariaLabel='Free consultation' />
              Free Consultation
            </span>
            <span className='inline-flex items-center gap-2'>
              <IconSymbol symbol='✓' className='h-4 w-4 text-green-600' ariaLabel='No obligation' />
              No Obligation
            </span>
            <span className='inline-flex items-center gap-2'>
              <IconSymbol symbol='✓' className='h-4 w-4 text-green-600' ariaLabel='Expert guidance' />
              Expert Guidance
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Dr. Jan Duffy • Top 1% Las Vegas Agent • $127M+ Sales Volume
          </p>
        </div>
      </div>
    </div>
  );
}