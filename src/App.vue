<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import { mapGetters } from "vuex"
export default {
  name: 'app',components: {
    Dashboard,
  },
  beforeCreate() {
    this.$store.dispatch("fetchData")
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
