<script setup lang="ts">
const { data: teams } = await useAsyncData("teams", () => queryCollection("teams").all());
let tab: Ref<string> = ref("");
let route = useRoute();
onMounted(() => {
	setTabFromQuery();
});
watch(
	() => route.query.tab,
	() => {
		setTabFromQuery();
	}
);
function setTabFromQuery() {
	if (route.query.tab && typeof route.query.tab === "string") {
		const matchingTeam = teams.value?.find((team) => team.name === route.query.tab);
		if (matchingTeam) {
			tab.value = matchingTeam.name;
		} else if (teams.value?.length) {
			tab.value = teams.value[0].name;
		}
	} else if (teams.value?.length) {
		tab.value = teams.value[0].name;
	}
}
</script>
<template>
	<main>
		<section>
			<img
				alt="Husky Robotics Team Photo"
				src="~/assets/images/about2.jpg"
				class="aspect-16/9 w-full object-cover lg:hidden"
			/>
			<img
				alt="Husky Robotics Team Photo"
				src="~/assets/images/subteams.jpg"
				class="hidden w-full lg:block"
			/>
		</section>
		<section>
			<RoboticsConntainer class="py-10 lg:py-20">
				<div class="mx-auto w-3/4 space-y-4 text-center">
					<p>
						Husky Robotics is an elite, student-led planetary exploration initiative. Each year, we
						engineer and deploy sophisticated robotic platforms—including precision manipulator
						arms, autonomous rovers, advanced scientific payloads, and aerial drones. Our projects
						authentically replicate the rigors of space exploration: navigating challenging terrain,
						resolving critical system failures, conducting rigorous scientific analyses, and
						achieving comprehensive system integration under demanding timelines.
					</p>
					<p class="font-roboto text-sm tracking-robotics text-neutral-500">
						Husky Robotics Team (2025)
					</p>
				</div>
			</RoboticsConntainer>
			<RoboticsConntainer class="py-20">
				<div
					class="flex flex-col flex-wrap items-center justify-between lg:flex-row lg:items-start"
				>
					<NuxtLink
						class="cursor-pointer text-3xl leading-10 font-bold tracking-wide transition-colors duration-200 ease-in-out select-none hover:text-primary"
						:class="tab === team.name ? 'text-black' : 'text-neutral-400'"
						v-for="team in teams"
						:key="team.name"
						:to="{ path: '/subteams', query: { tab: team.name } }"
					>
						{{ team.name }}
					</NuxtLink>
				</div>
			</RoboticsConntainer>
		</section>
	</main>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.bg-splash-birdseye {
	@apply w-full overflow-hidden bg-cover bg-center bg-no-repeat;
	@apply bg-[url('~/assets/images/subteams.jpg')];
	@apply md:bg-[url('~/assets/images/subteams.jpg')];
	@apply lg:bg-[url('~/assets/images/subteams.jpg')];
	@apply xl:bg-[url('~/assets/images/subteams.jpg')];
}
</style>
