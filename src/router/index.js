import Vue from 'vue'
import Router from 'vue-router'
import listone from '@/components/listone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: listone
    }
  ]
})
