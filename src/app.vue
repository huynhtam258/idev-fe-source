<template>
  <HeaderComponent />
  <div class="main">
    <NuxtPage />
  </div>
  <FooterComponent />
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
</script>
<style scoped lang="scss">
</style>
