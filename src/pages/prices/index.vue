<template>
  <GradientBannerComponent 
    title="Bảng báo giá website trọn gói"
   />
  <div class="price">
    <div class="price_col" v-for="(service, index) in services" :key="`service-${index}`">
      <div class="head_tab">
        <h3 class="price_title" :class="{
          advance: service.price_type === 'advance',
          premium: service.type === 'premium',
        }">
          {{ service.price_name }}
        </h3>
        <div class="total_price">{{ service.fixed_price }} VNĐ</div>
      </div>
      <ul class="services">
        <li v-for="(item, index) in service.feature" :key="`feature-${index}`">
          {{ item }}
        </li>
      </ul>
      <div class="register">
        <button :class="{
          'btn-advance': service.type === 'advance',
          'btn-premium': service.type === 'premium'
        }">Đăng kí</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useWpApi from './../../composables/useApi'
let services = reactive<any>([]);
const data = await useWpApi().fetchData<unknown>('/api/price')
services = data

</script>
<style scoped lang="scss">
.price {
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: center;
  margin: 44px auto;

  &_col {
    border: 1px solid #e7eaf3;
    max-width: 360px;
    border-radius: 10px;

    .head_tab {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #e7eaf3;

      .price_title {
        &.advance {
          color: #00c9a7 !important;
        }

        &.premium {
          color: #de4437 !important;
        }
      }

      .total_price {
        color: #1e2022 !important;
        font-size: 36px;
      }
    }

    .services {
      margin: 0 auto;
      padding: 0 auto;

      li {
        list-style: none;
        margin: 14px 0;
        font-size: 14px;
        font-weight: 600;
      }
    }

    .register {
      width: 100%;
      margin: 44px 0;
      text-align: center;

      button {
        width: 90%;
        height: 44px;
        border: unset;
        color: white;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;

        &.btn-advance {
          background-color: #00c9a7;
        }

        &.btn-premium {
          background-color: #de4437;
        }
      }
    }
  }
}
</style>
