/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'www.simplifyingthemarket.com',
      'em.realscout.com',
      'embed.homebotapp.com'
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com https://em.realscout.com https://embed.homebotapp.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob: https://images.unsplash.com https://via.placeholder.com https://www.simplifyingthemarket.com",
              "connect-src 'self' https://api.realscout.com https://*.vercel.app https://embed.homebotapp.com https://www.simplifyingthemarket.com",
              "frame-src 'self' https://www.simplifyingthemarket.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      },
      // More permissive headers for widget-heavy pages
      {
        source: '/(home-value|listings|buying|selling|luxury|investing|areas)/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com https://em.realscout.com https://embed.homebotapp.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob: https://images.unsplash.com https://via.placeholder.com https://www.simplifyingthemarket.com https://em.realscout.com https://embed.homebotapp.com",
              "connect-src 'self' https://api.realscout.com https://*.vercel.app https://embed.homebotapp.com https://www.simplifyingthemarket.com",
              "frame-src 'self' https://www.simplifyingthemarket.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      },
      // Homepage with multiple widgets
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com https://em.realscout.com https://embed.homebotapp.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob: https://images.unsplash.com https://via.placeholder.com https://www.simplifyingthemarket.com https://em.realscout.com https://embed.homebotapp.com",
              "connect-src 'self' https://api.realscout.com https://*.vercel.app https://embed.homebotapp.com https://www.simplifyingthemarket.com",
              "frame-src 'self' https://www.simplifyingthemarket.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      },
      // Blog page with RSS feed images
      {
        source: '/blog',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob: https://images.unsplash.com https://via.placeholder.com https://www.simplifyingthemarket.com",
              "connect-src 'self' https://*.vercel.app https://www.simplifyingthemarket.com",
              "frame-src 'self' https://www.simplifyingthemarket.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      }
    ];
  },

  // Environment variables validation
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Image optimization security
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'www.simplifyingthemarket.com',
      'em.realscout.com',
      'embed.homebotapp.com'
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // External packages configuration
  serverExternalPackages: [],

  // Skip linting during build for now
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Webpack configuration for security
  webpack: (config, { isServer }) => {
    // Disable source maps in production for security
    if (!isServer && process.env.NODE_ENV === 'production') {
      config.devtool = false;
    }
    
    return config;
  },

  // Redirect configuration for security
  async redirects() {
    return [
      // Redirect HTTP to HTTPS in production
      ...(process.env.NODE_ENV === 'production' ? [
        {
          source: '/((?!$).*)',
          has: [
            {
              type: 'header',
              key: 'x-forwarded-proto',
              value: 'http',
            },
          ],
          destination: 'https://www.goodtoknowrealtor.com/:path*',
          permanent: true,
        },
      ] : []),
    ];
  },

  // Rewrites for API security
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;