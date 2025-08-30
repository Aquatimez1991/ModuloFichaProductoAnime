import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets',
  },

  vite: {
    ssr: {
      external: ['svgo'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['clsx', 'tailwind-merge'],
          },
        },
      },
    },
  },
  compressHTML: true,
  experimental: {
    optimizeHoistedScript: true,
  },
});
