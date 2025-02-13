<script setup lang="ts">
useSeoMeta({
	title: "Sponsors | Husky Robotics",
	description:
		"Husky Robotics handles all its own fundraising; if you like what we are doing, and want to support our goal of helping UW students become better engineers, scientists, and leaders, become a sponsor today!"
});

type Sponsor = {
	name: string;
	logo: string;
	url: string;
};

const sponsors: Sponsor[] = [
	{ name: "Mituoyo", logo: "mituoyo.png", url: "https://www.mitutoyo.com/" },
	{ name: "Harmonic Drive", logo: "hd.gif", url: "https://www.harmonicdrive.net/" },
	{ name: "Cubemars", logo: "cubemars.png", url: "https://www.cubemars.com/" },
	{ name: "Husky Union Building", logo: "hub.png", url: "https://hub.washington.edu/" },
	{ name: "Texas Instruments", logo: "ti.png", url: "https://www.ti.com/" },
	{ name: "OnShape", logo: "onshape.png", url: "https://www.onshape.com/" },
	{
		name: "University of Washington Department of Mechanical Engineering ",
		logo: "me.gif",
		url: "https://me.washington.edu/"
	},
	{
		name: "Paul G. Allen School of Computer Science & Engineering",
		logo: "cs.png",
		url: "https://cs.washington.edu/"
	},
	{ name: "Altium", logo: "altium.png", url: "https://www.altium.com/" },
	{ name: "Protocase", logo: "protocase.png", url: "https://www.protocase.com/" },
	{ name: "Solidworks", logo: "solidworks.png", url: "https://www.solidworks.com/" },
	{ name: "GMA Garnet", logo: "gma.svg", url: "https://gmagarnet.com/en/americas" }
];
</script>
<template>
	<div class="container mx-auto my-24 w-full space-y-20 text-center">
		<h1
			class="coolDrop font-logo text-4xl font-extrabold text-primary uppercase select-none md:text-6xl"
		>
			Thank you to our 2024-2025 sponsors!
		</h1>
	</div>
	<div class="flex flex-col items-center justify-center">
		<div class="container mx-2 grid grid-cols-2 gap-4 self-center md:grid-cols-3 lg:grid-cols-4">
			<NuxtLink
				v-for="sponsor in sponsors"
				target="_blank"
				:to="sponsor.url"
				class="sponsor block"
			>
				<NuxtImg
					:alt="sponsor.name"
					:src="`/images/sponsors/${sponsor.logo}`"
					:placeholder="[50, 50, 50, 50]"
					format="webp"
				/>
			</NuxtLink>
		</div>
	</div>
	<div class="container mx-auto my-16">
		<p class="text-center text-xl text-base-content">
			Husky Robotics handles all its own fundraising; if you like what we are doing, and want to
			support our goal of helping UW students become better engineers, scientists, and leaders,
			become a sponsor today!
		</p>
	</div>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.sponsor {
	@apply flex h-36 flex-col items-center justify-center rounded-md p-5 transition-shadow duration-200 ease-in-out dark:bg-white;
}
.sponsor > img {
	@apply h-full object-contain;
}
</style>
