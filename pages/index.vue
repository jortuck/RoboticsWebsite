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
		<section
			class="w-full overflow-hidden bg-[url(~/assets/images/birdseye.jpg)] bg-cover bg-center bg-no-repeat md:bg-top"
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
					<div class="space-y-8 md:max-w-1/2 xl:max-w-1/3">
						<h1
							class="tex text-6xl leading-18 font-extrabold text-secondary lg:text-7xl lg:leading-30 xl:text-8xl"
						>
							Husky<br />Robotics
						</h1>
						<p class="border-b-1 border-b-accent pb-5 text-lg text-secondary">
							Rovers modeled, engineered, and field‑tested by UW students for real‑world planetary
							exploration & industry‑grade team robotics.
						</p>
						<p class="space-x-3 align-middle">
							<span class="text-center font-roboto font-medium tracking-[3.60px] text-secondary"
								>University of Washington - Seattle</span
							>
						</p>
					</div>
					<div class="mt-16 flex flex-col gap-8 md:flex-row">
						<div class="flex items-center space-x-4 text-xl font-bold text-white">
							<p>Join Us</p>
							<span class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary">
								<i class="fa-solid fa-arrow-right fa-xs text-white"></i>
							</span>
						</div>
						<div class="flex items-center space-x-4 text-xl font-bold text-white">
							<p>Support Us</p>
							<span class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary">
								<i class="fa-solid fa-arrow-right fa-xs text-white"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="mx-3">
			<div class="container mx-auto space-y-8 py-10 md:max-w-4/5 xl:max-w-2/3">
				<p class="border-b-1 border-b-accent pb-5 text-lg">
					The University of Washington’s Husky Robotics leads the frontier of collegiate planetary
					exploration, blending elite engineering and scientific rigor. Our 2025 rover, Prometheus,
					symbolizes this commitment: built to autonomously explore Mars-analog environments and
					compete at prestigious international challenges, including the University Rover Challenge
					(URC) in Utah and the Canadian International Rover Challenge (CIRC).
				</p>
				<div class="flex flex-col gap-5 md:flex-row">
					<div class="flex-1">
						<p class="font-roboto tracking-widest text-neutral-500">CLASS</p>
						<p class="text-lg font-bold text-black">Rover</p>
					</div>
					<div class="flex-1">
						<p class="font-roboto tracking-widest text-neutral-500">AIM</p>
						<p class="text-lg font-bold text-black">Utah (URC)<br />Canada (CIRC)</p>
					</div>
					<div class="flex-2">
						<p class="font-roboto tracking-widest text-neutral-500">URC / CIRC COMPETITIONS</p>
						<p class="text-lg font-bold text-black">May 28th to 31st / August 8th to 11th</p>
					</div>
					<div class="flex-2">
						<p class="font-roboto tracking-widest text-neutral-500">OBJECTIVE</p>
						<p class="text-lg font-bold text-black">
							Seek signs of life while autonomously traversing scorching, rocky, sandy, arid
							terrain.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-primary px-3 py-20 md:py-30">
			<div class="container mx-auto flex flex-col items-center gap-5 lg:flex-row">
				<div class="flex h-full flex-1 flex-col space-y-8">
					<header class="space-y-2">
						<p class="font-roboto tracking-widest text-zinc-400">University of Washington 2025</p>
						<h2 class="text-4xl font-extrabold text-secondary">
							University Rover Challenge (URC) Team Video
						</h2>
					</header>
					<p class="text-secondary">
						Husky Robotics proudly earned selection among 38 global teams for URC 2025 against 100+
						applicants, securing an exceptional SAR video score of 91.21. Continuing our legacy from
						recent podium finishes, including multiple 2nd-place global wins at the Canadian
						International Rover Challenge (CIRC). This video showcases Prometheus's autonomous
						capabilities and our team's distinguished engineering excellence.
					</p>
					<div class="flex items-center space-x-4 text-xl font-bold text-white">
						<p>Support Us</p>
						<span class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary">
							<i class="fa-solid fa-arrow-right fa-xs text-white"></i>
						</span>
					</div>
				</div>
				<div class="w-full flex-1">
					<iframe
						class="w-full overflow-hidden rounded-sm"
						width="560"
						height="450"
						src="https://www.youtube.com/embed/HaLj1IdKzLA?si=2HrCr6CkfrNutXKF"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</section>
	</main>
</template>
