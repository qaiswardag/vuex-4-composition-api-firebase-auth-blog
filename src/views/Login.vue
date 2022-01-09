<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button class="btn">Login</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const handleSubmit = async () => {
      console.log('clicked login')
    }

    return { handleSubmit, email, password, error }
  },
}
</script>