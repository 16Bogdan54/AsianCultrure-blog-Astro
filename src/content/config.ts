import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    heroImage: z.string().optional(),
    title: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = { posts };
