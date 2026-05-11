import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const productionDateSchema = z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/);

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/projects",
  }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    summary: z.string(),
    category: z.enum(["game", "other"]),
    skills: z.array(z.string()),
    links: z.object({
      game: z.url().optional(),
      source: z.url().optional(),
    }),
    media: z.object({
      screenshot: z.string().optional(),
      icon: z.string().optional(),
    }),
    production: z.object({
      start: productionDateSchema.optional(),
      end: productionDateSchema.optional(),
    }),
    status: z.enum(["completed", "in-progress"]).optional(),
    featured: z.boolean().default(false),
  }),
});

const projectSections = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/project-sections",
  }),
  schema: z.object({
    project: reference("projects"),
    key: z.string(),
    title: z.string(),
    order: z.number().int(),
    lede: z.string().optional(),
  }),
});

export const collections = {
  projects,
  "project-sections": projectSections,
};
