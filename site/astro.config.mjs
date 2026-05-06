// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.metavol.org',
  // We will set up Japanese as default locale at root, English under /en/
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
  },
  // Cloudflare Pages reads dist/ by default
});
