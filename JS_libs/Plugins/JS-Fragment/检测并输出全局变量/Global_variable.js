/**
 * 检测并输出全局变量
 * @authors Jesse (jesse152@163.com)
 * @date    2016-09-21 19:04:27
 */
 (function() {
     var iframe = document.createElement('iframe');
     iframe.onload = function() {
         var iframeKeys = Object.keys(iframe.contentWindow);

         Object.keys(window).forEach(function(key) {
             if(iframeKeys.indexOf(key) < 0) {
                 console.log(key+":"+window[key]);
             }
         })
     };
     iframe.src = 'about:blank';
     document.body.appendChild(iframe);
 })();
