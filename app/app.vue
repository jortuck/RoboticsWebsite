<script lang="ts" setup>
useSeoMeta({
	title: "Husky Robotics",
	themeColor: "#ffffff",
	ogImage: "https://huskyrobotics.me/logoOriginal.png"
});
</script>
<template>
	<Html lang="en" />
	<div class="flex min-h-screen flex-col">
		<Navbar />
		<div class="flex flex-1 flex-col">
			<NuxtPage />
		</div>
		<Footer />
	</div>
</template>
