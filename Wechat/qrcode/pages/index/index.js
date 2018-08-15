//index.js
//获取应用实例

import QR from '../../utils/qr.js';
Page({
  data: {
    url:'http://www.baidu.com'
  },
  onLoad:function(options){
    let size = this.getCanvasSize();
    let url=this.data.url;
    this.createQRcode(url,'mycanvas',size.w,size.h);
  },
  getCanvasSize(){
    let size = {};
    let res=wx.getSystemInfoSync();
    let scale = 686/750;
    let width = res.windowWidth*scale;
    let height = width;
    size.w = width;
    size.h = height;
    return size;
  },
  createQRcode(url,canvasId,canvasW,canvasH){
    QR.api.draw(url, canvasId, canvasW, canvasH)
  },
  fromSubmit(e){
    let url=e.detail.value.url || this.data.url;
    wx.showToast({
      title:'生成中，请稍等',
      icon:'loading',
      duration:2000
    })
    let timer=setTimeout(()=>{
      let size = this.getCanvasSize();
      this.createQRcode(url, 'mycanvas', size.w, size.h);
      wx.hideToast();
      clearTimeout(timer);
    },2000)
  }
})
