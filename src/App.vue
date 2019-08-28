<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import { mapGetters } from "vuex"
import { db } from './utils/db'
import {  mapActions } from "vuex";

export default {
  name: 'app',components: {
    Dashboard,
  },
  methods: {
    ...mapActions({
      fetchData: "fetchData",
    }),
  },
  created() {
    this.fetchData(this.projects)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects:[]
    }
  },
  firebase: {
    projects: db.ref('projetcs'),
  },
  mounted(){
    console.log('projects ', this.projects);
    
  }
}
</script>

<style lang="scss">

</style>
