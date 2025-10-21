'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';
import { Property } from '../PropertyComparison/PropertyComparison';
import { VirtualTour } from '../VirtualTours/VirtualTour';

interface EnhancedPropertyCardProps {
  property: Property;
  onCompare?: () => void;
  onSave?: () => void;
  showComparison?: boolean;
  showVirtualTour?: boolean;
  className?: string;
}

export function EnhancedPropertyCard({
  property,
  onCompare,
  onSave,
  showComparison = true,
  showVirtualTour = false,
  className = ''
}: EnhancedPropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showVirtualTourModal, setShowVirtualTourModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const { announce } = useScreenReaderAnnouncements();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    announce(isLiked ? 'Removed from favorites' : 'Added to favorites', 'polite');
    onSave?.(property);
  };

  const handleCompare = () => {
    onCompare?.(property);
    announce('Added to comparison', 'polite');
  };

  const handleScheduleShowing = () => {
    setShowScheduleModal(true);
    announce('Opening schedule showing form', 'polite');
  };

  const handleShare = () => {
    setShowShareModal(true);
    announce('Opening share options', 'polite');
  };

  const handleVirtualTour = () => {
    setShowVirtualTourModal(true);
    announce('Opening virtual tour', 'polite');
  };

  // Sample virtual tour data
  const sampleVirtualTour = {
    id: '1',
    propertyId: property.id,
    title: `${property.title} - Virtual Tour`,
    type: '360' as const,
    thumbnail: property.image,
    url: '#',
    duration: 180,
    rooms: ['Living Room', 'Kitchen', 'Master Bedroom', 'Bathroom'],
    description: 'Take a 360° virtual tour of this beautiful property',
    isInteractive: true
  };

  return (
    <>
      <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${className}`}>
        {/* Property Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              property.status === 'For Sale' 
                ? 'bg-green-100 text-green-800'
                : property.status === 'Pending'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {property.status}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button
              onClick={handleLike}
              className={`p-2 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
            >
              <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            {showComparison && (
              <button
                onClick={handleCompare}
                className="p-2 bg-white text-gray-600 hover:bg-gray-50 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Add to comparison"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </button>
            )}
          </div>

          {/* Virtual Tour Button */}
          {showVirtualTour && (
            <div className="absolute bottom-3 left-3">
              <button
                onClick={handleVirtualTour}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Open virtual tour"
              >
                <span className="mr-1">🏠</span>
                Virtual Tour
              </button>
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="p-4">
          {/* Price */}
          <div className="mb-2">
            <div className="text-2xl font-bold text-gray-900">
              {formatCurrency(property.price)}
            </div>
            <div className="text-sm text-gray-600">
              MLS #{property.mlsNumber}
            </div>
          </div>

          {/* Address */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {property.title}
            </h3>
            <p className="text-gray-600 text-sm">{property.address}</p>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-4 gap-2 mb-4 text-center">
            <div>
              <div className="text-lg font-semibold text-gray-900">{property.bedrooms}</div>
              <div className="text-xs text-gray-600">Bedrooms</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900">{property.bathrooms}</div>
              <div className="text-xs text-gray-600">Bathrooms</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900">
                {property.sqft.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600">Sq Ft</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900">{property.yearBuilt}</div>
              <div className="text-xs text-gray-600">Year Built</div>
            </div>
          </div>

          {/* Features */}
          {property.features && property.features.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {property.features.slice(0, 3).map(feature => (
                  <span
                    key={feature}
                    className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
                {property.features.length > 3 && (
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{property.features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-700 text-sm mb-4 line-clamp-2">
            {property.description}
          </p>

          {/* Action Buttons */}
          <div className="space-y-2">
            {/* Primary Action - Schedule Showing */}
            <button
              onClick={handleScheduleShowing}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={`Schedule a showing for ${property.title}`}
            >
              📅 Schedule a Showing
            </button>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {/* Navigate to property details */}}
                className="btn btn-secondary text-sm"
                aria-label={`View full details for ${property.title}`}
              >
                View Details
              </button>
              <button
                onClick={handleShare}
                className="btn btn-secondary text-sm"
                aria-label={`Share ${property.title}`}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Showing Modal */}
      {showScheduleModal && (
        <ScheduleShowingModal
          property={property}
          onClose={() => setShowScheduleModal(false)}
        />
      )}

      {/* Virtual Tour Modal */}
      {showVirtualTourModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Virtual Tour</h2>
              <button
                onClick={() => setShowVirtualTourModal(false)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
                aria-label="Close virtual tour"
              >
                ×
              </button>
            </div>
            <VirtualTour tour={sampleVirtualTour} />
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <ShareModal
          property={property}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </>
  );
}

// Schedule Showing Modal Component
interface ScheduleShowingModalProps {
  property: Property;
  onClose: () => void;
}

function ScheduleShowingModal({ property, onClose }: ScheduleShowingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { announce } = useScreenReaderAnnouncements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      announce('Showing request submitted successfully', 'polite');
      onClose();
    } catch {
      announce('Error submitting showing request', 'assertive');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Schedule a Showing</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close schedule showing form"
            >
              ×
            </button>
          </div>

          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900">{property.title}</h3>
            <p className="text-sm text-gray-600">{property.address}</p>
            <p className="text-sm font-medium text-blue-600">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(property.price)}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="showing-name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="showing-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="showing-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                id="showing-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="showing-phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                id="showing-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="showing-date" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  id="showing-date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="showing-time" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  id="showing-time"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="showing-message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                id="showing-message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={3}
                placeholder="Any specific questions or requirements..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 btn btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 btn btn-primary"
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Showing'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Share Modal Component
interface ShareModalProps {
  property: Property;
  onClose: () => void;
}

function ShareModal({ property, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const { announce } = useScreenReaderAnnouncements();

  const shareUrl = `${window.location.origin}/properties/${property.id}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      announce('Property link copied to clipboard', 'polite');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      announce('Failed to copy link', 'assertive');
    }
  };

  const shareOptions = [
    {
      name: 'Facebook',
      icon: '📘',
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
    },
    {
      name: 'Twitter',
      icon: '🐦',
      action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(property.title)}`, '_blank')
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
    },
    {
      name: 'Email',
      icon: '📧',
      action: () => window.open(`mailto:?subject=${encodeURIComponent(property.title)}&body=${encodeURIComponent(`Check out this property: ${shareUrl}`)}`)
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Share Property</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close share modal"
            >
              ×
            </button>
          </div>

          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900">{property.title}</h3>
            <p className="text-sm text-gray-600">{property.address}</p>
          </div>

          <div className="space-y-3">
            {/* Copy Link */}
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
              />
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  copied ? 'bg-green-100 text-green-800' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* Social Share Options */}
            <div className="grid grid-cols-2 gap-2">
              {shareOptions.map(option => (
                <button
                  key={option.name}
                  onClick={option.action}
                  className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg">{option.icon}</span>
                  <span className="text-sm font-medium">{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
