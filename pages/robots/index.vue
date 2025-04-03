<template>
	<div class="container mx-auto my-24 w-full space-y-20">
		<header>
			<h1
				class="coolDropSmall text-center font-logo text-4xl font-extrabold text-primary uppercase select-none md:text-6xl"
			>
				Robots
			</h1>
		</header>
		<section
			v-for="i in 5"
			class="mx-4 space-y-8 lg:mx-0"
		>
			<SectionHeader> Oversight </SectionHeader>
			<div>
				<h3 class="text-xl text-base-content md:text-2xl lg:text-3xl">About</h3>
				<p>3rd Place at CIRC 2024</p>
			</div>
			<div>
				<h3 class="text-xl text-base-content md:text-2xl lg:text-3xl">Images</h3>
			</div>
			<div>
				<h3 class="text-xl text-base-content md:text-2xl lg:text-3xl">Video</h3>
			</div>
		</section>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Robots | Husky Robotics"
});
</script>
