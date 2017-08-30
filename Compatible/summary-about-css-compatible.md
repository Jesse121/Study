---
title: CSS兼容问题大全
date: 2017-08-25 07:04:21
categories: 
- HTML-CSS
tags: 
- CSS
---
作为一个前端开发工程师保证页面具有良好的兼容性是我们的基本职责，但是对于那些古老的浏览器的兼容问题的调试是一件非常痛苦的事情。从IE6一路走来，经历了各种无法想象的不兼容问题，可我还是耐着性子，本着以发现问题，分析问题，解决问题的精神，一步步将问题处理掉。每碰到一个关于CSS兼容性问题我就将其记下（bug总有消完的一天），陆陆续续记了很久才有了这篇内容，并且后续将一直更新。  
如今市场早已抛弃IE6/7，IE6/7的兼容问题解决办法这里就不展示了(可在源码中的注释里查看)  
关于CSS3的兼容性问题可参见我的这篇博文[CSS3新特性，兼容性，兼容方法总结](http://www.jesse131.cn/blog/articles/html-css/css3-new-features-compatibility-compatibility-methods-summary.html),所以在本文中就不包含CSS3了。

<!-- more -->

### chrome 最小字体的兼容性
问题描述：ff和IE最小字体可设置为1px，可是chorme中文版最小字体是12px，小于12px的字体全部显示为12px.
解决方案：chrome支持CSS3的缩放属性scale，可用以下方法来解决
```css
.test{
    display:block;/*必要的时候将其转为块状元素*/
    font-size : 12px;
    transform : scale(0.84,0.84) ;
    font-size:10px\9;/*\9能被IE6、7、8、9、10识别*/
}
```
但是scale只对块状元素起作用，非块状元素可以将其转为块状元素。

### IE8下a标签内图片蓝色边框
问题描述：显示效果就是Chrome、FireFox、IE10以上都没有问题，但是IE8就多出了一个蓝色边框（有时为黑色的）。
解决办法：
```css
img{
    border-style:none;
}
```
### img图片下的莫名留白问题
问题描述：图片底部的空隙实际上涉及行内元素的布局模型，图片默认的垂直对齐方式是基线，而基线的位置是与字体相关的。所以在某些时候，图片底部的空隙可能是 2px，而有时可能是 4px 或更多。不同的 font-size 应该也会影响到这个空隙的大小。
解决方法：给img设定 display:block或者vertical-align:top或bottom。

### ff不识别background-position-y 或background-position-x;
问题描述：在设置background-position属性时，firefox不识别不识别background-position-y 或background-position-x;
解决办法：background-position:x y;两个都写；




### IE CSS hack
css hack是指一种兼容css在不同浏览器中正确显示的技巧方法
```
.header {_width:100px;}            /* IE6专用*/
.header {*width:100px;}            /* IE6、IE7共用*/
.header {width:100px\0;}           /* IE8、IE9共用*/
.header {width:100px\9;}           /* IE6/7/8/9/10共用*/
```

 
### IE专用条件注释
```html
<!--[if !IE]><!-->
<P>您使用不是IE</P>
<!--<![endif]-->

<!--IE8及以下 -->
<!--[if lte IE 8]>
<link rel="stylesheet" type="text/css" href="ie.css" />
<![endif]-->

<!--IE8 -->
<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="ie8.css" />
<![endif]-->

<!--IE8及以上 -->
<!--[if gte IE 8]>
<link rel="stylesheet" type="text/css" href="ie8.css" />
<![endif]-->
```




### Firefox 与 Chrome 的 Hack
```css
/*Firefox only*/
@-moz-document url-prefix() {
    .header {
        background-color: #4eff00;
    }
}   
/*Chrome only*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    .header {
        background-color: #f1ee18;
    }
}    
```

### IE中设置滚动条颜色，在FF chorme中无效
问题描述：
```css
html {
    scrollbar-face-color:red;
    scrollbar-highlight-color:#fff;
    scrollbar-shadow-color:blue;
    scrollbar-3dlight-color:blue;
    scrollbar-arrow-color:green;
    scrollbar-track-color:#fff;
    scrollbar-darkshadow-color:red;
}
```






<!-- ### IE67不识别 before/after伪类
.example:before, .example before {}
.example:after, .example after {} 
一个有冒号，一个是空格分隔。前者IE8+及其他现代浏览器；后者为IE6-7准备的。

### a链接的hover状态不起作用。
问题描述：a:hover img{width:300px} 我们想让鼠标hover时，链接里包含的图片宽度变化，这样的样式ie6是不认的，在ie7、ff下才有效果。

### block化的a链接不起作用
问题描述：block化的a链接，其内套absolute层，absolute层内放置img，ie7以下鼠标点击img不会有链接效果，ff chorme下正常。

### IE6/7下不识别display:inline-block
解决方法如下：
让标准浏览器识别display:inline-block;
让ie6/7识别display:inline;来覆盖上面的display:inline-block;然后通过zoom:1;来触发haslayout让inline元素在ie中表现得和inline-block元素一样。
.list1 li{display:inline-block; width:150px; *zoom:1;*display:inline;}
加上*zoom:1;(触发ie6和ie7下的haslayout);
*display:inline(只有ie6和ie7识别);
注：一定要加在display:inline-block;后面。

### IE6下双边距bug。
问题描述：ie6下给浮动容器定义margin-left 或者margin-right 实际效果是数值的2倍。
解决方案：给浮动容器定义display:inline。

### IE6下两个层中间有间隙 
产生条件：当一个与浮动元素相邻的非浮动元素并没有指定具体的高度或宽度时，非浮动元素中的内容会和浮动元素的边界产生3px的空隙。这个空隙只沿着非浮动元素显示。如果非浮动的元素指定了一个具体的宽度或高度，这个时候非浮动元素和浮动元素出现了3px的空隙。
解决办法：第一个浮动元素设置margin-right:-3px;

### IE6下当多个浮动元素中间夹杂着HTML注释语句时，如果浮动元素宽度为100%，则在下一行多显示一个上一行最后一个字符。
解决办法：给所有浮动元素添加display:inline;。

### IE6无法定义1px左右高度的容器 
IE6下这个问题是因为默认的行高造成的
解决方法: overflow:hidden;或 zoom:0.08; 

### IE6下不识别min-width/min-height
解决方法：
(1)：.abc{border:1px blue solid;width:200px;height:200px;}
     html>body .abc{width:auto;height:auto;min-width:200px;min-height:200px;}
(2)：.abc{width:200px;height:200px;_width:200px;_height:200px;}
（因为ie6有一个特征，当定义一个高度时，如果内容超过高度，元素会自动调整高度。）
 

### IE6下z-index不起作用
1）首先讲讲第一种z-index无论设置多高都不起作用情况。这种情况发生的条件有两个：
1、父标签position属性为relative；2、问题标签含有浮动(float)属性。
2）所有浏览器：父标签position属性为relative或absolute时，子标签的absolute属性是相对于父标签而言的。而在IE6下，层级的表现有时候不是看子标签的z-index多高，而要看它们的父标签的z-index谁高谁低。

### IE6下!important
IE789/firefox可以识别!important,看到此语句后就不会在执行第二句
IE6会跳过!important语句（不识别）直接执行第二句
这是一个误区
大家注意一下，IE6只是在某些情况下不识别
例：div{background:red!important} div{background:green}，这时所有浏览器统一解释为背景色red。
 -->