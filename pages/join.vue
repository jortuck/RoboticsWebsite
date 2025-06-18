<script setup lang="ts">
import Destinations from "~/components/Destinations.vue";
</script>
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
		<section class="bg-primary">
			<div class="container mx-auto px-4 py-20">
				<div class="flex flex-col gap-10 lg:flex-row">
					<div class="flex-1 space-y-8 text-white">
						<h2 class="text-2xl font-bold">Join Us</h2>
						<p class="text-lg">
							Husky Robotics welcomes passionate students eager to build real systems, solve complex
							problems, and collaborate across disciplines in pursuit of exploration and innovation.
							We combine high-impact engineering with a strong, collaborative community built to
							meet the standards of pacific northwest industry
						</p>
						<p class="text-xl font-bold italic">
							Applications are currently closed. Join the interest list.
						</p>
						<ArrowLink to="https://google.com">Interest Form</ArrowLink>
					</div>
					<div class="flex flex-1 items-center justify-end text-white">
						<ul class="linklist w-full space-y-2 lg:w-2/3">
							<li>
								Excerpts From Current Members
								<span class="float-right"><i class="fa-solid fa-arrow-down"></i></span>
							</li>
							<li>
								Application Cycle
								<span class="float-right"><i class="fa-solid fa-arrow-down"></i></span>
							</li>
							<li>
								FAQ <span class="float-right"><i class="fa-solid fa-arrow-down"></i></span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-secondary">
			<div class="container mx-auto px-4 py-20">
				<div class="flex flex-col space-y-8">
					<div class="flex flex-col items-center gap-10 lg:flex-row">
						<p
							class="flex-1 border-b-1 border-b-neutral-400 py-8 text-xl leading-10 font-medium lg:text-2xl"
						>
							"Husky Robotics gave me hands-on experience I couldn't get from classes. Every day
							here is about trying new ideas and solving interesting problems."
						</p>
						<div class="flex flex-1 flex-row justify-center">
							<img
								alt="A student sitting with their computer."
								class="aspect-4/3 object-cover md:w-3/4"
								src="~/assets/images/excerpt1.jpg"
							/>
						</div>
					</div>
					<div class="flex flex-col items-center gap-10 lg:flex-row">
						<p
							class="flex-1 border-b-1 border-b-neutral-400 py-8 text-xl leading-10 font-medium lg:text-2xl"
						>
							"After going to admitted students day last year and seeing the rover and the space
							focus I knew I wanted to join Husky Robotics."
						</p>
						<div class="flex flex-1 flex-row justify-center">
							<img
								alt="One of our rovers."
								class="aspect-4/3 object-cover md:w-3/4"
								src="~/assets/images/excerpt2.jpg"
							/>
						</div>
					</div>
					<div class="flex flex-col items-center gap-10 lg:flex-row">
						<p
							class="flex-1 border-b-1 border-b-neutral-400 py-8 text-xl leading-10 font-medium lg:text-2xl"
						>
							"Our partners really invest in our futures. Being part of this team opened up
							opportunities I never expected."
						</p>
						<div class="flex flex-1 flex-row justify-center">
							<img
								alt="Person soldering components onto a circuit board."
								class="aspect-4/3 object-cover md:w-3/4"
								src="~/assets/images/excerpt3.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Destinations />
	</main>
</template>
<style scoped>
.linklist > li {
	@apply border-b-1 border-b-neutral-300 py-2 text-lg text-neutral-300;
	@apply transition-all duration-300 ease-in-out;
	@apply hover:border-b-secondary hover:text-secondary;
}
@reference "~/assets/css/main.css";
.bg-splash-mars {
	@apply w-full overflow-hidden bg-cover bg-center bg-no-repeat md:bg-top;
	@apply bg-[url('~/assets/images/md_mars.jpg')];
	@apply md:bg-[url('~/assets/images/md_mars.jpg')];
	@apply lg:bg-[url('~/assets/images/lg_mars.jpg')];
	@apply xl:bg-[url('~/assets/images/xl_mars.jpg')];
}
</style>
