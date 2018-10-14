### chapter 4 

##### 实用的全局对象
process:所有全局执行上下文的内容都在process对象中

process.nextTick()可以将一个函数的执行时间规划到下一个事件循环中：
```
process.nextTick(function(){
    console.log('a')
})
```
相当于setTimeout(fn,1)

##### 事件
在node中你也可以进行事件的监听和分发，node暴露了EventEmitter,该api上定义了on emit以及removeListener方法
```
var EventEmitter = require('events').EventEmitter,a = new EventEmitter
a.on('event',function(){
    console.log('event called')
});
a.emit('event')
```

### chapter 5

process.pwd()获取当前工作目录
process.chdir('/')更改工作目录
process.env访问shell环境下的变量
process.exit(1)退出当前程序

