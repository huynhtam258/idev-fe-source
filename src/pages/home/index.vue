<script setup lang="ts">
useHead({
  title: "Home",
  meta: [
    {
      name: "iDev chuyên thiết kế website giá cả tốt nhất với thị trường",
      content: "Home"
    }
  ],
  titleTemplate: "Trang chủ iDev website chuyên thiết kế website"
})
definePageMeta({
  layout: false
})
const appConfig = useRuntimeConfig()

const { data: homeData } = await useAsyncData(() =>
  $fetch(`${appConfig.public.url}/api/home`)
);
</script>
<template>
<NuxtLayout name="default">
  <div class="homePage">
    <GradientBannerComponent></GradientBannerComponent>
    <section class="featureCard section pt-0 position-relative pull-top">
      <div class="container">
        <div class="rounded shadow p-5 bg-white featureCard_content">
          <div class="row featureCard_content__row">
            <div
              v-for="(feature, index) in homeData.data.feature"
              :key="index"
              class="featureCard_content__item col-lg-4 col-md-6 mt-5 mt-md-0 text-center"
            >
              <h3 class="featureCard_content__item--title">
                {{ feature.title }}
              </h3>
              <p class="regular text-muted">
                {{ feature.detail }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="homePage_feature row">
      <div class="content-image">
        <img class="image" src="~/assets/images/feature-new-01.jpg" alt="" />
      </div>
      <div class="content-text">
        <div class="homePage_feature__content">
          <h1>{{ homeData.data.content_1.title }}</h1>
          <div class="content">
            {{ homeData.data.content_1.detail }}
          </div>
        </div>
      </div>
    </div>
    <div class="homePage_feature row">
      <div class="content-text">
        <div class="homePage_feature__content">
          <h1>{{ homeData.data.content_2.title }}</h1>
          <div class="content">
            {{ homeData.data.content_2.detail }}
          </div>
        </div>
      </div>
      <div class="content-image">
        <img class="image" src="~/assets/images/feature-new-02.jpg" alt="" />
      </div>
    </div>
    <div class="homePage_contact">
      <div class="intro">
        <h1>{{ homeData.data.content_3.title }}</h1>
        <div class="content">
          {{ homeData.data.content_3.detail }}
        </div>
      </div>
    </div>
  </div>
</NuxtLayout>
</template>

<style scoped lang='scss'>
// @import 'src/core/module/home/_home.responsive.scss';
.homePage {
  &_feature {
    display: flex;
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    .content-image,
    .content-text {
      width: 50%;
    }
    .content-image {
      .image {
        width: 100%;
      }
    }
    .content-text {
      display: flex;
      align-items: center;
      h1 {
        font-weight: var(--font-weight-small);
      }
      .content {
        font-size: var(--font-size-xmmedium);
        color: var(--text-color);
      }
    }
  }
  &_contact {
    background-color: var(--primary-color);
    text-align: center;
    padding: 70px 0;
    .intro {
      max-width: 700px;
      margin: 0 auto;
    }
    h1 {
      font-weight: var(--font-weight-small);
      margin-top: 0;
      color: var(--light);
    }
    .content {
      color: var(--light);
    }
  }
}

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
        font-size: 30px;
        font-weight: 300;
      }
    }
  }
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>