import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/test/',
          '/staging/',
          '/*.json$',
          '/*.xml$',
          '/search?*',
          '/?*utm_*',
          '/?*ref=*',
          '/?*fbclid=*',
          '/?*gclid=*',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      'https://www.goodtoknowrealtor.com/sitemap.xml',
      'https://www.goodtoknowrealtor.com/sitemap-blog.xml',
    ],
    host: 'https://www.goodtoknowrealtor.com',
  };
}
