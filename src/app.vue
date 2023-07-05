<template>
  <HeaderComponent v-if="route.path !== '/auth/login'" />
  <div class="main">
    <NuxtPage />
  </div>
  <FooterComponent v-if="route.path !== '/auth/login'" />
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
const route = useRoute()

</script>
<style scoped lang="scss">
</style>
