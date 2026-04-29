import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://okane.no',
  integrations: [
    sitemap(),
    icon({
      include: {
        tabler: ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
