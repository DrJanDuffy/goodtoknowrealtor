# BHHS Blog Clone - Dr. Janet Duffy Real Estate

A Next.js 15 application that automatically fetches and displays blog posts from the Berkshire Hathaway HomeServices California Properties blog. When new posts are published on their site, they automatically appear on your site with Dr. Janet Duffy branding and Las Vegas real estate focus.

## 🚀 Features

### Automatic Blog Sync

- **Dual-Approach Fetcher**: Tries WordPress REST API first, falls back to web scraping
- **Real-time Updates**: New posts appear within 6 hours via Vercel cron jobs
- **Smart Caching**: ISR with 6-hour revalidation for optimal performance
- **Error Handling**: Graceful fallbacks when source is unavailable

### Dr. Jan Duffy Branding

- **Las Vegas Real Estate Focus**: Customized for local market insights
- **Professional Design**: Gold/amber color scheme with real estate aesthetics
- **Contact Integration**: Prominent phone number (702-222-1964) and consultation CTAs
- **Attribution**: Proper credit to original BHHS source content

### Technical Excellence

- **Next.js 15**: App Router with latest performance optimizations
- **Custom CSS**: Responsive design with utility-first approach
- **TypeScript**: Strict type safety throughout the application
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Vercel account for deployment

### Installation

```bash
# Clone the repository
git clone https://github.com/DrJanDuffy/goodtoknowrealtor.git
cd goodtoknowrealtor

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

### Environment Variables

Create `.env.local` with:

```bash
# Blog Source Configuration
BLOG_SOURCE_URL=https://www.bhhscp.com/blog
WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2

# Security
REVALIDATE_SECRET=your-secure-secret-key-here
```

### Vercel Deployment

1. **Connect to Vercel**:

   ```bash
   npx vercel
   ```

2. **Add Environment Variables in Vercel Dashboard**:
   - `BLOG_SOURCE_URL`: https://www.bhhscp.com/blog
   - `WORDPRESS_API_URL`: https://www.bhhscp.com/wp-json/wp/v2
   - `REVALIDATE_SECRET`: Generate a secure random string

3. **Deploy**:

   ```bash
   vercel --prod
   ```

4. **Test the Sync**:
   ```bash
   curl -X POST https://your-domain.vercel.app/api/blog/sync \
     -H "Authorization: Bearer your-revalidate-secret"
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript type checking

# Testing
npm run test         # Run unit tests
npm run test:ui      # Run tests with UI
npm run test:e2e     # Run end-to-end tests
npm run test:all     # Run all tests

# Utilities
npm run clean        # Clean build artifacts
npm run analyze      # Analyze bundle size
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and individual posts
│   ├── api/               # API routes for sync and testing
│   └── globals.css        # Global styles and utilities
├── components/            # React components
│   ├── blog/             # Blog-specific components
│   ├── ui/               # Reusable UI components
│   └── Globals/          # Global layout components
├── lib/                   # Utility libraries
│   └── blog/             # Blog fetching and caching logic
├── types/                 # TypeScript type definitions
└── test/                  # Test files
```

## 🔧 Configuration

### Blog Sync Configuration

The application uses a dual-approach system for fetching blog posts:

1. **Primary**: WordPress REST API (`/wp-json/wp/v2/posts`)
2. **Fallback**: Web scraping with Cheerio

### Caching Strategy

- **ISR**: Incremental Static Regeneration with 6-hour revalidation
- **In-Memory Cache**: For development and API responses
- **Vercel Edge**: Automatic caching at the edge

### Cron Jobs

Vercel cron jobs automatically sync blog posts every 6 hours:

```json
{
  "crons": [
    {
      "path": "/api/blog/sync",
      "schedule": "0 */6 * * *"
    }
  ]
}
```

## 🎨 Customization

### Branding

Update the Dr. Janet Duffy branding by modifying:

- `src/app/blog/page.tsx` - Hero section and CTAs
- `src/components/Globals/Navigation/Navigation.tsx` - Navigation
- `src/components/Globals/Footer/Footer.tsx` - Footer
- `src/app/globals.css` - Color scheme and styling

### Content Sources

Change the blog source by updating:

- `src/lib/blog/fetcher.ts` - BLOG_CONFIG object
- Environment variables for different WordPress sites

## 📊 Performance

### Lighthouse Scores

- **Performance**: Optimized for Core Web Vitals
- **SEO**: Complete meta tags and structured data
- **Accessibility**: WCAG compliant design
- **Best Practices**: Security headers and optimizations

### Bundle Analysis

```bash
npm run analyze
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform supporting Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Legal & Attribution

This application properly attributes content to the original source:

- **Source**: Berkshire Hathaway HomeServices California Properties
- **Attribution**: Displayed on each blog post
- **Licensing**: Respects original content rights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions about this implementation:

- **Real Estate Services**: Contact Dr. Janet Duffy at (702) 222-1964
- **Technical Issues**: Create an issue in this repository

## 📄 License

This project is for educational and business purposes. Please ensure compliance with content source terms and local regulations.

---

**Built with ❤️ for Dr. Janet Duffy Real Estate**# Environment variables configured
