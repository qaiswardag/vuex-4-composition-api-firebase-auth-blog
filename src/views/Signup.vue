<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="displayName">Display name:</label>
    <input type="text" name="displayName" v-model="displayName" autocomplete="off" required>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button class="btn">Sign up</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    //
    const store = useStore()
    //
    const displayName = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const handleSubmit = async () => {
      console.log('signup form has been submitted')
    }

    return { handleSubmit, displayName, email, password, error }
  },
}
</script>