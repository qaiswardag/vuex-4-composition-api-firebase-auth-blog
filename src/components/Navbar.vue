<template>
  <div class="header">
    <div class="logo">vuex & firebase</div>
    <nav class="main-nav-list">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div v-if="user">
        <span>Logged in as </span>
        <button @click="handleClick">Logout</button>
      </div>
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
      </div>
      <div v-if="!user">

        <router-link to="/signup">Signup</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    //
    //
    const store = useStore()
    const user = store.state.user
    //
    //
    //
    const handleClick = () => {
      console.log('clicked logout')
    }

    return {
      handleClick,
      user,
    }
  },
}
</script>