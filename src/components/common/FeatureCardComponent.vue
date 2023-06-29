<template>
  <section class="featureCard section pt-0 position-relative pull-top">
    <div class="container">
      <div class="rounded shadow p-5 bg-white featureCard_content">
        <div class="row featureCard_content__row">
          <div v-for="i in 3" :key="i" class="featureCard_content__item col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
            <i class="ti-paint-bucket text-primary h1"></i>
            <h3 class="featureCard_content__item--title">themes made easy</h3>
            <p class="regular text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              non, recusandae tempore ipsam dignissimos molestias.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.featureCard {
  position: relative;
  bottom: 100px;
  &_content {
    background-color: var(--light);
    border-radius: 7px;

    &__row {
     justify-content: space-around;
    }
    &__item {
      width: calc(100% / 4);
      text-align: center;
      &--title {
        font-weight: 300;
      }
    }
  }
}
.shadow {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
</style>
