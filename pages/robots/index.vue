<template>
	<div class="container mx-auto my-24 w-full space-y-20">
		<header>
			<h1
				class="coolDropSmall text-center font-logo text-4xl font-extrabold text-primary uppercase select-none md:text-6xl"
			>
				Robots
			</h1>
		</header>
		<div class="mx-4 space-y-10 lg:mx-0">
			<section
				class="space-y-8"
				v-for="robot in robots"
			>
				<SectionHeader
					>{{ robot.name }}<span class="float-right">({{ robot.years }})</span></SectionHeader
				>
				<p
					v-if="robot.description"
					class="lg:text-lg"
				>
					{{ robot.description }}
				</p>
				<div
					v-if="robot.images"
					class="flex flex-col gap-4 md:grid md:grid-cols-2 md:flex-row md:flex-wrap xl:grid-cols-3"
				>
					<div
						v-for="img in robot.images"
						class="shadow-md/40 aspect-3/2 w-full overflow-hidden rounded-md bg-center object-cover object-center"
						:style="`background: url(/images/robots/${img});`"
					>
						<img
							:alt="`${robot.name}`"
							:src="'/images/robots/' + img"
							class="mx-auto h-full w-full object-cover object-center"
						/>
					</div>
				</div>
				<div
					class="shadow-md/40 aspect-video w-full overflow-hidden rounded-md lg:w-2/3"
					v-if="robot.video"
				>
					<iframe
						class="h-full w-full overflow-hidden rounded-md"
						width="560"
						height="315"
						:src="`https://www.youtube.com/embed/${robot.video}`"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</section>
		</div>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Robots | Husky Robotics"
});
let { data: robots } = await useAsyncData("subsystems", () => {
	return queryCollection("robots").all();
});
</script>
