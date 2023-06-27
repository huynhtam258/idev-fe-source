<template>
  <div class="headerComponent container">
    <div class="headerComponent_logo">
      <img class="icon" src="~/assets/icon/logo.png" alt="" srcset="" />
      <h4 class="slogan">iDev - luôn là sự tin tưởng của bạn</h4>
    </div>
    <div class="headerComponent_nav">
      <ul class="headerComponent_nav_list">
        <li>HOME</li>
        <li>PAGE</li>
        <li>ABOUT</li>
        <li>CONTRACT</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
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
      }
    }
  }
}
</style>