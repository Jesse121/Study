### 指令
指令 (Directives) 是带有 v- 前缀的特殊属性。指令属性的值预期是单个 JavaScript 表达式 
#### v-bind
动态地绑定一个或多个特性，或一个组件 prop 到表达式
v-if条件渲染
v-for绑定数据渲染列表 注意添加:key
v-on绑定事件监听器
```
<a v-on:click="doSomething">
<a @click="doSomething">
```
#### v-model
v-model在表单控件或者组件上通过获取value值等达到双向数据绑定
type="text"  v-model值为文本
type="radio"  v-model值为单选的value
type="checkbox"  v-model值为布尔值
type="checkbox" 共有name属性 v-model值为被勾选的checkbox的数组
select v-model也是数组

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

#### 生命周期详解
##### beforeCreate  
在**实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前**被调用。
##### created
在实例创建完成后被立即调用。  
在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，**挂载阶段还没开始，$el 属性目前不可见**。  
**一般用于异步数据的请求和初始化 ** 
##### beforeMount
在挂载开始之前被调用：相关的 render 函数首次被调用。  
#### mounted 挂载
el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。  
如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。  
初始数据的dom渲染完毕，可以获取到dom  
注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
```
mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
}
```
#### beforeUpdate
数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
#### updated 更新
对数据更新做统一处理
当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated
实例中所有的数据变化做统一处理
#### beforeDestory
实例销毁之前调用。在这一步，实例仍然完全可用。
#### destroyed 销毁
Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

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

#### watch
针对某一个数据变化的更新
