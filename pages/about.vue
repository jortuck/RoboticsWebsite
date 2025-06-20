<script setup lang="ts">
useSeoMeta({
	title: "About | Husky Robotics"
});
</script>
<template>
	<main>
		<section class="bg-black">
			<div class="container mx-auto flex flex-col items-center space-y-8 px-4 py-20 lg:flex-row">
				<div class="flex-1 space-y-8 text-secondary">
					<h1 class="text-5xl font-bold text-secondary xl:text-7xl">
						Our Mission at Husky Robotics
					</h1>
					<p class="font-bold xl:text-lg">
						At Husky Robotics, we cultivate elite engineering talent through rigorous hands-on
						experiences and real-world challenges.
					</p>
					<p class="xl:text-lg">
						<strong
							>Our student-led team, rooted in the University of Washington, collaborates with
							industry leaders and has launched hundreds of alumni into Fortune 500 careers.</strong
						>
						By building advanced autonomous systems, we prepare students to innovate, excel in
						prestigious competitions, and become distinguished leaders shaping the future of
						technology and exploration.
					</p>
					<p class="xl:text-lg">
						<strong>Apply or support us today.</strong> Fund innovation, build industry connections,
						and shape the future of engineering.
					</p>
					<div class="mt-8 flex flex-col gap-8 md:flex-row">
						<ArrowLink to="#">Join Us</ArrowLink>
						<ArrowLink to="#">Support Us</ArrowLink>
					</div>
				</div>
				<div class="flex-1">
					<div class="relative mx-auto lg:max-w-11/12">
						<div
							style="
								background: linear-gradient(
									121deg,
									rgba(115, 115, 115, 0.14) 8.61%,
									rgba(0, 0, 0, 0.45) 90.82%
								);
							"
							class="pointer-events-none absolute inset-0 z-10"
						></div>
						<img
							src="../assets/images/about.jpg"
							class="h-full w-full object-cover lg:aspect-16/9"
							alt="Our rover exploring the desert."
						/>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-black">
			<div class="container mx-auto space-y-8 px-4 py-10 lg:max-w-5xl">
				<div
					class="grid grid-cols-2 justify-between gap-10 md:flex md:flex-row md:items-baseline md:gap-0"
				>
					<div>
						<p class="font-roboto font-medium tracking-[3.80px] text-zinc-400 lg:text-lg">
							UW Engineers
						</p>
						<p class="text-6xl font-extrabold text-secondary">
							100<span class="text-tertiary">+</span>
						</p>
					</div>
					<div>
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">Fields</p>
						<p class="text-6xl font-extrabold text-secondary">
							22<span class="text-tertiary">+</span>
						</p>
					</div>
					<div>
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">Sponsors</p>
						<p class="text-6xl font-extrabold text-secondary">
							13<span class="text-tertiary">+</span>
						</p>
					</div>
					<div>
						<p class="font-roboto text-lg font-medium tracking-[3.80px] text-zinc-400">
							Global Rank
						</p>
						<p class="text-6xl font-extrabold text-secondary">3rd</p>
						<p class="font-roboto text-sm font-medium tracking-[3.80px] text-zinc-400">
							(CIRC 2024)
						</p>
					</div>
				</div>
				<p class="text-lg text-secondary">
					At Husky Robotics, we believe exceptional engineers emerge from teams driven by purpose
					and passion. Our mission is not just about building a rover:
					<strong
						>it's about creating an community where talented students collaborate, innovate, and
						grow into visionary leaders.</strong
					>
				</p>
				<p class="text-lg text-secondary">
					As a prestigious Registered Student Organization (RSO) at the University of Washington,
					<strong>we unite over 100 driven students from more than 22 diverse fields</strong>.
					Inspired by the rigorous standards of planetary exploration, we engineer autonomous Mars
					Rovers that compete internationally in the Rover Challenge Series.
					<strong>Our achievements include 2nd & 3rd place finishes worldwide</strong> and
					consistent podium placements at prestigious events such as the Canadian International
					Rover Challenge and the University Rover Challenge.
				</p>
				<p class="text-lg text-secondary">
					Our flagship rover, Prometheus, symbolizes our commitment to excellence. It combines
					cutting-edge autonomous systems, robust mechanical design, and sophisticated scientific
					instrumentation, rigorously tested in mock Martian environments. Through hands-on
					experience with engineering challenges,
					<strong
						>our members gain essential skills in mechanical engineering, electronics, software
						autonomy, material science, biochemical research, and aerospace technology.</strong
					>
				</p>
				<p class="text-lg text-secondary">
					Husky Robotics collaborates closely with respected industry leaders, proudly supported by
					13 distinguished sponsors who recognize the value of investing in student innovation.
					Hundreds of our alumni have advanced into significant roles at Fortune 500 companies,
					prestigious research institutions, and groundbreaking startups, highlighting our program's
					unparalleled impact.
					<strong
						>When you join or support Husky Robotics, you become part of something extraordinary.
						You're investing in future leaders who will shape the landscape of technology,
						exploration, and innovation.</strong
					>
				</p>
			</div>
		</section>
		<section class="bg-neutral-100">
			<div class="container mx-auto flex flex-col space-y-8 px-4 py-20">
				<div class="flex flex-col-reverse items-center gap-12 lg:flex-row">
					<div class="flex-3/5">
						<img
							alt="Husky robotics team photo."
							class="aspect-16/9 object-cover"
							src="../assets/images/teamstairs.jpg"
						/>
					</div>
					<div class="flex-2/5 space-y-8">
						<h2 class="text-5xl font-bold">Our Team’s Values</h2>
						<p>
							At Husky Robotics, our community is built on genuine connections, mutual respect, and
							shared purpose. Our community connects future industry leaders, highly skilled
							collaborators, and driven startup founders.
							<strong
								>Students who join our team gain access to exceptional career opportunities,
								mentorship from experienced peers, and a supportive environment designed to advance
								personal and professional growth.</strong
							>
							Companies partnering with us benefit from engaging directly with some of UW’s most
							promising engineering talent, fostering connections that drive industry innovation and
							collaboration.
						</p>
						<ArrowLink
							to="/subteams"
							variant="dark"
							>Team Structure</ArrowLink
						>
					</div>
				</div>
				<div class="flex flex-col gap-4 md:flex-row">
					<div class="md:flex-[2]">
						<img
							src="../assets/images/about3.jpg"
							alt="A group of robotics students"
							class="h-full w-full object-cover"
						/>
					</div>
					<div class="md:flex-[1.5]">
						<img
							src="../assets/images/about2.jpg"
							alt="Full husky robotics team photo."
							class="h-full w-full object-cover"
						/>
					</div>
					<div class="md:flex-1">
						<img
							src="../assets/images/about1.jpg"
							alt="Two members of husky robotics."
							class="h-full w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container mx-auto px-4 py-10">
				<div class="flex flex-col items-center gap-12 lg:flex-row">
					<div class="flex-2/5 space-y-8">
						<h2 class="text-5xl font-bold">Our History</h2>
						<p>
							<strong
								>Husky Robotics was founded in 2011, inspired by the launch of NASA’s Curiosity
								rover and a shared passion for space exploration.</strong
							>
							What began as a small group of students quickly evolved into a competitive,
							multidisciplinary engineering team. In 2012, we entered our first University Rover
							Challenge with a treaded rover called Hydra, and have since grown into one of UW’s
							most respected technical organizations. Today, Husky Robotics brings together
							expertise in mechanical, electrical, mechatronic, optics, chemical, biological, and
							business disciplines, earning top placements at international competitions year after
							year.
						</p>
						<ArrowLink
							to="/support"
							variant="dark"
							>Support The Team</ArrowLink
						>
					</div>

					<div class="flex-3/5">
						<img
							alt="Husky robotics team photo."
							class="aspect-16/9 object-cover"
							src="../assets/images/founders.jpg"
						/>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
