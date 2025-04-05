<script lang="ts" setup>
useSeoMeta({
	title: "News & Events | Husky Robotics"
});
const { data: posts } = await useAsyncData("posts", () =>
	queryCollection("posts")
		.order("date", "DESC")
		.select("title", "date", "description", "image", "id")
		.all()
);
</script>
<template>
	<div class="container mx-auto my-24 w-full space-y-20">
		<h1
			class="coolDropSmall text-center font-logo text-4xl font-extrabold text-primary uppercase select-none md:text-6xl"
		>
			News & Events
		</h1>
		<section class="mx-2 space-y-4 lg:mx-0">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div
					class="space-y-4 rounded-md bg-base-100 p-4"
					v-for="post in posts"
					:key="post.id"
				>
					<div class="space-y-4">
						<h2 class="text-3xl font-bold text-base-content">
							{{ post.title }}
						</h2>
						<p class="text-base-content">
							{{ post.description }}
						</p>
					</div>
					<div
						class="w-full overflow-hidden rounded-md bg-center"
						:style="`background-image: url(/images/posts/${post.image});`"
					>
						<div class="w-full backdrop-blur-xl">
							<img
								:alt="`${post.title}`"
								:src="`/images/posts/${post.image}`"
								class="mx-auto h-96"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
