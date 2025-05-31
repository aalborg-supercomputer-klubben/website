import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date()
	})
});
const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date()
	})
});

export const collections = { posts, projects };
