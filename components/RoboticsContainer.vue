<script setup lang="ts">
const props = defineProps({
	class: {
		type: String,
		default: ""
	}
});
</script>

<template>
	<div :class="['mx-auto w-full max-w-screen-2xl px-4 sm:px-8 lg:px-16', props.class]">
		<slot />
	</div>
</template>
