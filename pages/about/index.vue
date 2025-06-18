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
			<div class="container mx-auto space-y-8 px-4 py-10 lg:max-w-5xl">
				<div
					class="grid grid-cols-2 justify-between gap-10 md:flex md:flex-row md:items-baseline md:gap-0"
				>
					<div>
						<p class="font-roboto font-medium tracking-[3.80px] text-zinc-400 lg:text-lg">
							UW Engineers
						</p>
						<p class="text-6xl font-extrabold text-secondary">
							100<span class="text-tertiary">+</span>
						</p>
					</div>
					<div>
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">Fields</p>
						<p class="text-6xl font-extrabold text-secondary">
							22<span class="text-tertiary">+</span>
						</p>
					</div>
					<div>
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">Sponsors</p>
						<p class="text-6xl font-extrabold text-secondary">
							13<span class="text-tertiary">+</span>
						</p>
					</div>
					<div>
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">
							Global Rank
						</p>
						<p class="text-6xl font-extrabold text-secondary">3rd</p>
						<p class="font-roboto text-sm font-medium tracking-[3.80px] text-zinc-400">
							(CIRC 2024)
						</p>
					</div>
				</div>
				<p class="text-lg text-secondary">
					At Husky Robotics, we believe exceptional engineers emerge from teams driven by purpose
					and passion. Our mission is not just about building a rover:
					<strong
						>it's about creating an community where talented students collaborate, innovate, and
						grow into visionary leaders.</strong
					>
				</p>
				<p class="text-lg text-secondary">
					As a prestigious Registered Student Organization (RSO) at the University of Washington,
					<strong>we unite over 100 driven students from more than 22 diverse fields</strong>.
					Inspired by the rigorous standards of planetary exploration, we engineer autonomous Mars
					Rovers that compete internationally in the Rover Challenge Series.
					<strong>Our achievements include 2nd & 3rd place finishes worldwide</strong> and
					consistent podium placements at prestigious events such as the Canadian International
					Rover Challenge and the University Rover Challenge.
				</p>
				<p class="text-lg text-secondary">
					Our flagship rover, Prometheus, symbolizes our commitment to excellence. It combines
					cutting-edge autonomous systems, robust mechanical design, and sophisticated scientific
					instrumentation, rigorously tested in mock Martian environments. Through hands-on
					experience with engineering challenges,
					<strong
						>our members gain essential skills in mechanical engineering, electronics, software
						autonomy, material science, biochemical research, and aerospace technology.</strong
					>
				</p>
				<p class="text-lg text-secondary">
					Husky Robotics collaborates closely with respected industry leaders, proudly supported by
					13 distinguished sponsors who recognize the value of investing in student innovation.
					Hundreds of our alumni have advanced into significant roles at Fortune 500 companies,
					prestigious research institutions, and groundbreaking startups, highlighting our program's
					unparalleled impact.
					<strong
						>When you join or support Husky Robotics, you become part of something extraordinary.
						You're investing in future leaders who will shape the landscape of technology,
						exploration, and innovation.</strong
					>
				</p>
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
