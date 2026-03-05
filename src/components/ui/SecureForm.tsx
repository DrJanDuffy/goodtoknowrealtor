'use client';

import { useState, useEffect } from 'react';
import { sanitizeFormData, validateInput, inputLimits } from '@/lib/security';

interface SecureFormProps {
  onSubmit: () => Promise<{ success: boolean; message: string }>;
  fields: Array<{
    name: string;
    type: 'text' | 'email' | 'tel' | 'textarea';
    label: string;
    required?: boolean;
    placeholder?: string;
    maxLength?: number;
  }>;
  submitText: string;
  className?: string;
}

export function SecureForm({ onSubmit, fields, submitText, className = '' }: SecureFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string>('');
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Generate CSRF token on component mount
  useEffect(() => {
    const generateToken = () => {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      const token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
      setCsrfToken(token);
    };
    
    generateToken();
  }, []);

  const handleInputChange = (name: string, value: string) => {
    // Sanitize input
    const sanitizedValue = validateInput.sanitizeText(value);
    
    // Check length limits
    const field = fields.find(f => f.name === name);
    const maxLength = field?.maxLength || inputLimits[field?.name as keyof typeof inputLimits] || 1000;
    
    if (sanitizedValue.length > maxLength) {
      setErrors(prev => ({
        ...prev,
        [name]: `Maximum ${maxLength} characters allowed`
      }));
      return;
    }
    
    // Clear error for this field
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const validateField = (name: string, value: string): string | null => {
    const field = fields.find(f => f.name === name);
    if (!field) return null;
    
    // Required field validation
    if (field.required && !value.trim()) {
      return `${field.label} is required`;
    }
    
    // Type-specific validation
    switch (field.type) {
      case 'email':
        if (value && !validateInput.email(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'tel':
        if (value && !validateInput.phone(value)) {
          return 'Please enter a valid phone number';
        }
        break;
      case 'text':
        if (value && !validateInput.text(value, field.maxLength || 1000)) {
          return 'Please enter valid text';
        }
        break;
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    fields.forEach(field => {
      const value = formData[field.name] || '';
      const error = validateField(field.name, value);
      if (error) {
        newErrors[field.name] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // Sanitize form data
      const sanitizedData = sanitizeFormData(formData);
      
      // Add CSRF token
      const dataWithToken = {
        ...sanitizedData,
        _csrf: csrfToken
      };
      
      const result = await onSubmit(dataWithToken);
      
      if (result.success) {
        setSubmitMessage({ type: 'success', text: result.message });
        setFormData({});
        // Generate new CSRF token after successful submission
        const array = new Uint8Array(32);
        crypto.getRandomValues(array);
        const newToken = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
        setCsrfToken(newToken);
      } else {
        setSubmitMessage({ type: 'error', text: result.message });
      }
    } catch {
      setSubmitMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* CSRF Token */}
      <input type="hidden" name="_csrf" value={csrfToken} />
      
      {/* Form Fields */}
      {fields.map(field => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block text-base font-semibold text-gray-900 mb-2">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              maxLength={field.maxLength || inputLimits[field.name as keyof typeof inputLimits] || 1000}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px] ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={4}
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              maxLength={field.maxLength || inputLimits[field.name as keyof typeof inputLimits] || 1000}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px] ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          )}
          
          {errors[field.name] && (
            <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
          )}
          
          {/* Character count */}
          {field.maxLength && (
            <p className="mt-1 text-sm text-gray-600">
              {(formData[field.name] || '').length} / {field.maxLength} characters
            </p>
          )}
        </div>
      ))}
      
      {/* Submit Message */}
      {submitMessage && (
        <div className={`p-4 rounded-lg ${
          submitMessage.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitMessage.text}
        </div>
      )}
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-colors min-h-[44px] ${
          isSubmitting
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        }`}
      >
        {isSubmitting ? 'Submitting...' : submitText}
      </button>
    </form>
  );
}
