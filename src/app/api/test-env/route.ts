import { NextResponse } from 'next/server';

export async function GET() {
  const wpApiUrl = process.env['NEXT_PUBLIC_WORDPRESS_API_URL'];

  return NextResponse.json({
    hasWordPressUrl: !!wpApiUrl,
    wpApiUrl: wpApiUrl || 'Not set',
    environment: process.env.NODE_ENV,
    message: wpApiUrl
      ? 'WordPress API URL is configured correctly!'
      : 'WordPress API URL is not set. Please configure NEXT_PUBLIC_WORDPRESS_API_URL in your environment variables.',
  });
}
