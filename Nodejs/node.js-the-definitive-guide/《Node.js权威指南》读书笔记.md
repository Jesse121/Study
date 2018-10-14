### 第一章 node.js介绍
#### 非阻塞型I/O机制
当在访问数据库取得搜索结果的时候，在开始访问数据库之后，数据库返回结果之前，存在一段等待时间。  
在传统的单线程处理机制中，在执行了访问数据库的代码之后，整个线程都将暂停下来，等待数据库返回查询结果之后才能继续执行后面的代码。这是I/O型阻塞  
node.js中在执行了访问数据库的代码之后将立即执行其后面的diamante，把数据库返回的结果的处理代码放在回调函数中。这是非阻塞型I/O机制

### 第三章 node.js中的全局作用域及全局函数
timer.unref()用于取消setTimeout或setInterval函数中指定的回调函数的调用  
timer.ref()恢复unref方法取消的回调函数

用于获取当前模块文件名的__filename
用于获取当前目录名的__dirname

emitter.setMaxListeners(n)
默认情况下，如果为特定事件添加了超过 10 个监听器，则 EventEmitter 会打印一个警告
emitter.setMaxListeners() 方法可以为指定的 EventEmitter 实例修改限制。 值设为 Infinity（或 0）表示不限制监听器的数量。
