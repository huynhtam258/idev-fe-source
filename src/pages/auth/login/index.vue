<template>
  <div class="login">
    <form class="login_form">
      <div class="login_form_title">
        <h4>
          Đăng nhập tài khoản
        </h4>
      </div>
      <input class="form-control textfield" type="text" placeholder="Tên tài khoản" required>
      <input class="form-control textfield" type="text" placeholder="Mật khẩu" required>
      <button class="btn-main-sm">Đăng nhập</button>
    </form>
  </div>
</template>
<script lang="ts" scoped>
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &_form {
    width: 473px;
    padding: 50px;
    text-align: center;
    &_title {
      margin-bottom: 35px;
      h4 {
        padding-bottom: 20px;
        border-bottom: 1px solid #cccccc;
        font-weight: 300;
        font-size: 30px;
      }
    }
    .form-control { 
      display: block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      &:focus {
        border: 1px solid #2e7eed;
        box-shadow: unset !important;
      }
      &:focus-visible {
        outline: unset;
      }
    }
    .textfield {
      margin-bottom: 20px;
    }
    .btn-main-sm {
      padding: 15px 35px;
      border-radius: 3px;
      background: #2e7eed;
      color: #fff;
      outline: none;
      font-size: 14px;
      border: unset;
    }
  }
}
</style>