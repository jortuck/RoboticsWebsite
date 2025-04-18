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
	{ text: "Home", url: "/" },
	{ text: "Events", url: "/news-and-events" },
	{ text: "Robots", url: "/robots" },
	{ text: "Team", url: "/team" },
	{ text: "Sponsors", url: "/sponsors" }
];
</script>
<template>
	<Html :class="{ 'overflow-hidden lg:overflow-auto': menuBarOpen }" />

	<div class="sticky top-0 z-50 will-change-transform">
		<nav
			class="hidden items-center justify-center bg-base-300 py-3 lg:flex"
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
						class="translate-y-1 border-b-primary font-logo text-lg font-extrabold text-base-content uppercase transition-colors duration-200 ease-in-out select-none hover:text-primary dark:text-white"
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
			class="relative flex items-center justify-center border-b-2 border-base-100 bg-base-300 px-4 py-3 lg:hidden"
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
					class="uppercasedark:text-white translate-y-1 font-logo text-lg font-extrabold text-base-content"
				>
					Husky Robotics
				</p>
				<button
					role="button"
					@click="toggleMenu()"
					class="w-10 rounded-sm border-2 border-base-content py-0.5 text-lg font-extrabold text-base-content transition-colors duration-100 ease-in-out active:bg-base-content active:text-base-300"
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
				class="absolute flex h-screen w-full flex-col items-center space-y-5 border-base-100 bg-base-200/90 px-5 py-5 backdrop-blur-2xl lg:hidden"
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
	@apply border-b-2 border-b-base-100 bg-base-300/90 backdrop-blur-2xl;
}
.mobileLink,
.desktopLink {
	@apply rounded-sm border-2 border-base-content font-bold text-base-content;
	@apply transition-colors duration-200 ease-in-out hover:bg-base-content hover:text-base-300;
}
.mobileLink {
	@apply block w-full py-2 text-center;
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
