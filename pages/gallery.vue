<script setup lang="ts">
const { data: gallery } = await useAsyncData("gallery", () => queryCollection("gallery").all());
</script>
<template>
	<main>
		<section>
			<RoboticsConntainer class="py-20">
				<div class="flex flex-col items-center gap-8 lg:flex-row">
					<div class="flex-1 space-y-8">
						<h1 class="text-6xl font-bold">Design Gallery</h1>
						<p class="text-lg">
							Husky Robotics designs, builds, and validates advanced systems across mechanical,
							electrical, software, optical, and biochemical domains. This gallery showcases the
							engineering behind our rover—real work from students shaping the future of
							exploration.
						</p>
					</div>
					<div class="flex-1">
						<img
							src="~/assets/images/gallery.jpg"
							alt="electronic chip"
							class="rounded-sm"
						/>
					</div>
				</div>
			</RoboticsConntainer>
		</section>
		<section class="bg-primary">
			<RoboticsConntainer class="space-y-20 py-20">
				<div
					v-for="collection in gallery"
					class="space-y-8"
				>
					<h2
						class="border-b-1 border-b-neutral-400/70 pb-4 text-4xl font-bold text-white"
						:id="collection.name.split(' ')[0]"
					>
						{{ collection.name }}
					</h2>
					<div class="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
						<div
							class="rounded-xl bg-zinc-900 p-6"
							v-if="collection.items"
							v-for="item in collection.items"
							:key="item.name"
						>
							<div class="h-64 object-contain px-5 py-8">
								<img
									alt="Electronics bed"
									class="mx-auto h-full object-contain"
									:src="`/images/gallery/${item.img}`"
								/>
							</div>
							<p class="mb-1 text-xs tracking-robotics text-zinc-400">
								Husky Robotics | 2025 | {{ collection.name }}
							</p>
							<h3 class="pb-4 text-xl font-bold text-neutral-100">{{ item.name }}</h3>
							<p class="text-neutral-100">
								{{ item.description }}
							</p>
						</div>
					</div>
				</div>
			</RoboticsConntainer>
		</section>
	</main>
</template>
