import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './components/store/index'

import Dashboard from './components/dashboard.vue'

Vue.use(VueRouter);

const routes = [
  { path:  '/', component: Dashboard },
];

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
