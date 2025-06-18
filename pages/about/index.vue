<script setup lang="ts">
import { gsap } from "gsap";
useSeoMeta({
	title: "About | Husky Robotics"
});
</script>
<template>
	<main>
		<section class="bg-black">
			<div class="container mx-auto flex flex-col items-center space-y-8 px-4 py-20 lg:flex-row">
				<div class="flex-1 space-y-8 text-secondary">
					<h1 class="text-5xl font-bold text-secondary xl:text-7xl">
						Our Mission at Husky Robotics
					</h1>
					<p class="font-bold xl:text-lg">
						At Husky Robotics, we cultivate elite engineering talent through rigorous hands-on
						experiences and real-world challenges.
					</p>
					<p class="xl:text-lg">
						<strong
							>Our student-led team, rooted in the University of Washington, collaborates with
							industry leaders and has launched hundreds of alumni into Fortune 500 careers.</strong
						>
						By building advanced autonomous systems, we prepare students to innovate, excel in
						prestigious competitions, and become distinguished leaders shaping the future of
						technology and exploration.
					</p>
					<p class="xl:text-lg">
						<strong>Apply or support us today.</strong> Fund innovation, build industry connections,
						and shape the future of engineering.
					</p>
					<div class="mt-8 flex flex-col gap-8 md:flex-row">
						<ArrowLink to="#">Join Us</ArrowLink>
						<ArrowLink to="#">Support Us</ArrowLink>
					</div>
				</div>
				<div class="flex-1">
					<div class="relative mx-auto lg:max-w-11/12">
						<div
							style="
								background: linear-gradient(
									121deg,
									rgba(115, 115, 115, 0.14) 8.61%,
									rgba(0, 0, 0, 0.45) 90.82%
								);
							"
							class="pointer-events-none absolute inset-0 z-10"
						></div>
						<img
							src="~/assets/images/about.jpg"
							class="h-full w-full object-cover lg:aspect-16/9"
							alt="Our rover exploring the desert."
						/>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-black">
			<div class="container mx-auto px-4 py-10 xl:max-w-3/5">
				<div
					class="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row md:items-baseline"
				>
					<div class="text-center md:text-left">
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">
							UW Engineers
						</p>
						<p class="text-8xl font-extrabold text-secondary">
							100<span class="text-tertiary">+</span>
						</p>
					</div>
					<div class="text-center md:text-left">
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">Fields</p>
						<p class="text-8xl font-extrabold text-secondary">
							22<span class="text-tertiary">+</span>
						</p>
					</div>
					<div class="text-center md:text-left">
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">Sponsors</p>
						<p class="text-8xl font-extrabold text-secondary">
							13<span class="text-tertiary">+</span>
						</p>
					</div>
					<div class="text-center md:text-left">
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">
							Global Rank
						</p>
						<p class="text-8xl font-extrabold text-secondary">3rd</p>
						<p class="font-roboto text-sm font-medium tracking-[3.80px] text-zinc-400">
							(CIRC 2024)
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped>
.outline-text-white {
	text-shadow:
		-1px -1px 0 white,
		1px -1px 0 white,
		-1px 1px 0 white,
		1px 1px 0 white;
}
</style>
