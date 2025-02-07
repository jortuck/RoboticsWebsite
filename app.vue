<script lang="ts" setup>

useSeoMeta({
	title: "Husky Robotics"
});
</script>
<template>
	<Html lang="en" />
  <div class="flex min-h-screen flex-col">
    <Navbar />
    <div class="flex flex-col items-center flex-1">
      <main class="container">
        <NuxtPage />
      </main>
    </div>
    <Footer />
  </div>
</template>
