<template>
  <header class="header">
    <div class="logo">
      <router-link :to="{name: 'Home'}" class="logo">logo</router-link>
    </div>
    <nav class="main-nav">
      <ul class="main-nav-list">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Account'}">Account</router-link>
        <router-link :to="{name: 'Signup'}">Signup</router-link>
        <router-link :to="{name: 'Login'}">Login</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
</script>

<style>
</style>