<template>
  <GradientBannerComponent 
    title="Liên hệ với chúng tôi"
   />
  <div class="connect">
    <div class="connect_head">
      <h2>Liên hệ hợp tác với iDev</h2>
      <p>
        iDev luôn mong cùng chia sẻ các kinh nghiệm giúp bạn tạo được nhiều giá
        trị hơn.
      </p>
    </div>
    <form class="connect_form">
      <div class="group">
        <div class="control">
          <div class="control_field">
            <textfield-component type="text" placeholder="iDev Huỳnh" label="HỌ VÀ TÊN" />
          </div>
          <div class="control_field">
            <textfield-component type="text" placeholder="iDev@email.com" label="ĐỊA CHỈ EMAIL" />
          </div>
        </div>
        <div class="control">
          <div class="control_field">
            <textfield-component type="text" placeholder="Web Design" label="CHỦ ĐỀ" />
          </div>
          <div class="control_field">
            <textfield-component type="text" placeholder="Number Phone" label="SỐ ĐIỆN THOẠI" />
          </div>
        </div>
      </div>
      <div class="submit">
        <button class="btn-main-sm">Gửi</button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.connect {
  text-align: center;
  margin: 44px auto;
  &_head {
    margin: 44px auto;
    h2 {
      font-size: 32px;
      color: var(--primary-color);
    }
    p {
      color: #1e2022;
    }
  }
  &_form {
    .group {
      .control {
        display: flex;
        gap: 40px;
        justify-content: center;
        margin-bottom: 40px;
        flex-wrap: wrap;
        &_field {
          width: 357px;
        }
      }
    }
    .submit {
      width: 100%;
      text-align: center;
    }
    .btn-main-sm {
      padding: 15px 35px;
      border-radius: 3px;
      background: var(--primary-color);
      color: var(--white);
      outline: none;
      font-size: 14px;
      border: unset;
    }
  }
}
</style>
