<template>
  <section>
    <div class="container">
      <h1>Login</h1>
      <form>
        <h3>Log in</h3>
        <label>Email:</label>
        <input type="email" placeholder="Email" required v-model="email">
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

    //
    return { email }
  },
}
</script>

<style>
</style>