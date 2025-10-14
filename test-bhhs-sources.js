#!/usr/bin/env node

/**
 * Test BHHS Blog Sources
 * 
 * This script tests different methods to fetch posts from bhhs.com/blog
 * and shows you which ones work best.
 */

const { testBHHSSources, fetchBHHSPosts } = require('./lib/bhhs-blog-fetcher.ts');

async function testBHHSSetup() {
  console.log('🧪 Testing BHHS Blog Sources\n');

  try {
    // Test all available sources
    const sources = await testBHHSSources();
    
    console.log('\n📊 Results Summary:');
    console.log(`   WordPress API: ${sources.api ? '✅ Working' : '❌ Not available'}`);
    console.log(`   RSS Feed: ${sources.rss ? '✅ Working' : '❌ Not available'}`);
    console.log(`   Web Scraping: ${sources.scraping ? '✅ Working' : '❌ Not available'}`);
    console.log(`   Fallback API: ${sources.fallback ? '✅ Working' : '❌ Not available'}`);

    // Find the best working source
    const workingSources = Object.entries(sources).filter(([_, works]) => works);
    
    if (workingSources.length === 0) {
      console.log('\n❌ No sources are working. Please check your internet connection.');
      return;
    }

    console.log(`\n🎯 Best available sources: ${workingSources.map(([name]) => name).join(', ')}`);

    // Test fetching posts with the best method
    console.log('\n📝 Testing post fetch...');
    const posts = await fetchBHHSPosts({ maxPosts: 3 });
    
    console.log(`✅ Successfully fetched ${posts.length} posts`);
    
    if (posts.length > 0) {
      console.log('\n📄 Sample posts:');
      posts.forEach((post, index) => {
        console.log(`   ${index + 1}. "${post.title}"`);
        console.log(`      URL: ${post.originalUrl}`);
        console.log(`      Author: ${post.author}`);
        console.log(`      Date: ${new Date(post.date).toLocaleDateString()}`);
        console.log('');
      });
    }

    console.log('🎉 BHHS blog fetching is working correctly!');
    console.log('\n💡 Usage in your code:');
    console.log('   import { fetchBHHSPosts } from "./lib/bhhs-blog-fetcher";');
    console.log('   const posts = await fetchBHHSPosts();');

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your internet connection');
    console.log('2. Verify bhhs.com is accessible');
    console.log('3. Check if the blog URL has changed');
    console.log('4. Review the error details above');
  }
}

// Run the test
testBHHSSetup();
