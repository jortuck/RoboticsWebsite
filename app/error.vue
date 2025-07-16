<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
	error: Object as () => NuxtError
});
useSeoMeta({
	title: props.error?.statusCode + " | Husky Robotics"
});
</script>

<template>
	<div class="flex min-h-screen flex-col">
		<Navbar />
		<div class="flex flex-1 flex-col">
			<main>
				<header class="flex w-full flex-col items-center space-y-8 py-30 text-center">
					<h1 class="font-inter text-8xl font-extrabold text-primary md:text-9xl">
						{{ error?.statusCode }}
					</h1>
					<h2 class="text-base-content text-lg md:text-xl">{{ error?.statusMessage }}</h2>
					<ArrowLink
						to="/"
						variant="dark"
						>Return Home</ArrowLink
					>
				</header>
			</main>
		</div>
		<Footer />
	</div>
</template>
<style scoped></style>
