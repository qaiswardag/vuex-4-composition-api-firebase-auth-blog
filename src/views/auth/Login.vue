<template>
  <section>
    <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <h3>Log in</h3>
        <label>Email:</label>
        <input type="email" placeholder="Email" required v-model="email">

        <label>Password:</label>
        <input type="password" placeholder="Password" required v-model="password">

        <div class="submit">
          <button class="btn mt-4">Login</button>
        </div>
        <div class="error"></div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    // refs
    const email = ref('')
    const password = ref('')

    const handleSubmit = function () {
      console.log('Data:', email.value)
      console.log('Data:', password.value)
    }

    return { email, password, handleSubmit }
  },
}
</script>

<style>
</style>