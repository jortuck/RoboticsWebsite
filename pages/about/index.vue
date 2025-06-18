<template>
	<section class="bg-black">
		<div
			class="container mx-auto flex flex-col items-center space-y-8 px-4 py-20 md:py-20 lg:flex-row"
		>
			<div class="flex-1 space-y-8 text-secondary">
				<h1 class="text-5xl font-bold text-secondary xl:text-7xl">Our Mission at Husky Robotics</h1>
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
</template>
<script setup lang="ts">
useSeoMeta({
	title: "About | Husky Robotics"
});
</script>
