<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <p>{{count}}</p>
    <div @click="inc">增加</div>
    <div @click="dec">减少</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['count'],
  methods: {
    inc () {
      this.$emit('increment')
    },
    dec () {
      this.$emit('decrement')
    }
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
