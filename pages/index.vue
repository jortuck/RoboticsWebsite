<script setup lang="ts">
useSeoMeta({
	title: "Home | Husky Robotics",
	description:
		"Husky Robotics provides UW students the opportunity to develop skills as part of a large interdisciplinary science and engineering project. We turn our member's passion for robotics, space, science and engineering into real-world experience, offering a unique chance to have hands-on time in a variety of engineering and engineering-adjacent fields."
});
const { data: posts } = await useAsyncData("posts", () =>
	queryCollection("posts")
		.order("date", "DESC")
		.select("title", "date", "description", "image", "id")
		.limit(3)
		.all()
);
</script>
<template>
	<main>
		<div
			class="w-full overflow-hidden bg-[url(~/assets/images/rover.png)] bg-cover bg-center bg-no-repeat"
		>
			<div
				style="
					background: linear-gradient(
						236deg,
						rgba(115, 115, 115, 0.2) 22.93%,
						rgba(0, 0, 0, 0.65) 83.23%
					);
				"
			>
				<div class="mx-3 space-y-8 py-20 md:container md:mx-auto md:py-30">
					<div class="space-y-8 md:max-w-1/3">
						<h1 class="text-5xl font-extrabold text-secondary md:text-7xl">
							Mars 2025:<br />Prometheus<br />Rover
						</h1>
						<p class="text-lg text-secondary">
							Husky Robotics' Prometheus rover seeks signs of life and collects samples of rock and
							regolith for possible Earth return.
						</p>
						<p class="space-x-3 align-middle">
							<i class="fa-solid fa-circle text-active-green"></i>
							<span
								class="text-center font-roboto text-secondary uppercase"
								style="letter-spacing: 0.225rem"
								>Active Mission</span
							>
						</p>
					</div>
					<div class="mt-16 flex flex-col gap-4 md:flex-row">
						<div class="flex-1 border-t-1 border-t-accent pt-5">
							<div class="flex items-center space-x-4 text-xl font-bold text-white">
								<p>What is Prometheus?</p>
								<span class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary">
									<i class="fa-solid fa-arrow-right fa-xs text-white"></i>
								</span>
							</div>
						</div>
						<div class="flex-1 border-t-1 border-t-accent pt-5">
							<div class="flex items-center space-x-4 text-xl font-bold text-white">
								<p>Our Team</p>
								<span class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary">
									<i class="fa-solid fa-arrow-right fa-xs text-white"></i>
								</span>
							</div>
						</div>
						<div class="flex-1 border-t-1 border-t-accent pt-5">
							<div class="flex items-center space-x-4 text-xl font-bold text-white">
								<p>Science</p>
								<span class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary">
									<i class="fa-solid fa-arrow-right fa-xs text-white"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
