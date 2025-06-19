import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		teams: defineCollection({
			source: "team/**.yaml",
			type: "data",
			schema: z.object({
				name: z.string(),
				description: z.string(),
				application: z.string().url().optional(),
				img: z.string()
			})
		}),
		gallery: defineCollection({
			source: "gallery/**.yaml",
			type: "data",
			schema: z.object({
				name: z.string(),
				description: z.string(),
				link: z.string().url(),
				img: z.string()
			})
		})
	}
});
