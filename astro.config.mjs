import {SITE_WEBSITE} from './src/variables/config'

// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: SITE_WEBSITE,
  integrations: [tailwind(), svelte(), sitemap()]
});