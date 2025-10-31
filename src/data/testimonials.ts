/**
 * Testimonial Data Structure
 * 
 * Use this template to add new testimonials:
 * 
 * {
 *   id: number (unique),
 *   shortQuote: string (2-3 sentences, problem → solution → result),
 *   fullQuote: string (detailed version with all specifics),
 *   author: string (Name or "Name & Name"),
 *   location: string (City/Neighborhood),
 *   community?: string (Specific area, e.g., "Summerlin - $850K Purchase"),
 *   rating: number (1-5),
 *   propertyType: 'buyer' | 'seller' | 'investor',
 *   dollarAmount: string (e.g., "$850K", "$125K over asking"),
 *   timeline: string (e.g., "18 days", "6 days"),
 *   image?: string (URL for avatar),
 *   datePublished?: string (YYYY-MM-DD format for SEO),
 * }
 */

export interface Testimonial {
  id: number;
  shortQuote: string; // 2-3 sentences max for hero carousel
  fullQuote: string; // Detailed version for full section
  author: string;
  location: string;
  community?: string;
  rating: number;
  propertyType: 'buyer' | 'seller' | 'investor';
  dollarAmount: string;
  timeline: string;
  image?: string;
  datePublished?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    shortQuote: "Lost 3 bidding wars. Dr. Jan found us our dream Summerlin home—first offer accepted, $50K under asking.",
    fullQuote: "After losing 3 homes to cash buyers and bidding wars, we were exhausted and ready to give up. Dr. Jan found an off-market property in Summerlin that matched our vision exactly—and negotiated our first offer accepted, $50K UNDER asking price (not over). We closed in 18 days, stress-free, and saved enough to renovate the kitchen.",
    author: "Sarah & Mike Johnson",
    location: "First-Time Homebuyers",
    community: "Summerlin - $850K Purchase",
    rating: 5,
    propertyType: 'buyer',
    dollarAmount: '$850K ($50K under asking)',
    timeline: '18 days',
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    datePublished: '2024-03-15'
  },
  {
    id: 2,
    shortQuote: "Worried we'd sit on market for months. Dr. Jan's staging and pricing strategy: 8 offers in 6 days, $125K over asking—retirement home paid in cash.",
    fullQuote: "We worried our home would sit on market for months, delaying our retirement move. Dr. Jan's pre-listing staging overhaul (she brought in professional designers) and aggressive pricing strategy generated 8 competing offers in just 6 days. We accepted $125K over asking—enough to buy our Arizona retirement home in cash, no mortgage needed.",
    author: "Robert & Diane Chen",
    location: "Retirees",
    community: "Henderson - $125K Over Asking",
    rating: 5,
    propertyType: 'seller',
    dollarAmount: '$125K over asking',
    timeline: '6 days',
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    datePublished: '2024-02-20'
  },
  {
    id: 3,
    shortQuote: "Losing money on random Zillow buys. Dr. Jan mapped emerging neighborhoods, found undervalued properties—now $2.3M portfolio, $8,200/month passive income, 340% cash flow increase.",
    fullQuote: "I was buying random properties based on Zillow listings and losing money every month. Dr. Jan mapped out emerging Las Vegas neighborhoods before they peaked, found 3 undervalued properties with forced-appreciation potential, and structured deals that cash-flowed from day one. My portfolio is now $2.3M, generating $8,200/month passive income—up 340% from my first struggling property. Her market timing isn't luck; it's strategic.",
    author: "Alex Martinez",
    location: "Real Estate Investor",
    community: "$2.3M Investment Portfolio",
    rating: 5,
    propertyType: 'investor',
    dollarAmount: '$2.3M portfolio, $8,200/month',
    timeline: '2022-present',
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    datePublished: '2024-01-10'
  },
  {
    id: 4,
    shortQuote: "Avoided $200K+ luxury bidding wars. Dr. Jan's private network unlocked off-market Ridges property—closed at fair market value, saved $200K+.",
    fullQuote: "Every luxury home we wanted had Bulletin of Sales posted—multiple offers, $200K+ over asking. Dr. Jan leveraged her private network to access an off-market listing in The Ridges that matched our exact specifications (mountain views, 3-car garage, pool). We negotiated directly with the seller, avoided bidding wars entirely, and closed at fair market value: $1.2M for a home that would've cost $1.4M+ in a public listing frenzy.",
    author: "Jennifer & David Thompson",
    location: "Luxury Home Buyers",
    community: "The Ridges - $1.2M Purchase",
    rating: 5,
    propertyType: 'buyer',
    dollarAmount: '$1.2M (saved $200K+)',
    timeline: 'November 2023',
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    datePublished: '2023-11-20'
  },
  {
    id: 5,
    shortQuote: "First-time seller, terrified of pricing wrong. Dr. Jan's marketing strategy: $95K above target, closed in 14 days—upgrade to our dream family home.",
    fullQuote: "As a first-time seller, I feared pricing too low and leaving money on the table—or pricing too high and sitting for months. Dr. Jan's comparative market analysis pinpointed the sweet spot, and her professional photography + 3D virtual tours attracted 12 showings from California buyers in the first week. We accepted an offer $95K above our original target, closed in 14 days, and used the proceeds to upgrade to a larger home for our growing family.",
    author: "Maria Rodriguez",
    location: "First-Time Seller",
    community: "North Las Vegas - $95K Over Target",
    rating: 5,
    propertyType: 'seller',
    dollarAmount: '$95K over target',
    timeline: '14 days',
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    datePublished: '2024-01-25'
  },
  {
    id: 6,
    shortQuote: "Almost bought 2 properties with $75K+ hidden issues. Dr. Jan's due diligence saved us from disaster—found 3 cash-flowing properties instead: $1.8M portfolio, $8,500/month income.",
    fullQuote: "We almost bought two properties with hidden foundation issues and tenant problems that would've cost $75K+ in repairs. Dr. Jan's rigorous due diligence process (inspections, title searches, tenant history reviews) flagged red flags we missed. She found us 3 cash-flowing properties in stable neighborhoods instead—$1.8M portfolio generating $8,500/month passive income. Her deal-killing saved our investment strategy.",
    author: "James & Lisa Park",
    location: "Investment Property Buyers",
    community: "$8,500/Month Passive Income",
    rating: 5,
    propertyType: 'investor',
    dollarAmount: '$1.8M portfolio, $8,500/month',
    timeline: '2024',
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    datePublished: '2024-03-01'
  }
];

// Export hero testimonials (first 5 for carousel)
export const heroTestimonials = testimonials.slice(0, 5);

