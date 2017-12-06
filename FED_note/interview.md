介绍JavaScript的基本数据类型。

说说写JavaScript的基本规范？

JavaScript原型，原型链 ? 有什么特点？

JavaScript有几种类型的值？（堆：原始数据类型和 栈：引用数据类型），你能画一下他们的内存图吗？

Javascript如何实现继承？

Javascript创建对象的几种方式？

Javascript作用链域?

谈谈this对象的理解。

eval是做什么的？

什么是window对象? 什么是document对象?

null，undefined的区别？

写一个通用的事件侦听器函数(机试题)。

["1", "2", "3"].map(parseInt) 答案是多少？

关于事件，IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

什么是闭包（closure），为什么要用它？

javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？

如何判断一个对象是否属于某个类？

new操作符具体干了什么呢?

用原生JavaScript的实现过什么功能吗？

Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

对JSON的了解？


[].forEach.call($$("*"),
```
function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) }) 
```
能解释一下这段代码的意思吗？

js延迟加载的方式有哪些？

Ajax 是什么? 如何创建一个Ajax？

同步和异步的区别?

如何解决跨域问题?

页面编码和被请求的资源编码如果不一致如何处理？

模块化开发怎么做？

AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？

requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）

JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？

谈一谈你对ECMAScript6的了解？

ECMAScript6 怎么写class，为什么会出现class这种东西?

异步加载的方式有哪些？

documen.write和 innerHTML的区别?

DOM操作——怎样添加、移除、移动、复制、创建和查找节点?

.call() 和 .apply() 的作用和区别？

数组和对象有哪些原生方法，列举一下？

JS 怎么实现一个类。怎么实例化这个类

JavaScript中的作用域与变量声明提升？

如何编写高性能的Javascript？

那些操作会造成内存泄漏？

JQuery的源码看过吗？能不能简单概况一下它的实现原理？

jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？

jquery中如何将数组转化为json字符串，然后再转化回来？

jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

jquery.extend 与 jquery.fn.extend的区别？

jQuery 的队列是如何实现的？队列可以用在哪些地方？

谈一下Jquery中的bind(),live(),delegate(),on()的区别？

JQuery一个对象可以同时绑定多个事件，这是如何实现的？

是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？

jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）

针对 jQuery性能的优化方法？

Jquery与jQuery UI有啥区别？

JQuery的源码看过吗？能不能简单说一下它的实现原理？

jquery 中如何将数组转化为json字符串，然后再转化回来？

jQuery和Zepto的区别？各自的使用场景？

针对 jQuery 的优化方法？

Zepto的点透问题如何解决？

jQueryUI如何自定义组件?

需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

如何判断当前脚本运行在浏览器还是node环境中？（阿里）

移动端最小触控区域是多大？

jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?

把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？

移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）

知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?

Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？

解释JavaScript中的作用域与变量声明提升？

那些操作会造成内存泄漏？

JQuery一个对象可以同时绑定多个事件，这是如何实现的？

Node.js的适用场景？

(如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?

解释一下 Backbone 的 MVC 实现方式？

什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?

知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?

如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?

前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?

简述一下 Handlebars 的基本用法？

简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

用js实现千位分隔符?(来源：前端农民工，提示：正则+replace)

检测浏览器版本版本有哪些方式？

What is a Polyfill?

做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？

我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？

使用JS实现获取文件扩展名？

JavaScript
一、  JavaScript原型，原型链 ? 有什么特点？
二、  eval是做什么的？
它的功能是把对应的字符串解析成JS代码并运行；应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
三、  null，undefined 的区别？
四、  写一个通用的事件侦听器函数。
    // event(事件)工具集，来源：github.com/markyun
    markyun.Event = {
        // 页面加载完成后
        readyEvent : function(fn) {
            if (fn==null) {
                fn=document;
            }
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = fn;
            } else {
                window.onload = function() {
                    oldonload();
                    fn();
                };
            }
        },
        // 视能力分别使用dom0||dom2||IE方式 来绑定事件
        // 参数： 操作的元素,事件名称 ,事件处理程序
        addEvent : function(element, type, handler) {
            if (element.addEventListener) {
                //事件类型、需要执行的函数、是否捕捉
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, function() {
                    handler.call(element);
                });
            } else {
                element['on' + type] = handler;
            }
        },
        // 移除事件
        removeEvent : function(element, type, handler) {
            if (element.removeEnentListener) {
                element.removeEnentListener(type, handler, false);
            } else if (element.datachEvent) {
                element.detachEvent('on' + type, handler);
            } else {
                element['on' + type] = null;
            }
        }, 
        // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
        stopPropagation : function(ev) {
            if (ev.stopPropagation) {
                ev.stopPropagation();
            } else {
                ev.cancelBubble = true;
            }
        },
        // 取消事件的默认行为
        preventDefault : function(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        // 获取事件目标
        getTarget : function(event) {
            return event.target || event.srcElement;
        },
        // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
        getEvent : function(e) {
            var ev = e || window.event;
            if (!ev) {
                var c = this.getEvent.caller;
                while (c) {
                    ev = c.arguments[0];
                    if (ev && Event == ev.constructor) {
                        break;
                    }
                    c = c.caller;
                }
            }
            return ev;
        }
    }; 
五、  Node.js的适用场景？
高并发、聊天、实时消息推送
六、  介绍js的基本数据类型。
number,string,boolean,object,undefined
七、  Javascript如何实现继承？
通过原型和构造器
八、  ["1", "2", "3"].map(parseInt) 答案是多少？
[1, NaN, NaN] 因为 parseInt 需要两个参数 (val, radix)，其中 radix 表示解析时用的基数。map 传了 3 个 (element, index, array)，对应的 radix 不合法导致解析失败。
九、  如何创建一个对象? （画出此对象的内存图）
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sing = function() { alert(this.name) } 
  } 
十、  谈谈This对象的理解。
this是js的一个关键字，随着函数使用场合不同，this的值会发生变化。但是有一个总原则，那就是this指的是调用函数的那个对象。this一般情况下：是全局对象Global。 作为方法调用，那么this就是指这个对象 
十一、 事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。  
 2. 事件处理机制：IE是事件冒泡、火狐是 事件捕获；
 3. ev.stopPropagation();
十二、 什么是闭包（closure），为什么要用它？
执行say667()后,say667()闭包内部变量会存在,而闭包内部函数的内部变量不会存在.使得Javascript的垃圾回收机制GC不会收回say667()所占用的资源，因为say667()的内部函数的执行需要依赖say667()中的变量。这是对闭包作用的非常直白的描述.
  function say667() {
    // Local variable that ends up within closure
    var num = 666;
    var sayAlert = function() { alert(num); }
    num++;
    return sayAlert;
}
 var sayAlert = say667();
 sayAlert()//执行结果应该弹出的667  
十三、 "use strict";是什么意思 ? 使用它的好处和坏处分别是什么？
十四、 如何判断一个对象是否属于某个类？
  使用instanceof （待完善）
   if(a instanceof Person){
       alert('yes');
   }
十五、 new操作符具体干了什么呢?
     1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
     2、属性和方法被加入到 this 引用的对象中。
     3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。
var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj); 
十六、 Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
hasOwnProperty
十七、 JSON 的了解？
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
{'age':'12', 'name':'back'}
十八、 js延迟加载的方式有哪些？
defer和async、动态创建DOM方式（用得最多）、按需异步载入js
十九、 ajax 是什么?
二十、 同步和异步的区别?
二十一、    如何解决跨域问题?
jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面
二十二、    模块化怎么做？立即执行函数,不暴露私有成员
    var module1 = (function(){
    　　　　var _count = 0;
    　　　　var m1 = function(){
    　　　　　　//...
    　　　　};
    　　　　var m2 = function(){
    　　　　　　//...
    　　　　};
    　　　　return {
    　　　　　　m1 : m1,
    　　　　　　m2 : m2
    　　　　};
    　　})(); 
二十三、    AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？
二十四、    异步加载的方式有哪些？
  (1) defer，只支持IE
  (2) async：
  (3) 创建script，插入到DOM中，加载完毕后callBack
二十五、    documen.write和 innerHTML的区别
document.write只能重绘整个页面
innerHTML可以重绘页面的一部分
二十六、    .call() 和 .apply() 的区别？
  例子中用 add 来替换 sub，add.call(sub,3,1) == add(3,1) ，所以运行结果为：alert(4); 
  注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。
    function add(a,b)
    {
        alert(a+b);
    }
    function sub(a,b)
    {
        alert(a-b);
    }
    add.call(sub,3,1);  
二十七、    Jquery与jQuery UI 有啥区别？
*jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等。
*jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。
 提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等
二十八、    JQuery的源码看过吗？能不能简单说一下它的实现原理？
二十九、    jquery 中如何将数组转化为json字符串，然后再转化回来？
jQuery中没有提供这个功能，所以你需要先编写两个jQuery的扩展：
    $.fn.stringifyArray = function(array) {
        return JSON.stringify(array)
    }
    $.fn.parseArray = function(array) {
        return JSON.parse(array)
    } 
    然后调用：
    $("").stringifyArray(array)
三十、 针对 jQuery 的优化方法？
*基于Class的选择性的性能相对于Id选择器开销很大，因为需遍历所有DOM元素。
*频繁操作的DOM，先缓存起来再操作。用Jquery的链式调用更好。   
 比如：var str=$("a").attr("href");
*for (var i = size; i < arr.length; i++) {}
 for 循环每一次循环都查找了数组 (arr) 的.length 属性，在开始循环的时候设置一个变量来存储这个数字，可以让循环跑得更快： 
 for (var i = size, length = arr.length; i < length; i++) {}
三十一、    JavaScript中的作用域与变量声明提升？
三十二、    如何编写高性能的Javascript？
三十三、    那些操作会造成内存泄漏？
内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
三十四、    JQuery一个对象可以同时绑定多个事件，这是如何实现的？
三十五、    如何判断当前脚本运行在浏览器还是node环境中？（阿里）
通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中
三十六、    对Node的优点和缺点提出了自己的看法？
*（优点）因为Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求，
  因此构建在Node上的代理服务器相比其他技术实现（如Ruby）的服务器表现要好得多。
  此外，与Node代理服务器交互的客户端代码是由javascript语言编写的，
  因此客户端和服务器端都用同一种语言编写，这是非常美妙的事情。

*（缺点）Node是一个相对新的开源项目，所以不太稳定，它总是一直在变，
  而且缺少足够多的第三方库支持。看起来，就像是Ruby/Rails当年的样子。


  一、    你有哪些性能优化的方法？
  （看雅虎14条性能优化原则）。
  （1） 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
  （2） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
  （3） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
  （4） 当需要设置的样式很多时设置className而不是直接操作style。
  （5） 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
  （6） 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
  （7） 图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。
  （8） 避免在页面的主体布局中使用table，table要等其中的内容完全下载之后才会显示出来，显示比div+css布局慢。
二、  http状态码有那些？分别代表是什么意思？
100-199 用于指定客户端应相应的某些动作。 
200-299 用于表示请求成功。 
300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。 
400-499 用于指出客户端的错误。
400   语义有误，当前请求无法被服务器理解。
401   当前请求需要用户验证 
403  服务器已经理解请求，但是拒绝执行它。
500-599 用于支持服务器错误。 
503 – 服务不可用
三、  一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）
    查找浏览器缓存 
    DNS解析、查找该域名对应的IP地址、重定向（301）、发出第二个GET请求
    进行HTTP协议会话
    客户端发送报头(请求报头)
    服务器回馈报头(响应报头)
    html文档开始下载
    文档树建立，根据标记请求所需指定MIME类型的文件
    文件显示
    [
    浏览器这边做的工作大致分为以下几步：
    加载：根据请求的URL进行域名解析，向服务器发起请求，接收文件（HTML、JS、CSS、图象等）。
    解析：对加载到的资源（HTML、JS、CSS等）进行语法解析，建议相应的内部数据结构（比如HTML的DOM树，JS的（对象）属性表，CSS的样式规则等等）
    }
四、  平时如何管理你的项目？
        先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等；
        编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；
        标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；
        页面进行标注（例如 页面 模块 开始和结束）；
        CSS跟HTML 分文件夹并行存放，命名都得统一（例如style.css）；
        JS 分文件夹存放 命名以该JS功能为准的英文翻译。
        图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理
五、  说说最近最流行的一些东西吧？常去哪些网站？
    Node.js、Mongodb、npm、MVVM、MEAN、three.js 
六、  移动端（Android IOS）怎么做好用户体验?
    清晰的视觉纵线、信息的分组、极致的减法、
    利用选择代替输入、标签及文字的排布方式、
    依靠明文确认密码、合理的键盘利用、
