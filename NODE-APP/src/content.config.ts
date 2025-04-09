import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const newsEvents = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/news-events' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        slug: z.string(),
        author: z.string(),
        coverimage: z.string().optional(), // String path to image
        coveralt: z.string().optional(),
        parent: z.string().optional(),
        description: z.string().optional(),
        ogImage: z.string().optional(),
        keywords: z.array(z.string()).optional(),
        socialTitle: z.string().optional(),
        socialDescription: z.string().optional(),
        layout: z.string().optional(),
    }),
})

export const collections = { newsEvents };

