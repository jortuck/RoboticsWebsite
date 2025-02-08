<template>
	<footer class="mt-5 border-t-2 border-t-base-300 bg-base-100 py-8 md:px-2 lg:px-0">
		<div
			class="container mx-auto flex flex-col content-center items-center justify-between space-y-6 px-3 align-middle md:flex-row md:space-y-0 xl:px-0"
		>
			<div class="space-y-3 text-center text-base-content md:text-left">
				<div>
					<h1 class="font-bold">Contact Us:</h1>
					<NuxtLink
						href="mailto:uwrobots@uw.edu"
						class="hover:underline"
						>uwrobots@uw.edu</NuxtLink
					>
				</div>
			</div>
			<p class="space-x-4 text-base-content">
				<NuxtLink
					href="#"
					class="coolDrop"
				>
					<i class="fa-brands fa-2x fa-instagram"></i>
				</NuxtLink>
				<NuxtLink
					href="#"
					class="coolDrop"
				>
					<i class="fa-brands fa-2x fa-facebook"></i>
				</NuxtLink>

				<NuxtLink
					href="#"
					class="coolDrop"
				>
					<i class="fa-brands fa-2x fa-linkedin"></i>
				</NuxtLink>

				<NuxtLink
					href="#"
					class="coolDrop"
				>
					<i class="fa-brands fa-2x fa-youtube"></i>
				</NuxtLink>

				<NuxtLink
					href="#"
					class="coolDrop"
				>
					<i class="fa-brands fa-2x fa-github"></i>
				</NuxtLink>
			</p>
			<div class="space-y-2">
				<p class="text-center text-3xl font-extrabold text-white md:text-right">
					<img
						src="~/assets/images/logo.png"
						class="inline max-h-12"
					/>
				</p>
				<p class="text-xs text-gray-400">© 2025 Husky Robotics</p>
			</div>
		</div>
	</footer>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.coolDrop:hover {
	@apply text-primary;
}
</style>
<script setup lang="ts"></script>
