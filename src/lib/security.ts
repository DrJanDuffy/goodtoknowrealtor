// Input validation and sanitization
export const validateInput = {
  // Email validation
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  },

  // Phone validation (US format)
  phone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1]?[\s\-\.]?[(]?[0-9]{3}[)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/;
    return phoneRegex.test(phone) && phone.length <= 20;
  },

  // Address validation
  address: (address: string): boolean => {
    return address.length >= 5 && address.length <= 200 && /^[a-zA-Z0-9\s\.,\-#]+$/.test(address);
  },

  // Name validation
  name: (name: string): boolean => {
    return name.length >= 2 && name.length <= 50 && /^[a-zA-Z\s\-']+$/.test(name);
  },

  // General text validation
  text: (text: string, maxLength: number = 1000): boolean => {
    return text.length <= maxLength && text.length > 0;
  },

  // Sanitize HTML content
  sanitizeHtml: (html: string): string => {
    return html
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim();
  },

  // Sanitize general text input
  sanitizeText: (text: string): string => {
    return text
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .trim();
  }
};

// Rate limiting configuration
export const rateLimitConfig = {
  // Rate limit for contact forms (requests per minute)
  contactForm: {
    maxRequests: 5,
    windowMs: 60 * 1000, // 1 minute
  },
  
  // Rate limit for search (requests per minute)
  search: {
    maxRequests: 30,
    windowMs: 60 * 1000, // 1 minute
  },
  
  // Rate limit for home value requests (requests per hour)
  homeValue: {
    maxRequests: 3,
    windowMs: 60 * 60 * 1000, // 1 hour
  }
};

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export const checkRateLimit = (identifier: string, config: typeof rateLimitConfig.contactForm): boolean => {
  const now = Date.now();
  const key = `${identifier}:${Math.floor(now / config.windowMs)}`;
  
  const current = rateLimitStore.get(key);
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + config.windowMs });
    return true;
  }
  
  if (current.count >= config.maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
};

// CSRF token generation and validation
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const validateCSRFToken = (token: string, sessionToken: string): boolean => {
  return token === sessionToken && token.length === 64;
};

// Secure headers configuration
export const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.realscout.com https://*.vercel.app",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; '),
  
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
};

// Input length limits
export const inputLimits = {
  email: 254,
  phone: 20,
  name: 50,
  address: 200,
  message: 1000,
  searchQuery: 100,
  companyName: 100,
  propertyType: 50
};

// Error handling without exposing sensitive information
export const createSecureError = (message: string, code: string = 'GENERIC_ERROR'): Error => {
  const error = new Error(message);
  (error as Record<string, unknown>).code = code;
  return error;
};

export const sanitizeErrorForClient = (error: Error): { message: string; code: string } => {
  // Only expose safe error messages to the client
  const safeMessages: Record<string, string> = {
    'VALIDATION_ERROR': 'Please check your input and try again.',
    'RATE_LIMIT_EXCEEDED': 'Too many requests. Please try again later.',
    'CSRF_TOKEN_INVALID': 'Security token expired. Please refresh and try again.',
    'GENERIC_ERROR': 'An error occurred. Please try again later.'
  };
  
  const code = (error as Record<string, unknown>).code || 'GENERIC_ERROR';
  return {
    message: safeMessages[code] || safeMessages['GENERIC_ERROR'],
    code
  };
};

// Validate external URL before adding rel attributes
export const isExternalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.origin !== process.env.NEXT_PUBLIC_SITE_URL;
  } catch {
    return false;
  }
};

// Add secure rel attributes to external links
export const getSecureRelAttributes = (url: string): string => {
  if (isExternalUrl(url)) {
    return 'noopener noreferrer';
  }
  return '';
};

// Input sanitization for forms
export const sanitizeFormData = (data: Record<string, unknown>): Record<string, string> => {
  const sanitized: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = validateInput.sanitizeText(value);
    }
  }
  
  return sanitized;
};

// Validate form data
export const validateFormData = (data: Record<string, string>): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Email validation
  if (data.email && !validateInput.email(data.email)) {
    errors.push('Invalid email format');
  }
  
  // Phone validation
  if (data.phone && !validateInput.phone(data.phone)) {
    errors.push('Invalid phone number format');
  }
  
  // Name validation
  if (data.name && !validateInput.name(data.name)) {
    errors.push('Name must contain only letters, spaces, hyphens, and apostrophes');
  }
  
  // Address validation
  if (data.address && !validateInput.address(data.address)) {
    errors.push('Invalid address format');
  }
  
  // Check input lengths
  Object.entries(data).forEach(([key, value]) => {
    const limit = inputLimits[key as keyof typeof inputLimits];
    if (limit && value.length > limit) {
      errors.push(`${key} is too long (maximum ${limit} characters)`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
