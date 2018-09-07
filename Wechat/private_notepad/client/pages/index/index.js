//index.js
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config')
const util = require('../../utils/util.js')

Page({
    data: {
      msgList: []
    },
  onLoad: function (options) {
    qcloud.request({
      url: `${config.service.host}/weapp/index`,
      success:(result)=> {
        let data = result.data.data.msg
        data.map((item)=>{
          item.time = util.formatTime(new Date(parseInt(item.time)))
        })
        this.setData({
          msgList:data
        })
      },
      fail:(error)=>{
        console.log('request fail', error);
      }
    })
  },
  delete:function(e){
    const id = e.target.dataset.id
    util.showBusy('删除中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/del`,
      method: 'POST',
      data: { id: id },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success(result) {
        wx.reLaunch({
          url: "../../pages/index/index"
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  modified:function(e){
    const id = e.target.dataset.id
    const msgArr = this.data.msgList
    let content
    msgArr.map(function(item){
      if(item.id === id){
        content = item.content
      }
    })
    wx.navigateTo({
      url: "../../pages/add/add?id="+id+"&content="+content
    })
  }
})
