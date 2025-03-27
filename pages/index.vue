<script setup lang="ts">
useSeoMeta({
	title: "Home | Husky Robotics",
	description:
		"Husky Robotics provides UW students the opportunity to develop skills as part of a large interdisciplinary science and engineering project. We turn our member's passion for robotics, space, science and engineering into real-world experience, offering a unique chance to have hands-on time in a variety of engineering and engineering-adjacent fields."
});
</script>
<template>
	<div class="space-y-32">
		<div class="container mx-auto my-40 w-full space-y-20 text-center">
			<h1 class="coolDrop font-logo text-5xl font-extrabold text-primary select-none md:text-8xl">
				HUSKY ROBOTICS
			</h1>
		</div>
		<div class="w-full bg-base-100 bg-center shadow-md">
			<div
				class="container mx-auto flex flex-col items-center justify-center space-y-6 px-2 py-14 md:px-0 md:py-20 lg:flex-row lg:space-y-0 lg:space-x-6"
			>
				<div class="flex-1 space-y-6 text-center lg:w-0 lg:text-left">
					<h2 class="text-3xl font-extrabold text-base-content md:text-4xl xl:text-5xl">
						The Mission
					</h2>
					<p class="block text-lg text-base-content md:text-xl xl:text-2xl">
						Our mission at <span class="font-bold uppercase">Husky Robotics</span> is to provide UW
						students with an environment where they can learn practical, hands-on engineering skills
						as part of a large interdisciplinary team. Unfettered by the time limits of the quarter
						system, our members build on their skills for the entire year, working in a
						project-oriented team where they can see how their work becomes part of the complete
						system. This fosters better communication skills, and a fuller understanding of modern
						engineering.
					</p>
				</div>
				<img
					src="~/assets/images/orpheus_1.png"
					alt="Image of the robot orpheus."
					class="rounded-xl shadow-md lg:w-0 lg:flex-1"
				/>
			</div>
		</div>
		<section class="lg:container mx-auto ">
			<div class=" mx-2 lg:mx-0 space-y-8">
				<h2
					class="text-center text-3xl font-extrabold text-base-content md:text-left md:text-4xl xl:text-5xl"
				>
					Recent News & Events
				</h2>
				<div class="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
					<div class="w-full space-y-4 rounded-md bg-base-100 p-4 text-base-content shadow-xl">
						<div class="flex flex-col items-center justify-center md:flex-row">
							<div class="space-y-2">
								<h3 class="text-2xl font-bold">New SAR Video Released</h3>
								<h4>2/28/2025</h4>
								<p class="flex-1">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>
						</div>
						<div class="overflow-hidden rounded-md bg-[url('/images/news/IMG_7833.jpg')] bg-center">
							<div class="w-full backdrop-blur-xl">
								<NuxtImg
									class="mx-auto max-h-80 w-fit"
									src="/images/news/IMG_7833.jpg"
								/>
							</div>
						</div>
					</div>
					<div class="flex w-full flex-grow flex-col gap-3">
						<div class="flex-1 rounded-md bg-base-100 p-4 text-base-content shadow-xl space-y-4 lg:space-y-0">
							<div class="flex flex-col items-center justify-center space-x-4 md:flex-row">
								<div class="space-y-2">
									<h3 class="text-2xl font-bold">New SAR Video Released</h3>
									<h4>2/28/2025</h4>
									<p class="flex-1">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
										dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
										labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
								<NuxtImg
									class="h-40 rounded-md hidden lg:block"
									src="/images/news/IMG_7833.jpg"
								/>
							</div>
							<div class="overflow-hidden rounded-md bg-[url('/images/news/IMG_7833.jpg')] bg-center lg:hidden">
								<div class="w-full backdrop-blur-xl">
									<NuxtImg
										class="mx-auto max-h-70 w-fit "
										src="/images/news/IMG_7833.jpg"
									/>
								</div>
							</div>
						</div>
						<div class="flex-1 rounded-md bg-base-100 p-4 text-base-content shadow-xl lg:space-y-0 space-y-4">
							<div class="flex flex-col items-center justify-center md:flex-row">
								<div class="space-y-2">
									<h3 class="text-2xl font-bold">New SAR Video Released</h3>
									<h4>2/28/2025</h4>
									<p class="flex-1">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
								<NuxtImg
									class="h-40 rounded-md hidden lg:block"
									src="/images/news/IMG_7833.jpg"
								/>
							</div>
							<div class="overflow-hidden rounded-md bg-[url('/images/news/IMG_7833.jpg')] bg-center lg:hidden">
								<div class="w-full backdrop-blur-xl">
									<NuxtImg
										class="mx-auto max-h-70 w-fit"
										src="/images/news/IMG_7833.jpg"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<NuxtLink
					class="rounded-md border-2 border-primary p-3 font-bold text-primary transition-colors duration-200 ease-in-out hover:bg-primary hover:text-base-100"
					href="/news-and-events"
				>View All News & Events</NuxtLink
				>
			</div>
		</section>
	</div>
</template>
