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
	<main class="mb-10 space-y-32"></main>
</template>
