import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};
