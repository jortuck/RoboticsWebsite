<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { NuxtLink } from "#components";

const props = withDefaults(
	defineProps<{
		to?: string;
		class?: string;
		variant?: "light" | "dark";
	}>(),
	{
		variant: "light"
	}
);

const attrs = useAttrs();

const Wrapper = computed(() => (props.to ? NuxtLink : "div"));

let colors: string = "text-zinc-300 hover:text-white";
if (props.variant === "dark") {
	colors = "text-zinc-800 hover:text-zinc-600";
}
</script>

<template>
	<component
		:is="Wrapper"
		v-bind="to ? { to, ...attrs } : {}"
		:class="[
			'flex items-center space-x-4 text-xl font-bold transition-colors duration-200 ease-in-out',
			props.class,
			colors
		]"
	>
		<p><slot /></p>
		<span class="flex h-6 w-6 items-center justify-center rounded-full bg-tertiary">
			<i class="fa-solid fa-arrow-right fa-xs text-white"></i>
		</span>
	</component>
</template>
