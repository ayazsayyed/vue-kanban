<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
export default {
  name: 'app',components: {
    Dashboard,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
