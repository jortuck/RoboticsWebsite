<script setup lang="ts">
useSeoMeta({
	title: "Home | Husky Robotics",
	description:
		"Husky Robotics provides UW students the opportunity to develop skills as part of a large interdisciplinary science and engineering project. We turn our member's passion for robotics, space, science and engineering into real-world experience, offering a unique chance to have hands-on time in a variety of engineering and engineering-adjacent fields."
});
</script>
<template>
	<div class="container my-40 w-full space-y-20 text-center">
		<h1 class="coolDrop z-20 text-6xl font-extrabold text-primary select-none md:text-8xl">
			HUSKY ROBOTICS
		</h1>
	</div>
</template>
<style scoped>
.coolDrop {
	text-shadow:
		4px 4px 0 var(--color-alt),
		0 0 80px var(--color-primarysh);
}
.bg-image {
	background-image: url(/assets/images/robot.png);
	background-size: contain;
	background-repeat: no-repeat;
	background-position-x: 45%;
}
</style>
