<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <p><img src="{{imgs.image}}" alt=""></p> -->
    <ul>
      <li v-for="(item,index) in imgs" :key="index">
        <img :src="item.image" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// import HelloWorld from './components/HelloWorld'
let url = 'http://rap.taobao.org/mockjsdata/11037/slide/listSlides.do'
export default {
  name: 'app',
  data (){
    return {
        imgs:[]
    }
  },
  created (){
    console.log('1')
      console.log('created',this.imgs)
    axios.get(url)
    .then(res => {
      this.imgs = res.data.data.slideList
      // console.log(this.imgs)
    })
    .catch(err => {
      console.log(err)
    })
  },
  mounted (){
    console.log('2')
      console.log('mounted',this.imgs)

  },
  updated (){
    // console.log('update',this)
      console.log(this.imgs)
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
