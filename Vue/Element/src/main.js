// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import Fade from '@/components/fade'
//import router from './router'

console.log(Fade)
Vue.config.productionTip = false

Vue.use(ElementUI)

// 注册组件
Vue.component('my-fade', {
  template: '<Fade/>'
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
