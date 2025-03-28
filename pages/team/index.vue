<template>
	<div class="container mx-auto my-24 w-full space-y-20">
		<h1
			class="coolDropSmall mx-2 text-center font-logo text-4xl font-extrabold text-primary uppercase select-none md:text-6xl"
		>
			MEET THE HUSKY ROBOTICS TEAM
		</h1>
		<p class="mx-4 text-center text-lg text-base-content">
			Husky Robotics provides UW students the opportunity to develop skills as part of a large
			interdisciplinary science and engineering project. We turn our member's passion for robotics,
			space, science and engineering into real-world experience, offering a unique chance to have
			hands-on time in a variety of engineering and engineering-adjacent fields. All members of
			Husky robotics join a subsystem (a specialized team). We run workshops and certifications to
			train new members in a variety of relevant skills.
		</p>
		<div class="mx-4 space-y-4 lg:mx-0">
			<h2 class="text-4xl text-base-content">Leadership</h2>
			<hr class="rounded-full border-2 border-primary" />

			<div class="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
				<div
					v-for="i in 3"
					class="flex w-full flex-col items-center justify-center space-y-4 rounded-md bg-base-100 py-4 text-base-content"
				>
					<h3 class="text-lg font-bold text-primary md:text-xl">Operations Director</h3>
					<div class="w-full overflow-hidden bg-[url(/images/team/prithvi.jpg)] bg-center">
						<div class="w-full backdrop-blur-xl">
							<NuxtImg
								src="/images/team/prithvi.jpg"
								class="mx-auto h-70 lg:h-90"
							/>
						</div>
					</div>
					<h3 class="text-lg md:text-xl">Prithvi Krishnaswamy</h3>
				</div>
			</div>
			<div class="flex flex-row"></div>
			<h2 class="text-4xl text-base-content">Subsystems</h2>
			<hr class="rounded-full border-2 border-primary" />
			<div
				class="overflow-hidden rounded-md bg-base-100"
				v-for="subsystem in subsystems"
			>
				<h2
					class="group p-4 text-lg text-base-content select-none hover:cursor-pointer md:text-xl lg:text-xl"
					role="button"
					@click="expanded = subsystem.name"
					:aria-expanded="expanded == subsystem.name"
					@keydown.enter="expanded = subsystem.name"
					@keydown.space.prevent="expanded = subsystem.name"
					tabindex="0"
				>
					{{ subsystem.name }}
					<span class="float-right"
						><i
							class="fa-solid fa-chevron-down transition-transform duration-200 ease-in-out"
							:class="expanded == subsystem.name ? 'rotate-0' : 'rotate-90'"
						></i
					></span>
				</h2>
				<div
					class="space-y-4 bg-base-200 p-4 text-base-content"
					v-if="expanded == subsystem.name"
				>
					<h3 class="text-xl font-bold">About</h3>
					<p>
						{{ subsystem.description }}
					</p>
					<h3 class="text-xl font-bold">Lead<span v-if="subsystem.leads.length > 1">s</span></h3>
					<div class="flex flex-col space-y-4 space-x-10 md:flex-row md:space-y-0">
						<div
							v-for="lead in subsystem.leads"
							class="flex w-full flex-col items-center justify-center space-y-4 rounded-md bg-base-100 py-4 text-base-content md:max-w-1/4"
						>
							<h3 class="text-center text-lg font-bold text-primary">{{ lead.position }}</h3>
							<div
								class="w-full overflow-hidden bg-center"
								:style="`background: url(${lead.image});`"
							>
								<div class="backdrop-blur-xl">
									<img
										:src="lead.image"
										class="mx-auto h-50"
									/>
								</div>
							</div>
							<h3 class="text-lg">{{ lead.name }}</h3>
						</div>
					</div>
					<h3 class="text-xl font-bold">Members</h3>
					<div class="flex flex-wrap gap-2">
						<span
							class="block rounded-md bg-base-100 px-2 py-1 text-sm"
							v-for="member in subsystem.members"
							>{{ member }}</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Team | Husky Robotics"
});
let expanded: Ref<string> = ref("");
const { data: subsystems } = await useAsyncData("subsystems", () => {
	return queryCollection("subsystems").all();
});
// const subsystems = await queryCollection("subsystems").all();
</script>
