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
  },
  compressHTML: true,
});
