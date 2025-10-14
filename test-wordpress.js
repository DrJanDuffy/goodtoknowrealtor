// WordPress API Client Test
import { getPosts, getPostBySlug, getCategories } from './lib/wordpress.js';

async function testWordPressAPI() {
  console.log('🧪 Testing WordPress API Client...\n');

  try {
    // Test 1: Fetch posts
    console.log('📝 Testing posts fetch...');
    const posts = await getPosts({ per_page: 3 });
    console.log(\✅ Fetched \ posts\);
    
    if (posts.length > 0) {
      const post = posts[0];
      console.log(\   Latest: \
\\\);
    }

    // Test 2: Fetch categories
    console.log('\\n📂 Testing categories fetch...');
    const categories = await getCategories();
    console.log(\✅ Fetched \ categories\);
    
    if (categories.length > 0) {
      console.log(\   First category: \\\\);
    }

    // Test 3: Fetch single post (if we have posts)
    if (posts.length > 0) {
      console.log('\\n📄 Testing single post fetch...');
      const singlePost = await getPostBySlug(posts[0].slug);
      if (singlePost) {
        console.log(\✅ Fetched post: \\\\);
      } else {
        console.log('❌ Failed to fetch single post');
      }
    }

    console.log('\\n🎉 All tests passed! WordPress API client is working correctly.');

  } catch (error) {
    console.error('\\n❌ Test failed:', error.message);
    console.log('\\n🔧 Troubleshooting:');
    console.log('1. Check your .env.local file has the correct WORDPRESS_API_URL');
    console.log('2. Verify the WordPress site is accessible');
    console.log('3. Check your internet connection');
    console.log('4. Review the error details above');
  }
}

testWordPressAPI();
