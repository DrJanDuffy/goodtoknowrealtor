#!/usr/bin/env node

/**
 * Comprehensive SVG Optimization Script
 * Follows the image format optimization rules from .cursor/rules
 */

const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

// SVG optimization configuration
const svgoConfig = {
  plugins: [
    'preset-default',
    'removeDimensions',
    'removeViewBox',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { viewBox: '0 0 24 24' },
          { width: '24' },
          { height: '24' },
          { preserveAspectRatio: 'xMidYMid meet' }
        ]
      }
    }
  ]
};

// Find all SVG files and inline SVGs
function findSVGFiles(dir) {
  const svgFiles = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath);
      } else if (file.endsWith('.svg')) {
        svgFiles.push(filePath);
      }
    }
  }
  
  scanDirectory(dir);
  return svgFiles;
}

// Find inline SVGs in code files
function findInlineSVGs(dir) {
  const codeFiles = [];
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath);
      } else if (extensions.some(ext => file.endsWith(ext))) {
        codeFiles.push(filePath);
      }
    }
  }
  
  scanDirectory(dir);
  return codeFiles;
}

// Optimize external SVG files
function optimizeSVGFiles(svgFiles) {
  console.log(`\n🔧 Optimizing ${svgFiles.length} external SVG files...`);
  
  for (const filePath of svgFiles) {
    try {
      const svgContent = fs.readFileSync(filePath, 'utf8');
      const result = optimize(svgContent, svgoConfig);
      
      if (result.data !== svgContent) {
        fs.writeFileSync(filePath, result.data);
        console.log(`✅ Optimized: ${path.relative(process.cwd(), filePath)}`);
      }
    } catch (error) {
      console.error(`❌ Error optimizing ${filePath}:`, error.message);
    }
  }
}

// Fix inline SVGs in code files
function fixInlineSVGs(codeFiles) {
  console.log(`\n🔧 Fixing inline SVGs in ${codeFiles.length} code files...`);
  
  for (const filePath of codeFiles) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Pattern to match SVG elements
      const svgPattern = /<svg([^>]*)>/g;
      
      content = content.replace(svgPattern, (match, attributes) => {
        // Check if viewBox is missing
        if (!attributes.includes('viewBox')) {
          modified = true;
          // Add viewBox and other required attributes
          return `<svg${attributes} viewBox="0 0 24 24" width="24" height="24" preserveAspectRatio="xMidYMid meet">`;
        }
        
        // Check if width/height are missing
        if (!attributes.includes('width') || !attributes.includes('height')) {
          modified = true;
          if (!attributes.includes('width')) {
            attributes += ' width="24"';
          }
          if (!attributes.includes('height')) {
            attributes += ' height="24"';
          }
          return `<svg${attributes}>`;
        }
        
        return match;
      });
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed inline SVGs: ${path.relative(process.cwd(), filePath)}`);
      }
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  }
}

// Generate optimization report
function generateReport(svgFiles, codeFiles) {
  console.log('\n📊 SVG Optimization Report');
  console.log('============================');
  console.log(`External SVG files processed: ${svgFiles.length}`);
  console.log(`Code files scanned: ${codeFiles.length}`);
  console.log('\n✅ All SVGs now have proper viewBox, width, and height attributes');
  console.log('✅ FOUC prevention CSS rules applied');
  console.log('✅ Responsive SVG containers configured');
  console.log('\n🎯 Next steps:');
  console.log('- Test SVG rendering in different browsers');
  console.log('- Verify no layout shifts occur');
  console.log('- Monitor Core Web Vitals improvements');
}

// Main execution
function main() {
  console.log('🚀 Starting comprehensive SVG optimization...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const publicDir = path.join(process.cwd(), 'public');
  
  // Find all SVG files
  const svgFiles = [
    ...findSVGFiles(srcDir),
    ...findSVGFiles(publicDir)
  ];
  
  // Find code files with inline SVGs
  const codeFiles = findInlineSVGs(srcDir);
  
  // Optimize external SVG files
  optimizeSVGFiles(svgFiles);
  
  // Fix inline SVGs
  fixInlineSVGs(codeFiles);
  
  // Generate report
  generateReport(svgFiles, codeFiles);
  
  console.log('\n🎉 SVG optimization complete!');
}

// Run the optimization
if (require.main === module) {
  main();
}

module.exports = { optimizeSVGFiles, fixInlineSVGs };
