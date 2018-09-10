const app = getApp()
import QR from '../../utils/qr.js';
Page({
  data: {
    url:'http://www.baidu.com',
    shareTempFilePath:'123'
  },
  onLoad:function(options){
    let size = this.getCanvasSize();
    let url=this.data.url;
    this.createQRcode(url,'mycanvas',size.w,size.h);
  },  
  getCanvasSize(){
    let size = {};
    let res=wx.getSystemInfoSync();
    let scale = 600/750;
    let width = res.windowWidth*scale;
    let height = width;
    size.w = width;
    size.h = height;
    return size;
  },
  createQRcode(url,canvasId,canvasW,canvasH){
    QR.api.draw(url, canvasId, canvasW, canvasH)
    this.getTempFilePath()    
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
  },
  //获取临时路径
  getTempFilePath: function () {
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: (res) => {
        this.setData({
          shareTempFilePath: res.tempFilePath
        })
      }
    })
  },
  //保存二维码
  save(){
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareTempFilePath,
      success(res) {
        wx.showToast({
          title: '已保存至本地相册',
          icon: 'success',
          duration: 1000
        })
      },
      fail(){
        console.log('err')
      }
    })
  },
  //分享
  onShareAppMessage: function (res) {
    return {
      title: '二维码生成器',
      path: '/page/index/index'
    }
  }
})
