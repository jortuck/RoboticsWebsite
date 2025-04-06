import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		subsystems: defineCollection({
			source: "team/subsystems/**.yaml",
			type: "data",
			schema: z.object({
				name: z.string(),
				description: z.string(),
				members: z.array(z.string()),
				leads: z.array(z.object({ name: z.string(), position: z.string(), image: z.string() }))
			})
		}),
		robots: defineCollection({
			source: "robots/**.yaml",
			type: "data",
			schema: z.object({
				name: z.string(),
				years: z.string(),
				description: z.string().optional(),
				images: z.array(z.string()).optional(),
				video: z.string().optional() // YouTube Video ID
			})
		}),
		posts: defineCollection({
			type: "page",
			source: "news-and-events/**.md",
			schema: z.object({
				date: z.string().date(),
				image: z.string()
			})
		})
	}
});
