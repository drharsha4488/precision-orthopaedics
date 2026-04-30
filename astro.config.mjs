import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Enable React to support your current components
  integrations: [react(), sitemap()],
  // Output a static website
  output: 'static',
  // Configure site for SEO sitemap generation
  site: 'https://www.precisionortho.care',
  redirects: {
    '/specialities/[slug]': '/procedures/[slug]',
    '/treatments/[slug]': '/procedures/[slug]',
    '/services/[slug]': '/procedures/[slug]',
    '/procedures/revision-surgery': '/procedures/revision-knee-replacement',
    '/procedures/pelvic-trauma': '/procedures/pelvic-trauma-care',
    '/procedures/joint-preservation': '/procedures/cartilage-restoration',
    '/facilities': '/locations'
  }
});
