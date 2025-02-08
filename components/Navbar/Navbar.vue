<script setup lang="ts">
import { ref } from "vue";

let menuBarOpen = ref(false);
const mobileLink =
	"block py-1 border-2 text-base-content rounded-md hover:bg-base-content hover:text-base-100 transition-colors duration-200 ease-in-out w-3/5 text-center border-base-content font-bold";
const desktopLink =
	"px-2 py-0.5 border-2 text-base-content rounded-md hover:bg-base-content hover:text-base-100 transition-colors duration-200 ease-in-out border-base-content font-bold";
const isDark = useDark();
const toggleDark = useToggle(isDark);
let scroll = ref(0);
onMounted(() => {
	let { x, y } = useWindowScroll();
	watch(y, (value) => {
		scroll.value = value;
	});
});
</script>
<template>
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
						src="~/assets/images/logo.png"
						class="max-h-12"
						alt="Husky Robotics Logo"
					/>
					<p
						class="border-b-2 border-b-primary text-lg font-extrabold text-base-content uppercase select-none dark:text-white"
					>
						Husky Robotics
					</p>
				</NuxtLink>
				<div class="flex flex-row items-center space-x-4 lg:space-x-8">
					<NuxtLink
						to="/"
						:class="desktopLink"
					>
						Home
					</NuxtLink>
					<NuxtLink
						to="#"
						:class="desktopLink"
					>
						Events
					</NuxtLink>
					<NuxtLink
						to="#"
						:class="desktopLink"
					>
						Robots
					</NuxtLink>
					<NuxtLink
						to="#"
						:class="desktopLink"
					>
						Team
					</NuxtLink>
					<NuxtLink
						to="#"
						:class="desktopLink"
					>
						Sponsors
					</NuxtLink>
					<a
						href="#"
						:class="desktopLink"
						@click="toggleDark()"
						role="button"
					>
						<span v-show="isDark"><i class="fa-regular fa-lightbulb"></i></span>
						<span v-show="!isDark"><i class="fa-regular fa-moon"></i></span>
					</a>
				</div>
			</div>
		</nav>
		<nav
			class="relative flex items-center justify-center border-b-2 border-base-300 bg-base-100 px-4 py-3 lg:hidden"
		>
			<div class="container flex flex-row items-center justify-between">
				<div class="flex flex-row items-center space-x-5">
					<img
						src="~/assets/images/logo.png"
						class="max-h-12"
						alt="Husky Robotics Logo"
					/>
				</div>
				<p
					class="border-b-2 border-b-primary text-lg font-extrabold text-base-content uppercase dark:text-white"
				>
					Husky Robotics
				</p>
				<button
					role="button"
					@click="menuBarOpen = !menuBarOpen"
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
		<div
			class="absolute flex w-full flex-col items-center space-y-5 border-b-2 border-base-300 bg-base-200 py-5 transition-all duration-200 ease-in-out lg:hidden"
			:class="{ 'opacity-0': !menuBarOpen }"
		>
			<NuxtLink
				to="/"
				:class="mobileLink"
			>
				Home
			</NuxtLink>
			<NuxtLink
				to="#"
				:class="mobileLink"
			>
				Events
			</NuxtLink>
			<NuxtLink
				to="#"
				:class="mobileLink"
			>
				Robots
			</NuxtLink>
			<NuxtLink
				to="#"
				:class="mobileLink"
			>
				Team
			</NuxtLink>
			<NuxtLink
				to="#"
				:class="mobileLink"
			>
				Sponsors
			</NuxtLink>
			<a
				href="#"
				:class="mobileLink"
				@click="toggleDark()"
				role="button"
			>
				<span v-show="isDark"><i class="fa-regular fa-lightbulb"></i></span>
				<span v-show="!isDark"><i class="fa-regular fa-moon"></i></span>
			</a>
		</div>
	</div>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.scrolled {
	@apply border-b-2 border-b-base-content bg-base-100/90 backdrop-blur-2xl;
}
</style>
