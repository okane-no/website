import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://okane.no',
  // nginx serves pages without a trailing slash, so canonical and sitemap URLs use the same form
  trailingSlash: 'never',
  integrations: [
    // The blog stays out of the sitemap until it has posts
    sitemap({ filter: (page) => !page.includes('/blogg') }),
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
