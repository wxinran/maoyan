import Vue from 'vue'
import App from './App.vue'
import router from './Routers'
import store from './Stores'
import axios from 'axios'
// 安装
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
