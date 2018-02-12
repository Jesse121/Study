<template>
  <div id="app">
    <p>
      <router-link to="/user/foo">/user/foo</router-link>
      <router-link to="/user/foo/profile">/user/foo/profile</router-link>
      <router-link to="/user/foo/posts">/user/foo/posts</router-link>
    </p>
    <button @click="go">click</button>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    go () {
      this.$router.push({name: 'user', params: { id: 'foo' }})
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
