<template>
  <div class="nav-admin">
    <ul class="menu">
      <li
        v-for="(item, index) in menuItems"
        :key="`menu-${index}`"
        :class="{ active: item.active }"
        @click="onNavigate(item.name)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const menuItems = reactive([
  {
    title: "Dashboard",
    name: "admin-dashboard",
    active: false,
  },
  {
    title: "Pages",
    name: "admin-pages",
    active: false,
  },
  {
    title: "Info",
    name: "admin-info",
    active: false,
  },
]);
const route = useRoute();
const router = useRouter();

function onNavigate(name: string): void {
  router.push({
    name: name
  })
}

watch(
  route,
  (value) => {
    menuItems.forEach((item) => {
      item.active = item.name === route.name;
    });
  },
  { deep: true, immediate: true }
);
</script>
<style lang="scss" scoped>
.nav-admin {
  width: 240px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0.15rem 0 1.75rem #21283226 !important;
  .menu {
    padding: 0;
    li {
      list-style: none;
      padding: 7px 30px;
      cursor: pointer;
      &.active {
        color: #0061f2;
      }
    }
  }
}
</style>