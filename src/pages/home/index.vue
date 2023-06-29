<template>
  <div class="homePage">
    <GradientBannerComponent></GradientBannerComponent>
    <FeatureCardComponent></FeatureCardComponent>
    <div class="homePage_feature">
      <div class="content-image">
        <img class="image" src="~/assets/images/feature-new-01.jpg" alt="" />
      </div>
      <div class="content-text">
        <div class="homePage_feature__content">
          <h1>Tương thích với đa thiết bị</h1>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
    <div class="homePage_feature">
      <div class="content-text">
        <div class="homePage_feature__content">
          <h1>Tương thích với đa thiết bị</h1>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div class="content-image">
        <img class="image" src="~/assets/images/feature-new-02.jpg" alt="" />
      </div>
    </div>
    <div class="homePage_contact">
      <div class="intro">
        <h1>Sứ mệnh của idev</h1>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang='scss'>
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
        width: 540px;
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
</style>