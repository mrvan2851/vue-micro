<template>
  <div class="app-page-login">
    <div class="app-page-login-header">
      <h1>Login</h1>
    </div>
    <div class="app-page-login-body">
      <form @submit.stop.prevent="onSubmit" novalidate class="app-page-login-form">
        <div class="app-page-login-form-item">
          <label for="">Email</label>
          <input type="type" v-model="form.email">
        </div>
        <div class="app-page-login-form-item">
          <label for="">Password</label>
          <input type="password" v-model="form.password">
        </div>
        <div class="app-page-login-form-item">
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
const authStore = useAuthStore()
const router = useRouter()

const is_loading = ref(false)
const form = ref({
  email: '',
  password: ''
})

const onSubmit = async () => {
  if (is_loading.value) return
  let { email, password } = form.value
  if (email && password) {
    is_loading.value = true
    try {
      let res = await authStore.login({
        email, password
      })
      console.log(res);
      console.log('redirect home');
      console.log(router);
      router.push({
        name : 'Home'
      })
    } catch (error) {

    }
    is_loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.app-page-login {
  padding: 50px 15px;

  &-header {
    text-align: center;
  }

  &-form {
    width: 500px;
    margin: 0 auto;

    &-item {
      margin-bottom: 20px;

      input {
        display: block;
        padding: 8px 16px;
        border: 1px solid #ccc;
        width: 100%;
        max-width: 100%;
      }

      button {
        display: block;
        padding: 8px 16px;
        border: 1px solid #ccc;
        width: 100%;
        cursor: pointer;
      }
    }
  }
}
</style>
