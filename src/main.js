import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

sync(store, router)

console.log(store)

const app = new Vue({
  router,
  store,
  ...App,
})

export { app, store, router }