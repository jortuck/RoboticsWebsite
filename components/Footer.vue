<template>
	<footer class="mt-5 border-t-2 border-t-base-300 bg-base-100 py-8 md:px-2 lg:px-0">
		<div
			class="container mx-auto flex flex-col content-center items-center justify-between space-y-6 px-3 align-middle md:flex-row md:space-y-0 xl:px-0"
		>
			<div class="text-center text-base-content md:text-left">
				<div>
					<h1 class="font-bold">Contact Us:</h1>
					<NuxtLink
						to="mailto:uwrobots@uw.edu"
						class="hover:underline"
						>uwrobots@uw.edu</NuxtLink
					>
				</div>
			</div>
			<p class="space-x-4 text-base-content">
				<NuxtLink
					class="coolDrop"
					target="_blank"
					to="https://www.instagram.com/uwrobots/"
					aria-label="@uwrobots on Instagram."
				>
					<i class="fa-brands fa-2x fa-instagram"></i>
				</NuxtLink>
				<NuxtLink
					class="coolDrop"
					target="_blank"
					to="https://www.facebook.com/uwrobots/"
					aria-label="@uwrobots on Facebook."
				>
					<i class="fa-brands fa-2x fa-facebook"></i>
				</NuxtLink>

				<NuxtLink
					to="https://www.linkedin.com/company/husky-robotics/"
					class="coolDrop"
					target="_blank"
					aria-label="@husky-robotics on LinkedIn."
				>
					<i class="fa-brands fa-2x fa-linkedin"></i>
				</NuxtLink>

				<NuxtLink
					class="coolDrop"
					target="_blank"
					to="https://www.youtube.com/channel/UC274hSR7LTSRfsH4riugKBw"
					aria-label="Husky Robotics on YouTube."
				>
					<i class="fa-brands fa-2x fa-youtube"></i>
				</NuxtLink>

				<NuxtLink
					class="coolDrop"
					target="_blank"
					to="https://github.com/huskyroboticsteam"
					aria-label="@huskyroboticsteam on GitHub."
				>
					<i class="fa-brands fa-2x fa-github"></i>
				</NuxtLink>
			</p>
			<div class="space-y-2">
				<p class="text-center text-3xl font-extrabold text-white md:text-right">
					<img
						src="~/assets/images/logo_square_sm.png"
						class="inline max-h-12"
						alt="Husky Robotics Logo"
					/>
				</p>
				<p class="text-xs text-base-content">© 2025 Husky Robotics</p>
			</div>
		</div>
	</footer>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.coolDrop:hover {
	@apply text-base-content/70 transition-colors duration-300 ease-in-out;
}
</style>
<script setup lang="ts"></script>
