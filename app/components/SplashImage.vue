<script setup lang="ts">
const props = defineProps({
	fileName: String
});
</script>
<template>
	<section
		:class="`w-full overflow-hidden bg-[url(/images/splash/sm_${fileName})] lg:bg-[url(/images/splash/lg_${fileName})] md:bg-[url(~/images/splash/md_${fileName})] xl:bg-[url(~/images/splash/xl_${fileName})] bg-cover bg-center bg-no-repeat md:bg-top`"
	>
		<slot />
	</section>
</template>
