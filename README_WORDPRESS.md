# WordPress API Client - Quick Setup

Your WordPress API client is ready to use! Here's everything you need to know.

## 🚀 One-Click Setup

```bash
# Run this to create your .env.local file
node setup.js
```

That's it! Your WordPress API client is now configured.

## 📁 What's Been Created

- **`lib/wordpress.ts`** - Core WordPress API client
- **`lib/wordpress-integration.ts`** - Integration with your existing code
- **`setup.js`** - One-click setup script
- **`test-wordpress.js`** - Test script to verify everything works
- **`.env.local.example`** - Environment variable template

## 🔧 Your Environment Variables

The setup creates `.env.local` with your existing configuration:

```bash
# Your existing variables (keep these)
BLOG_SOURCE_URL=https://www.bhhscp.com/blog
WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
REVALIDATE_SECRET=your-secret-key-here

# WordPress API Client (automatically configured)
NEXT_PUBLIC_WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 🧪 Test It Works

```bash
# Test the WordPress API client
node test-wordpress.js
```

You should see:
```
🧪 Testing WordPress API Client...

📝 Testing posts fetch...
✅ Fetched 3 posts
   Latest: "Your Latest Blog Post Title"

📂 Testing categories fetch...
✅ Fetched 5 categories
   First category: "Real Estate"

🎉 All tests passed! WordPress API client is working correctly.
```

## 💻 How to Use

### Option 1: Direct Usage (New Projects)
```typescript
import { getPosts, getPostBySlug } from '@/lib/wordpress';

// Fetch posts
const posts = await getPosts({ per_page: 10 });

// Fetch single post
const post = await getPostBySlug('my-blog-post');
```

### Option 2: Enhanced Integration (Existing Projects)
```typescript
import { fetchBlogPostsEnhanced } from '@/lib/wordpress-integration';

// Drop-in replacement for your existing function
const posts = await fetchBlogPostsEnhanced();
```

### Option 3: Gradual Migration
```typescript
// Keep your existing code, add enhanced version alongside
import { fetchBlogPosts } from '@/lib/blog/fetcher'; // Your existing
import { fetchBlogPostsEnhanced } from '@/lib/wordpress-integration'; // New enhanced

// Use enhanced version with fallback
const posts = await fetchBlogPostsEnhanced();
```

## 🌐 Production Deployment

### Vercel
1. Go to Project Settings → Environment Variables
2. Add all variables from your `.env.local` file
3. Deploy

### Netlify
1. Go to Site Settings → Environment Variables  
2. Add all variables from your `.env.local` file
3. Deploy

### Other Platforms
- Add the same environment variables in their dashboard
- See `DEPLOYMENT_GUIDE.md` for detailed instructions

## 🔐 WordPress Authentication (Optional)

To access private posts:

1. **WordPress Admin** → Users → Profile
2. **Application Passwords** section
3. **Add New Application Password**
4. **Copy the generated password**
5. **Add to `.env.local`:**
   ```bash
   WORDPRESS_USER=your_username
   WORDPRESS_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx xxxx
   ```

## 🎯 Key Features

- ✅ **Automatic fallback** to your existing system
- ✅ **Smart caching** (5min dev, 1hr production)
- ✅ **Retry logic** with exponential backoff
- ✅ **Error handling** with detailed messages
- ✅ **Platform detection** (Vercel vs Workers)
- ✅ **Zero breaking changes** to existing code

## 🚨 Troubleshooting

### API Not Working?
```bash
# Check if WordPress site is accessible
curl https://www.bhhscp.com/wp-json/wp/v2/posts?per_page=1

# Test your setup
node test-wordpress.js
```

### Environment Variables Not Loading?
```bash
# Check if .env.local exists
ls -la .env.local

# Restart your dev server
npm run dev
```

### Still Having Issues?
1. Check `DEPLOYMENT_GUIDE.md` for detailed troubleshooting
2. Verify your WordPress site is accessible
3. Check your internet connection
4. Review the error messages in the test script

## 📊 Performance

- **Development**: 5-minute cache (faster iteration)
- **Production**: 1-hour cache (better performance)
- **Retry Logic**: 3 attempts with exponential backoff
- **Timeout**: 10 seconds per request
- **Platform Optimized**: Different strategies for Vercel vs Workers

## 🎉 You're All Set!

Your WordPress API client is now:
- ✅ **Configured** with your existing setup
- ✅ **Tested** and working
- ✅ **Ready** for production deployment
- ✅ **Integrated** with your existing code

**Happy coding!** 🚀
