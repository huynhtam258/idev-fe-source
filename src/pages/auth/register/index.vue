<template>
  <div class="login">
    <form class="login_form">
      <div class="login_form_title">
        <h4>Đăng kí tài khoản</h4>
      </div>
      <textfield-component
        v-model:modelValue="email"
        class="textfield"
        type="text"
        placeholder="email"
      />
      <textfield-component
        v-model:modelValue="password"
        class="textfield"
        type="password"
        placeholder="mật khẩu"
      />
    </form>
    <button class="btn-main-sm" @click="onLogin">Đăng kí</button>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})
import LoginService from "./../../../core/module/login/login.service";

const email = ref<string>("");
const password = ref<string>("");
const loginService = new LoginService();

async function onLogin(): Promise<void> {
  const userLogin = { email: email.value, password: password.value };
  await loginService.login(userLogin);
}
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  &_form {
    width: 473px;
    padding: 50px;
    text-align: center;
    &_title {
      margin-bottom: 35px;
      h4 {
        padding-bottom: 20px;
        border-bottom: 1px solid var(--border-color);
        font-weight: 300;
        font-size: 30px;
      }
    }

    .textfield {
      margin-bottom: 20px;
    }
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
</style>