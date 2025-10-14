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
    // Rate limiting (more restrictive for home value requests)
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip, rateLimitConfig.homeValue)) {
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
    const requiredFields = ['address', 'email'];
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

    // Additional address validation
    if (sanitizedData.address.length < 10 || sanitizedData.address.length > 200) {
      throw createSecureError('Please provide a complete address', 'VALIDATION_ERROR');
    }

    // Additional phone validation if provided
    if (sanitizedData.phone) {
      const phoneRegex = /^[\+]?[1]?[\s\-\.]?[(]?[0-9]{3}[)]?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/;
      if (!phoneRegex.test(sanitizedData.phone)) {
        throw createSecureError('Invalid phone format', 'VALIDATION_ERROR');
      }
    }

    // Here you would typically:
    // 1. Validate the address with a geocoding service
    // 2. Get property data from MLS or similar service
    // 3. Generate a comprehensive market analysis
    // 4. Send the report via email
    
    // For now, we'll simulate a successful submission
    // Home value request logged

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    return NextResponse.json({
      success: true,
      message: 'Your home value report is being generated and will be sent to your email within 30 minutes.'
    });

  } catch (error) {
    // Home value request error occurred
    
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
