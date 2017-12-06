/**
 * @计算出当前手机全屏显示时的最佳比例
 * @authors Jesse (you@example.org)
 * @date    2015-12-28 13:52:33
 * @version $Id$
 */
var appVersion = window.navigator.appVersion; //客户端信息  
var isSystem = appVersion.indexOf("Android") > -1 || appVersion.indexOf("android") > -1 ? "android" : false;
if (isSystem != "android") {
    isSystem = appVersion.indexOf("iPhone") > -1 || appVersion.indexOf("iPod") > -1 ? "iphone" : false;
}

switch (isSystem) {
    case "android":
        alert('android')
        var windowWidth = window.screen.width; //屏幕分辨率
        var devicePixelRatio = window.devicePixelRatio; //屏幕分辨率与像素比
        var targetDensitydpi = 640 / windowWidth * devicePixelRatio * 160;//像素密度（android） 
        document.writeln('<meta name="viewport" content="width=device-width,target-densitydpi=' + targetDensitydpi + ',user-scalable=no">');
        break;
    case "iphone":
        alert('iphone')
        var windowWidth = window.screen.width; //屏幕分辨率
        var targetDensitydpi = windowWidth / 640;
        document.writeln('<meta name="viewport" content="width=device-width,initial-scale=' + targetDensitydpi + ',minimum-scale=' + targetDensitydpi + ', maximum-scale=' + targetDensitydpi + ',user-scalable=no" />');
        document.writeln('<meta name="format-detection" content="telephone=no">');//关闭页面中的数字被浏览器当成电话连接 
        document.writeln('<meta name="apple-mobile-web-app-capable" content="no" />');//关闭ios中的菜单栏和工具栏
        document.writeln('<meta name="apple-mobile-web-app-status-bar-style" content="blank" />');//设置手机状态栏背景为黑色。
        break;
}
