<template>
  <section>
    <div class="container">
      <h1>Signup</h1>
      <form @submit.prevent="handleSubmit">
        <h3>Sign up</h3>
        <label>Display name:</label>
        <input type="text" placeholder="display name" required v-model="displayName">

        <label>Email:</label>
        <input type="email" placeholder="Email" required v-model="email">

        <label>Password:</label>
        <input type="password" placeholder="Password" required v-model="password">

        <div class="submit">
          <button class="btn btn mt-4">Signup</button>
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
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = function () {
      console.log('Data:', displayName.value)
      console.log('Data:', email.value)
      console.log('Data:', password.value)
    }

    return { displayName, email, password, handleSubmit }
  },
}
</script>

<style>
</style>