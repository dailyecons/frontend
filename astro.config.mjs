import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
  output: 'server',
  adapter: vercel(),
  prefetch: {
    defaultStrategy: 'load',
    prefetchAll: true
  },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'https://dailyecons.onrender.com',
          changeOrigin: true,
          secure: false
        }
      }
    }
  }
});