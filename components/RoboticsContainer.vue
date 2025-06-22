<script setup lang="ts">
const props = defineProps({
	class: {
		type: String,
		default: ""
	}
});
</script>

<template>
	<div :class="['mx-auto w-full max-w-screen-2xl px-4 sm:px-8 md:px-16 lg:px-24', props.class]">
		<slot />
	</div>
</template>
