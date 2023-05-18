import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './assets/fonts/iconfont.css';

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net';
Vue.prototype.$axios = axios;

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
