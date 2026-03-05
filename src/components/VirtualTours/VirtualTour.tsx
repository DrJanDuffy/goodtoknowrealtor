'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useScreenReaderAnnouncements } from '@/hooks/useScreenReaderAnnouncements';
import { useFullscreen } from '@/hooks/useFullscreen';
import { IconSymbol } from '@/components/ui/IconSymbol';

export interface VirtualTour {
  id: string;
  propertyId: string;
  title: string;
  type: '360' | 'matterport' | 'video' | 'photo-gallery';
  thumbnail: string;
  url?: string;
  duration?: number; // in seconds
  rooms: string[];
  description?: string;
  isInteractive: boolean;
}

interface VirtualTourProps {
  tour: VirtualTour;
  className?: string;
}

export function VirtualTour({ tour, className = '' }: VirtualTourProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { announce } = useScreenReaderAnnouncements();

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlay = () => {
    setIsPlaying(true);
    announce('Virtual tour started', 'polite');
  };

  const handlePause = () => {
    setIsPlaying(false);
    announce('Virtual tour paused', 'polite');
  };

  const handleRoomChange = (roomIndex: number) => {
    setCurrentRoom(roomIndex);
    announce(`Switched to ${tour.rooms[roomIndex]}`, 'polite');
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
      announce('Entered fullscreen mode', 'polite');
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
      announce('Exited fullscreen mode', 'polite');
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const renderTourContent = () => {
    switch (tour.type) {
      case 'video':
        return (
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={tour.thumbnail}
              onPlay={handlePlay}
              onPause={handlePause}
              controls={showControls}
              aria-label={`Virtual tour video for ${tour.title}`}
            >
              <source src={tour.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Custom Controls Overlay */}
            {!showControls && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all"
                  aria-label="Play virtual tour video"
                >
                  <IconSymbol symbol='🎥' className='text-white text-2xl' ariaLabel='Play icon' />
                </button>
              </div>
            )}
          </div>
        );

      case '360':
        return (
          <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
            {/* 360° Tour Placeholder */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-white">
                <IconSymbol symbol='🌐' className='text-3xl mb-4 text-blue-200' ariaLabel='360 icon' />
                <h3 className="text-xl font-semibold mb-2">360° Virtual Tour</h3>
                <p className="text-gray-300 mb-4">{tour.title}</p>
                <button
                  onClick={handlePlay}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  aria-label="Start 360 degree virtual tour"
                >
                  Start Tour
                </button>
              </div>
            </div>
            
            {/* 360° Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
                aria-label="Rotate left"
              >
                ↶
              </button>
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
                aria-label="Rotate right"
              >
                ↷
              </button>
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
                aria-label="Zoom out"
              >
                −
              </button>
            </div>
          </div>
        );

      case 'matterport':
        return (
          <div className="relative w-full h-full bg-gray-800 rounded-lg overflow-hidden">
            {/* Matterport Tour Placeholder */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-white">
                <IconSymbol symbol='🏠' className='text-3xl mb-4 text-purple-200' ariaLabel='Home icon' />
                <h3 className="text-xl font-semibold mb-2">Matterport 3D Tour</h3>
                <p className="text-gray-300 mb-4">{tour.title}</p>
                <button
                  onClick={handlePlay}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  aria-label="Start Matterport 3D virtual tour"
                >
                  Explore 3D Space
                </button>
              </div>
            </div>
          </div>
        );

      case 'photo-gallery':
        return (
          <div className="relative w-full h-full">
            {/* Photo Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 h-full">
              {tour.rooms.map((room, index) => (
                <button
                  key={index}
                  onClick={() => handleRoomChange(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                    currentRoom === index ? 'ring-4 ring-blue-500' : 'hover:scale-105'
                  }`}
                  aria-label={`View ${room} in photo gallery`}
                >
                  <Image
                    src={tour.thumbnail}
                    alt={`${room} room`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                    <p className="text-sm font-medium">{room}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Virtual tour not available</p>
          </div>
        );
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${className} ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''}`}
    >
      {/* Tour Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{tour.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {tour.isInteractive ? 'Interactive' : 'Guided'}
            </span>
            {tour.duration && (
              <span>Duration: {formatDuration(tour.duration)}</span>
            )}
            <span className="capitalize">{tour.type} Tour</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setShowControls(!showControls)}
            className="btn btn-secondary"
            aria-label={showControls ? 'Hide tour controls' : 'Show tour controls'}
          >
            {showControls ? 'Hide Controls' : 'Show Controls'}
          </button>
          <button
            onClick={toggleFullscreen}
            className="btn btn-secondary"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
      </div>

      {/* Tour Content */}
      <div className="relative h-96 md:h-[500px]">
        {renderTourContent()}
        
        {/* Loading Overlay */}
        {isPlaying && tour.type === 'video' && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-gray-700">Loading virtual tour...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Room Navigation */}
      {tour.rooms.length > 1 && (
        <div className="p-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Rooms</h4>
          <div className="flex flex-wrap gap-2">
            {tour.rooms.map((room, index) => (
              <button
                key={index}
                onClick={() => handleRoomChange(index)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  currentRoom === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={currentRoom === index ? 'true' : 'false'}
                aria-label={`View ${room} room`}
              >
                {room}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tour Actions */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn btn-primary flex-1">
            <IconSymbol symbol='📅' className='mr-2 h-4 w-4' ariaLabel='Calendar icon' />
            Schedule In-Person Tour
          </button>
          <button className="btn btn-secondary flex-1">
            <IconSymbol symbol='💬' className='mr-2 h-4 w-4' ariaLabel='Chat icon' />
            Ask Questions
          </button>
          <button className="btn btn-secondary flex-1">
            <IconSymbol symbol='❤️' className='mr-2 h-4 w-4' ariaLabel='Favorites icon' />
            Save to Favorites
          </button>
        </div>
      </div>

      {/* Tour Description */}
      {tour.description && (
        <div className="p-4 border-t border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">{tour.description}</p>
        </div>
      )}

      {/* Accessibility Information */}
      <div className="p-4 border-t border-gray-200 bg-blue-50">
        <div className="flex items-start gap-3">
          <IconSymbol symbol='ℹ️' className='text-blue-600 mt-0.5 h-5 w-5' ariaLabel='Info icon' />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Virtual Tour Accessibility</p>
            <ul className="space-y-1 text-xs">
              <li>• Use keyboard arrow keys to navigate 360° tours</li>
              <li>• Screen reader users can access room descriptions</li>
              <li>• All interactive elements are keyboard accessible</li>
              <li>• Contact us for alternative tour formats if needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for displaying multiple virtual tours
interface VirtualTourGalleryProps {
  tours: VirtualTour[];
  propertyTitle: string;
  className?: string;
}

export function VirtualTourGallery({ tours, propertyTitle, className = '' }: VirtualTourGalleryProps) {
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null);
  const { announce } = useScreenReaderAnnouncements();

  const handleTourSelect = (tour: VirtualTour) => {
    setSelectedTour(tour);
    announce(`Opened ${tour.type} virtual tour for ${propertyTitle}`, 'polite');
  };

  if (tours.length === 0) {
    return (
      <div className={`bg-gray-50 rounded-lg p-6 text-center ${className}`}>
        <IconSymbol symbol='🏠' className='text-2xl mb-2 text-blue-600' ariaLabel='Home icon' />
        <p className="text-gray-600">Virtual tours coming soon for this property</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {selectedTour ? (
        <div className="space-y-4">
          <button
            onClick={() => setSelectedTour(null)}
            className="btn btn-secondary inline-flex items-center gap-2"
            aria-label="Back to virtual tour gallery"
          >
            <IconSymbol symbol='←' className='h-4 w-4' ariaLabel='Back arrow' />
            Back to Tours
          </button>
          <VirtualTour tour={selectedTour} />
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Virtual Tours Available</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tours.map(tour => (
              <button
                key={tour.id}
                onClick={() => handleTourSelect(tour)}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={tour.thumbnail}
                    alt={`${tour.title} virtual tour thumbnail`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {tour.type.toUpperCase()}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{tour.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{tour.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{tour.rooms.length} rooms</span>
                  {tour.duration && <span>{Math.floor(tour.duration / 60)} min</span>}
                  <span className={tour.isInteractive ? 'text-green-600' : 'text-blue-600'}>
                    {tour.isInteractive ? 'Interactive' : 'Guided'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
