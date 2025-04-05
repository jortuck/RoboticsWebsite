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
		<div class="mx-4 space-y-10 lg:mx-0">
			<section class="space-y-4">
				<SectionHeader> Leadership </SectionHeader>

				<div class="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5">
					<div
						v-for="leader in leaders"
						class="flex w-full flex-col items-center justify-center space-y-4 rounded-md bg-base-100 py-4 text-base-content"
					>
						<h3 class="text-lg font-bold text-primary md:text-xl">{{ leader.position }}</h3>
						<div
							class="w-full overflow-hidden bg-center"
							:style="`background: url(${leader.image});`"
						>
							<div class="w-full backdrop-blur-xl">
								<NuxtImg
									:alt="`${leader.name} headshot`"
									:src="leader.image"
									class="mx-auto h-70 md:h-70"
								/>
							</div>
						</div>
						<h3 class="text-lg md:text-xl">{{ leader.name }}</h3>
					</div>
				</div>
			</section>
			<section class="space-y-4">
				<SectionHeader> Subsystems </SectionHeader>

				<div
					class="overflow-hidden rounded-md bg-base-100"
					v-for="subsystem in subsystems"
					:id="subsystem.name.replace(/ /g, '_')"
				>
					<h2
						class="group p-4 text-lg text-base-content select-none hover:cursor-pointer md:text-xl lg:text-xl"
						role="button"
						@click="setExpanded(subsystem.name)"
						:aria-expanded="expanded == subsystem.name"
						@keydown.enter="setExpanded(subsystem.name)"
						@keydown.space.prevent="setExpanded(subsystem.name)"
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
						<div class="flex flex-col space-y-4 space-x-5 lg:flex-row lg:space-y-0 xl:space-x-10">
							<div
								v-for="lead in subsystem.leads"
								class="flex w-full flex-col items-center justify-center space-y-4 rounded-md bg-base-100 py-4 text-base-content lg:max-w-1/4"
							>
								<h3 class="text-center text-lg font-bold text-primary">{{ lead.position }}</h3>
								<div
									class="w-full overflow-hidden bg-center"
									:style="`background: url(${lead.image});`"
								>
									<div class="backdrop-blur-xl">
										<img
											:alt="`${lead.name} headshot`"
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
			</section>
			<section class="space-y-4">
				<SectionHeader> Team Advisors </SectionHeader>

				<div class="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
					<div
						v-for="advisor in advisors"
						class="flex w-full flex-col items-center justify-center space-y-4 rounded-md bg-base-100 py-4 text-base-content"
					>
						<h3 class="text-lg font-bold text-primary md:text-xl">{{ advisor.name }}</h3>
						<div
							class="w-full overflow-hidden bg-center"
							:style="`background: url(${advisor.image});`"
						>
							<div class="w-full backdrop-blur-xl">
								<NuxtImg
									:alt="`${advisor.name} headshot`"
									:src="advisor.image"
									class="mx-auto h-50 md:h-70 lg:h-90"
								/>
							</div>
						</div>
						<h3 class="text-center md:text-lg">{{ advisor.position }}</h3>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Team | Husky Robotics",
	description:
		"Husky Robotics provides UW students the opportunity to develop skills as part of a large interdisciplinary science and engineering project. We turn our member's passion for robotics, space, science and engineering into real-world experience, offering a unique chance to have hands-on time in a variety of engineering and engineering-adjacent fields. All members of Husky robotics join a subsystem (a specialized team). We run workshops and certifications to train new members in a variety of relevant skills."
});
let route = useRoute();

let expanded: Ref<string> = ref("");

let { data: subsystems } = await useAsyncData("subsystems", () => {
	return queryCollection("subsystems").all();
});

async function setExpanded(subsystem: string) {
	if (expanded.value === subsystem) {
		expanded.value = "";
		return;
	}
	expanded.value = subsystem;
}

type leader = {
	name: string;
	position: string;
	image: string;
};
type advisor = {
	name: string;
	position: string;
	image: string;
	website: string;
};
const leaders: leader[] = [
	{
		name: "Prithvi Krishnaswamy",
		position: "Operations Director",
		image: "/images/team/prithvi.jpg"
	},
	{
		name: "Tom Lewis",
		position: "Mechanical Lead",
		image: "/images/team/tom.jpg"
	},
	{
		name: "Amelia Zolzer",
		position: "Systems Lead",
		image: "/images/team/amelia.jpg"
	}
];

const advisors: advisor[] = [
	{
		name: "Dr. Sep Makhsous",
		position: "Assistant Teaching Professor, Department of Electrical and Computer Engineering",
		image: "/images/team/sep.jpg",
		website: "https://people.ece.uw.edu/makhsous/"
	},
	{
		name: "Dr. Lucas Meza",
		position: "Assistant Professor, Department of Mechanical Engineering",
		image: "/images/team/meza.jpg",
		website: "https://www.me.washington.edu/facultyfinder/lucas-r-meza"
	}
];
</script>
