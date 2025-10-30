'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export function ConsultationModal({ isOpen, onClose, source = 'header' }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'buyer',
    timeline: 'within-3-months',
    preferredContactTime: 'anytime',
    preferredContactMethod: 'phone',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track consultation start
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'consultation_submit', {
        event_category: 'consultation',
        event_label: source,
        value: 1,
      });
    }

    const consultationData = {
      ...formData,
      source,
      timestamp: new Date().toISOString(),
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    };

    try {
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0] || formData.name,
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          service: formData.interest === 'buyer' ? 'buying' : formData.interest === 'seller' ? 'selling' : 'consultation',
          budget: formData.timeline,
          message: `Interest: ${formData.interest}\nTimeline: ${formData.timeline}\nPreferred Contact Time: ${formData.preferredContactTime}\nPreferred Method: ${formData.preferredContactMethod}\n\n${formData.message}`,
          _csrf: '', // Will be handled by API security layer
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting consultation:', error);
      alert('There was an error submitting your consultation request. Please call (702) 222-1964 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 id="consultation-modal-title" className="text-2xl font-bold text-gray-900">
            Schedule Your Consultation
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-gray-700 mb-6">
                Dr. Jan Duffy will contact you within 24 hours to schedule your consultation.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Next Steps:</p>
                <ul className="text-left text-blue-700 space-y-1 text-sm">
                  <li>✓ Check your email for confirmation</li>
                  <li>✓ We'll call you at your preferred time</li>
                  <li>✓ Prepare any questions you have</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:702-222-1964"
                  className="btn btn-primary"
                >
                  Call (702) 222-1964
                </a>
                <button
                  onClick={onClose}
                  className="btn btn-outline"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  Get personalized guidance from Las Vegas's Top 1% real estate agent
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="consult-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="consult-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="consult-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="consult-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="consult-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="consult-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(702) 555-0123"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="consult-interest" className="block text-sm font-medium text-gray-700 mb-1">
                      I'm interested in: *
                    </label>
                    <select
                      id="consult-interest"
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-required="true"
                    >
                      <option value="buyer">Buying a Home</option>
                      <option value="seller">Selling a Home</option>
                      <option value="investor">Real Estate Investment</option>
                      <option value="luxury">Luxury Properties</option>
                      <option value="relocation">Relocation Services</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="consult-timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Timeline: *
                    </label>
                    <select
                      id="consult-timeline"
                      required
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-required="true"
                    >
                      <option value="immediately">Immediately</option>
                      <option value="within-1-month">Within 1 Month</option>
                      <option value="within-3-months">Within 3 Months</option>
                      <option value="within-6-months">Within 6 Months</option>
                      <option value="just-exploring">Just Exploring</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="consult-time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Contact Time: *
                    </label>
                    <select
                      id="consult-time"
                      required
                      value={formData.preferredContactTime}
                      onChange={(e) => setFormData({ ...formData, preferredContactTime: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-required="true"
                    >
                      <option value="anytime">Anytime</option>
                      <option value="morning">Morning (8am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                      <option value="evening">Evening (5pm - 8pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="consult-method" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Contact Method: *
                  </label>
                  <select
                    id="consult-method"
                    required
                    value={formData.preferredContactMethod}
                    onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-required="true"
                  >
                    <option value="phone">Phone Call</option>
                    <option value="text">Text Message</option>
                    <option value="email">Email</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="consult-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information:
                  </label>
                  <textarea
                    id="consult-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs, questions, or goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary"
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule My Consultation'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-2 flex-wrap">
                  <span>✓ Free Consultation</span>
                  <span>✓ No Obligation</span>
                  <span>✓ Expert Guidance</span>
                </div>
                <p className="text-xs text-gray-400">
                  Dr. Jan Duffy • Top 1% Las Vegas Agent • $127M+ Sales Volume
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

