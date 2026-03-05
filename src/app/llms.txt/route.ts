export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://www.goodtoknowrealtor.com';
  const content = `# Good to Know Realtor — Dr. Jan Duffy
> Las Vegas real estate expertise and community insights
## About
Dr. Jan Duffy is a Nevada-licensed real estate professional (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. With 30+ years of experience serving the Las Vegas area and over $127M in career sales, Dr. Duffy specializes in this community and helps families find their perfect Nevada home.
- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **License:** Nevada S.0197614.LLC
- **Phone:** 702-222-1964
- **Website:** ${baseUrl}
## Services
- Residential home buying and selling
- Community-specific property expertise
- Relocation services for moving to Nevada
- Home valuation and market analysis
- Investment property guidance
## Coverage Area
Las Vegas, Henderson, North Las Vegas, and surrounding Southern Nevada communities
## Key Pages
- [Home](${baseUrl}/)
- [Contact](${baseUrl}/contact)
- [About](${baseUrl}/about)
## Contact
- **Call/Text:** 702-222-1964
- **Website:** ${baseUrl}
`;
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
