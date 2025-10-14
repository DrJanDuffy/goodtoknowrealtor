# WordPress API Client Setup Guide

This guide explains how to configure your WordPress API client for both Vercel and Cloudflare Workers platforms.

## 🚀 Quick Start

Your WordPress client (`lib/wordpress.ts`) is now optimized for both platforms with:
- ✅ Automatic platform detection
- ✅ Retry logic with exponential backoff
- ✅ Authentication support
- ✅ Caching strategies for each platform
- ✅ Comprehensive error handling

## 📋 Environment Variables

### Vercel Configuration

In your Vercel dashboard, add these environment variables:

```bash
# Required
WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
NEXT_PUBLIC_WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2

# Optional (for private posts)
WORDPRESS_USER=your_wordpress_username
WORDPRESS_APP_PASSWORD=your_app_password

# Legacy compatibility
WP_USER=your_wordpress_username
WP_APP_PASS=your_app_password

# Platform detection (auto-set by Vercel)
VERCEL=1

# Base URL for redirects
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

### Cloudflare Workers Configuration

1. **Using Wrangler CLI:**

```bash
# Set environment variables
wrangler secret put WORDPRESS_USER
wrangler secret put WORDPRESS_APP_PASSWORD

# Set public variables
wrangler kv:namespace create "CACHE"
```

2. **Update `wrangler.toml`:**

```toml
name = "wordpress-api-client"
main = "src/index.js"
compatibility_date = "2023-12-01"

[vars]
WORDPRESS_API_URL = "https://www.bhhscp.com/wp-json/wp/v2"

[[kv_namespaces]]
binding = "CACHE"
id = "your-kv-namespace-id"
```

## 🔧 Platform-Specific Features

### Vercel (Next.js)
- ✅ **ISR Support**: Automatic revalidation with `next: { revalidate: 3600 }`
- ✅ **Edge Runtime**: Fast global distribution
- ✅ **Built-in Caching**: Leverages Vercel's edge cache
- ✅ **Environment Variables**: Full support for `process.env`

### Cloudflare Workers
- ✅ **Global Edge**: Runs in 200+ locations worldwide
- ✅ **KV Storage**: Optional caching with Cloudflare KV
- ✅ **Durable Objects**: Stateful caching for complex scenarios
- ✅ **Zero Cold Starts**: Instant response times

## 📚 Usage Examples

### Basic Usage (Both Platforms)

```typescript
import { getPosts, getPostBySlug, getCategories } from '@/lib/wordpress';

// Fetch all posts
const posts = await getPosts({
  per_page: 10,
  page: 1,
  orderby: 'date',
  order: 'desc'
});

// Fetch single post
const post = await getPostBySlug('my-blog-post-slug');

// Fetch categories
const categories = await getCategories();

// Search posts
const searchResults = await searchPosts('real estate tips');
```

### Advanced Usage with Filters

```typescript
// Posts by category
const categoryPosts = await getPostsByCategory(5, 20);

// Posts with specific tags
const taggedPosts = await getPosts({
  tags: '1,2,3',
  per_page: 15
});

// Search with pagination
const searchResults = await searchPosts('mortgage rates', 25);
```

### Helper Functions

```typescript
import { 
  stripHtmlTags, 
  getExcerpt, 
  getFeaturedImageUrl, 
  getAuthorName,
  getCategoryNames,
  calculateReadingTime,
  formatDate,
  getRelativeTime
} from '@/lib/wordpress';

// Process post content
const cleanContent = stripHtmlTags(post.content.rendered);
const excerpt = getExcerpt(post, 150);
const imageUrl = getFeaturedImageUrl(post);
const author = getAuthorName(post);
const categories = getCategoryNames(post);
const readingTime = calculateReadingTime(post.content.rendered);
const formattedDate = formatDate(post.date);
const relativeTime = getRelativeTime(post.date);
```

## 🔐 Authentication Setup

### WordPress App Passwords

1. **In WordPress Admin:**
   - Go to Users → Profile
   - Scroll to "Application Passwords"
   - Add new application password
   - Copy the generated password

2. **Set Environment Variables:**
   ```bash
   WORDPRESS_USER=your_username
   WORDPRESS_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx xxxx
   ```

### Protected Posts Access

With authentication configured, you can access:
- ✅ Private posts
- ✅ Draft posts (if you have permissions)
- ✅ Password-protected posts
- ✅ Custom post types

## 🚨 Error Handling

The client includes comprehensive error handling:

```typescript
try {
  const posts = await getPosts();
} catch (error) {
  if (error.message.includes('Client error')) {
    // Handle 4xx errors (bad request, not found, etc.)
    console.error('Request error:', error.message);
  } else if (error.message.includes('Server error')) {
    // Handle 5xx errors (server issues)
    console.error('Server error:', error.message);
  } else {
    // Handle network or other errors
    console.error('Network error:', error.message);
  }
}
```

## ⚡ Performance Optimizations

### Vercel
- **ISR**: Posts cached for 1 hour by default
- **Edge Runtime**: Global distribution
- **Automatic Compression**: Gzip/Brotli compression

### Cloudflare Workers
- **Global Edge**: 200+ locations
- **KV Caching**: Optional persistent caching
- **Zero Cold Starts**: Instant response times

### Both Platforms
- **Retry Logic**: Automatic retry with exponential backoff
- **Timeout Protection**: 10-second timeout per request
- **User-Agent Identification**: Platform-specific user agents

## 🔧 Customization

### Modify Cache Duration

```typescript
// In your usage
const posts = await getPosts({
  per_page: 20
}); // Uses default 1-hour cache

// For different cache strategies, modify DEFAULT_CONFIG in lib/wordpress.ts
```

### Custom User Agent

```typescript
// The client automatically sets platform-specific user agents:
// Vercel: "WordPress-Client/1.0 (Vercel)"
// Cloudflare: "WordPress-Client/1.0 (Cloudflare-Worker)"
```

## 🐛 Troubleshooting

### Common Issues

1. **Environment Variables Not Working**
   ```bash
   # Check if variables are set
   console.log(process.env.WORDPRESS_API_URL);
   ```

2. **Authentication Failing**
   ```bash
   # Verify credentials format
   # Should be: username:app_password (no spaces in app_password)
   ```

3. **CORS Issues (Cloudflare Workers)**
   ```javascript
   // Add CORS headers as shown in cloudflare-worker-example.js
   ```

4. **Rate Limiting**
   ```typescript
   // The client includes retry logic, but you can adjust retry count
   // Modify retries parameter in fetchWithRetry function
   ```

### Debug Mode

```typescript
// Enable debug logging
console.log('Platform:', isVercel ? 'Vercel' : 'Cloudflare Worker');
console.log('API URL:', WORDPRESS_API_URL);
console.log('Auth configured:', !!(WORDPRESS_USER && WORDPRESS_APP_PASSWORD));
```

## 📈 Monitoring

### Vercel Analytics
- Monitor API calls in Vercel dashboard
- Check function execution times
- Track error rates

### Cloudflare Analytics
- Monitor Worker invocations
- Track response times
- Check error rates in Cloudflare dashboard

## 🔄 Migration from Existing Implementation

If you're migrating from your existing `src/lib/blog/fetcher.ts`:

1. **Keep the existing implementation** as a fallback
2. **Gradually migrate** functions to use the new client
3. **Test thoroughly** on both platforms
4. **Monitor performance** and error rates

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review error logs in your platform dashboard
3. Test with the provided examples
4. Verify environment variable configuration

---

**Happy coding! 🎉** Your WordPress API client is now ready for production use on both Vercel and Cloudflare Workers.
