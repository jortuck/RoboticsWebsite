<script setup lang="ts">
const dev = import.meta.dev;

type SocialLink = {
	name: string;
	icon: string;
	url: string;
};

const links: SocialLink[] = [
	{
		icon: "fa-instagram",
		url: "https://www.instagram.com/uwrobots/",
		name: "@uwrobots on Instagram."
	},
	{
		icon: "fa-facebook",
		url: "https://www.facebook.com/uwrobots/",
		name: "@uwrobots on Facebook."
	},
	{
		icon: "fa-linkedin",
		url: "https://www.linkedin.com/company/husky-robotics/",
		name: "@husky-robotics on LinkedIn."
	},
	{
		icon: "fa-youtube",
		url: "https://www.youtube.com/channel/UC274hSR7LTSRfsH4riugKBw",
		name: "Husky Robotics on YouTube."
	},
	{
		icon: "fa-github",
		url: "https://github.com/huskyroboticsteam",
		name: "@huskyroboticsteam on GitHub."
	}
];
</script>
<template>
	<footer class="bg-primary">
		<div class="container mx-auto space-y-8 px-4 py-20 md:py-30"></div>
	</footer>
	<p
		v-if="!dev"
		class="w-full bg-amber-300 p-2 text-center text-black"
	>
		Website under construction. Expect missing content & bugs!
	</p>
</template>
<style scoped>
@reference "~/assets/css/main.css";
a:hover {
	@apply text-primary transition-colors duration-300 ease-in-out dark:text-primary;
}
</style>
