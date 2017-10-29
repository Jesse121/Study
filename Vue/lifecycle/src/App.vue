<template>
  <div id="app">
    <pre>
      {{code}}
    </pre>
    <div v-html="styleCode">
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      code: '',
      finalCode: `
/* Hello I'm Jesse */
body{
  background: red;
}
      `
    }
  },
  created () {
    let n = 0
    setInterval(() => {
      this.code = this.finalCode.substring(0, n)
      n += 1
    }, 100)
  },
  computed: {
    styleCode () {
      return '<style>' + this.code + '</style>'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
