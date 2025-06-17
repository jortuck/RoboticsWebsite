<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { NuxtLink } from "#components";

const props = defineProps<{
	to?: string;
	class?: string;
}>();

const attrs = useAttrs();

const Wrapper = computed(() => (props.to ? NuxtLink : "div"));
</script>

<template>
	<component
		:is="Wrapper"
		v-bind="to ? { to, ...attrs } : {}"
		:class="[
			'flex items-center space-x-4 text-xl font-bold text-zinc-300 transition-colors duration-200 ease-in-out hover:text-white',
			props.class
		]"
	>
		<p><slot /></p>
		<span class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary">
			<i class="fa-solid fa-arrow-right fa-xs text-white"></i>
		</span>
	</component>
</template>
