<script setup lang="ts">
const slug = useRoute().params.slug[0];
const { data: article } = await useAsyncData("posts" + slug, () => {
	return queryCollection("posts").path(`/news-and-events/${slug}`).first();
});
if (!article.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "Page not found: " + useRoute().fullPath
	});
}
</script>

<template>
	<ContentRenderer
		v-if="article"
		:value="article"
	/>
</template>

<style scoped></style>
