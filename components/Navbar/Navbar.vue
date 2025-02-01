<script setup lang="ts">
import { ref } from "vue";

let menuBarOpen = ref(false);
const mobileLink =
	"block py-1 border-2 rounded-md hover:bg-black hover:text-white transition-colors duration-200 ease-in-out w-3/5 text-center border-black";
const desktopLink =
	"px-2 py-0.5 border-2 rounded-md hover:bg-black hover:text-white transition-colors duration-200 ease-in-out border-black";
</script>
<template>
	<div class="sticky top-0 z-50 will-change-transform">
		<nav class="hidden items-center justify-center border-b-2 bg-gray-200 py-3 md:flex">
			<div class="container flex flex-row justify-between">
				<div class="flex flex-row items-center space-x-5">
					<img
						src="~/assets/images/logo.png"
						class="max-h-12"
						alt="Husky Robotics Logo"
					/>
					<p class="text-lg font-extrabold uppercase">Husky Robotics</p>
				</div>
				<div class="flex flex-row items-center space-x-6 lg:space-x-8">
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
						Sponsors
					</NuxtLink>
				</div>
			</div>
		</nav>
		<nav class="flex items-center justify-center border-b-2 bg-gray-200 px-4 py-3 md:hidden">
			<div class="container flex flex-row items-center justify-between">
				<div class="flex flex-row items-center space-x-5">
					<img
						src="~/assets/images/logo.png"
						class="max-h-12"
						alt="Husky Robotics Logo"
					/>
					<p class="text-lg font-extrabold uppercase">Husky Robotics</p>
				</div>
				<button
					role="button"
					@click="menuBarOpen = !menuBarOpen"
					class="w-10 rounded-md border-2 border-black py-0.5 text-lg font-extrabold transition-colors duration-100 ease-in-out active:bg-black active:text-white"
				>
					<i
						class="fa-solid fa-bars"
						v-show="!menuBarOpen"
					></i>
					<i
						class="fa-solid fa-x"
						v-show="menuBarOpen"
					></i>
				</button>
			</div>
		</nav>
		<div
			class="flex flex-col items-center space-y-5 border-b-2 bg-gray-200 py-5 transition-all duration-200 ease-in-out md:hidden"
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
				Sponsors
			</NuxtLink>
		</div>
	</div>
</template>
