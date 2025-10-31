'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export function ConsultationModal({ isOpen, onClose, source = 'header' }: ConsultationModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'buyer',
        timeline: 'within-3-months',
        preferredContactTime: 'anytime',
        preferredContactMethod: 'phone',
        message: '',
      });
      setErrors({});
      setSubmitError(null);
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const validateStep = (step: number): boolean => {
极致 const newErrors: Record<string, string> = {};

    if (step === 1) {
      const name = formData.name || '';
      const email = formData.email || '';
      const phone = formData.phone || '';
      
      if (!name.trim()) {
        newErrors['name'] = 'Full name is required';
      }
      if (!email.trim()) {
        newErrors['email'] = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors['email'] = 'Please enter a valid email address';
      }
      if (!phone.trim()) {
        newErrors['phone'] = 'Phone number is required';
      } else {
        const phoneRegex = /^[\+]?[1]?[\s\-\.]?[(]?[0-9]{3}[)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
          newErrors['phone'] = 'Please enter a valid phone number';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate final step before submitting
    if (currentStep < totalSteps || !validateStep(1)) {
      setCurrentStep(1);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Track consultation start
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'consultation_submit', {
        event_category: 'consultation',
        event_label: source,
        value: 1,
      });
    }

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
          message: `Interest: ${formData.interest}\nTimeline: ${formData.timeline}\nPreferred Contact Time: ${formData.preferredContactTime}\nPreferred Method: ${formData不包括.preferredContactMethod}\n\n${formData.message}`,
          _csrf: '', // Will be handled by API security layer
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
      
      // Track successful submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'consultation_success', {
          event_category: 'consultation',
          event_label: source,
          value: 1,
        });
      }
    } catch (error) {
      console.error('Error submitting consultation:', error);
      setSubmitError('There was an error submitting your consultation request. Please try again or call (702) 222-1964 directly.');
      
      // Track error childhood
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'consultation_error', {
          event_category: 'consultation',
          event_label: source,
        });
      }
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
          <div className="flex-1">
            <h2 id="consultation-modal-title" className="text-2xl font-bold text-gray-900 mb-2">
              Schedule Your Consultation
            </h2>
            {!isSubmitted && (
              <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                  <div
                    key={step}
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                      step <= currentStep ? 'bg-amber-600' : 'bg-gray-200'
                    }`}
                    aria-label={`Step ${step} of ${totalSteps}`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-4"
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
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-900 font-semibold mb-2">Next Steps:</p>
                <ul className="text-left text-amber-800 space-y-1 text-sm">
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
                <p className="text-gray-600 text-lg">
                  {currentStep === 1 && 'Let\'s start with your contact information'}
                  {currentStep === 2 && 'Tell us about your real estate goals'}
                  {currentStep === 3 && 'How would you like us to reach you?'}
                </p>
              </div>

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="consult-name" className="block text-base font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="consult-name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:帰border-transparent transition-colors ${
                          errors['name'] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                        aria-required="true"
                        aria-invalid={!!errors['name']}
                        aria-describedby={errors['name'] ? 'name-error' : undefined}
                      />
                      {errors['name'] && (
                        <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors['name']}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="consult-email" className="block text-base font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="consult-email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors ${
                          errors['email'] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                        aria-required="true"
                        aria-invalid={!!errors['email']}
                        aria-describedby={errors['email'] ? 'email-error' : undefined}
                      />
                      {errors['email'] && (
                        <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors['email']}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="consult-phone" className="block text-base font-semibold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="consult-phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors ${
                          errors['phone'] ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="(702) 555-0123"
                        aria-required="true"
                        aria-invalid={!!errors['phone']}
                        aria-describedby={errors['phone'] ? 'phone-error' : undefined}
                      />
                      {errors['phone'] && (
                        <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors['phone']}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Interest & Timeline */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="consult-interest" className="block text-base font-semibold text-gray-900 mb-2">
                        I'm interested in: *
                      </label>
                      <select
                        id="consult-interest"
                        value={formData.interest}
                        onChange={(e) => handleInputChange('interest', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                        aria-required="true"
                      >
                        <option value="buyer">Buying a Home</option>
                        <option value="seller">Selling a Home</option>
                        <option value="investor">Real Estate Investment</option>
                        <option value="luxury">Luxury Properties</option>
                        <option value="relocation">Relocation Services</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="consult-timeline" className="block text-base font-semibold text-gray-900 mb-2">
                        Timeline: *
                      </label>
                      <select
                        id="consult-timeline"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                        aria-required="true"
                      >
                        <option value="immediately">Immediately</option>
                        <option value="within-1-month">Within 1 Month</option>
                        <option value="within-3-months">Within 3 Months</option>
                        <option value="within-6-months">Within 6 Months</option>
                        <option value="just-exploring">Just Exploring</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Preferences & Message */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 сечения gap-4">
                      <div>
                        <label htmlFor="consult-time" className="block text-base font-semibold text-gray-900 mb-2">
                          Preferred Contact Time: *
                        </label>
                        <select
                          id="consult-time"
                          value={formData.preferredContactTime}
                          onChange={(e) => handleInputChange('preferredContactTime', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                          aria-required="true"
                        >
                          <option value="anytime">Anytime</option>
                          <option value="morning">Morning (8am - 12pm)</option>
                          <option value="afternoon">Afternoon (12pm - 5pm)</option>
                          <option value="evening">Evening (5pm - 8pm)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="consult-method" className="block text-base font-semibold text-gray-900 mb-2">
                          Preferred Contact Method: *
                        </label>
                        <select
                          id="consult-method"
                          value={formData.preferredContactMethod}
                          onChange={(e) => handleInputChange('preferredContactMethod', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                          aria-required="true"
                        >
                          <option value="phone">Phone Call</option>
                          <option value="text">Text Message</option>
                          <option value="email">Email</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="consult-message" className="block text-base font-semibold text-gray-900 mb-2">
                        Additional Information (Optional):
                      </label>
                      <textarea
                        id="consult舒适的message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your specific needs, questions, or goals..."
                        maxLength={500}
                      />
                      <p className="mt-1 text-sm text-gray-500 text-right">
                        {formData.message.length} / 500 characters
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      currentStep === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    Back
                  </button>
                  
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Schedule My Consultation'
                      )}
                    </button>
                  )}
                </div>
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
