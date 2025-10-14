#!/usr/bin/env node

/**
 * WordPress API Client Environment Setup Script
 * 
 * This script helps you set up your environment variables correctly
 * for both local development and production deployment.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setupEnvironment() {
  console.log('🚀 WordPress API Client Environment Setup\n');
  
  console.log('This script will help you create a .env.local file for local development.');
  console.log('For production deployment, add these variables in your hosting dashboard.\n');

  const envVars = {
    // Existing variables (keep as is)
    BLOG_SOURCE_URL: 'https://www.bhhscp.com/blog',
    WORDPRESS_API_URL: 'https://www.bhhscp.com/wp-json/wp/v2',
    REVALIDATE_SECRET: await question('Enter your REVALIDATE_SECRET (or press Enter to use "your-secret-key-here"): ') || 'your-secret-key-here',
    
    // WordPress API Client variables
    NEXT_PUBLIC_WORDPRESS_API_URL: 'https://www.bhhscp.com/wp-json/wp/v2',
    NEXT_PUBLIC_BASE_URL: await question('Enter your local development URL (default: http://localhost:3000): ') || 'http://localhost:3000',
    
    // WordPress Authentication (optional)
    WORDPRESS_USER: await question('Enter your WordPress username (optional, press Enter to skip): ') || '',
    WORDPRESS_APP_PASSWORD: await question('Enter your WordPress app password (optional, press Enter to skip): ') || '',
    
    // Legacy variables for compatibility
    WP_USER: '', // Will be set to WORDPRESS_USER if provided
    WP_APP_PASS: '', // Will be set to WORDPRESS_APP_PASSWORD if provided
    
    // Platform detection
    VERCEL: '0'
  };

  // Set legacy variables if WordPress credentials are provided
  if (envVars.WORDPRESS_USER) {
    envVars.WP_USER = envVars.WORDPRESS_USER;
  }
  if (envVars.WORDPRESS_APP_PASSWORD) {
    envVars.WP_APP_PASS = envVars.WORDPRESS_APP_PASSWORD;
  }

  // Create .env.local content
  const envContent = `# WordPress API Configuration
# IMPORTANT: This file is for LOCAL DEVELOPMENT ONLY
# Add this file to .gitignore to keep credentials secure
# For production, add these variables in your hosting dashboard

# === EXISTING VARIABLES (already configured) ===
BLOG_SOURCE_URL=${envVars.BLOG_SOURCE_URL}
WORDPRESS_API_URL=${envVars.WORDPRESS_API_URL}
REVALIDATE_SECRET=${envVars.REVALIDATE_SECRET}

# === WORDPRESS API CLIENT VARIABLES ===
# Public variables (accessible on client-side)
NEXT_PUBLIC_WORDPRESS_API_URL=${envVars.NEXT_PUBLIC_WORDPRESS_API_URL}
NEXT_PUBLIC_BASE_URL=${envVars.NEXT_PUBLIC_BASE_URL}

# Private variables (server-side only)
${envVars.WORDPRESS_USER ? `WORDPRESS_USER=${envVars.WORDPRESS_USER}` : '# WORDPRESS_USER=your_wordpress_username'}
${envVars.WORDPRESS_APP_PASSWORD ? `WORDPRESS_APP_PASSWORD=${envVars.WORDPRESS_APP_PASSWORD}` : '# WORDPRESS_APP_PASSWORD=your_app_password'}

# Legacy variables (for compatibility with existing middleware.ts)
${envVars.WP_USER ? `WP_USER=${envVars.WP_USER}` : '# WP_USER=your_wordpress_username'}
${envVars.WP_APP_PASS ? `WP_APP_PASS=${envVars.WP_APP_PASS}` : '# WP_APP_PASS=your_app_password'}

# Platform detection (auto-set by Vercel in production)
VERCEL=${envVars.VERCEL}

# === DEPLOYMENT NOTES ===
# For production deployment, add these variables in your hosting dashboard:
# 
# VERCEL:
# - Project Settings → Environment Variables
# - Add all variables from this file
# 
# NETLIFY:
# - Site Settings → Environment Variables  
# - Add all variables from this file
# 
# OTHER HOSTS:
# - Check their documentation for environment variable configuration
# 
# IMPORTANT:
# - Restart your dev server after adding environment variables
# - Client-side variables must be prefixed with NEXT_PUBLIC_
# - Never commit .env.local to version control
`;

  // Write .env.local file
  const envPath = path.join(process.cwd(), '.env.local');
  
  try {
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ Successfully created .env.local file!');
    console.log('\n📋 Next steps:');
    console.log('1. Review the .env.local file and update any values if needed');
    console.log('2. Restart your development server: npm run dev');
    console.log('3. Test your WordPress API client');
    console.log('4. For production, add these variables in your hosting dashboard');
    console.log('\n🔒 Security reminder:');
    console.log('- Never commit .env.local to version control');
    console.log('- Make sure .env.local is in your .gitignore file');
    console.log('\n📖 For detailed deployment instructions, see DEPLOYMENT_GUIDE.md');
    
  } catch (error) {
    console.error('❌ Error creating .env.local file:', error.message);
    console.log('\nYou can manually create the file using the template:');
    console.log('cp .env.local.template .env.local');
  }

  rl.close();
}

// Run the setup
setupEnvironment().catch(console.error);
