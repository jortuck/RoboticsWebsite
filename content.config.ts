import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		subsystems: defineCollection({
			source: "team/subsystems/**.json",
			type: "data",
			schema: z.object({
				name: z.string(),
				description: z.string(),
				members: z.array(z.string()),
				leads: z.array(z.object({ name: z.string(), position: z.string(), image: z.string() }))
			})
		}),
		robots: defineCollection({
			source: "robots/**.json",
			type: "data",
			schema: z.object({
				name: z.string(),
				years: z.string(),
				description: z.string().optional(),
				images: z.array(z.string()).optional(),
				video: z.string().optional()
			})
		})
	}
});
