---
title: 工作中遇到的细节问题总结(一)
date: 2018-04-11 18:13:05
categories: 
- HTML-CSS
tags: 
- CSS    
---
在前端开发工作中总会遇到各种各样的坑，今天这篇博文就是为了记录下踩过的坑，分析后发现容易掉坑里的地方一般是自己不熟悉的知识点或者是易忽略的知识点。故作此文，谨以自勉。

<!-- more -->
#### 取消ios上select,input,button的默认样式
```css
select,input,button{
    -webkit-appearance: none;
}
```
#### ios上overflow:hidden失效

#### 用css3播放逐帧动画
动效设计师给了我们11张(300*300)帧动画图片，现需要用css3以动画的形式播放这些图片  
第一个想到的办法就是通过animation改变DOM元素的背景图片
```less
.boom-2{
    position: fixed;
    width:300px;
    height:300px;
    transform:translate(-50%,-50%);
    pointer-events: none;
    animation: boom-2 1s forwards;
}
@keyframes boom-2{
    0%{
        background-image: url("../hit/0.png");
    }
    10%{
        background-image: url("../hit/1.png");
    }
    20%{
        background-image: url("../hit/2.png");
    }
    30%{
        background-image: url("../hit/3.png");
    }
    40%{
        background-image: url("../hit/4.png");
    }
    50%{
        background-image: url("../hit/5.png");
    }
    60%{
        background-image: url("../hit/6.png");
    }
    70%{
        background-image: url("../hit/7.png");
    }
    80%{
        background-image: url("../hit/8.png");
    }
    90%{
        background-image: url("../hit/9.png");
    }
    100%{
        background-image: url("../hit/10.png");
    }
}
```
结果在chrome firefox上运行良好，可是在IE上看不到效果,在网上搜一下发现  
[background-image不支持动画](https://www.w3.org/TR/css-backgrounds-3/#the-background-image)
既然不行那就在想想办法。

第二种办法就是通过动画改变background-position,在加上已帧动画的形式播放,关键点：`animation-timing-function:steps(11)`;
```less
.boom-2{
    position: fixed;
    width:300px;
    height:300px;
    transform:translate(-50%,-50%) scale(0.5);
    pointer-events: none;
    animation: boomSvg 0.4s steps(11) forwards;
    background-image: url("./boom.png");
}
@keyframes boomSvg{
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 -1100%;
    }
}
```
至此完美解决帧动画播放问题。  
通过这个问题发现自己对css3动画不是非常了解，就顺便在延展下  

animation 属性是一个简写属性，用于设置8个动画属性：
 
* animation-name  //规定需要绑定到选择器的 keyframe 名称
* animation-duration //规定完成动画所花费的时间，以秒或毫秒计。
* animation-timing-function  //规定动画的速度曲线
* animation-delay  //规定在动画开始之前的延迟。
* animation-iteration-count  //规定动画应该播放的次数
* animation-direction  //规定是否应该轮流反向播放动画
* animation-fill-mode  //属性规定动画在播放之前或之后，其动画效果是否可见
* animation-play-state //属性规定动画正在运行还是暂停

**animation-fill-mode**  

|值       |  描述 |
|---------|-------|
|none     |不改变默认行为。|
|forwards |当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。|
|backwards|在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。|
|both     |向前和向后填充模式都被应用。|

**animation-play-state**  

|值       |  描述 |
|---------|-------|
|paused   |规定动画已暂停|
|running  |规定动画正在播放|

**animation-timing-function** 

|值          |  描述 |
|------------|-----------|
|linear      |动画从头到尾的速度是相同的| 
|ease        |默认。动画以低速开始，然后加快，在结束前变慢。|
|ease-in     |动画以低速开始。   |
|ease-out    |动画以低速结束。   |
|ease-in-out |动画以低速开始和结束。|
|cubic-bezier(n,n,n,n)|   在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。|

以上animation-timing-function的值都是实现线性变化（两个状态之间是逐渐变化过去），其实animation-timing-function还可以实现帧动画（两个状态之间是直接跳跃变化）

steps(11,start)
第一个参数 number 为指定的间隔数，即把两关键帧分为 n 步阶段性展示    
第二个参数可选，接受 start 和 end 两个值，指定在每个间隔的起点或是终点发生阶跃变化，默认为 end  

* start在变化过程中，都是以下一帧的显示效果来填充间隔动画，  
* end与上面相反，都是以上一帧的显示效果来填充间隔动画，  

#### line-height属性再探究
```
line-height: normal | <number> | <length> | <percentage> | inherit
Inherited: yes
Percentages: refer to the font size of the element itself
```
line-height默认值为normal  不允许用负值
当元素没有设置高度的时候，其实是由line-height撑开了元素的高度  
以百分数或数字为单位的时候是相对与本身字体大小而得到的计算结果
下面代码中设置的三个行高结果是相同的
```css
div { line-height: 1.2; font-size: 10pt }     /* number */
div { line-height: 1.2em; font-size: 10pt }   /* length */
div { line-height: 120%; font-size: 10pt }    /* percentage */
```

通过设置line-height和height常用于单行文字的垂直居中  

通过line-height也可设置多行文本的垂直居中
<p style="width: 250px; line-height: 150px;">
    <span style="display: inline-block;
            vertical-align: middle;
            line-height: 20px;">asdfkjkj暗示的风景好看阿斯蒂芬框架啊世纪东方sadf </span></p>
```css
p{
    width: 250px;
    line-height: 150px;
}
span{
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;/*作用是设置文本的行高，并覆盖掉父元素的行高*/
}
```


[css行高line-height的一些深入理解及应用](http://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/)  
[参考链接](https://drafts.csswg.org/css2/visudet.html#propdef-line-height)


#### pointer-events属性让点击事件穿透
在直播间特效开发中遇到点击图片无响应(图片父元素已绑定点击事件),仔细研究发现由于特效图片切换太快而不能将点击事件冒泡到父元素   
解决办法：在特效图片上添加以下css属性，这样使得点击事件能够直接穿透到父元素上 
```css
img{
    pointer-events:none;
}
```
pointer-events：auto | none | visiblepainted | visiblefill | visiblestroke | visible | painted | fill | stroke | all  
none:元素永远不会成为鼠标事件的target  
兼容性：IE11+   
[参考链接](http://www.css88.com/book/css/properties/user-interface/pointer-events.htm)


#### Date.parse()获取时间戳IOS不兼容的问题
因为IOS系统不支持2017-01-01格式的时间导致的，  
用正则替换2017-01-01日期格式为2017/01/01后问题解决
```js
var mydata = '2017-01-01 11:00:00';
mydata=mydata.replace(/-/g, '/');
var time = Date.parse(new Date(mydata)) / 1000;
```

#### 移动端禁止页面长按复制
在前端页面开发中有时会因为用户点击而导致页面被全选出现蓝色，这时可以禁用全选
```css
body{
    user-select:none;
}
```
user-select：none | text | all | element  
none：文本不能被选择  
text：可以选择文本  
all：当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素。  
element：可以选择文本，但选择范围受元素边界的约束  
兼容性：IE10+ 需要添加浏览器前缀 -ms- -moz- -webkit-  
详细可参考[user-select](http://www.css88.com/book/css/properties/user-interface/user-select.htm)

#### chrome滚动条样式
该样式只适用于webkit内核浏览器，由于兼容性问题，目前工作中改用改进后的[slimscroll.js插件](http://www.jesse131.cn/articles/jquery/fix-the-plugin-of-slimscroll.html)
```less
.scrollBox{
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-button{
        background-color: transparent;
    }
    &::-webkit-scrollbar-track{
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #fe2545;
        border-radius: 5px;
    }
}
```

#### 镂空字体1
<p style="-webkit-text-stroke: 1px red;color:transparent;font-size:28px;font-weight:bold;">Jesse</p>
关键css:  `-webkit-text-stroke: 1px red;`  
兼容性:   
IE都不兼容 Edge16+ 需要加-webkit-前缀  
firefox58+ 需要加-webkit-前缀  
chrome 需要加-webkit-前缀  

#### 镂空字体2
背景是图片
<div style="background: url('http://o8l2fza1x.bkt.clouddn.com/bg.jpg');-webkit-background-clip:text;"><p style="font-size: 40px;font-weight: bold;-webkit-text-fill-color:transparent;">Jesse</p></div>
关键css:  
```css
div{
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}
```
兼容性：  
IE都不兼容 Edge16+ 需要加-webkit-前缀  
firefox58+ 需要加-webkit-前缀  
chrome 需要加-webkit-前缀  

#### 渐变字体
背景是渐变色
<p style="font-size: 40px;
    color: #fde2ba;
    font-weight:bold;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fffaf3), to(#fbc677));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;">Jesse</p>
```
.text{
    font-size:40px;
    font-weight:bold;
    color: #fde2ba;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fffaf3), to(#fbc677));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

##### 3D字体
用的是多层背景
<div style="text-align: center;
    -webkit-text-stroke: 2px white;
    position: relative;
    text-transform: uppercase;
    color: #252527;
    font-size: 14vw;
    letter-spacing: 1.2vw;
    font-weight: 700;
    text-shadow: 0 1px 0 #4a4a4e, -1px -1px 0 #4a4a4e, /*main 3d shadow*/ -1px 0px 0 #343437, -2px 1px 0 #343437, -3px 2px 0 #313134, -4px 3px 0 #2f2f31, -5px 4px 0 #2c2c2f, -6px 5px 0 #2a2a2c, -7px 6px 0 #27272a, -8px 7px 0 #252527, -9px 8px 0 #232324, -10px 9px 0 #202022, -11px 10px 0 #1e1e1f, -12px 11px 0 #1b1b1d, -13px 12px 0 #19191a, -14px 13px 0 #161617, -15px 14px 0 #141415, -16px 15px 0 #111112, /*top right*/ 0 -1px 1px #ffffff, 0 -2px 0px #ffffff, /*bottom left corner*/ -15px 14px 0px #ffffff, -16px 15px 0px #ffffff, -17px 16px 0px #ffffff, -18px 17px 0px #ffffff, -2px -1px 0 #ffffff, -3px 0px 0 #ffffff, /*top left corner*/ -19px 15px 0 #ffffff, -18px 14px 0 #ffffff, -17px 13px 0 #ffffff, -16px 12px 0 #ffffff, -15px 11px 0 #ffffff, -14px 10px 0 #ffffff, -13px 9px 0 #ffffff, -12px 8px 0 #ffffff, -11px 7px 0 #ffffff, -10px 6px 0 #ffffff, -9px 5px 0 #ffffff, -8px 4px 0 #ffffff, -7px 3px 0 #ffffff, -6px 2px 0 #ffffff, -5px 1px 0 #ffffff, -4px 0px 0 #ffffff, /*lower right / (upper right side for capital T like H etc letters. */ 0px 2px 0px #ffffff, -1px 3px 0px #ffffff, -2px 4px 0px #ffffff, -3px 5px 0px #ffffff, -4px 6px 0px #ffffff, -5px 7px 0px #ffffff, -6px 8px 0px #ffffff, -7px 9px 0px #ffffff, -8px 10px 0px #ffffff, -9px 11px 0px #ffffff, -10px 12px 0px #ffffff, -11px 13px 0px #ffffff, -12px 14px 0px #ffffff, -13px 15px 0px #ffffff, -14px 16px 0px #ffffff, -15px 17px 0px #ffffff;">3d</div>
关键css:
```css
-webkit-text-stroke: 2px white;
text-shadow: 
0 1px 0 #4a4a4e, 
/*main 3d shadow*/ 
-1px -1px 0 #4a4a4e, -1px 0px 0 #343437, -2px 1px 0 #343437, -3px 2px 0 #313134, -4px 3px 0 #2f2f31, -5px 4px 0 #2c2c2f, -6px 5px 0 #2a2a2c, -7px 6px 0 #27272a, -8px 7px 0 #252527, -9px 8px 0 #232324, -10px 9px 0 #202022,-11px 10px 0 #1e1e1f,-12px 11px 0 #1b1b1d,-13px 12px 0 #19191a, -14px 13px 0 #161617, -15px 14px 0 #141415, -16px 15px 0 #111112, 
/*top right*/ 
0 -1px 1px #ffffff, 0 -2px 0px #ffffff, 
/*bottom left corner*/ 
-15px 14px 0px #ffffff, -16px 15px 0px #ffffff, -17px 16px 0px #ffffff, -18px 17px 0px #ffffff, -2px -1px 0 #ffffff,-3px 0px 0 #ffffff, 
/*top left corner*/ 
-19px 15px 0 #ffffff,-18px 14px 0 #ffffff, -17px 13px 0 #ffffff,-16px 12px 0 #ffffff, -15px 11px 0 #ffffff, -14px 10px 0 #ffffff,-13px 9px 0 #ffffff, -12px 8px 0 #ffffff, -11px 7px 0 #ffffff, -10px 6px 0 #ffffff,-9px 5px 0 #ffffff, -8px 4px 0 #ffffff, -7px 3px 0 #ffffff, -6px 2px 0 #ffffff, -5px 1px 0 #ffffff, -4px 0px 0 #ffffff, 
/*lower right / (upper right side for capital T like H etc letters. */ 
0px 2px 0px #ffffff, -1px 3px 0px #ffffff, -2px 4px 0px #ffffff, -3px 5px 0px #ffffff, -4px 6px 0px #ffffff, -5px 7px 0px #ffffff, -6px 8px 0px #ffffff, -7px 9px 0px #ffffff, -8px 10px 0px #ffffff, -9px 11px 0px #ffffff, -10px 12px 0px #ffffff, -11px 13px 0px #ffffff, -12px 14px 0px #ffffff, -13px 15px 0px #ffffff, -14px 16px 0px #ffffff, -15px 17px 0px #ffffff;
```
#### 边框渐变
原理：对外层的div使用循环渐变
<section style="width: 500px;
    height: 200px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #ff233f;
    background: -webkit-repeating-linear-gradient(45deg, #ffc9d0, #ffc9d0 10px, #ff233f 10px, #ff233f 40px);
    overflow: hidden;">
    <div style="width: 480px;
        margin: 10px auto;
        background-color: #f8f4ef;
        height: 180px;
        border-radius: 20px;">
    </div>
</section>
```css
background: -webkit-repeating-linear-gradient(45deg, #ffc9d0 0px, #ffc9d0 10px, #ff 233f 10px, #ff233f 40px);
```
兼容性：
IE11+ Firefox Chrome 基本都支持  


#### 控制元素在IOS设备上是否使用滚动回弹效果
从前端开发的角度讲，只需要知道CSS的属性-webkit-overflow-scrolling是真的创建了带有硬件加速的系统级控件，所以效率很高。但是这相对是耗更多内存的，最好在产生了非常大面积的overflow时才应用。
```css
body {
    -webkit-overflow-scrolling: touch;/*ios*/
}
```

#### css波浪下划线
<div style="text-decoration-style:wavy;text-decoration-color: red;text-decoration-line:underline;">this is a test</div>
```css
div{
    text-decoration-style:wavy;
    text-decoration-color: red;
    text-decoration-line:underline;
}
```
具体参考：
[text-decoration](https://www.w3.org/TR/css-text-decor-3/#text-decoration-skip-property)  
[兼容](https://www.jianshu.com/p/8570433e3669)  

#### css3外发光
<div style="width:100px;height:100px;margin:0 50px;box-shadow: 0 0 10px red;"></div>
```css
div{
    box-shadow: 0 0 10px #000;
}
```

#### ios中激活active伪类
在iOS系统的移动设备中，需要在按钮元素或body/html上绑定一个touchstart事件才能激活:active状态。
```js
//ios中激活active伪类
document.body.addEventListener('touchstart', function () {});
```