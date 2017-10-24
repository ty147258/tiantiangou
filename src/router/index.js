import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/views/GoodList.vue'
import Cart from '@/views/Cart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: GoodList
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodList
    },
  ]
})
