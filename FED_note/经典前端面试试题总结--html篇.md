###### Doctype作用？严格模式与混杂模式如何区分？它们有何意义?  
DOCTYPE声明位于文档中的最前面，告知浏览器的解析器，用什么文档类型规范来解析这个文档。   
严格模式的显示方式是以该浏览器支持的最高标准运行。  
混杂模式是以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。  
DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。  

###### HTML5 为什么只需要写`<!DOCTYPE html>`？
HTML 4.01 中的 doctype 需要对 DTD 进行引用，因为 HTML 4.01 基于 SGML(标准通用标记语言)。
而 HTML 5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为。  

###### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？  
块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p    
行内元素有：a span i em img input select strong  
空元素有： br hr img input link meta   

###### 页面导入样式时，使用link和@import有什么区别？
link属于XHTML标签，而@import是CSS提供的;  
import只在IE5以上才能识别，而link是XHTML标签，无兼容问题;  
页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;  
link支持使用Javascript控制DOM去改变样式而@import不支持。   


###### 常见的浏览器内核有哪些？介绍一下你对浏览器内核的理解？
IE浏览器的内核Trident、Mozilla的Gecko、Chrome的Blink（WebKit的分支）、Opera内核原为Presto，现为Blink；  
浏览器的内核的不同对网页的语法解释会有不同，所以渲染的效果也不相同。   

###### HTML5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
新特性：

1. 新的doctype声明和字符集
2. 引入新的语义化的标签元素（header,nav,footer,aside,article,section）移除旧的元素
3. 新的属性及API canvas audio video geolocation postMessage websockets webworker drag and drop webstorage 表单控件，calendar、date、time、email、url、search 

移除的元素：  
纯表现的元素：basefont，big，center，font, s，strike，tt，u；  
对可用性产生负面影响的元素：frame，frameset，noframes；

处理兼容性：
```
<!--[if lt IE 9]> 
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> 
<![endif]--> 
```
区分：
DOCTYPE声明新增的结构元素、功能元素

###### 简述一下你对HTML语义化的理解？
html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
在没有样式的情况下也以一种文档格式显示，并且是容易阅读的。
搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。
使阅读源代码的人对网站更容易理解，便于阅读维护。
```html
<header>
    <nav>
        <ul>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
        </ul>
    </nav>
</header>
<main>
    <article></article>
    <aside></aside>
</main>
<footer>
    copyright &copy; jesse
</footer>
```

###### 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest
文件，如果是第一次访问 app，那么浏览器就会根据 manifest 文件的内容
下载相应的资源并且进行离线存储。如果已经访问过 app 并且资源已经离线存
储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的
 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何
操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储;离
线的情况下，浏览器就直接使用离线存储的资源;

###### HTML5的离线储存怎么使用，工作原理能不能解释一下？
在用户没有与因特网连接时，可以正常访问站点和应用，在用户与因特网连接
时，自动更新用户机器上的缓存文件;
原理：HTML5 的离线存储是基于一个新建的.appcache 文件的缓存机制（不是存储技术），通过这个文件上的解析清单离
线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离
线状态下时，浏览器会通过被离线存储的数据进行页面展示;  
如何使用：  

1. 页面头部像下面一样加入一个 manifest 的属性;
`<html manifest="application.appcache">`
2. 在 application.appcache 文件中编写离线存储的资源;
```
CACHE MANIFEST        #v0.11
CACHE:
js/app.js
css/style.css
NETWORK:
resource/logo.png
FALLBACK:
/  /offline.html    
```
3. 在离线状态时，操作 window.applicationCache 进行需求实现;

###### 请描述一下 cookies，sessionStorage 和 localStorage 的区别？
共同点：都是保存在浏览器端，且同源的。  
区别：  

1. 数据与服务器之间的交互方式:cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。  
2. 存储大小限制不同:cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M。  
3. 数据有效期不同:sessionStorage仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。  
4. 作用域不同:sessionStorage在不同的浏览器窗口中不共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。

Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要自己封装setCookie，getCookie。

###### iframe有那些缺点？
iframe会阻塞主页面的Onload事件；  
iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
动态给iframe添加src属性值，这样可以可以绕开以上两个问题。

###### Label的作用是什么？是怎么用的？（加 for 或 包裹）
```html
label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
<label for="username">
    用户名：<input type="text" name="userame" id="username" autocomplete="off">
</label>
```

###### HTML5的form如何关闭自动完成功能？
```html
<form>
    <label for="username">
        <input type="text" name="userame" id="username" autocomplete="off">
    </label>
</form>
```

###### 如何实现浏览器内多个标签页之间的通信? 
方法一：localStorage
1.html
```html
<input id="name">
<input type="button" id="btn" value="提交">
<script type="text/javascript">
$(function() {
  $("#btn").click(function() {
    var name = $("#name").val();
    localStorage.setItem("name", name);
  });
});
</script>
```
2.html
```html
<script type="text/javascript">
  $(function() {
    window.addEventListener("storage", function(event) {
      console.log(event.key + "=" + event.newValue);
    });
  });
</script>
```
方法二：cookie+interval
1.html
```html
<input type="text" id="name"><input type="button" id="btnOK" value="发送">  
<script type="text/javascript">
$(function(){  
 $("#btnOK").click(function(){  
       varname=$("#name").val();  
       document.cookie="name="+name;  
   });  
});  
</script>
```
2.html
```js
//获取Cookie天的内容  
function getKey(key) {  
    return JSON.parse("{\""+ document.cookie.replace(/;\s+/gim,"\",\"").replace(/=/gim, "\":\"") +"\"}")[key];  
}
//每隔1秒获取Cookie的内容  
setInterval(function(){  
    console.log(getKey("name"));  
 },1000);  
```

###### webSocket如何兼容低浏览器？
Adobe Flash Socket 、 ActiveX HTMLFile (IE) 、 基于 multipart 编码发送 XHR 、 基于长轮询的 XHR

###### 页面可见性（Page Visibility API） 可以有哪些用途？
兼容性：
Chrome 21
FireFox 16.0.2
Opera 12.11
IE10

通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间
等;在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放;

###### 如何在页面上实现一个圆形的可点击区域？
```html
方法一：块状a标签+ border-radius属性
<a href="http://www.baidu.com" style="display:block;width:100px;height:100px;border-radius:50%;"></a>;
方法二：img+map+area
<img src="images/lanlvseImg.png" usemap="#Map" />    
<map name="Map" id="Map">  
    <area shape="circle" coords="100,100,50" href="http://www.baidu.com" target="_blank"/>  
</map>  
方法三：div创建圆形(border-radius) + click事件
```

###### 实现不使用 border 画出1px高的线，在不同浏览器的Quirksmode和CSSCompat模式下都能保持同一效果。
```html
<div style="width:100px; background-color: red;height:1px;margin:50px;overflow:hidden;"></div>
```

###### 网页验证码是干嘛的，是为了解决什么安全问题？
区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、
论坛灌水;有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行
不断的登陆尝试;

###### title与h1的区别、b与strong的区别、i与em的区别？
title与h1的区别：  
h1突出文章主题，面对用户，更突出其视觉效果，title突出网站标题或关键字。一篇文章，一个页面最好只用一个h1，多个h1会稀释主题。一个网站可以有多个title,最好一个单页用一个title，以便突出网站页面主体信息，从seo看，title权重比h1高，适用性比h1广。标记了h1的文字页面给予的权重会比页面内其他权重高很多。一个好的网站是h1和title并存，既突出h1文章主题，又突出网站主题和关键字。达到双重优化网站的效果。

b与strong的区别：
盲人朋友使用阅读设备阅读网络时：strong会重读，b不会  
两者虽然在网页中显示效果一样，但实际目的不同。  
b这个标签对应 bold，即文本加粗，其目的仅仅是为了加粗显示文本，是一种样式／风格需求；
strong这个标签意思是加强字符的语气，表示该文本比较重要，提醒读者／终端注意。为了达到这个目的，浏览器等终端将其加粗显示；  
总结：`<b>`为了加粗而加粗，`<strong>`为了标明重点而加粗，也可以用其它方式来强调，比如下划线，比如字体加大，比如红色，等等，可以通过css来改变strong的具体表现。  

i与em的区别:
尽管都是展示成斜体，但em标签是针对搜索引擎来起作用的，有强调的作用，i标签只是让用户看到展示的是斜体。


###### IE csshack
```css
.bb{
    background-color:#f1ee18;/*所有识别*/
    .background-color:#00deff\9; /*IE6、7、8识别*/
    +background-color:#a200ff;/*IE6、7识别*/
    _background-color:#1e0bd1;/*IE6识别*/ 
} 
```



