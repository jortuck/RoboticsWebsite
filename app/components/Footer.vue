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
		icon: "fa-linkedin-in",
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
		<div class="container mx-auto flex-col space-y-4 px-4 py-20">
			<img
				alt="Husky Robotics Logo"
				class="h-16"
				src="~/assets/images/logo_square_sm.png"
			/>
			<div
				class="border-b-1 text-secondary grid grid-cols-12 space-y-8 border-b-neutral-400 py-8 md:gap-8 md:space-y-0 lg:gap-8"
			>
				<div class="col-span-12 flex flex-col space-y-4 lg:col-span-6 xl:lg:col-span-4">
					<h2 class="text-2xl font-bold">Husky Robotics at the University of Washington Seattle</h2>
					<p class="text-neutral-400">
						Husky Robotics pioneers planetary exploration through innovative engineering, rigorous
						scientific discovery, and mission-ready teamwork.
					</p>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<ul class="space-y-2">
						<li><NuxtLink to="/">Home</NuxtLink></li>
						<li><NuxtLink to="/about">About</NuxtLink></li>
						<li><NuxtLink to="/support">Support Us</NuxtLink></li>
						<li><NuxtLink to="/join">Join Us</NuxtLink></li>
					</ul>
				</div>
				<div class="col-span-6 lg:col-span-3 xl:lg:col-span-2">
					<ul class="space-y-2">
						<li><NuxtLink to="/sponsors">Sponsors</NuxtLink></li>
						<li><NuxtLink to="/newsletter">Newsletter & Events</NuxtLink></li>
						<li><NuxtLink to="/subteams">Subteams</NuxtLink></li>
					</ul>
				</div>
				<div class="col-span-12 space-y-2 xl:lg:col-span-3">
					<p class="text-lg font-bold text-neutral-400">Follow Husky Robotics</p>
					<div class="flex flex-row flex-wrap gap-4">
						<NuxtLink
							v-for="link in links"
							:aria-label="link.name"
							:to="link.url"
							class="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 transition-colors duration-200 ease-in-out hover:bg-zinc-600"
							><i :class="`fa-brands ${link.icon} text-white`"></i
						></NuxtLink>
					</div>
					<p class="text-neutral-400">
						<a href="mailto:uwrobots@uw.edu">uwrobots@uw.edu</a>
					</p>
					<p class="text-neutral-400">3900 E Stevens Way NE, Seattle, WA 98195</p>
				</div>
			</div>
			<p class="flex flex-row flex-wrap gap-5 text-neutral-400">
				<NuxtLink
					class="bottomLink"
					to="https://huskylink.washington.edu/organization/uwrobots"
					>Constitution</NuxtLink
				>
				<NuxtLink
					class="bottomLink"
					to="https://washington.edu"
					>University of Washington Seattle</NuxtLink
				>
				<NuxtLink
					class="bottomLink"
					to="https://urc.marssociety.org/"
					>University Rover Challenge (URC)</NuxtLink
				>
				<NuxtLink
					class="bottomLink"
					to="https://circ.cstag.ca/"
					>Canadian International Robotics Competition (CIRC)</NuxtLink
				>
				<NuxtLink
					class="bottomLink"
					to="https://web.altair.com/global-student-contest-2024"
					>Altair Competition</NuxtLink
				>
			</p>
			<p class="flex flex-row flex-wrap gap-5 text-neutral-400">
				<span class="block">Page Author: <strong>Matthew Grimes</strong></span>
				<span class="block">Page Editor: <strong>Jordan Tucker</strong></span>
			</p>
		</div>
	</footer>
	<p
		v-if="dev"
		class="w-full bg-amber-300 p-2 text-center text-black"
	>
		Website under construction. Expect missing content & bugs!
	</p>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.bottomLink {
	@apply block text-neutral-400 hover:text-white;
	@apply transition-colors duration-200 ease-in-out;
}
li > a:hover {
	@apply text-white;
}
li > a {
	@apply text-neutral-400;
	@apply transition-colors duration-200 ease-in-out;
}
</style>
