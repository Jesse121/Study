---
title: 如何编写高性能的javascript
date: 2017-12-06 08:08:18
categories:
- Javascript
tags:
- Javascript
---
作为前端工程师javascript可谓是基本功，那么如何写出高性能的js代码呢？这就需要我们平时在编码的时候注意各种写法，本文就简单介绍了几种策略，希望对大家的工作起到帮助^_^

<!-- more -->

#### 1.减少全局变量的使用，避免冲突 
全局变量的问题在于,你的JavaScript应用程序和web页面上的所有代码都共享了这些全局变量,他们住在同一个全局命名空间,所以当程序的两个不同部分定义同名但不同作用的全局变量的时候,命名冲突在所难免。并且全局变量在js运行完后并不会被垃圾回收机制回收，因此这块内存一直被占用着  

* 使用匿名函数
```js
//合理的利用命名空间达到匿名函数之间的通信
var GLOBAL = {};
(function(){
    var test = "123";
    GLOBAL.a = test;
    //A code  
}())

(function(){
    //B code  
    console.log(GLOBAL.a)
}())
```
* 注意隐式全局变量  
以下是反例，请勿模仿
```js
function foo() { 
    var a = b = 0;//b是全局变量
    // ... 
}
```

#### 2.使用高性能的变量或属性值读取方式
若函数在运行过程中遇到一个变量，就会判定从哪里取的数据值，在这个过程中会顺着作用域链查找此名称的标识符，该搜索会从最近的作用域开始，如果找到了就使用这个变量值，如果没找到就会进入外层作用域中，直至最外层的全局作用域。一个变量在作用域链上查找的层级越多则读取速度就越慢，因此函数中局部变量访问速度最快，全部变量访问速度最慢。  

最好的做法是将变量定义为本作用域的局部变量，如果需要频繁的访问一个外部作用域的变量，最好是用一个局部变量保存外部变量。  
例1：jQuery插件开发中传入的window和document就是将全局变量保存为本作用域中的局部变量
```js
;(function($, window, document, undefined){
    $.fn.extend({
        pluginName : function(){
            return this.each(function(){
                // plugin implementation code here
            });
        };
    })
})(jQuery, window, document);
```
例2：将for循环长度缓存
```js
for(var i = 0,len = arr.length; i < len; i++){
    arr[i] *= 2;
}
```
意义：在js代码中需要访问到变量时，需要注意到是否存在这种问题，特别是需要频繁访问的变量，尽量将外部作用域中的变量或对象上的属性值缓存在局部变量中，以提高读取性能。

#### 3.避免使用with(),eval()
当代码流执行到一个with()表达式时，运行期上下文的作用域链被临时改变了。一个新的可变对象将被创建，它包含指定对象的所有属性。此对象被插入到作用域链的前端，意味着现在函数的所有局部变量都被推入第二个作用域链对象中，所以访问代价更高了。  
eval()接受任意的字符串，并当作JavaScript代码来处理  
当你在 JavaScript 代码中执行(另一段)JavaScript 代码时,你付出二次评估的代价。此代码首先被评估 为正常代码,然后在执行过程中,运行字符串中的代码时发生另一次评估。二次评估是一项昂贵的操作,
与直接包含相应代码相比将占用更长时间。
```js
var num1 = 5,num2 = 6;
result = eval("num1 + num2")//字符串内的代码会进行第二次评估
```
同样重要的是要记住，给setInterval(), setTimeout()和Function()构造函数传递字符串，大部分情况下，与使用eval()是类似的，因此要避免。

#### 4.高效的DOM操作

* 合并多次DOM操作为单次操作
```js
//优化方案1
element.style.cssText += "border: 1px solid #ccc;"
//优化方案2
element.className += 'empty';
element.classList.add('empty');//IE兼容性不太好
```
* 把DOM元素离线或隐藏后修改
    + 使用文档片段
    + 设置display:none;来隐藏元素
    + 克隆DOM元素到内存中，操作完后再替换    
* 设置具有动画效果的DOM元素脱离文档流
    + 设置DOM元素的position属性为fixed或position
* 谨慎获取DOM元素的布局信息
    + offsetTop, offsetLeft, offsetWidth, offsetHeight
    + scrollTop, scrollLeft, scrollWidth, scrollHeight
    + clientTop, clientLeft, clientWidth, clientHeight
    + getComputedStyle() (currentStyle in IE)  
当你查询布局信息如偏移量、滚动条位置，或风格属性时，浏览器刷新队列并执行所有修改操作，以返回最新的数值。最好是尽量减少对布局信息的查询次数，查询时将它赋给局部变量，并用局部变量参与计算。
* 利用事件委托方式绑定事件  
页面中元素绑定的事件越多，占用的处理时间和内存就越大，性能也就越差

#### 5.if-else与switch 比较
大多数情况下switch 表达式比if-else 更快，但只有当条件体数量很大时才明显更快。两者间
的主要性能区别在于：当条件体增加时，if-else 性能负担增加的程度比switch更多。因此，我们的自然倾向认为条件体较少时应使用if-else 而条件体较多时应使用switch 表达式，如果从性能方面考虑也是正确的。

优化if-else  
优化if-else的目标总是最小化找到正确分支之前所判断条件体的数量。最简单的优化方法是将最常见的条件体放在首位


#### 6.释放内存
尽量减少使用全局变量，全局变量在整个页面生命周期中不会被回收  
确保解除不需要的事件监听  
不要再闭包中返回外界不需要的对象，会造成内存泄漏，无法回收

#### 7.函数有递归时使用尾递归优化
递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
factorial(5) // 120
```
上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 。  
如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。
```js
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
factorial(5, 1) // 120
```



参考文献：

1. 高性能的javascript
2. 深入理解javascript系列
