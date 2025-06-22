<script setup lang="ts">
import { gsap } from "gsap";

useSeoMeta({
	title: "Sponsors | Husky Robotics",
	description: "Thank you to our 24-25 sponsors!"
});
type Sponsor = {
	name: string;
	logo: string;
	url: string;
};
onMounted(() => {
	gsap.from(".sponsors > *", {
		duration: 0.4,
		opacity: 0,
		stagger: 0.1,
		ease: "power2.in",
		autoAlpha: 0,
		scrollTrigger: ".sponsors"
	});
});
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
	{ name: "GMA Garnet", logo: "gma.png", url: "https://gmagarnet.com/en/americas" },
	{ name: "Stoi Family", logo: "stoi.png", url: "https://stoiberengineering.com/" }
];
</script>
<template>
	<main>
		<section>
			<RoboticsConntainer class="py-20">
				<div class="container mx-auto py-10">
					<div class="sponsors flex flex-row flex-wrap justify-center gap-8">
						<div
							v-for="sponsor in sponsors"
							:key="sponsor.name"
							class="invisible flex max-w-1/3 items-center justify-center"
						>
							<NuxtLink
								:to="sponsor.url"
								class="block h-full w-full"
							>
								<img
									:src="`/images/sponsors/${sponsor.logo}`"
									:alt="sponsor.name"
									class="/3 mx-auto h-full w-auto object-contain transition-transform duration-200 ease-in-out hover:scale-110"
								/>
							</NuxtLink>
						</div>
					</div>
					<div class="mx-auto mt-16 flex flex-col items-center space-y-6 px-4 text-center">
						<p class="text-3xl font-extrabold tracking-wider">Thank You To Our 24-25 Sponsors</p>
						<p class="text-lg lg:max-w-1/2">
							Thank you to our sponsors for empowering the Prometheus Rover’s mission. Your support
							helps us design advanced systems, pursue ambitious goals, and push the boundaries of
							student innovation in planetary exploration.
						</p>
						<p class="font-roboto tracking-robotics text-neutral-500">Husky Robotics Team (2025)</p>
					</div>
				</div>
			</RoboticsConntainer>
		</section>
	</main>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.sponsor {
	@apply flex h-36 flex-col items-center justify-center rounded-sm p-5 transition-shadow duration-200 ease-in-out;
}
.sponsor > img {
	@apply h-full object-contain;
}
</style>
