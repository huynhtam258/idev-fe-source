<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="content">
        <ul class="info">
          <li><h3>Liên hệ với chúng tôi</h3></li>
          <li>(+84)329976180</li>
          <li>idev@gmail.com</li>
        </ul>
        <ul class="address">
          <li><h3>Địa chỉ</h3></li>
          <li>TpHcm: 440/20 Huỳnh Tấn Phát, Quận 7</li>
        </ul>
        <ul class="services">
          <li><h3>Dịch vụ</h3></li>
          <li>Thiết kế website</li>
          <li>Thiết kế ứng dụng di động</li>
        </ul>
      </div>
    </div>
    <div class="footer-sub">
      <p class="slogan">© 2023 Copyright iDev team</p>
    </div>
  </footer>
</template>

<script setup lang='ts'>
</script>

<style lang="scss" scoped>
.footer {
  .footer-main {
    padding: 77px 0;
    background-color: var(--black1);
    .content {
      display: flex;
      flex-wrap: wrap;
      color: white;
      gap: 100px;
      justify-content: center;
      ul {
        padding: 0;
        li {
          list-style: none;
          margin-bottom: 10px;
          h3 {
            color: white;
          }
        }
      }
    }
  }
  .footer-sub {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    gap: 11px;
    background-color: #343a40;
    color: white;
    .icon {
      width: 40px;
    }
  }
}
</style>