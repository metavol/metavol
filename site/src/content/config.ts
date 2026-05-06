import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['release', 'update', 'paper']),
    lang: z.enum(['ja', 'en']).optional(), // legacy field
    url: z.string().optional(),
  }),
});

const publications = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    journal: z.string(),
    authors: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    url: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { news, publications };
