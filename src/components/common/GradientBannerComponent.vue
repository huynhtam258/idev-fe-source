<template>
  <section class="gradientBanner section gradient-banner">
    <div class="shapes-container">
      <div
        class="shape"
        data-aos="fade-down-left"
        data-aos-duration="1500"
        data-aos-delay="100"
      ></div>
      <div
        class="shape"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="100"
      ></div>
      <div
        class="shape"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      ></div>
      <div
        class="shape"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      ></div>
      <div
        class="shape"
        data-aos="fade-down-left"
        data-aos-duration="1000"
        data-aos-delay="100"
      ></div>
      <div
        class="shape"
        data-aos="fade-down-left"
        data-aos-duration="1000"
        data-aos-delay="100"
      ></div>
      <div
        class="shape"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
      ></div>
      <div
        class="shape"
        data-aos="fade-down-right"
        data-aos-duration="500"
        data-aos-delay="200"
      ></div>
      <div
        class="shape"
        data-aos="fade-down-right"
        data-aos-duration="500"
        data-aos-delay="100"
      ></div>
      <div
        class="shape"
        data-aos="zoom-out"
        data-aos-duration="2000"
        data-aos-delay="500"
      ></div>
      <div
        class="shape"
        data-aos="fade-up-right"
        data-aos-duration="500"
        data-aos-delay="200"
      ></div>
      <div
        class="shape"
        data-aos="fade-down-left"
        data-aos-duration="500"
        data-aos-delay="100"
      ></div>
      <div
        class="shape"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="0"
      ></div>
      <div
        class="shape"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="0"
      ></div>
      <div
        class="shape"
        data-aos="fade-up-right"
        data-aos-duration="500"
        data-aos-delay="100"
      ></div>
      <div
        class="shape"
        data-aos="fade-down-left"
        data-aos-duration="500"
        data-aos-delay="0"
      ></div>
    </div>
    <div class="container">
      <div class="gradientBanner_content">
        <div class="gradientBanner_content--text col-md-6 order-2 order-md-1 text-center text-md-left">
          <h1 class="title">
            {{ title }}
          </h1>
          <p class="text">
           {{ description }}
          </p>
        </div>
        <div v-if="image" class="col-md-6 text-center order-1 order-md-2">
          <img
            class="img-fluid"
            src="~/assets/images/mobile.png"
            alt="screenshot"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: "iDev - luôn là sự tin tưởng của bạn",
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: ''
  }
});
</script>
<style scoped lang='scss'>
@import 'src/core/module/home/_gradientBanner.responsive.scss';
.row {
  justify-content: space-between;
  align-items: center;
}
.gradientBanner {
  &_content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    flex-wrap: wrap;
    &--text {
      width: 670px;
      text-align: center;
      .title, .text {
        color: var(--light);
      }
    }
  }
}
.gradient-banner {
  padding: 100px 0 170px;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200%;
    height: 200%;
    border-radius: 50%;
    background-image: linear-gradient(45deg,#009ec5 0%, var(--primary-color) 20%, #02225b 50%
    );
    z-index: -1;
  }
}

.pull-top {
  margin-top: -100px;
}

.shapes-container {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .shape {
    position: absolute;

    &::before {
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 0.1);
      transform: rotate(-35deg);
      position: absolute;
      border-radius: 50px;
    }
    &:nth-child(1) {
      top: 2%;
      left: 11%;
      width: 400px;
      height: 70px;
    }

    &:nth-child(2) {
      top: 14%;
      left: 18%;
      width: 200px;
      height: 15px;
    }

    &:nth-child(3) {
      top: 80%;
      left: 4%;
      width: 300px;
      height: 60px;
    }

    &:nth-child(4) {
      top: 85%;
      left: 15%;
      width: 100px;
      height: 10px;
    }

    &:nth-child(5) {
      top: 5%;
      left: 50%;
      width: 300px;
      height: 25px;
    }

    &:nth-child(6) {
      top: 4%;
      left: 52%;
      width: 200px;
      height: 5px;
    }

    &:nth-child(7) {
      top: 80%;
      left: 70%;
      width: 200px;
      height: 5px;
    }

    &:nth-child(8) {
      top: 55%;
      left: 95%;
      width: 200px;
      height: 5px;
    }

    &:nth-child(9) {
      top: 50%;
      left: 90%;
      width: 300px;
      height: 50px;
    }

    &:nth-child(10) {
      top: 30%;
      left: 60%;
      width: 500px;
      height: 55px;
    }

    &:nth-child(11) {
      top: 60%;
      left: 60%;
      width: 200px;
      height: 5px;
    }

    &:nth-child(12) {
      top: 35%;
      left: 75%;
      width: 200px;
      height: 5px;
    }

    &:nth-child(13) {
      top: 90%;
      left: 40%;
      width: 300px;
      height: 45px;
    }

    &:nth-child(14) {
      top: 54%;
      left: 75%;
      width: 200px;
      height: 5px;
    }

    &:nth-child(15) {
      top: 50%;
      left: 90%;
      width: 200px;
      height: 5px;
    }

    &:nth-child(16) {
      top: 50%;
      left: 81%;
      width: 100px;
      height: 5px;
    }
  }

  
}

.zindex-1 {
  z-index: 1;
}
</style>

