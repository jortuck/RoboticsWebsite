<script setup lang="ts"></script>
<template>
	<main>
		<section class="bg-splash-birdseye">
			<div
				style="
					background: linear-gradient(
						236deg,
						rgba(115, 115, 115, 0.2) 22.93%,
						rgba(0, 0, 0, 0.65) 83.23%
					);
				"
			>
				<RoboticsConntainer class="space-y-8 py-20 md:py-30">
					<div class="space-y-8 md:max-w-1/2">
						<h1 class="text-6xl leading-18 font-bold text-secondary lg:text-7xl lg:leading-25">
							Support<br />Husky Robotics
						</h1>
						<p class="space-x-3 align-middle">
							<i class="fa-solid fa-circle text-active-green"></i>
							<span class="text-center font-roboto tracking-robotics text-secondary uppercase"
								>Active Mission</span
							>
						</p>
					</div>
				</RoboticsConntainer>
			</div>
		</section>
		<section class="bg-primary">
			<RoboticsConntainer class="py-20">
				<div class="flex flex-col-reverse items-center gap-8 lg:flex-row">
					<div class="flex-1 space-y-4 text-lg text-neutral-200">
						<p>
							At Husky Robotics, we believe that the strongest engineers emerge from teams united by
							purpose. Our mission isn’t simply to compete in robotics:
							<strong
								>it’s to build a community where talented students collaborate, innovate, and grow
								together.</strong
							>
							Students join our team for the opportunity to learn from real experiences, solve
							complex problems, and meaningfully shape their careers.
						</p>
						<p>
							<strong
								>With more than 100+ engineers from mechanical, electrical, software, biochemistry,
								and business backgrounds, we operate as a student-led startup embedded within the
								University of Washington.</strong
							>
							Inspired by NASA’s Mars rovers and structured from the NASA Systems Engineering
							Handbook, we build advanced autonomous systems, simulating the pressures and demands
							of industry-level projects, while continuously pushing the boundaries of student
							innovation.
						</p>

						<p>
							Sponsors partner with us because they believe in supporting student innovation, want
							early access to top engineering talent, and can donate equipment and resources
							tax-free to a nonprofit cause they value. Companies also benefit through marketing and
							branding opportunities alongside one of UW’s largest and most respected engineering
							teams.
						</p>

						<p>
							<strong>When you support Husky Robotics, you invest in people.</strong> You help
							students build meaningful connections, access critical resources, and become the
							engineering leaders of tomorrow.
						</p>
						<p>
							<strong
								>Join us today. Fund innovation, build relationships, and shape the future of
								engineering.</strong
							>
						</p>
						<ArrowLink
							to="https://venmo.com/huskyrobotics"
							class="mt-4"
							>Donate Now</ArrowLink
						>
					</div>
					<div class="flex-1">
						<img
							src="~/assets/images/support.png"
							class="xl:px-8"
							alt="our rover pushing buttons"
						/>
					</div>
				</div>
			</RoboticsConntainer>
		</section>
		<section>
			<RoboticsConntainer class="space-y-8 py-20">
				<h2 class="text-4xl font-bold">Corporate Engagement? Let Us Know.</h2>
				<form class="flex flex-col gap-4 md:gap-8 lg:flex-row">
					<div class="flex flex-1 flex-col justify-between space-y-4 md:space-y-8">
						<div class="text-input">
							<label>Full Name<sup class="text-red-500">*</sup></label>
							<input placeholder="Harry The Husky" />
						</div>
						<div class="text-input">
							<label>Company<sup class="text-red-500">*</sup></label>
							<input placeholder="Husky Robotics" />
						</div>
						<div class="text-input">
							<label>Additional Notes?</label>
							<input placeholder="Thank You For Working With Us!" />
						</div>
					</div>
					<div class="flex flex-1 flex-col justify-between space-y-4 md:space-y-8">
						<div class="text-input">
							<label>Email Address<sup class="text-red-500">*</sup></label>
							<input placeholder="email@eample.com" />
						</div>
						<div class="flex flex-1 flex-col">
							<p class="label">Reason For Reach-out<sup class="text-red-500">*</sup></p>
							<div
								class="checkboxes flex flex-1 flex-col justify-between border-2 border-zinc-300 bg-neutral-100 px-2 py-4"
							>
								<label
									><input type="checkbox" />
									<span>Monetary Sponsorship (Tax Deductible)</span></label
								>
								<label><input type="checkbox" /> <span>Donate Equipment / Software</span></label>
								<label
									><input type="checkbox" />
									<span>Recruit Top University of Washington Talent</span></label
								>
								<label
									><input type="checkbox" />
									<span>Visibility & Public Outreach Opportunities</span></label
								>
								<label
									><input type="checkbox" />
									<span>Other or N/A (Fill out Additional Notes)</span></label
								>
							</div>
						</div>
					</div>
				</form>
			</RoboticsConntainer>
		</section>
	</main>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.bg-splash-birdseye {
	@apply w-full overflow-hidden bg-cover bg-center bg-no-repeat md:bg-top;
	@apply bg-[url('~/assets/images/md_birdseye.jpg')];
	@apply md:bg-[url('~/assets/images/md_birdseye.jpg')];
	@apply lg:bg-[url('~/assets/images/lg_birdseye.jpg')];
	@apply xl:bg-[url('~/assets/images/xl_birdseye.jpg')];
}
.text-input > input {
	@apply w-full border-2 border-zinc-300 bg-neutral-100 p-4;
	@apply transition-colors duration-200 ease-in-out;
}
.text-input > input:focus {
	@apply border-tertiary outline-none;
}
.text-input > label,
.label {
	@apply block pb-1 text-lg font-bold;
}
.checkboxes > label > span {
	@apply font-medium tracking-wide;
}
.checkboxes > label {
	@apply flex flex-row items-center space-x-4;
}
.checkboxes > label > input {
	@apply h-4 w-4 cursor-pointer appearance-none rounded-xs border-2 border-black;
	@apply transition-colors duration-200 ease-in-out;
	@apply checked:bg-black;
}
</style>
