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
    // Rate limiting for search requests
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip, rateLimitConfig.search)) {
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

    // Validate search query
    const searchQuery = sanitizedData.query || sanitizedData.searchQuery;
    if (!searchQuery || searchQuery.trim().length < 2) {
      throw createSecureError('Search query must be at least 2 characters', 'VALIDATION_ERROR');
    }

    if (searchQuery.length > 100) {
      throw createSecureError('Search query is too long', 'VALIDATION_ERROR');
    }

    // Additional validation for search query
    if (!/^[a-zA-Z0-9\s\.,\-#]+$/.test(searchQuery)) {
      throw createSecureError('Search query contains invalid characters', 'VALIDATION_ERROR');
    }

    // Here you would typically:
    // 1. Query your database or MLS system
    // 2. Apply filters (price range, bedrooms, etc.)
    // 3. Return formatted results
    
    // For now, we'll simulate a search response
    // Log property search for debugging
    // (console.log removed for production build)

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock search results
    const mockResults = [
      {
        id: '1',
        address: '123 Main St, Las Vegas, NV',
        price: '$450,000',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800,
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80'
      },
      {
        id: '2',
        address: '456 Oak Ave, Las Vegas, NV',
        price: '$520,000',
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2200,
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80'
      }
    ];

    return NextResponse.json({
      success: true,
      results: mockResults,
      totalResults: mockResults.length,
      query: searchQuery
    });

  } catch (error) {
    // Error logging removed for production build
    
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
