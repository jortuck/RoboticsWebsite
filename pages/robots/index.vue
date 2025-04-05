<template>
	<div class="container mx-auto my-24 w-full space-y-20">
		<header>
			<h1
				class="coolDropSmall text-center font-logo text-4xl font-extrabold text-primary uppercase select-none md:text-6xl"
			>
				Robots
			</h1>
		</header>
		<section class="mx-4 space-y-4 lg:mx-0">
			<div
				class="overflow-hidden rounded-md bg-base-100"
				v-for="i in 4"
			>
				<h2
					class="group p-4 text-lg text-base-content select-none hover:cursor-pointer md:text-xl lg:text-xl"
					role="button"
					tabindex="0"
				>
					{{ i }}
					<span class="float-right"
						><i class="fa-solid fa-chevron-down transition-transform duration-200 ease-in-out"></i
					></span>
				</h2>
				<div class="space-y-4 bg-base-200 p-4 text-base-content">
					<h3 class="text-xl font-bold">About</h3>
					<p>Des</p>
					<h3 class="text-xl font-bold">Photos</h3>
					<div class="flex flex-col space-y-4 space-x-5 lg:flex-row lg:space-y-0 xl:space-x-10">
						<!--						<div-->
						<!--							v-for="lead in subsystem.leads"-->
						<!--							class="flex w-full flex-col items-center justify-center space-y-4 rounded-md bg-base-100 py-4 text-base-content lg:max-w-1/4"-->
						<!--						>-->
						<!--							<h3 class="text-center text-lg font-bold text-primary">{{ lead.position }}</h3>-->
						<!--							<div-->
						<!--								class="w-full overflow-hidden bg-center"-->
						<!--								:style="`background: url(${lead.image});`"-->
						<!--							>-->
						<!--								<div class="backdrop-blur-xl">-->
						<!--									<img-->
						<!--										:alt="`Picture of ${lead.name}`"-->
						<!--										:src="lead.image"-->
						<!--										class="mx-auto h-50"-->
						<!--									/>-->
						<!--								</div>-->
						<!--							</div>-->
						<!--							<h3 class="text-lg">{{ lead.name }}</h3>-->
						<!--						</div>-->
					</div>
					<h3 class="text-xl font-bold">Video</h3>
				</div>
			</div>
		</section>
	</div>
</template>
<script setup lang="ts">
useSeoMeta({
	title: "Robots | Husky Robotics"
});
</script>
