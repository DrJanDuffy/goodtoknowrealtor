import { NextRequest, NextResponse } from 'next/server';
import { 
  validateFormData, 
  sanitizeFormData, 
  validateCSRFToken, 
  createSecureError, 
  sanitizeErrorForClient,
  checkRateLimit,
  rateLimitConfig
} from '@/lib/security';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip, rateLimitConfig.contactForm)) {
      throw createSecureError('Rate limit exceeded', 'RATE_LIMIT_EXCEEDED');
    }

    // Parse and validate request body
    const body = await request.json();
    
    if (!body || typeof body !== 'object') {
      throw createSecureError('Invalid request data', 'VALIDATION_ERROR');
    }

    // Sanitize form data
    const sanitizedData = sanitizeFormData(body);
    
    // Validate form data
    const validation = validateFormData(sanitizedData);
    if (!validation.isValid) {
      throw createSecureError(`Validation failed: ${validation.errors.join(', ')}`, 'VALIDATION_ERROR');
    }

    // CSRF token validation
    const csrfToken = sanitizedData._csrf;
    const sessionToken = request.headers.get('x-csrf-token') || '';
    
    if (!validateCSRFToken(csrfToken, sessionToken)) {
      throw createSecureError('Invalid CSRF token', 'CSRF_TOKEN_INVALID');
    }

    // Remove CSRF token from data before processing
    delete sanitizedData._csrf;

    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];
    for (const field of requiredFields) {
      if (!sanitizedData[field] || sanitizedData[field].trim() === '') {
        throw createSecureError(`${field} is required`, 'VALIDATION_ERROR');
      }
    }

    // Additional email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      throw createSecureError('Invalid email format', 'VALIDATION_ERROR');
    }

    // Additional phone validation if provided
    if (sanitizedData.phone) {
      const phoneRegex = /^[\+]?[1]?[\s\-\.]?[(]?[0-9]{3}[)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/;
      if (!phoneRegex.test(sanitizedData.phone)) {
        throw createSecureError('Invalid phone format', 'VALIDATION_ERROR');
      }
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the submission
    
    // For now, we'll simulate a successful submission
    console.log('Contact form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone || 'Not provided',
      message: sanitizedData.message.substring(0, 100) + '...', // Truncate for logging
      timestamp: new Date().toISOString(),
      ip: ip
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    const sanitizedError = sanitizeErrorForClient(error as Error);
    
    return NextResponse.json(
      {
        success: false,
        message: sanitizedError.message,
        code: sanitizedError.code
      },
      { status: 400 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
