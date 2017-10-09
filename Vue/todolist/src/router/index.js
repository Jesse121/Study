import Vue from 'vue'
import Router from 'vue-router'
import footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'footer',
      component: footer
    }
  ]
})
