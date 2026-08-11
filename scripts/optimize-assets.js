/**
 * PRECISION ORTHOPAEDICS - ASSET OPTIMIZATION UTILITY
 *
 * Reads PNG masters from assets-src/ and writes WebP into public/. The masters
 * stay out of public/ so they are never deployed — only the WebP the site
 * actually references ships.
 *
 * Requirements: npm install sharp
 * Run: node scripts/optimize-assets.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE_DIR = './assets-src';
const OUTPUT_DIR = './public';

async function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.name.endsWith('.png')) {
      const outDir = path.join(OUTPUT_DIR, path.relative(SOURCE_DIR, directory));
      const outputPath = path.join(outDir, entry.name.replace('.png', '.webp'));
      fs.mkdirSync(outDir, { recursive: true });

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
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`No ${SOURCE_DIR} directory — nothing to optimize.`);
    process.exitCode = 1;
    return;
  }
  console.log('🚀 Starting Recursive Institutional Asset Optimization...');
  await processDirectory(SOURCE_DIR);
  console.log(`🎊 Optimization Complete. WebP written to ${OUTPUT_DIR}/.`);
}

optimizeImages();
