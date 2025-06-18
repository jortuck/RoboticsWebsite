<script setup lang="ts"></script>
<template>
	<main>
		<section class="bg-splash-mars">
			<div
				style="
					background: linear-gradient(
						236deg,
						rgba(115, 115, 115, 0.2) 22.93%,
						rgba(0, 0, 0, 0.65) 83.23%
					);
				"
			>
				<div class="container mx-auto space-y-8 px-4 py-20 md:py-30">
					<div class="space-y-8 md:max-w-1/2">
						<h1 class="text-6xl leading-18 font-extrabold text-secondary lg:text-7xl">
							Get Involved With<br />Husky Robotics
						</h1>
						<p class="pb-5 text-lg text-secondary md:max-w-1/2">
							Husky Robotics' Prometheus rover seeks signs of life and collects samples of rock and
							regolith for possible Earth return.
						</p>
						<p class="invisible space-x-3 align-middle">
							<span class="font-roboto font-medium tracking-robotics text-secondary"
								>University of Washington - Seattle</span
							>
						</p>
					</div>
				</div>
				<p class="container mx-auto px-4 py-8 text-xs text-zinc-400">
					<NuxtLink
						class="underline"
						to="https://photojournal.jpl.nasa.gov/catalog/PIA26556"
						target="_blank"
						>PIA26556 – Mars Panorama from Perseverance</NuxtLink
					>
					(courtesy of NASA/JPL-Caltech)
					<br />
					<br />
					These images are used for educational and academic purposes only, without any commercial
					intent, and in full compliance with NASA’s Media Usage Guidelines. NASA does not endorse
					this website or its contents. We gratefully acknowledge the work of the mission teams and
					image processors whose contributions make these resources publicly available.
				</p>
			</div>
		</section>
	</main>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.bg-splash-mars {
	@apply w-full overflow-hidden bg-cover bg-center bg-no-repeat md:bg-top;
	@apply bg-[url('~/assets/images/md_mars.jpg')];
	@apply md:bg-[url('~/assets/images/md_mars.jpg')];
	@apply lg:bg-[url('~/assets/images/lg_mars.jpg')];
	@apply xl:bg-[url('~/assets/images/xl_mars.jpg')];
}
</style>
