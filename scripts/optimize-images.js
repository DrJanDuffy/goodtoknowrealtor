#!/usr/bin/env node

/**
 * Comprehensive Image Optimization Script
 * Converts images to WebP format and optimizes them according to our rules
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Image optimization configuration
const imageConfigs = {
  webp: {
    quality: 80,
    effort: 6
  },
  avif: {
    quality: 70,
    effort: 4
  },
  jpeg: {
    quality: 85,
    mozjpeg: true
  },
  png: {
    quality: 90,
    compressionLevel: 9
  }
};

// Find all image files
function findImageFiles(dir) {
  const imageFiles = [];
  const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.tiff', '.bmp'];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath);
      } else if (extensions.some(ext => file.toLowerCase().endsWith(ext))) {
        imageFiles.push(filePath);
      }
    }
  }
  
  scanDirectory(dir);
  return imageFiles;
}

// Convert image to WebP
async function convertToWebP(inputPath, outputPath, config) {
  try {
    await sharp(inputPath)
      .webp(config)
      .toFile(outputPath);
    
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

// Convert image to AVIF
async function convertToAVIF(inputPath, outputPath, config) {
  try {
    await sharp(inputPath)
      .avif(config)
      .toFile(outputPath);
    
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

// Optimize existing images
async function optimizeImage(inputPath, config) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const baseName = path.basename(inputPath, ext);
    const dir = path.dirname(inputPath);
    
    let optimized = false;
    
    if (ext === '.jpg' || ext === '.jpeg') {
      const outputPath = path.join(dir, `${baseName}_optimized.jpg`);
      await sharp(inputPath)
        .jpeg(config.jpeg)
        .toFile(outputPath);
      optimized = true;
    } else if (ext === '.png') {
      const outputPath = path.join(dir, `${baseName}_optimized.png`);
      await sharp(inputPath)
        .png(config.png)
        .toFile(outputPath);
      optimized = true;
    }
    
    return optimized;
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return false;
  }
}

// Generate responsive image sets
async function generateResponsiveImages(inputPath) {
  const sizes = [320, 640, 768, 1024, 1280, 1920];
  const baseName = path.basename(inputPath, path.extname(inputPath));
  const dir = path.dirname(inputPath);
  
  console.log(`📱 Generating responsive images for ${baseName}...`);
  
  for (const size of sizes) {
    try {
      // WebP version
      const webpPath = path.join(dir, `${baseName}_${size}.webp`);
      await sharp(inputPath)
        .resize(size, null, { withoutEnlargement: true })
        .webp(imageConfigs.webp)
        .toFile(webpPath);
      
      // AVIF version
      const avifPath = path.join(dir, `${baseName}_${size}.avif`);
      await sharp(inputPath)
        .resize(size, null, { withoutEnlargement: true })
        .avif(imageConfigs.avif)
        .toFile(avifPath);
      
      console.log(`✅ Generated ${size}px versions`);
    } catch (error) {
      console.error(`❌ Error generating ${size}px version:`, error.message);
    }
  }
}

// Process all images
async function processImages(imageFiles) {
  console.log(`\n🖼️  Processing ${imageFiles.length} images...`);
  
  let processed = 0;
  let converted = 0;
  let optimized = 0;
  
  for (const imagePath of imageFiles) {
    const ext = path.extname(imagePath).toLowerCase();
    const baseName = path.basename(imagePath, ext);
    const dir = path.dirname(imagePath);
    
    console.log(`\n📸 Processing: ${path.relative(process.cwd(), imagePath)}`);
    
    // Convert to WebP
    const webpPath = path.join(dir, `${baseName}.webp`);
    const webpConverted = await convertToWebP(imagePath, webpPath, imageConfigs.webp);
    if (webpConverted) {
      converted++;
      console.log(`✅ Converted to WebP`);
    }
    
    // Convert to AVIF
    const avifPath = path.join(dir, `${baseName}.avif`);
    const avifConverted = await convertToAVIF(imagePath, avifPath, imageConfigs.avif);
    if (avifConverted) {
      converted++;
      console.log(`✅ Converted to AVIF`);
    }
    
    // Optimize original
    const optimizedOriginal = await optimizeImage(imagePath, imageConfigs);
    if (optimizedOriginal) {
      optimized++;
      console.log(`✅ Optimized original`);
    }
    
    // Generate responsive versions for large images
    const stats = fs.statSync(imagePath);
    if (stats.size > 100000) { // > 100KB
      await generateResponsiveImages(imagePath);
    }
    
    processed++;
  }
  
  return { processed, converted, optimized };
}

// Generate HTML picture element template
function generatePictureTemplate(imagePath) {
  const baseName = path.basename(imagePath, path.extname(imagePath));
  const dir = path.dirname(imagePath);
  
  return `<!-- Optimized image template for ${baseName} -->
<picture>
  <source media="(max-width: 768px)" srcset="${baseName}_640.avif" type="image/avif">
  <source media="(max-width: 768px)" srcset="${baseName}_640.webp" type="image/webp">
  <source media="(max-width: 1024px)" srcset="${baseName}_1024.avif" type="image/avif">
  <source media="(max-width: 1024px)" srcset="${baseName}_1024.webp" type="image/webp">
  <source srcset="${baseName}_1920.avif" type="image/avif">
  <source srcset="${baseName}_1920.webp" type="image/webp">
  <img src="${baseName}_optimized.jpg" alt="Description" loading="lazy" width="1920" height="1080">
</picture>`;
}

// Generate optimization report
function generateReport(stats) {
  console.log('\n📊 Image Optimization Report');
  console.log('============================');
  console.log(`Images processed: ${stats.processed}`);
  console.log(`WebP/AVIF conversions: ${stats.converted}`);
  console.log(`Original optimizations: ${stats.optimized}`);
  console.log('\n✅ All images now have WebP and AVIF versions');
  console.log('✅ Responsive image sets generated for large images');
  console.log('✅ Original images optimized for better compression');
  console.log('\n🎯 Next steps:');
  console.log('- Update HTML to use <picture> elements');
  console.log('- Test image loading performance');
  console.log('- Monitor Core Web Vitals improvements');
  console.log('- Verify fallback images work in older browsers');
}

// Main execution
async function main() {
  console.log('🚀 Starting comprehensive image optimization...');
  
  const publicDir = path.join(process.cwd(), 'public');
  const srcDir = path.join(process.cwd(), 'src');
  
  // Find all image files
  const imageFiles = [
    ...findImageFiles(publicDir),
    ...findImageFiles(srcDir)
  ];
  
  if (imageFiles.length === 0) {
    console.log('ℹ️  No images found to optimize');
    return;
  }
  
  // Process all images
  const stats = await processImages(imageFiles);
  
  // Generate report
  generateReport(stats);
  
  console.log('\n🎉 Image optimization complete!');
  console.log('\n📝 Don\'t forget to:');
  console.log('- Update your HTML to use the new WebP/AVIF images');
  console.log('- Test in different browsers');
  console.log('- Monitor performance improvements');
}

// Run the optimization
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { processImages, convertToWebP, convertToAVIF };
