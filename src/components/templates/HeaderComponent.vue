<template>
  <div class="headerComponent container">
    <div class="headerComponent_logo">
      <img class="icon" src="~/assets/icon/logo.png" alt="" srcset="" />
      <h4 class="slogan">iDev - thiết kế website chuyên nghiệp</h4>
    </div>
    <div class="headerComponent_nav">
      <ul class="headerComponent_nav_list">
        <li 
          v-for="(nav, index) in navs" 
          :key="`${nav.label}-${index}`"
          :class="{'active': nav.name === route.name}"
        >
          {{ nav.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
const route = useRoute()
const navs = ref([
  {
    label: "Trang chủ",
    name: "home"
  },
  {
    label: "Bảng giá",
    name: "prices"
  },
  {
    label: "Về chúng tôi",
    name: "about-us"
  },
  {
    label: "Liên hệ",
    name: "connect"
  }
])
</script>

<style lang="scss" scoped>
@import 'src/core/module/header/_header.responsive.scss';
.headerComponent {
  display: flex;
  justify-content: space-between;
  &_logo {
    display: flex;
    align-items: center;
    .icon {
      width: 52px;
      margin-right: 10px;
    }
  }
  &_nav {
    &_list {
      list-style: none;
      display: flex;
      li {
        padding: 10px 20px;
        font-size: var(--font-size-medium);
        font-weight: bold;
        &.active {
          border-bottom: 4px solid;
        }
      }
    }
  }
}
</style>