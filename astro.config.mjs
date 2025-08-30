import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  outDir: 'dist',
  vite: {
    ssr: {
      external: ['svgo'],
    },
    css: {
      devSourcemap: true,
    },
    build: {
      cssMinify: false,
    },
  },
  compressHTML: false,
});
