import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.robrecio.com',
  output: 'static',
  integrations: [sitemap()],
});
