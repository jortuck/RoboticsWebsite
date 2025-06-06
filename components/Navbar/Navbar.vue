<script setup lang="ts">
import { ref } from "vue";
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

type Link = {
	text: string;
	url: string;
};

const links: Link[] = [
	{ text: "About", url: "#" },
	{ text: "Gallery", url: "#" },
	{ text: "Support", url: "#" },
	{ text: "Join Us", url: "#" }
];
const subLinks: Link[] = [
	{ text: "Subteams", url: "#" },
	{ text: "Sponsors", url: "#" },
	{ text: "Newsletter", url: "#" },
	{ text: "Merch", url: "#" },
	{ text: "Contact", url: "#" }
];
</script>
<template>
	<Html :class="{ 'overflow-hidden lg:overflow-auto': menuBarOpen }" />
	<div class="top-0 z-50 will-change-transform">
		<nav class="hidden items-center justify-center bg-primary px-4 py-5 lg:flex lg:flex-col">
			<div class="flex w-full flex-row px-6">
				<NuxtLink
					href="/"
					class="flex flex-1 flex-row items-center space-x-5"
				>
					<img
						src="~/assets/images/UWLogoWithGold.png"
						class="max-h-12"
						alt="University of Washington Logo"
					/>
					<p
						class="font-roboto text-lg tracking-widest text-secondary uppercase transition-colors duration-200 ease-in-out select-none"
					>
						Husky Robotics
					</p>
				</NuxtLink>
				<div class="flex-1">
					<img
						src="~/assets/images/logo_square_sm.png"
						class="mx-auto max-h-12"
						alt="Husky Robotics Logo"
					/>
				</div>
				<div
					class="flex flex-1 flex-row items-center justify-end space-x-4 text-center xl:space-x-8"
				>
					<NuxtLink
						v-for="link in links"
						:to="link.url"
						class="desktopLink text-nowrap"
					>
						{{ link.text }}
					</NuxtLink>
				</div>
			</div>
		</nav>
		<nav class="hidden items-center justify-center bg-alt py-2 lg:flex lg:flex-col">
			<div class="columns-5 content-center items-center justify-center">
				<div
					v-for="link in subLinks"
					class=""
				>
					<NuxtLink
						:to="link.url"
						class="desktopLink block w-full text-center"
					>
						{{ link.text }}
					</NuxtLink>
				</div>
			</div>
		</nav>
		<nav
			class="relative flex items-center justify-center border-b-2 bg-primary px-4 py-3 lg:hidden"
		>
			<div class="container flex flex-row items-center justify-between">
				<div class="flex flex-row items-center space-x-5">
					<img
						src="~/assets/images/logo_square_sm.png"
						class="max-h-12"
						alt="Husky Robotics Logo"
					/>
				</div>
				<p class="font-roboto text-lg uppercase dark:text-white">Husky Robotics</p>
				<button
					role="button"
					@click="toggleMenu()"
					class="w-10 rounded-sm py-0.5 text-2xl font-extrabold text-secondary transition-colors duration-100 ease-in-out"
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
				@click.self="toggleMenu()"
				class="absolute flex h-screen max-h-screen w-full flex-col bg-black px-5 py-5 lg:hidden"
			>
				<div class="container mx-auto space-y-4">
					<NuxtLink
						v-for="link in links"
						:to="link.url"
						@click="toggleMenu()"
						class="mobileLink"
					>
						{{ link.text }}
					</NuxtLink>
					<hr class="border-white" />
					<NuxtLink
						v-for="link in subLinks"
						:to="link.url"
						@click="toggleMenu()"
						class="mobileLink"
					>
						{{ link.text }}
					</NuxtLink>
				</div>
			</div>
		</Transition>
	</div>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.scrolled {
	@apply border-b-2 backdrop-blur-2xl;
}
.mobileLink,
.desktopLink {
	@apply font-bold text-secondary;
	@apply transition-colors duration-200 ease-in-out;
}
.mobileLink {
	@apply block py-2 text-xl md:text-3xl;
}
.desktopLink {
	@apply px-2 py-0.5;
}
.desktopLink.router-link-active,
.v-enter-active,
.v-leave-active {
	transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
