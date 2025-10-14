# Deployment Guide for WordPress API Client

## 🔧 Environment Variables Setup

### Local Development (.env.local)

1. **Copy the template:**
   ```bash
   cp .env.local.template .env.local
   ```

2. **Update the values in `.env.local`:**
   ```bash
   # Your existing variables (keep as is)
   BLOG_SOURCE_URL=https://www.bhhscp.com/blog
   WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
   REVALIDATE_SECRET=your-secret-key-here
   
   # Add your WordPress credentials
   WORDPRESS_USER=your_actual_username
   WORDPRESS_APP_PASSWORD=your_actual_app_password
   WP_USER=your_actual_username
   WP_APP_PASS=your_actual_app_password
   ```

3. **Restart your development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Production Deployment

#### Vercel Deployment

1. **Go to your Vercel project dashboard**
2. **Navigate to Settings → Environment Variables**
3. **Add these variables:**

   ```
   BLOG_SOURCE_URL = https://www.bhhscp.com/blog
   WORDPRESS_API_URL = https://www.bhhscp.com/wp-json/wp/v2
   NEXT_PUBLIC_WORDPRESS_API_URL = https://www.bhhscp.com/wp-json/wp/v2
   REVALIDATE_SECRET = your-secret-key-here
   WORDPRESS_USER = your_wordpress_username
   WORDPRESS_APP_PASSWORD = your_app_password
   WP_USER = your_wordpress_username
   WP_APP_PASS = your_app_password
   NEXT_PUBLIC_BASE_URL = https://your-domain.vercel.app
   VERCEL = 1
   ```

4. **Redeploy your application**

#### Netlify Deployment

1. **Go to your Netlify site dashboard**
2. **Navigate to Site Settings → Environment Variables**
3. **Add the same variables as above**
4. **Redeploy your site**

#### Other Hosting Platforms

**Railway:**
```bash
railway variables set BLOG_SOURCE_URL="https://www.bhhscp.com/blog"
railway variables set WORDPRESS_API_URL="https://www.bhhscp.com/wp-json/wp/v2"
# ... add all other variables
```

**DigitalOcean App Platform:**
- Add environment variables in the App Spec or dashboard

**AWS Amplify:**
- Add variables in App Settings → Environment Variables

## 🔐 WordPress App Password Setup

### Creating WordPress App Passwords

1. **Log into your WordPress admin dashboard**
2. **Go to Users → Profile (or Users → All Users → Edit)**
3. **Scroll down to "Application Passwords" section**
4. **Enter an Application Name** (e.g., "Next.js Blog API")
5. **Click "Add New Application Password"**
6. **Copy the generated password** (format: `xxxx xxxx xxxx xxxx xxxx xxxx`)
7. **Use this password in your environment variables**

### Example App Password Usage

```bash
# In your .env.local or hosting dashboard
WORDPRESS_USER=admin
WORDPRESS_APP_PASSWORD=abcd 1234 efgh 5678 ijkl 9012 mnop 3456
```

## 🚀 Testing Your Setup

### Local Testing

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test the WordPress API client:**
   ```bash
   # Create a test file: test-wordpress.js
   const { getPosts } = require('./lib/wordpress');
   
   async function test() {
     try {
       const posts = await getPosts({ per_page: 5 });
       console.log('✅ WordPress API working!', posts.length, 'posts fetched');
     } catch (error) {
       console.error('❌ WordPress API error:', error.message);
     }
   }
   
   test();
   ```

3. **Run the test:**
   ```bash
   node test-wordpress.js
   ```

### Production Testing

1. **Check environment variables are set:**
   ```bash
   # Visit your deployed app
   curl https://your-domain.com/api/test-env
   ```

2. **Test WordPress API endpoints:**
   ```bash
   # Test posts endpoint
   curl https://your-domain.com/api/posts
   
   # Test categories endpoint  
   curl https://your-domain.com/api/categories
   ```

## 🔍 Troubleshooting

### Common Issues

#### 1. Environment Variables Not Loading

**Symptoms:**
- `process.env.WORDPRESS_API_URL` returns `undefined`
- API calls fail with "Failed to fetch posts"

**Solutions:**
```bash
# Check if variables are loaded
console.log('API URL:', process.env.WORDPRESS_API_URL);

# Restart development server after adding .env.local
npm run dev

# For production, verify variables are set in hosting dashboard
```

#### 2. Authentication Errors

**Symptoms:**
- 401 Unauthorized errors
- Cannot access private posts

**Solutions:**
```bash
# Verify app password format (no spaces in environment variable)
WORDPRESS_APP_PASSWORD=abcd1234efgh5678ijkl9012mnop3456

# Check username is correct
WORDPRESS_USER=your_exact_wordpress_username
```

#### 3. CORS Issues (Cloudflare Workers)

**Symptoms:**
- CORS errors in browser console
- API calls blocked

**Solutions:**
```javascript
// Add CORS headers in your worker
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

#### 4. Rate Limiting

**Symptoms:**
- 429 Too Many Requests errors
- Slow response times

**Solutions:**
- The WordPress client includes automatic retry logic
- Consider implementing caching for frequently accessed data
- Monitor your WordPress site's rate limiting settings

### Debug Mode

Enable debug logging in your WordPress client:

```typescript
// Add to lib/wordpress.ts for debugging
console.log('Platform:', isVercel ? 'Vercel' : 'Cloudflare Worker');
console.log('API URL:', WORDPRESS_API_URL);
console.log('Auth configured:', !!(WORDPRESS_USER && WORDPRESS_APP_PASSWORD));
```

## 📊 Monitoring & Analytics

### Vercel Analytics
- Monitor API calls in Vercel dashboard
- Check function execution times
- Track error rates

### Cloudflare Analytics
- Monitor Worker invocations
- Track response times
- Check error rates

### Custom Monitoring

```typescript
// Add monitoring to your API calls
import { getPosts } from '@/lib/wordpress';

async function getPostsWithMonitoring() {
  const startTime = Date.now();
  try {
    const posts = await getPosts();
    const duration = Date.now() - startTime;
    console.log(`Posts fetched in ${duration}ms`);
    return posts;
  } catch (error) {
    console.error('Posts fetch failed:', error);
    throw error;
  }
}
```

## 🔄 Migration Checklist

- [ ] Copy `.env.local.template` to `.env.local`
- [ ] Update WordPress credentials in `.env.local`
- [ ] Test locally with `npm run dev`
- [ ] Add environment variables to hosting dashboard
- [ ] Deploy to production
- [ ] Test production endpoints
- [ ] Monitor error logs
- [ ] Set up analytics/monitoring

## 📞 Support

If you encounter issues:

1. **Check this troubleshooting guide**
2. **Verify environment variables are set correctly**
3. **Test WordPress app passwords manually**
4. **Check hosting platform documentation**
5. **Review error logs in hosting dashboard**

---

**Your WordPress API client is now ready for both local development and production deployment! 🎉**
