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
#### v-bind
动态地绑定一个或多个特性，或一个组件 prop 到表达式
v-if条件渲染
v-for绑定数据渲染列表
v-on绑定事件监听器
```
<a v-on:click="doSomething">
<a @click="doSomething">
```
#### v-model
v-model在表单控件或者组件上通过获取value值等达到双向数据绑定

#### v-once
通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上所有的数据绑定：  
#### v-html
双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML ，你需要使用 v-html 指令：

#### v-cloak
这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 
```
[v-cloak] { 
    display: none 
} 
```
一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

vue.component注册组件
```
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})
```

#### 生命周期
beforeCreate
created 创建
beforeMount
mounted 挂载
beforeUpdate
updated 更新
beforeDetroy
destroyed 销毁


### filter(), concat() 和 slice()
这些非变异方法不会改变原始数组，总是生成一个新数组  
如果需要视图更新需要使用新数组替换旧数组

new vue({
    el:"",
    data: ,
    computed: ,
    template: ,
    component: ,
    watch:,
    methods ,
    directives: 
})
