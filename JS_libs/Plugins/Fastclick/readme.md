---
title: zepto点透现象分析和fastclick解决之道
date: 2017-10-01 11:03:02
categories: 
- 
tags: 
- 
---


<!-- more -->
zepto的点透现象分析  
利用touchstart和touchend来合成tap事件，但是在touchend事件中并没有阻止事件流的传递，所以若外层div有click事件，则会因冒泡传递到这而触发click事件
fastclick解决之道
利用touchstart和touchend来合成自己的click事件，同时在需要触发click事件的元素上阻断事件流(e.perventDefault();),进而阻止了原生click事件的触发，同时将事件流传递给自己合成的click事件
