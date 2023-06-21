import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    heroImage: z.string().optional(),
    title: z.string(),
    pubDate: z.date(),
    category: z.string().optional(),
    tags: z.string().array().optional(),
    sourceLink: z.string().optional()
  }),
});

export const collections = { posts };