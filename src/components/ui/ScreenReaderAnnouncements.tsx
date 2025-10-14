'use client';

import { createContext, useContext, useRef } from 'react';
// useEffect import removed - not used in this component

interface ScreenReaderAnnouncementsContextType {
  announce: (message: string, priority?: 'polite' | 'assertive') => void;
}

const ScreenReaderAnnouncementsContext = createContext<ScreenReaderAnnouncementsContextType | null>(null);

export function ScreenReaderAnnouncementsProvider({ children }: { children: React.ReactNode }) {
  const politeRef = useRef<HTMLDivElement>(null);
  const assertiveRef = useRef<HTMLDivElement>(null);

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    // Parameters processed for future use
    void message;
    void priority;
    const ref = priority === 'assertive' ? assertiveRef : politeRef;
    if (ref.current) {
      ref.current.textContent = message;
      // Clear the message after announcement
      setTimeout(() => {
        if (ref.current) {
          ref.current.textContent = '';
        }
      }, 1000);
    }
  };

  return (
    <ScreenReaderAnnouncementsContext.Provider value={{ announce }}>
      {children}
      {/* Screen reader only announcements */}
      <div
        ref={politeRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
      <div
        ref={assertiveRef}
        className="sr-only"
        aria-live="assertive"
        aria-atomic="true"
      />
    </ScreenReaderAnnouncementsContext.Provider>
  );
}

export function useScreenReaderAnnouncements() {
  const context = useContext(ScreenReaderAnnouncementsContext);
  if (!context) {
    throw new Error('useScreenReaderAnnouncements must be used within a ScreenReaderAnnouncementsProvider');
  }
  return context;
}
