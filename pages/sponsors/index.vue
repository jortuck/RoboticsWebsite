<template>
	<div class="container mx-auto my-32 w-full space-y-20 text-center">
		<h1
			class="coolDrop font-logo text-4xl font-extrabold text-primary uppercase select-none md:text-6xl"
		>
			Thank you to our 2024-2025 sponsors!
		</h1>
	</div>
	<div class="flex flex-row justify-center">
		<div class="container mx-2 grid grid-cols-2 gap-4 self-center md:grid-cols-3 lg:grid-cols-4">
			<div class="sponsor">
				<img src="~/assets/images/sponsors/mituoyo.png" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/hd.gif" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/cubemars.png" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/hub.png" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/ti.png" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/onshape.png" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/me.gif" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/cs.png" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/altium.png" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/protocase.png" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/solidworks.png" />
			</div>
			<div class="sponsor">
				<img src="~/assets/images/sponsors/garnet.png" />
			</div>
		</div>
	</div>
</template>
<style scoped>
@reference "~/assets/css/main.css";
.sponsor {
	@apply flex h-36 flex-col items-center justify-center rounded-md bg-white p-5 shadow-lg;
}
.sponsor > img {
	@apply h-full object-contain;
}
</style>
<script setup lang="ts"></script>
