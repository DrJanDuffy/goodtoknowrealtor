import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log web vitals data for analysis
    console.log('Web Vitals Data:', {
      timestamp: new Date().toISOString(),
      ...body,
    });

    // You can also send this data to external services like:
    // - Google Analytics
    // - DataDog
    // - New Relic
    // - Custom analytics platform

    // Example: Send to Google Analytics (if configured)
    if (process.env.NEXT_PUBLIC_GA_ID) {
      // This would typically be handled client-side, but you could
      // also send server-side events here
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing web vitals:', error);
    return NextResponse.json(
      { error: 'Failed to process web vitals' },
      { status: 500 }
    );
  }
}
