/**
 * PRECISION ORTHOPAEDICS - ASSET OPTIMIZATION UTILITY
 * 
 * This script converts large PNG assets to WebP to resolve the 20s LCP bottleneck.
 * Requirements: npm install sharp
 * Run: node scripts/optimize-assets.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = './public';
const TARGET_FORMAT = 'webp';

async function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.name.endsWith('.png')) {
      const outputPath = path.join(directory, entry.name.replace('.png', '.webp'));
      
      // Skip if already optimized and newer than source
      if (fs.existsSync(outputPath)) continue;

      try {
        console.log(`📦 Processing: ${fullPath}...`);
        await sharp(fullPath)
          .webp({ quality: 85 })
          .toFile(outputPath);
        
        const oldSize = fs.statSync(fullPath).size / 1024 / 1024;
        const newSize = fs.statSync(outputPath).size / 1024 / 1024;
        
        console.log(`✨ Success: ${entry.name} -> ${path.basename(outputPath)} (${oldSize.toFixed(2)}MB -> ${newSize.toFixed(2)}MB)`);
      } catch (err) {
        console.error(`❌ Error processing ${entry.name}:`, err);
      }
    }
  }
}

async function optimizeImages() {
  console.log('🚀 Starting Recursive Institutional Asset Optimization...');
  await processDirectory(PUBLIC_DIR);
  console.log('🎊 Optimization Complete. Update your code to point to .webp files for maximum PageSpeed.');
}

optimizeImages();
