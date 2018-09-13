// pages/lock/lock.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    color:'#67ad65',//前景色
    bgColor:'#f0f0f2',//背景色
    canvasWidth:0,
    canvas1:'',//用来画上面的大圆
    canvas2:'',//用两个canvas是因为需要画折线，并且画后面的折线时要清空之前的画的无用的折线
    R:0,//大圆的半径
    circles:[], // 用来存储 n*n 个 circle 的位置
    touchCircles:[], // 用来存储已经触摸到的所有 circle
    restCircles:[], // 还未触到的 circle
    touchFlag:false, // 用于判断是否 touch 到 circle
    reDraw:false, //表示是否需要重绘
    setPassword:{},
    showWarning:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let myCanvasWidth = 0
    wx.getSystemInfo({
      success: function (res) {
        myCanvasWidth = res.screenWidth
      },
    })
    this.setData({
      canvasWidth: myCanvasWidth
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.data.canvas1 = wx.createCanvasContext('canvas1')
    this.data.canvas2 = wx.createCanvasContext('canvas2')
    this.createCircles()
    this.initPassword()
    app.globalData.firstLaunch = false      
  },
  createCircles: function () {
    var n = 3; //大圆的个数
    // 盒子的宽度 = (n+1)个空白间隔区域的宽度 + n个圆的宽度
    // this.data.canvasWidth = (n+1)*2/3*2*r + n*2*r
    this.setData({
      R : 3 * this.data.canvasWidth / (4 + 10 * n)
    })
    const R = this.data.R
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        var circlePos = {
          x: j * 10 / 3 * R + 7 / 3 * R, //圆的x坐标
          y: i * 10 / 3 * R + 7 / 3 * R, //圆的y坐标
          id: i * 3 + j
        }
        this.data.circles.push(circlePos);
        this.data.restCircles.push(circlePos);
      }
    }
    this.drawCircles();
  },
  drawCircles: function () { // 画大圆
    for (var i = 0, len = this.data.circles.length; i < len; i++) {
      this.drawCircle(this.data.circles[i].x, this.data.circles[i].y);
    }
    this.data.canvas1.draw();
  },
  drawCircle: function (x, y) { // 画圆
    const ctx = this.data.canvas1
    ctx.setStrokeStyle(this.data.color);
    ctx.setFillStyle('transparent');//给圆填充背景色，遮盖canvas2上的折线
    ctx.setLineWidth(1);
    ctx.beginPath();
    ctx.arc(x, y, this.data.R, 0, Math.PI * 2, true); //0~2PI顺时针画圆弧
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  },
  initPassword: function () {
    wx.getStorage({
      key: 'HandLockPassword',
      success: (res)=>{
        this.setData({
          setPassword:{
            model:3,
            text: res.data.split('-')
          }
        })
        this.updateInfo();
      },
      fail:()=>{
        this.setData({
          setPassword: { model: 1, text: [] }
        })
        this.updateInfo();
      }
    })
  },
  updateInfo: function () { // 根据当前模式，更新info
    if (this.data.showWarning) { //如果已存在红色提示信息，则将其设置为黑色
      this.setData({
        showWarning: false
      })
    }
    if (this.data.setPassword.model === 1) { // 1 表示初始化设置密码
      this.setData({
        title: '请设置手势密码'
      })
    } else if (this.data.setPassword.model === 2) { // 2 表示确认密码
      this.setData({
        title: '请再次输入以确认密码'
      })
    } else if (this.data.setPassword.model === 3) { // 3 表示验证密码
      this.setData({
        title: '请输入手势密码'
      })
    }
  },
  touchStart:function(e){
    var p = this.getTouchPosition(e)
    this.judgePos(p);
  },
  touchMove:function(e){
    return (this.throttle(function (e) {
      var p = this.getTouchPosition(e);
      if (this.data.touchFlag) {
        this.update(p);
      } else {
        this.judgePos(p);
      }
    }, 16, 16))(e)
  },
  touchEnd:function(){
    if (this.data.touchFlag) {
      this.setData({
        touchFlag:false
      })
      this.checkPassword();
      this.data.restCircles = this.data.restCircles.concat(this.data.touchCircles.splice(0)); // 将resetCircles,touchCircles初始化
      this.reset();
      var timer = setTimeout(()=>{
        this.setData({
          showWarning:false
        })
        clearTimeout(timer);
      }, 400);
    }
  },
  getTouchPosition: function (e) { // 获得触摸点的相对位置
    var p = { // 相对坐标
      x: e.touches[0].x,
      y: e.touches[0].y
    };
    return p;
  },
  judgePos: function (p) { // 判断 触点 是否在 circle 內
    for (let i = 0, len = this.data.restCircles.length; i < len; i++) {
      if (Math.abs(p.x - this.data.restCircles[i].x) < this.data.R && Math.abs(p.y - this.data.restCircles[i].y) < this.data.R) {
        this.data.touchCircles.push(this.data.restCircles[i]);
        this.data.restCircles.splice(i, 1);
        this.setData({
          touchFlag: true,          
          reDraw: true
        })
        break;
      }
    }
  },
  throttle: function (func, delay, mustRun) { // 节流函数
    var timer, startTime = new Date(),
      self = this;
    return function (e) {
      var curTime = new Date(),
        args = arguments;

      /* 修复一个 bug，由于延迟导致的 preventDefault 失效 */
      if (e) {
        e.preventDefault ? e.preventDefault() : null;
        e.stopPropagation ? e.stopPropagation() : null;
      }
      clearTimeout(timer);
      if (curTime - startTime >= mustRun) {
        startTime = curTime;
        func.apply(self, args);
      } else {
        timer = setTimeout(function () {
          func.apply(self, args);
        }, delay)
      }
    }
  },
  checkPassword: function () { // 判断当前模式和检查密码
    var model = this.data.setPassword.model,
      text = this.data.setPassword.text,
      success = true,
      tc = this.data.touchCircles; //已经划过的圆
    function check () {
      if (tc.length === text.length) { // 先要验证密码是否正确
        for (var i = 0; i < tc.length; i++) {
          if (tc[i].id != text[i]) {
            success = false;
          }
        }
      } else {
        success = false;
      }
    };

    if (model === 1) { // 设置密码
      if (tc.length < 5) { // 验证密码长度
        this.setData({
          showWarning:true,
          title:'至少连接5个点，请重新绘制'
        })
      } else {
        for (var i = 0; i < tc.length; i++) {
          text.push(tc[i].id);
        }
        this.setData({
          setPassword:{
            model: 2,
            text:text
          }        
        })
        this.updateInfo();
      }
    } else if (model === 2) { // 确认密码
      check();
      if (success) {
        wx.setStorage({
          key: "HandLockPassword",
          data: text.join('-')
        })

        wx.showToast({
          title: '手势密码设置成功',
          icon: 'success',
          duration: 500
        })
        this.setData({
          setPassword: {
            model: 3,
            text:text
          }
        })
        this.updateInfo();
      } else {
        wx.showToast({
          title: '密码不一致，请重新设置',
          icon: 'none',
          duration: 500
        })
        this.setData({ // 由于密码不正确，回到 model 
          setPassword: {
            model: 1,
            text: [] //清空之前的密码
          }
        }) 
      }
    } else if (model === 3) { // 验证密码
      check();
      if (success) {
        wx.showToast({
          title: '恭喜你，验证通过',
          icon: 'success',
          duration: 500,
          success:function(){
            wx.redirectTo({
              url: '/pages/index/index'
            })
          }
        })
        
      } else {
        wx.showToast({
          title: '很遗憾，密码错误',
          icon: 'none',
          duration: 500
        })
      }
    }
  },
  reset: function () { // 重置 canvas
    this.data.canvas2.clearRect(0, 0, this.data.canvasWidth, this.data.canvasWidth);
    this.data.canvas2.draw();
    this.data.canvas1.clearRect(0, 0, this.data.canvasWidth, this.data.canvasWidth); // 清空画布，为了防止设置密码时重复画
    this.data.canvas1.draw();
    this.drawCircles();
  },
  update: function (p) { // 更新 touchmove
    this.drawLine2TouchPos(p); //在canvas2画折线
    this.judgePos(p); //判断下一点是否在圆内
    if (this.data.reDraw) {
      this.setData({
        reDraw:false
      })
      this.drawPoints(); //画实心圆
      this.drawLine(); //在canvas1画折线
    }
  },
  drawLine2TouchPos: function (p) {
    var len = this.data.touchCircles.length,
      ctx2 = this.data.canvas2;
    if (len >= 1) {
      var x1 = this.data.touchCircles[len - 1].x;
      var x2 = p.x;
      var y1 = this.data.touchCircles[len - 1].y;
      var y2 = p.y;
      var o;
      if (y1 >= y2) {
        if (x2 >= x1) { //左上半部分
          o = Math.atan((y1 - y2) / (x2 - x1));
        } else {
          o = Math.PI + Math.atan((y1 - y2) / (x2 - x1));
        }
      } else {
        if (x2 >= x1) { //左下半部分
          o = -Math.atan((y2 - y1) / (x2 - x1));
        } else {
          o = Math.PI - Math.atan((y2 - y1) / (x2 - x1));
        }
      }
      var xn1 = x1 + this.data.R * Math.cos(o);
      var yn1 = y1 - this.data.R * Math.sin(o);
      var xn2 = 0;
      var yn2 = 0;
      if(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)< Math.pow(this.data.R,2)){
          xn2 = xn1;
          yn2 = yn1;
      }else{
        xn2 = x2;
        yn2 = y2;
      }
      // ctx2.clearRect(0, 0, this.data.canvasWidth, this.data.canvasWidth); // 先清空
      // ctx2.draw();
      ctx2.setStrokeStyle(this.data.color)
      ctx2.beginPath();
      ctx2.setLineWidth(4);
      ctx2.moveTo(xn1, yn1);
      ctx2.lineTo(xn2, yn2);
      ctx2.stroke();
      ctx2.closePath();
      ctx2.draw();
    }
  },
  drawPoints: function () { // 画实心圆点
    var i = this.data.touchCircles.length - 1,
    ctx1 = this.data.canvas1;
    if (i >= 0) {
      ctx1.setFillStyle(this.data.color)
      ctx1.beginPath();
      ctx1.arc(this.data.touchCircles[i].x, this.data.touchCircles[i].y, this.data.R / 3, 0, Math.PI * 2, true);
      ctx1.closePath();
      ctx1.fill();
      ctx1.draw(true);
    }
  },
  drawLine: function () { // 画折线
    var len = this.data.touchCircles.length,
      ctx1 = this.data.canvas1;
    if (len >= 2) {
      var x1 = this.data.touchCircles[len - 2].x;
      var x2 = this.data.touchCircles[len - 1].x;
      var y1 = this.data.touchCircles[len - 2].y;
      var y2 = this.data.touchCircles[len - 1].y;
      var o;
      if (y1 >= y2) {
        if (x2 >= x1) { //左上半部分
          o = Math.atan((y1 - y2) / (x2 - x1));
        } else {
          o = Math.PI + Math.atan((y1 - y2) / (x2 - x1));
        }
      } else {
        if (x2 >= x1) { //左下半部分
          o = -Math.atan((y2 - y1) / (x2 - x1));
        } else {
          o = Math.PI - Math.atan((y2 - y1) / (x2 - x1));
        }
      }
      var xn1 = x1 + this.data.R * Math.cos(o);
      var yn1 = y1 - this.data.R * Math.sin(o);
      var xn2 = x2 - this.data.R * Math.cos(o);
      var yn2 = y2 + this.data.R * Math.sin(o);
      ctx1.beginPath();
      ctx1.setStrokeStyle(this.data.color);
      ctx1.setLineWidth(4);
      ctx1.moveTo(xn1, yn1);
      ctx1.lineTo(xn2, yn2);
      ctx1.stroke();
      ctx1.closePath();
      ctx1.draw(true);//若reserver参数为true，则保留当前画布上的内容
    }
  },

  modifiedPassword:function(){
    wx.clearStorage('HandLockPassword')
    wx.redirectTo({
      url: '/pages/lock/lock',
    })
  },





 


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})