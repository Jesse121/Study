### 深入理解JavaScript系列（10）：JavaScript核心（晋级高手必读篇）
#### 执行上下文栈(Execution Context Stack)
当一段程序开始时，会先进入全局执行上下文环境[global execution context], 这个也是堆栈中最底部的元素。此全局程序会开始初始化，初始化生成必要的对象[objects]和函数[functions]. 在此全局上下文执行的过程中，它可能会激活一些方法（当然是已经初始化过的），然后进入他们的上下文环境，然后将新的元素压入堆栈。在这些初始化都结束之后，这个系统会等待一些事件（例如用户的鼠标点击等），会触发一些方法，然后进入一个新的上下文环境。
#### 执行上下文(Execution Context)
一个执行的上下文可以抽象的理解为object。每一个执行的上下文都有一系列的属性（我们称为上下文状态）(变量对象(variable object)，this指针(this value)，作用域链(scope chain) )  
#### 变量对象(Variable Object)
变量对象(variable object) 是与执行上下文相关的数据作用域(scope of data) 。
它是与上下文关联的特殊对象，用于存储被定义在上下文中的变量(variables)和函数声明(function declarations)。  
在global全局上下文中，变量对象也是全局对象自身[global object]。
#### 活动对象(activation object)
在一个函数上下文中，变量对象被表示为活动对象(activation object)。它包含普通参数(形参)(formal parameters) 与特殊参数(实参)(arguments)对象(具有索引属性的参数映射表)。
#### 作用域链(Scope Chains)
作用域链是一个对象列表(list of objects)，用以检索上下文代码中出现的标识符(identifiers) 。  
标示符[Identifiers]可以理解为变量名称、函数声明和普通参数。例如，当一个函数在自身函数体内需要引用一个变量，但是这个变量并没有在函数内部声明（或者也不是某个参数名），那么这个变量就可以称为自由变量[free variable]。那么我们搜寻这些自由变量就需要用到作用域链。
#### 闭包(Closures)
闭包是一系列代码块（在ECMAScript中是函数），并且静态保存所有父级的作用域。通过这些保存的作用域来搜寻到函数中的自由变量。  
还有一个很重要的点，几个函数可能含有相同的父级作用域（这是一个很普遍的情况，例如有好几个内部或者全局的函数）。在这种情况下，在[[Scope]]中存在的变量是会共享的。一个闭包中变量的变化，也会影响另一个闭包的。
```javascript
var data = [];
 
for (var k = 0; k < 3; k++) {
  data[k] = function () {
    alert(k);
  };
}
 
data[0](); // 3, but not 0
data[1](); // 3, but not 1
data[2](); // 3, but not 2
```
因为所有函数共享同一个[[Scope]]，其中循环变量为最后一次复赋值。
#### This指针
this是执行上下文环境的一个属性，而不是某个变量对象的属性  
和变量不同，this是没有一个类似搜寻变量的过程。当你在代码中使用了this,这个 this的值就直接从执行的上下文中获取了，而不会从作用域链中搜寻。this的值只取决中进入上下文时的情况
### 深入理解JavaScript系列（13）：This? Yes,this!
#### 函数代码中的this 
this与上下文中可执行代码的类型有直接关系，this值在进入上下文时确定，并且在上下文运行期间永久不变  
影响了函数代码中this值的变化有几个因素：

- 在通常的函数调用中，this是由激活上下文代码的调用者来提供的，即调用函数的父上下文(parent context )。this取决于调用函数的方式。
```javascript
function foo() {
  alert(this);
}
foo(); // global
alert(foo === foo.prototype.constructor); // true
// 但是同一个function的不同的调用表达式，this是不同的
foo.prototype.constructor(); // foo.prototype
```
一个函数上下文中确定this值的通用规则如下：

- 在一个函数上下文中，this由调用者提供，由调用函数的方式来决定。如果调用括号()的左边是引用类型的值，this将设为引用类型值的base对象（即拥有属性的那个对象），在其他情况下（与引用类型不同的任何其它属性），这个值为null。不过，实际不存在this的值为null的情况，因为当this的值为null的时候，其值会被隐式转换为全局对象。  

**注**：第5版的ECMAScript中，已经不强迫转换成全局变量了，而是赋值为undefined。

### 深入理解JavaScript系列（14）：作用域链(Scope Chain)
作用域链正是内部上下文所有变量对象（包括父变量对象）的列表
```javascript
var x = 10;
function foo() {
  var y = 20;
  alert(x + y);
}
foo(); // 30
```
函数“foo”如何访问到变量“x”？ 是通过函数内部的[[scope]]属性来实现的。  
[[scope]]是所有父变量对象的层级链，处于当前函数上下文之上，在函数创建时存于其中。  
[[scope]]在函数创建时被存储－－静态（不变的），永远永远，直至函数销毁  
通过函构造函数创建的函数的[[scope]]属性总是唯一的全局对象
