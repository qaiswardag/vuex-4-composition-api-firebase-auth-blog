<template>
  <section>
    <div class="container">
      <h1>Signup</h1>
      <form>
        <h3>Sign up</h3>
        <label>Display name:</label>
        <input type="text" placeholder="display name" required v-model="displayName">
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

    return { displayName }
  },
}
</script>

<style>
</style>