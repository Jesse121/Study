<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="routerA">routerA</router-link>
    <div
      class="btn"
      @click="download('http://static.guojiang.tv/app/upload/2019_11_03/5ba3a85ba2a144914a051a966c6d7db9.jpg')"
    >download</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // console.log(this.$router)
    // console.log(this.$route)
  },
  methods: {
    /**
     * 图片转base64格式
     */
    img2base64 (url) {
      return new Promise(resolve => {
        const img = new Image()

        img.onload = () => {
          const c = document.createElement('canvas')

          c.width = img.naturalWidth
          c.height = img.naturalHeight

          const cxt = c.getContext('2d')

          cxt.drawImage(img, 0, 0)
          // 得到图片的base64编码数据
          resolve(c.toDataURL('image/png'))
        }
        img.setAttribute('crossOrigin', 'Anonymous')
        img.src = url
      })
    },
    download (url) {
      this.img2base64(url).then((res) => {
        var a = document.createElement('a')
        a.href = res
        a.download = 'jesse.png'

        var e = document.createEvent('MouseEvents')

        e.initMouseEvent(
          'click',
          true,
          false,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        )

        a.dispatchEvent(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 100%;
  height: 100%;
}
</style>
