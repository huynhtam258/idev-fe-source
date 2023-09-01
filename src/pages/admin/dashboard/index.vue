<template>
  <div>
    <AppTextEditor v-mo="content" :max-limit="280" />
    <button class="submit-button" @click="onSubmit">Submit</button>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});
const content = ref<string>('')

function onSubmit() {
}
</script>
<style lang="scss" scoped>
</style>