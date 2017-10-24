// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//图片的滚动加载
import infiniteScroll from  'vue-infinite-scroll'
import {currency} from './util/currency'
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'
Vue.config.productionTip = false
Vue.use(infiniteScroll);
Vue.filter("currency",currency);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
