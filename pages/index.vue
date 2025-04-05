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
		.all()
);
</script>
<template>
	<main class="mb-10 space-y-32">
		<header class="container mx-auto my-40 w-full space-y-20 text-center">
			<h1
				class="font-logo text-5xl font-extrabold text-primary select-none text-shadow-lg/30 md:text-6xl md:text-8xl dark:text-shadow-white/30"
			>
				HUSKY ROBOTICS
			</h1>
		</header>
		<div class="w-full bg-base-100 bg-center shadow-md">
			<div
				class="container mx-auto flex flex-col items-center justify-center space-y-6 px-2 py-14 md:px-0 md:py-20 lg:flex-row lg:space-y-0 lg:space-x-6"
			>
				<div class="flex-1 space-y-6 text-center lg:w-0 lg:text-left">
					<h2 class="text-3xl font-extrabold text-base-content md:text-4xl xl:text-5xl">
						The Mission
					</h2>
					<p class="block text-lg text-base-content md:text-xl xl:text-2xl">
						Our mission at Husky Robotics is to provide UW students with an environment where they
						can learn practical, hands-on engineering skills as part of a large interdisciplinary
						team. Unfettered by the time limits of the quarter system, our members build on their
						skills for the entire year, working in a project-oriented team where they can see how
						their work becomes part of the complete system. This fosters better communication
						skills, and a fuller understanding of modern engineering.
					</p>
				</div>
				<img
					src="~/assets/images/orpheus_1.png"
					alt="Image of the robot orpheus."
					class="rounded-xl shadow-md lg:w-0 lg:flex-1"
				/>
			</div>
		</div>
		<section class="mx-2 space-y-8 lg:container lg:mx-auto">
			<SectionHeader> Recent News & Events </SectionHeader>
			<div class="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
				<div
					v-for="post in posts"
					class="w-full space-y-4 overflow-hidden rounded-sm bg-base-100 text-base-content shadow-sm lg:max-w-1/3"
				>
					<div
						class="overflow-hidden bg-center"
						:style="`background-image: url(/images/posts/${post.image});`"
					>
						<div class="w-full backdrop-blur-xl">
							<img
								:alt="`${post.title}`"
								:src="`/images/posts/${post.image}`"
								class="mx-auto max-h-60 w-fit"
							/>
						</div>
					</div>
					<div class="m-4 flex flex-col items-center justify-center md:flex-row">
						<div class="space-y-2">
							<h3 class="text-2xl font-bold">{{ post.title }}</h3>
							<h4 class="w-fit rounded-sm italic">{{ new Date(post.date).toDateString() }}</h4>
							<p class="flex-1">
								{{ post.description }}
							</p>
						</div>
					</div>
				</div>
			</div>
			<NuxtLink
				class="group w-fit rounded-sm border-2 border-primary p-3 text-primary transition-colors duration-200 ease-in-out hover:border-transparent hover:bg-primary hover:text-primary-content"
				href="/news-and-events"
			>
				View All News & Events
				<i
					class="fa-solid fa-arrow-right ml-1 transition-all duration-200 ease-in-out group-hover:translate-x-1"
				></i>
			</NuxtLink>
		</section>
		<section class="mx-4 space-y-8 lg:container lg:mx-auto">
			<SectionHeader> Support Husky Robotics </SectionHeader>
			<p class="text-center text-lg text-base-content md:text-left md:text-xl">
				Husky Robotics handles all its own fundraising; if you like what we are doing, and want to
				support our goal of helping UW students become better engineers, scientists, and leaders,
				why not donate to us directly using the button below? We have no overhead; all of the funds
				we raise go directly towards purchasing components and materials to build the rover and to
				rent the vehicles and rooms we use during the competition.
			</p>
			<div class="flex flex-row justify-center space-x-4 md:justify-normal">
				<NuxtLink
					class="group w-fit"
					target="_blank"
					href="https://venmo.com/u/HuskyRobotics"
				>
					<span class="rounded-l-md bg-base-100 p-3 text-base-content"> Venmo </span>
					<span
						class="rounded-r-md bg-primary p-3 text-primary-content transition-colors duration-200 ease-in-out group-hover:bg-primary-200"
					>
						<i class="fa-solid fa-money-bill-wave"></i>
					</span>
				</NuxtLink>
				<NuxtLink
					class="group w-fit"
					href="/sponsors"
				>
					<span class="rounded-l-md bg-base-100 p-3 text-base-content"> Become a Sponsor </span>
					<span
						class="rounded-r-md bg-primary p-3 text-primary-content transition-colors duration-200 ease-in-out group-hover:bg-primary-200"
					>
						<i class="fa-solid fa-briefcase"></i>
					</span>
				</NuxtLink>
			</div>
		</section>
	</main>
</template>
