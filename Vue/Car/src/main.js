// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('./assets/css/base.css')
require('./assets/css/checkout.css')
require('./assets/css/modal.css')

Vue.config.productionTip = false

Vue.filter('money', function (value, type) {
  return '￥' + value.toFixed(2) + type
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
