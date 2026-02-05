import { defineCollection, z } from 'astro:content';

const blogPosts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const projectEntries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogPosts,
  projects: projectEntries,
};
