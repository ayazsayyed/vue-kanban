import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from "./router"

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
