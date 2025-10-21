import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const verificationCode = process.env.GOOGLE_SITE_VERIFICATION;
  
  if (!verificationCode) {
    return new NextResponse('Verification code not found', { status: 404 });
  }

  // Extract the verification code from the URL path
  const url = new URL(request.url);
  const pathSegments = url.pathname.split('/');
  const requestedCode = pathSegments[pathSegments.length - 1].replace('.html', '');
  
  // Check if the requested code matches our verification code
  if (requestedCode === verificationCode) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Google Site Verification</title>
</head>
<body>
  <p>This site is verified with Google Search Console.</p>
  <p>Verification code: ${verificationCode}</p>
</body>
</html>`;
    
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
      },
    });
  }
  
  return new NextResponse('Verification code mismatch', { status: 404 });
}
