// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import axios from 'axios'

// let url = 'http://rap.taobao.org/mockjsdata/11037/slide/listSlides.do'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
  // data: {
  //   msg: 'liftcycle',
  //   imgs: null,
  //   arr: [11, 12, 13]
  // },
  // methods: {
  //   getList () {
  //     axios.get(url)
  //     .then(res => {
  //       console.log(res.data)
  //       this.imgs = res.data.data.slideList
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //   },
  //   init () {

  //   }
  // },
  // beforeCreate () {
  //   // console.log(this.msg)
  // },
  // created () {
  //   this.getList()
  //   this.init()
  //   setTimeout(() => {
  //     this.arr = [4, 5, 6, 7]
  //     console.log(document.querySelectorAll('li').length)
  //   }, 0)
  // },
  // beforeMount () {

  // },
  // mounted () {
  //   console.log('mounted:', document.querySelectorAll('li').length)
  // },
  // beforeUpdate () {
  //   console.log('beforeUpdate:', document.querySelectorAll('li').length)
  // },
  // updated () {
  //   console.log('Update:', document.querySelectorAll('li').length)
  // },
  // beforeDetroy () {

  // },
  // destroyed () {

  // }
})
