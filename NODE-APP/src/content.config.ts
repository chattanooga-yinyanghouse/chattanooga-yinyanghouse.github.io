import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const newsEvents = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/news-events' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        slug: z.string(),
        author: z.string(),
        coverimg: image().optional(),
        coveralt: z.string().optional(),
        parent: z.string().optional(),
    }),
})

export const collections = { newsEvents };

