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
				<header class="mt-30 w-full space-y-8 text-center">
					<h1 class="font-airbus text-8xl font-extrabold text-primary md:text-9xl">
						{{ error?.statusCode }}
					</h1>
					<h2 class="text-lg text-base-content md:text-xl">{{ error?.statusMessage }}</h2>
					<NuxtLink
						class="group w-fit"
						href="/"
					>
						<span class="rounded-l-md bg-base-100 p-3 text-base-content"> Return Home </span>
						<span
							class="rounded-r-md bg-primary p-3 text-primary-content transition-colors duration-200 ease-in-out group-hover:bg-primary-200"
						>
							<i class="fa-solid fa-home"></i>
						</span>
					</NuxtLink>
				</header>
			</main>
		</div>
		<Footer />
	</div>
</template>
<style scoped></style>
