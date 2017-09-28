---
title: vue学习记录
date: 2017-09-28 10:08:36
tags: 
- Vue
categories: 
- Vue
---


<!-- more -->
指令 (Directives) 是带有 v- 前缀的特殊属性。指令属性的值预期是单个 JavaScript 表达式 
v-bind绑定指令
v-if条件渲染
v-for绑定数据渲染列表
v-on绑定事件监听器
```
<a v-on:click="doSomething">
<a @click="doSomething">
```
v-model实现双向数据绑定
通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上所有的数据绑定：  
双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML ，你需要使用 v-html 指令：

vue.component注册组件
```
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})
```