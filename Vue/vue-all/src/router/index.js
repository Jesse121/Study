import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerA from '@/components/router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/helloWorld',
      component: HelloWorld
    },
    {
      path: '/router',
      component: routerA
    }
  ]
})
