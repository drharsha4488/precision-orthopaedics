import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Enable React to support your current components
  integrations: [react()],
  // Output for Vercel deployment with analytics enabled
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  // Configure site for SEO sitemap generation
  site: 'https://precisionortho.com', // Replace with your actual domain
});
