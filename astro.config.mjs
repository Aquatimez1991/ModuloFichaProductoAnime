import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      config: { path: './tailwind.config.js' },
      applyBaseStyles: false,
    }),
  ],
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
