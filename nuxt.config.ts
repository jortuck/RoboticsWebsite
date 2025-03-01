// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@vueuse/nuxt", "@nuxt/image"],
	vite: {
		plugins: [tailwindcss()]
	},
	css: ["~/assets/css/main.css"],
	app: {
		head: {
			link: [{ rel: "icon", href: "./favicon.ico", type: "image/ico" }]
		}
	},
	nitro: {
		prerender: {
			crawlLinks: true,
			failOnError: false
		}
	}
});
