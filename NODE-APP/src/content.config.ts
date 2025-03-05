import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const newsEvents = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/data'}),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        author: z.string(),
        coverimg: image(),
        coveralt: z.string(),
    }),
})

export const collections = { newsEvents };

