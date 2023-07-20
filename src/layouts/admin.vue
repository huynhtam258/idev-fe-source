<template>
  <div class="admin-layout">
    <navigation-component />
    <div class="admin-layout-main">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.admin-layout {
  display: flex;
  height: 100vh;
  background-color: #eef3f9;
  &-main {
    width: calc(100% - 240px);
    height: 100%;
  }
}
</style>