<template>
  <div class="container-fluid px-0">
    <div class="row">
      <Header />
      <Navbar />
      <subNav />
      <main class="px-md-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import subNav from './components/subNav.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    subNav
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
