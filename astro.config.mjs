import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://organum.com.br',
  integrations: [
    mdx(),
    sitemap({sitemap({
      filter: (page) => !page.includes('/lp/'),
    }),}),
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
