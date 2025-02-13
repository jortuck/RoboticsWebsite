<script setup lang="ts">
import { ref } from "vue";
import { useNuxt } from "@nuxt/kit";
import.meta.dev;
let menuBarOpen = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
let scroll = ref(0);
onMounted(() => {
	let { x, y } = useWindowScroll();
	watch(y, (value) => {
		scroll.value = value;
	});
});
const toggleMenu = useToggle(menuBarOpen);
const dev = import.meta.dev;

type Link = {
	text: string;
	url: string;
};

const links: Link[] = [
	{ text: "Home", url: "/" },
	{ text: "Events", url: "/events" },
	{ text: "Robots", url: "/robots" },
	{ text: "Team", url: "/team" },
	{ text: "Sponsors", url: "/sponsors" }
];
</script>
<template>
	<p
		v-if="!dev"
		class="w-full bg-amber-300 p-2 text-center"
	>
		Website under construction. Expect missing content & bugs!
	</p>
	<div class="sticky top-0 z-50 will-change-transform">
		<nav
			class="hidden items-center justify-center bg-base-100 py-3 lg:flex"
			:class="{ scrolled: scroll > 0 }"
		>
			<div class="container flex flex-row justify-between">
				<NuxtLink
					href="/"
					class="flex flex-row items-center space-x-5"
				>
					<img
						src="~/assets/images/logo_square_sm.png"
						class="max-h-12"
						alt="Husky Robotics Logo"
					/>
					<p
						class="translate-y-1 border-b-primary font-logo text-lg font-extrabold text-base-content uppercase select-none dark:text-white"
					>
						Husky Robotics
					</p>
				</NuxtLink>
				<div class="flex flex-row items-center space-x-4 lg:space-x-8">
					<NuxtLink
						v-for="link in links"
						:to="link.url"
						class="desktopLink"
					>
						{{ link.text }}
					</NuxtLink>
					<button
						class="desktopLink hover:cursor-pointer"
						@click="toggleDark()"
						role="button"
						aria-label="Toggle Dark Theme"
					>
						<span v-show="isDark"><i class="fa-regular fa-lightbulb"></i></span>
						<span v-show="!isDark"><i class="fa-regular fa-moon"></i></span>
					</button>
				</div>
			</div>
		</nav>
		<nav
			class="relative flex items-center justify-center border-b-2 border-base-300 bg-base-100 px-4 py-3 lg:hidden"
		>
			<div class="container flex flex-row items-center justify-between">
				<div class="flex flex-row items-center space-x-5">
					<img
						src="~/assets/images/logo_square_sm.png"
						class="max-h-12"
						alt="Husky Robotics Logo"
					/>
				</div>
				<p
					class="translate-y-1 font-logo text-lg font-extrabold text-base-content uppercase dark:text-white"
				>
					Husky Robotics
				</p>
				<button
					role="button"
					@click="toggleMenu()"
					class="w-10 rounded-md border-2 border-base-content py-0.5 text-lg font-extrabold text-base-content transition-colors duration-100 ease-in-out active:bg-base-content active:text-base-300"
				>
					<i
						class="fa-solid fa-bars"
						v-show="!menuBarOpen"
					></i>
					<i
						class="fa-regular fa-x"
						v-show="menuBarOpen"
					></i>
				</button>
			</div>
		</nav>
		<Transition>
			<div
				v-if="menuBarOpen"
				class="absolute flex w-full flex-col items-center space-y-5 border-b-2 border-base-300 bg-base-200 py-5 transition-all duration-200 ease-in-out lg:hidden"
			>
				<NuxtLink
					v-for="link in links"
					:to="link.url"
					@click="toggleMenu()"
					class="mobileLink"
				>
					{{ link.text }}
				</NuxtLink>
				<button
					class="mobileLink"
					@click="toggleDark()"
					role="button"
				>
					<span v-show="isDark"><i class="fa-regular fa-lightbulb"></i></span>
					<span v-show="!isDark"><i class="fa-regular fa-moon"></i></span>
				</button>
			</div>
		</Transition>
	</div>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.scrolled {
	@apply border-b-2 border-b-base-content bg-base-100/90 backdrop-blur-2xl;
}
.mobileLink,
.desktopLink {
	@apply rounded-md border-2 border-base-content font-bold text-base-content;
	@apply transition-colors duration-200 ease-in-out hover:bg-base-content hover:text-base-100;
}
.mobileLink {
	@apply block w-3/5 py-1 text-center;
}
.desktopLink {
	@apply px-2 py-0.5;
}
.desktopLink.router-link-active,
.mobileLink.router-link-active {
	@apply bg-base-content text-base-100;
}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
