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

type destination = {
	file: string;
	alt: string;
	link: string;
};

const destinations: destination[] = [
	{ file: "apple.png", alt: "Apple", link: "https://apple.com" },
	{ file: "amazon.png", alt: "Amazon", link: "https://amazon.com" },
	{ file: "microsoft.png", alt: "Microsoft", link: "https://microsoft.com" },
	{ file: "blueorigin.png", alt: "Blue Origin", link: "https://blueorigin.com" },
	{ file: "nasa.png", alt: "NASA", link: "https://nasa.gov" },
	{ file: "spacex.png", alt: "SpaceX", link: "https://spacex.com" },
	{ file: "meta.png", alt: "Meta", link: "https://meta.com" },
	{ file: "boeing.png", alt: "Boeing", link: "https://boeing.com" },
	{ file: "google.png", alt: "Google", link: "https://google.com" },
	{ file: "stoke.png", alt: "Stoke Space", link: "https://stokespace.com" },
	{ file: "jpl.png", alt: "NASA Jet Propulsion Laboratory", link: "https://jpl.nasa.gov" },
	{ file: "figure.png", alt: "Figure AI", link: "https://figure.ai" },
	{ file: "nvidia.png", alt: "NVIDIA", link: "https://nvidia.com" },
	{ file: "columbia.png", alt: "Columbia University", link: "https://columbia.edu" },
	{ file: "cal.png", alt: "University of California Berkeley", link: "https://berkeley.edu" },
	{ file: "uw.png", alt: "University of Washington", link: "https://washington.edu" },
	{ file: "ucla.png", alt: "University of California Los Angeles", link: "https://ucla.edu" },
	{ file: "stanford.png", alt: "Stanford University", link: "https://stanford.edu" },
	{ file: "harvard.png", alt: "Harvard University", link: "https://harvard.edu" },
	{ file: "michigan.png", alt: "University of Michigan", link: "https://umich.edu" },
	{ file: "gt.png", alt: "Georgia Institute of Technology", link: "https://gatech.edu" }
];
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
				<div class="container mx-auto space-y-8 px-4 py-20 md:py-30">
					<div class="space-y-8 md:max-w-1/2 xl:max-w-1/3">
						<Motion
							as="h1"
							:initial="{ opacity: 0 }"
							:animate="{ opacity: 1 }"
							:transition="{ delay: 0, duration: 1.2 }"
							class="text-6xl leading-18 font-extrabold text-secondary lg:text-7xl lg:leading-30 xl:text-8xl"
						>
							Husky<br />Robotics
						</Motion>
						<Motion
							as="p"
							:initial="{ opacity: 0 }"
							:animate="{ opacity: 1 }"
							:transition="{ delay: 0.8, duration: 1.5 }"
							class="border-b-1 border-b-accent pb-5 text-lg text-secondary"
						>
							Rovers modeled, engineered, and field‑tested by UW students for real‑world planetary
							exploration & industry‑grade team robotics.
						</Motion>
						<Motion
							as="p"
							class="space-x-3 align-middle"
							:initial="{ opacity: 0 }"
							:animate="{ opacity: 1 }"
							:transition="{ delay: 1.3, duration: 1.5 }"
						>
							<span class="font-roboto font-medium tracking-robotics text-secondary"
								>University of Washington - Seattle</span
							>
						</Motion>
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
		<section>
			<div class="container mx-auto space-y-8 px-4 py-20 md:max-w-4/5 xl:max-w-2/3">
				<p class="border-b-1 border-b-accent pb-5 text-lg">
					The University of Washington’s Husky Robotics leads the frontier of collegiate planetary
					exploration, blending elite engineering and scientific rigor. Our 2025 rover, Prometheus,
					symbolizes this commitment: built to autonomously explore Mars-analog environments and
					compete at prestigious international challenges, including the University Rover Challenge
					(URC) in Utah and the Canadian International Rover Challenge (CIRC).
				</p>
				<div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">
					<div class="xl:col-span-1">
						<p class="font-roboto tracking-widest text-neutral-500">CLASS</p>
						<p class="text-lg font-bold text-black">Rover</p>
					</div>
					<div class="xl:col-span-1">
						<p class="font-roboto tracking-widest text-neutral-500">AIM</p>
						<p class="text-lg font-bold text-black">Utah (URC)<br />Canada (CIRC)</p>
					</div>
					<div class="xl:col-span-2">
						<p class="font-roboto tracking-widest text-neutral-500">URC / CIRC COMPETITIONS</p>
						<p class="text-lg font-bold text-black">May 28th to 31st / August 8th to 11th</p>
					</div>
					<div class="xl:col-span-2">
						<p class="font-roboto tracking-widest text-neutral-500">OBJECTIVE</p>
						<p class="text-lg font-bold text-black">
							Seek signs of life while autonomously traversing scorching, rocky, sandy, arid
							terrain.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-primary py-20 md:py-30">
			<div class="container mx-auto flex flex-col items-center gap-10 px-4 lg:flex-row">
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
					<div class="aspect-video w-full overflow-hidden rounded-sm">
						<iframe
							class="h-full w-full overflow-hidden rounded-sm"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/HaLj1IdKzLA?si=2HrCr6CkfrNutXKF"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container mx-auto gap-5 space-y-5 px-4 py-10 md:max-w-2/3 lg:max-w-1/2">
				<h2 class="text-4xl font-bold">NASA Inspired Robotics: Our Team</h2>
				<p>
					Husky Robotics cultivates exceptional talent, preparing +100 University of Washington
					undergraduate engineers yearly for impactful careers. Our alumni regularly advance into
					prominent full time roles across industry-leading companies and innovative research
					institutions. With strong partnerships and work experiences spanning Mechanical
					Engineering, Electrical & Computer Engineering, and Chemical & Biological engineering at
					UW. Here are just a few places where many of our team’s alumni have made their mark:
				</p>
			</div>
			<div class="container mx-auto px-4 py-10">
				<div class="grid grid-cols-3 justify-items-center gap-5 lg:grid-cols-7">
					<div
						v-for="dest in destinations"
						:key="dest.file"
						class="flex h-20 w-full items-center justify-center"
					>
						<a
							:href="dest.link"
							target="_blank"
							class="block h-full w-full"
						>
							<Motion
								:initial="{ opacity: 0 }"
								:whileInView="{ opacity: 1 }"
								:transition="{ delay: 0.2, duration: 1 }"
								:inViewOptions="{ once: true }"
								as="img"
								:src="`/images/destinations/${dest.file}`"
								:alt="dest.alt"
								class="mx-auto h-full max-h-16 w-auto object-contain transition-transform duration-200 ease-in-out hover:scale-110"
							/>
						</a>
					</div>
				</div>
				<p class="mt-10 text-center font-roboto text-sm font-medium text-zinc-400">
					Source: LinkedIn Alumni Tool - University of Washington
				</p>
			</div>
		</section>
		<section class="bg-primary py-20">
			<div class="container mx-auto space-y-20 px-4">
				<header class="space-y-5 text-center">
					<p class="font-roboto tracking-robotics text-zinc-400">
						Husky Robotics
						<img
							class="inline-block h-6"
							src="~/assets/images/UWLogoWithGold.png"
						/>
					</p>
					<h2 class="text-5xl font-black text-secondary">Meet Our Team</h2>
					<p class="text-zinc-100">2025 Roster: <em>167 UW Engineers</em></p>
				</header>
				<div class="flex flex-col">
					<div class="flex flex-col items-center gap-5 text-secondary lg:flex-row">
						<div class="flex-1 space-y-8">
							<h3 class="text-4xl font-bold">Mechanical</h3>
							<p class="text-lg">
								Develop precision-engineered robotic systems, mastering CAD, inverse-kinematics,
								fabrication, and rigorous testing. Build robust, Mars-inspired mobility platforms
								and innovative payloads, refining critical engineering skills that distinguish you
								in elite technical environments.
							</p>
							<div class="flex items-center space-x-4 text-xl font-bold text-white">
								<p>Apply Now</p>
								<span class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary">
									<i class="fa-solid fa-arrow-right fa-xs text-white"></i>
								</span>
							</div>
						</div>
						<div class="flex flex-1 flex-row justify-center">
							<img
								src="/images/teams/mechanical.jpg"
								class="aspect-3/2 object-cover lg:aspect-16/9 lg:p-5"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
