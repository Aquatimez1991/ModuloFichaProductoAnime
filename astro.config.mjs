import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel({
    includeFiles: ['./public/**'],
    maxDuration: 30,
  }),
  outDir: 'dist',
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  compressHTML: true,
});
