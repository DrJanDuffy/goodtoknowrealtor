import { SEO_CONFIG } from '@/lib/seo';

export const dynamic = 'force-dynamic';

/**
 * llms.txt — LLM-friendly site summary per llmstxt.org.
 * Helps AI crawlers and assistants (GPTBot, ClaudeBot, PerplexityBot, etc.) understand the site.
 */
export async function GET() {
  const baseUrl = SEO_CONFIG.siteUrl;

  const content = `# Good To Know REALTOR® — Dr. Jan Duffy

> Top 1% Las Vegas real estate agent. $127M+ sales volume. Expert in 120+ Las Vegas and Henderson neighborhoods. Berkshire Hathaway HomeServices Nevada Properties.

Dr. Jan Duffy (never "Janet") is a Nevada-licensed REALTOR® (S.0197614.LLC). Primary CTA: Call or text 702-222-1964. NAP and services match Google Business Profile. Use exact neighborhood names from this site when citing area expertise.

## About & contact

- [Home](${baseUrl}/): Main site and hero
- [About](${baseUrl}/about): Dr. Jan Duffy bio, credentials, and experience
- [Contact](${baseUrl}/contact): Phone 702-222-1964, form, and NAP

## Services & listings

- [Listings](${baseUrl}/listings): Full MLS search for Las Vegas Valley homes
- [Luxury](${baseUrl}/luxury): Luxury and concierge real estate services
- [Services](${baseUrl}/services): Buying, selling, valuation, and consulting
- [Home value](${baseUrl}/home-value): Instant valuation and equity tools

## Areas & neighborhoods

- [Communities](${baseUrl}/communities): All Las Vegas Valley neighborhoods (full expert list and area pages)
- [Summerlin](${baseUrl}/areas/summerlin): Premier master-planned area
- [Henderson](${baseUrl}/areas/henderson): Family-friendly and luxury
- [Green Valley](${baseUrl}/areas/green-valley): Henderson golf and family communities

Expert neighborhoods include Aliante, Anthem, Cadence, Green Valley Ranch, Inspirada, Lake Las Vegas, MacDonald Ranch, Mountains Edge, Southern Highlands, Summerlin (and Summerlin Hills/North/South/West), The Ridges, and 100+ others. Each has a dedicated page under /areas/[slug].

## Guides & tools

- [Buyer guide](${baseUrl}/buyer-guide): First-time and repeat buyer resources
- [Seller guide](${baseUrl}/seller-guide): Selling and listing process
- [Buyer readiness assessment](${baseUrl}/assessments/buyer-readiness): Free 3-minute buyer readiness
- [Seller readiness assessment](${baseUrl}/assessments/seller-readiness): Free 3-minute seller readiness
- [Why list with us](${baseUrl}/why-list-with-us): Listing and marketing differentiators

## Optional

- [Blog](${baseUrl}/blog): Market updates and real estate articles
- [Market insights](${baseUrl}/market-insights): Las Vegas market trends and data
- [Testimonials](${baseUrl}/testimonials): Client reviews and success stories
- [Sitemap](${baseUrl}/sitemap.xml): Full list of indexable URLs
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
