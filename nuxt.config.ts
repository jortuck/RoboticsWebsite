// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@vueuse/nuxt"],
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssMinify: false
		}
	},
	css: ["~/assets/css/main.css"],
	app: {
		head: {
			link: [{ rel: "icon", href: "./favicon.ico", type: "image/ico" }]
		}
	}
});
