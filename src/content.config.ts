import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tag: z.string().optional(),
    // What the reader can do next, e.g. { text: 'Se hvordan Brage fyller ut aksjonærregisteroppgaven', href: '/brage' }
    cta: z.object({ text: z.string(), href: z.string() }).optional(),
  }),
});

export const collections = { blog };
