import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://organum.com.br',
  integrations: [mdx()],
  output: 'static',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});