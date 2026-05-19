import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    icon: z.string(),
    image: z.string(),
    order: z.number(),
    includes: z.array(z.string()),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    neighborhood: z.string(),
    services: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/service-areas' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    intro: z.string(),
    image: z.string(),
    notes: z.string(),
    comingSoon: z.boolean().default(false),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    author: z.string(),
    neighborhood: z.string(),
    quote: z.string(),
    rating: z.number().min(1).max(5).default(5),
    order: z.number(),
  }),
});

export const collections = { services, projects, areas, testimonials };
