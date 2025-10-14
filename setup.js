#!/usr/bin/env node

/**
 * One-Click WordPress API Setup
 * 
 * This script creates your .env.local file with the correct variables
 * and integrates with your existing project setup.
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 WordPress API Client - Quick Setup\n');

// Create .env.local with your existing configuration
const envContent = `# WordPress API Configuration
# Your existing variables (keep these)
BLOG_SOURCE_URL=https://www.bhhscp.com/blog
WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
REVALIDATE_SECRET=your-secret-key-here

# WordPress API Client (automatically uses above URL)
NEXT_PUBLIC_WORDPRESS_API_URL=https://www.bhhscp.com/wp-json/wp/v2
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# WordPress Auth (optional - for private posts)
# Get from WordPress Admin → Users → Profile → Application Passwords
WORDPRESS_USER=
WORDPRESS_APP_PASSWORD=

# Legacy compatibility (auto-synced with above)
WP_USER=
WP_APP_PASS=

# Platform detection
VERCEL=0
`;

const envPath = path.join(process.cwd(), '.env.local');

try {
  // Check if .env.local already exists
  if (fs.existsSync(envPath)) {
    console.log('📝 .env.local already exists. Creating backup...');
    fs.copyFileSync(envPath, envPath + '.backup');
    console.log('✅ Backup created as .env.local.backup');
  }

  // Create .env.local
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local with your WordPress API configuration');
  
  console.log('\n🎉 Setup Complete! Next steps:');
  console.log('1. Update REVALIDATE_SECRET in .env.local if needed');
  console.log('2. Add WordPress credentials (optional) for private posts');
  console.log('3. Restart your dev server: npm run dev');
  console.log('4. Test your current setup: node test-wordpress.js');
  console.log('5. Test BHHS blog sources: node test-bhhs-sources.js');
  
  console.log('\n📚 Your WordPress API client is ready to use!');
  console.log('Import functions from: lib/wordpress.ts');
  
  console.log('\n🔒 Security: .env.local is automatically gitignored');
  console.log('📖 For production deployment, see: DEPLOYMENT_GUIDE.md');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  console.log('\nManual setup:');
  console.log('1. Copy .env.local.example to .env.local');
  console.log('2. Update the values as needed');
}
