import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
  output: 'server',
  prefetch: {
    defaultStrategy: 'load',
    prefetchAll: true
  },
  adapter: cloudflare()
});
