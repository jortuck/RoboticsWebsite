<template>
	<footer class="mt-5 border-t-2 border-t-base-300 bg-base-100 py-8 md:px-2 lg:px-0">
		<div
			class="container mx-auto flex flex-col content-center items-center justify-between space-y-6 px-3 align-middle md:flex-row md:space-y-0 xl:px-0"
		>
			<div class="flex-1 text-center text-base-content md:text-left">
				<div>
					<h1 class="font-bold">Contact Us:</h1>
					<NuxtLink
						to="mailto:uwrobots@uw.edu"
						class="hover:underline"
						>uwrobots@uw.edu</NuxtLink
					>
				</div>
			</div>
			<p class="flex-none space-x-4 text-base-content">
				<NuxtLink
					target="_blank"
					to="https://www.instagram.com/uwrobots/"
					aria-label="@uwrobots on Instagram."
				>
					<i class="fa-brands fa-2x fa-instagram"></i>
				</NuxtLink>
				<NuxtLink
					target="_blank"
					to="https://www.facebook.com/uwrobots/"
					aria-label="@uwrobots on Facebook."
				>
					<i class="fa-brands fa-2x fa-facebook"></i>
				</NuxtLink>

				<NuxtLink
					to="https://www.linkedin.com/company/husky-robotics/"
					target="_blank"
					aria-label="@husky-robotics on LinkedIn."
				>
					<i class="fa-brands fa-2x fa-linkedin"></i>
				</NuxtLink>

				<NuxtLink
					target="_blank"
					to="https://www.youtube.com/channel/UC274hSR7LTSRfsH4riugKBw"
					aria-label="Husky Robotics on YouTube."
				>
					<i class="fa-brands fa-2x fa-youtube"></i>
				</NuxtLink>

				<NuxtLink
					target="_blank"
					to="https://github.com/huskyroboticsteam"
					aria-label="@huskyroboticsteam on GitHub."
				>
					<i class="fa-brands fa-2x fa-github"></i>
				</NuxtLink>
			</p>
			<div class="flex-1 space-y-2">
				<p class="text-center text-3xl font-extrabold text-white md:text-right">
					<img
						src="~/assets/images/logo_square_sm.png"
						class="inline max-h-12"
						alt="Husky Robotics Logo"
					/>
				</p>
				<p class="text-center text-xs text-base-content md:text-right">© 2025 Husky Robotics</p>
				<p class="text-center text-xs text-base-content md:text-right">
					Husky Robotics is a Registered Student Organization (RSO) at the University of Washington
				</p>
			</div>
		</div>
	</footer>
</template>
<style scoped>
@reference "~/assets/css/main.css";
a:hover {
	@apply text-primary transition-colors duration-300 ease-in-out dark:text-alt;
}
</style>
<script setup lang="ts"></script>
