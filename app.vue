<script lang="ts" setup>
useSeoMeta({
	title: "Husky Robotics",
	themeColor: "#9e33e6"
});
</script>
<template>
	<Html lang="en" />
	<div class="flex min-h-screen flex-col">
		<Navbar />
		<div class="flex flex-1 flex-col">
			<main>
				<NuxtPage />
			</main>
		</div>
		<Footer />
	</div>
</template>
