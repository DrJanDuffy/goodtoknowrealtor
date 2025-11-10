/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance and Optimization - 2025 best practices
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Image optimization configuration - prioritize AVIF over WebP
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'www.simplifyingthemarket.com',
      'em.realscout.com',
      'embed.homebotapp.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year for better caching
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'em.realscout.com',
      },
      {
        protocol: 'https',
        hostname: 'embed.homebotapp.com',
      },
    ],
  },

  // Experimental features for 2025
  experimental: {
    optimizePackageImports: ['@/components/ui/Icons'],
    scrollRestoration: true,
  },

  // Enhanced security headers for 2025
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
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
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com https://em.realscout.com https://embed.homebotapp.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.realscout.com https://*.vercel.app https://embed.homebotapp.com https://www.simplifyingthemarket.com https://www.google-analytics.com https://analytics.google.com",
              "frame-src 'self' https://www.simplifyingthemarket.com https://embed.homebotapp.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      },
      // Cache static assets aggressively
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // More permissive headers for widget-heavy pages
      {
        source: '/(home-value|listings|buying|selling|luxury|investing|areas)/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com https://em.realscout.com https://embed.homebotapp.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.realscout.com https://*.vercel.app https://embed.homebotapp.com https://www.simplifyingthemarket.com https://www.google-analytics.com",
              "frame-src 'self' https://www.simplifyingthemarket.com https://embed.homebotapp.com",
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com https://em.realscout.com https://embed.homebotapp.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.realscout.com https://*.vercel.app https://embed.homebotapp.com https://www.simplifyingthemarket.com https://www.google-analytics.com",
              "frame-src 'self' https://www.simplifyingthemarket.com https://embed.homebotapp.com",
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
        source: '/blog/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://vercel.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://*.vercel.app https://www.simplifyingthemarket.com https://www.google-analytics.com",
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

  // External packages configuration
  serverExternalPackages: [],

  // Skip linting during build for now
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Webpack configuration for performance and security
  webpack: (config, { isServer, dev }) => {
    // Disable source maps in production for security
    if (!isServer && process.env.NODE_ENV === 'production') {
      config.devtool = false;
    }

    // Optimize chunks for better performance
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types)[\\/]/,
              priority: 40,
              enforce: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
          },
          maxInitialRequests: 25,
          minSize: 20000,
        },
      };
    }

    return config;
  },

  // Redirect configuration for security and SEO
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
        // Force non-www to www (HTTPS)
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'goodtoknowrealtor.com',
            },
          ],
          destination: 'https://www.goodtoknowrealtor.com/:path*',
          permanent: true,
        },
      ] : []),
      // Legacy/invalid paths → current routes
      {
        source: '/listings/search',
        destination: '/listings',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
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
