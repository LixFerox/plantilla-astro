import { optionSEO } from "./src/variables/config";

// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: optionSEO.url,
  integrations: [tailwind(), svelte(), sitemap()],
  env: {
    schema: {
      API_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true
      })
    }
  }
});