import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.robrecio.com',
  // Every page stays static/prerendered. The Vercel adapter is here only so the
  // lead-capture endpoint at src/pages/api/lead.ts (which sets `prerender = false`)
  // can run as a serverless function. Nothing else about the build changes.
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
});
