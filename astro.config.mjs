import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your Astro configuration
  site: 'https://your-site.com',
  base: '/base-path/',
  build: {
    outDir: 'dist',
  },
  // Other options
});
