import { getSecureRelAttributes, isExternalUrl } from '@/lib/security';

// Component to automatically add secure attributes to external links
export function SecureExternalLink({ 
  href, 
  children, 
  className = '', 
  ...props 
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const secureRel = getSecureRelAttributes(href);
  
  return (
    <a
      href={href}
      target="_blank"
      rel={secureRel}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

// Hook to validate and sanitize URLs
export function useSecureUrl(url: string): { isValid: boolean; sanitizedUrl: string } {
  try {
    const urlObj = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { isValid: false, sanitizedUrl: '' };
    }
    
    // Sanitize the URL
    const sanitizedUrl = urlObj.toString();
    
    return { isValid: true, sanitizedUrl };
  } catch {
    return { isValid: false, sanitizedUrl: '' };
  }
}

// Component to render external images securely
export function SecureImage({ 
  src, 
  alt, 
  className = '', 
  ...props 
}: {
  src: string;
  alt: string;
  className?: string;
  [key: string]: any;
}) {
  const { isValid, sanitizedUrl } = useSecureUrl(src);
  
  if (!isValid) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Invalid image</span>
      </div>
    );
  }
  
  return (
    <img
      src={sanitizedUrl}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
}

// Utility to create secure form data
export function createSecureFormData(data: Record<string, any>): FormData {
  const formData = new FormData();
  
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string') {
      // Sanitize string values
      const sanitizedValue = value
        .replace(/[<>]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .trim();
      
      formData.append(key, sanitizedValue);
    } else if (value instanceof File) {
      formData.append(key, value);
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      formData.append(key, String(value));
    }
  });
  
  return formData;
}

// Utility to validate file uploads
export function validateFileUpload(file: File): { isValid: boolean; error?: string } {
  // Check file size (max 10MB)
  const maxSize = 10 * 1024 * 1024; // 10MB
  if (file.size > maxSize) {
    return { isValid: false, error: 'File size must be less than 10MB' };
  }
  
  // Check file type
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf',
    'text/plain'
  ];
  
  if (!allowedTypes.includes(file.type)) {
    return { isValid: false, error: 'File type not allowed' };
  }
  
  // Check file name
  if (file.name.length > 255) {
    return { isValid: false, error: 'File name too long' };
  }
  
  // Check for suspicious file names
  const suspiciousPatterns = [
    /\.exe$/i,
    /\.bat$/i,
    /\.cmd$/i,
    /\.scr$/i,
    /\.pif$/i,
    /\.com$/i
  ];
  
  if (suspiciousPatterns.some(pattern => pattern.test(file.name))) {
    return { isValid: false, error: 'File type not allowed' };
  }
  
  return { isValid: true };
}

// Utility to create secure error boundaries
export function createSecureErrorBoundary() {
  return class SecureErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean }
  > {
    constructor(props: { children: React.ReactNode }) {
      super(props);
      this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error: Error) {
      // Log error securely without exposing sensitive information
      console.error('Application error:', {
        message: 'An unexpected error occurred',
        timestamp: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown'
      });
      
      return { hasError: true };
    }
    
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      // Log error information securely
      console.error('Error boundary caught error:', {
        message: 'An unexpected error occurred',
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString()
      });
    }
    
    render() {
      if (this.state.hasError) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        );
      }
      
      return this.props.children;
    }
  };
}
