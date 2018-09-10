// pages/add/add.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    id:0,
    msg:''
  },
  onLoad: function (options) {
    if(options.id){
      this.setData({
        id : options.id,
        msg : options.content      
      })
    }
  },
  formSubmit(e){
    let msg = e.detail.value.textarea
    let id = this.data.id
    if(id){
      //update
      util.showBusy('提交中...')
      qcloud.request({
        url: `${config.service.host}/weapp/update`,
        method: 'POST',
        data: { id : id,content: msg },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success(result) {
          util.showSuccess('更新成功')
          wx.navigateTo({
            url: "../../pages/index/index"
          })
        },
        fail(error) {
          util.showModel('请求失败', error);
          console.log('request fail', error);
        }
      })
    }else{
      //add
      util.showBusy('提交中...')
      qcloud.request({
        url: `${config.service.host}/weapp/add`,
        method: 'POST',
        data: { content: msg },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success(result) {
          util.showSuccess('添加成功')
          wx.navigateTo({
            url: "../../pages/index/index"
          })
        },
        fail(error) {
          util.showModel('请求失败', error);
          console.log('request fail', error);
        }
      })
    }
  },
  cancel:function(){
    wx.navigateTo({
      url: "../../pages/index/index"
    })
  }
  
})