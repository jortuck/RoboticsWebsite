<script setup lang="ts">
useSeoMeta({
	title: "Home | Husky Robotics",
	description:
		"Husky Robotics provides UW students the opportunity to develop skills as part of a large interdisciplinary science and engineering project. We turn our member's passion for robotics, space, science and engineering into real-world experience, offering a unique chance to have hands-on time in a variety of engineering and engineering-adjacent fields."
});
</script>
<template>
	<div class="container mx-auto my-40 w-full space-y-20 text-center">
		<h1 class="coolDrop font-logo text-6xl font-extrabold text-primary select-none md:text-8xl">
			HUSKY ROBOTICS
		</h1>
	</div>
	<div class="w-full bg-base-300 bg-center">
		<div
			class="container mx-auto flex flex-col items-center justify-center space-y-6 px-2 py-14 md:px-0 md:py-20"
		>
			<h2 class="coolDrop text-center text-4xl font-extrabold text-primary md:text-6xl">
				The Mission
			</h2>
			<p class="block text-center text-lg text-base-content md:text-2xl">
				Our mission at Husky Robotics’ is to provide UW students with an environment where they can
				learn practical, hands-on engineering skills as part of a large interdisciplinary team.
				Unfettered by the time limits of the quarter system, our members build on their skills for
				the entire year, working in a project-oriented team where they can see how their work
				becomes part of the complete system. This fosters better communication skills, and a fuller
				understanding of modern engineering.
			</p>
		</div>
	</div>
</template>
<style scoped>
.coolDrop {
	text-shadow: 4px 4px 0 var(--color-alt);
}
.bg-image {
	background-image: url(/assets/images/robot.png);
	background-size: contain;
	background-repeat: no-repeat;
	background-position-x: 45%;
}
.box {
	--mask: linear-gradient(0, #0000 20px, #000 0) 0 10px,
		radial-gradient(10px, #000 calc(100% - 1px), #0000) 50%/18.5px 20px repeat space;
	-webkit-mask: var(--mask);
	mask: var(--mask);
}
</style>
