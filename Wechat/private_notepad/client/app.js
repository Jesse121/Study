//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    onShow:function(){
        if(!this.globalData.firstLaunch){
          console.log('a')
          wx.reLaunch({
            url: "../../pages/lock/lock"
          })
        }
        // wx.reLaunch({
        //   url: "../../pages/lock/lock"
        // })
    },
    globalData: {
      firstLaunch: true
    }
})