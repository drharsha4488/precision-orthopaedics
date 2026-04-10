import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Enable React to support your current components
  integrations: [react()],
  // Output a static website
  output: 'static',
  // Configure site for SEO sitemap generation
  site: 'https://precisionortho.com', // Replace with your actual domain
});
