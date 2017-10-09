// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// var filters = {
//   all: function (todos) {
//     return todos
//   },
//   active: function (todos) {
//     return todos.filter(function (todo) {
//       return !todo.completed
//     })
//   },
//   completed: function (todos) {
//     return todos.filter(function (todo) {
//       return todo.completed
//     })
//   }
// }
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// function onHashChange () {
//   var visibility = window.location.hash.replace(/#\/?/, '')
//   if (filters[visibility]) {
//     app.visibility = visibility
//   } else {
//     window.location.hash = ''
//     app.visibility = 'all'
//   }
// }

// window.addEventListener('hashchange', onHashChange)
// onHashChange()
