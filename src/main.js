import Vue from 'vue'
import App from './App.vue'
import router from './Routers'
import store from './Stores'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
