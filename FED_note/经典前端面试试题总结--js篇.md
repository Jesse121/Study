##经典前端面试JavaScript试题总结

### 数组去重
编写一个方法去掉一个数组中重复的元素
```javascript
var arr = [1, 2, 3, 1, 43, 12, 12, '1'];
//方法一：splice()直接删除重复的元素
function unique(arr){
    for(var i = 0;i < arr.length;i++){
        for(var j = i + 1;j < arr.length;j++){
            if(arr[i] === arr[j]){
                arr.splice(j--,1);
            }
        }
    }
    return arr;
}
//方法二：ES5 Array.indexOf() map()
function unique(arr){
    var result = [];
    arr.map(function(item){
        if(result.indexOf(item) < 0){
            result.push(item);
        }
    })
    return result;
}
//方法三： ES6 Array.from() Set数据结构
//Array.from() 方法从一个类似数组或可迭代的对象中创建一个新的数组实例。
// Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
function unique(arr){
    return Array.from(new Set(arr))
}
```

### 深浅拷贝
js深浅拷贝主要针对的是具有一定深度的复杂对象，即对象的属性值也是一个对象,例如：  
```js
var obj={  
    a:{  
        son1:'aa',  
        son2:'bb'  
    }  
};
var arr = [[1,2],[3,4]];
```
#### 浅拷贝
只会将对象的各个属性进行依次复制，并不会进行递归复制，而js存储对象都是存地址的，所以会导致属性地址引用。
```js
//方法一： shallowCopy()
function shallowCopy(obj){
    if(typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
var clone = shallowCopy(obj);
console.log(clone); //{ a: { son1: 'aa', son2: 'bb' }, b: 20 }
obj.a.son1 = 555; 
console.log(clone); //{ a: { son1: 555, son2: 'bb' }, b: 20 }

//方法二： Object.assign()
var clone = Object.assign({},obj);
console.log(clone);//{ a: { son1: 'aa', son2: 'bb' }, b: 20 }
obj.a.son1 = 555;
console.log(clone);//{ a: { son1: 555, son2: 'bb' }, b: 20 }

//方法三:jQuery.extend()
var clone = $.extend({},obj);
console.log(clone);//{ a: { son1: 'aa', son2: 'bb' }, b: 20 }
obj.a.son1 = 555;
console.log(clone);//{ a: { son1: 555, son2: 'bb' }, b: 20 }

//如果对象是数组，还可以用数组的slice conact方法  
var clone = arr.slice();
var clone = arr.concat([]);
```
#### 深拷贝
它不仅将原对象的各个属性逐个复制，而且将原对象各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上。
```js
//方法一：deepCopy()
function deepCopy(){
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
var clone = deepCopy(obj);
console.log(clone);//{ a: { son1: 'aa', son2: 'bb' }, b: 20 }
obj.a.son1 = 555;
console.log(clone);//{ a: { son1: 'aa', son2: 'bb' }, b: 20 }

//方法二：JSON.parse(JSON.stringify(obj))
//它能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构。
var clone = JSON.parse(JSON.stringify(obj));
console.log(clone);//{ a: { son1: 'aa', son2: 'bb' }, b: 20 }
obj.a.son1 = 555;
console.log(clone);//{ a: { son1: 'aa', son2: 'bb' }, b: 20 }

//方法三:jQuery.extend()
var clone = $.extend(true,{},obj);
console.log(clone);//{ a: { son1: 'aa', son2: 'bb' }, b: 20 }
obj.a.son1 = 555;
console.log(clone);//{ a: { son1: 'aa', son2: 'bb' }, b: 20 }
```

### 排序算法
将数组中的数据的从小到大排列
#### sort()
```javascript
var arr = [1, 2, 3, 13, 43, 12, 15, 87];
var result = arr.sort(function(a,b){
  return a - b;
});
console.log(result);//[ 1, 2, 3, 12, 13, 15, 43, 87 ]
```
#### 冒泡排序
##### 算法步骤
1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

![冒泡排序](http://o8l2fza1x.bkt.clouddn.com/bubbleSort.gif)

```js
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
bubbleSort(arr);//[ 1, 2, 3, 12, 13, 15, 43, 87 ]
```
#### 选择排序
##### 算法步骤
1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

![选择排序](http://o8l2fza1x.bkt.clouddn.com/selectionSort.gif)

```js
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
console.log(selectSort(arr));//[ 1, 2, 3, 12, 13, 15, 43, 87 ]
```
#### 插入排序
##### 算法步骤
1. 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

![插入排序](http://o8l2fza1x.bkt.clouddn.com/insertionSort.gif)

```js
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
```
其他排序算法详见[十大经典排序算法](https://sort.hust.cc/)

#### 闭包的原理及使用场景
##### 闭包的原理
Javascript允许使用内部函数—即函数定义和函数表达式位于另一个函数的函数体内。无论通过何种手段将内部函数传递到所在的词法作用域以外，他都会持有对原始定义域的引用，无论在何处执行这个函数都会产生闭包  

##### 闭包的使用场景
1.创建私有属性和私有方法(模块模式)  
```js
var Counter = (function() {
  //私有属性
  var privateCounter = 0; 
  //私有方法
  function changeBy(val) { 
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();
```
2.使用定时器 setTimeout() setInterval()
```js
function wait(message){
    setInterval(function timer(){ //将timer函数传递给setInterval
        console.log(message)      //setInterval()函数持有对内部函数timer的引用， 
    },1000)
}
wait("Hello World!");
```
3.事件监听函数中
```js
function test(name) {
    $('ele').on('click', function () {
        console.log(name);
    }); 
}
test("jesse");
```
4.封装功能
```js
function Modal(option){
    var modal;    
    createDom();
    return new _constructor();
    
    function createDom(){
        modal = document.createElement('div');
        modal.className = 'modal hide';
        document.body.appendChild(modal);
    }

    function _constructor(){
        this.modal = modal;
        this.option = option;
        this.show = show;
        this.hide = hide;
    }
    
    function show(){
        modal.classList.remove('hide');
    }
    
    function hide(){
        modal.classList.add('hide');
    }
}
var modalInst = new Modal();
```
面试题
```js
function fun(n,o) {
  console.log(o);
  return {
    fun:function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0); a.fun(1); a.fun(2); a.fun(3);//undefined,0,0,0
var b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2
var c = fun(0).fun(1); c.fun(2); c.fun(3);//undefined,0,1,1
```

#### this
```javascript
var fullname = 'John Doe';
var obj = {
        fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};
console.log(obj.prop.getFullname());  //'Aurelio De Rosa'
var test = obj.prop.getFullname;
console.log(test()); //'John Doe'   
console.log(test.call(obj.prop));  //'Aurelio De Rosa' 
```
Javascript中关键字this所指代的函数上下文，取决于函数是怎样被调用的，而不是怎样被定义的。
```js
var num = 20;
var obj = {
    num: 30,
    fn: (function (num) {
        this.num *= 3;
        num += 15;
        var num = 45;
        return function () {
            this.num *= 4;
            num += 20;
            console.log(num);
        }
    }) (num)
}

var fn = obj.fn;
fn();//65
obj.fn();//85
```


#### 函数式编程

#### 函数柯里化

#### 最大公约数
```js
//欧几里得算法 利用a,b的余数与最大公约数之间存在整数倍关系
//令c = gcd(a,b) 则存在a=k1*c,b=k2*c
//令r = a mod(b) 则存在r+k3*b = a
//r = a-k3*b = k1*c=k3*k2*c = (k1-k3*k2)*c  整数倍关系
function gcd(a, b) {
  var t;
  if (a < b) {
    t = b, b = a, a = t;
  }
  while (b != 0) {
    t = b, b = a % b, a = t;
  }
  return a;
}
```

#### 判断是否是质数
```javascript
function isPrime(num){ 
    if(typeof num !== "number"){
        return false;
    }
    if(num < 2){
        return false;
    }
    for(var i = 2; i < num/2 + 1;i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}
```
#### 判断字符串是否是回文



#### 统计字符串中出现次数最多的字符
```javascript
var str = 'asdfssaaasasasasaa';
//方法一：
function maxTimes(str){
    var arr = str.split(''),obj = {},maxValue = 0,maxKey;
    for(var i = 0,len = arr.length;i < len;i += 1){
        if(arr[i] in obj){
            obj[arr[i]]++;  //注意不能obj.arr[i]++
        }else{
            obj[arr[i]] = 1;
        }
    }
    for(var key in obj){
        if(obj[key] > maxValue){
            maxValue = obj[key];
            maxKey = key;
        }
    }
    return console.log("字符串"+str+"中出现次数最多的字符是"+maxKey+"次数是"+maxValue);
}
maxTimes(str);
//方法二：
function maxTimes(){
    var maxValue = 0,maxKey;
    var info = str.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});
    for(var key in info){
        if(info[key] > maxValue){
            maxValue = info[key];
            maxKey = key;
        }
    }
    return console.log("字符串"+str+"中出现次数最多的字符是"+maxKey+"次数是"+maxValue);
}
```





#### 其他

4.网页中实现一个计算当年还剩多少时间的倒数计时程序，要求网页上实时动态显示“××年还剩××天××时××分××秒”
```javascript
var nowTime = new Date();
var year = nowTime.getFullYear();
var nextYear = new Date(year+1,0,1).getTime();
var intDiff = (nextYear - nowTime.getTime())/1000;
var day = hour = minute = second = 0; //时间默认值       
function auto(){
    day    = Math.floor(intDiff / (60 * 60 * 24));
    hour   = Math.floor(intDiff / (60 * 60) % 24);  //取模运算获取剩下的时间
    minute = Math.floor(intDiff / 60 % 60);
    second = Math.floor(intDiff % 60);
    minute=minute<10?'0'+minute:minute;
    second=second<10?'0'+second:second;
    $('#time').html(year+"年还剩"+day+"天"+hour+"时"+minute+"分"+second+"秒");
    intDiff--;
}
auto();
window.setInterval(auto,1000);
```
6.
```javascript
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}
```
请写出以下输出结果：
Foo.getName(); //2
getName();//5   正确答案4  在js中函数的声明比变量优先级要高并且定义过程不会被变量覆盖 除非是赋值
Foo().getName();//1
getName();//5  正确答案1
new Foo.getName();//2
new Foo().getName();//1  正确答案3
new new Foo().getName();  //正确答案3
分析过程：  
页面初始化时，js执行流进入全局作用域上下文，首先在全局作用域中查找函数声明和变量声明，查找到
```
Foo:function()
getName:function()
```
此时该作用域上下文中有
```
VA:
    Foo:function(){}
    getName:function(){}
this:
    global(window)
scope chain：
    

```



7.
```javascript
(function() {
    var a = b = 5;
})();
console.log(b); //5  b被赋予为全局变量。
```
这一题的陷阱是，在函数表达式中有两个赋值，但a是用关键字var 来声明的，这意味着a是局部变量，而b则被赋予为全局变量。
另一个陷阱是，它并没有使用严格模式（use strict）。在函数里面，如果启用了严格模式，代码就会报错。
8.给String对象定义一个repeatify方法。该方法接收一个整数参数，作为字符串重复的次数，最后返回重复指定次数的字符串。例如：`console.log('hello'.repeatify(3));//hellohellohello`
```javascript
String.prototype.repeatify = String.prototype.repeatify || function(times){
    var str = '';
    for(var i = 0;i < times;i++){
        str += this;
    }
    return str;
}
```
  

11.
```javascript
(function(x){   
    delete x;  //delete操作符只能作用在对象的属性上，对变量和函数名无效。 
    return x;//1   
})(1);
```
12.
```javascript
var y = 1, x = y = typeof x;  //赋值表达式从右向左执行,y被重新赋值为typeof x的结果，也就是undefined
console.log(x);//"undefined"
```
13.
```javascript
var foo = {   
    bar: function() { 
        return this.baz; 
    },   
    baz: 1  
};   
(function(){   
    return typeof arguments[0]();//"undefined"    arguments[0]得到是是真正的bar函数的值，而不是foo.bar这个引用
})(foo.bar);//this指向window
```
13.
```javascript
var f = (function f() {return '1'; }, function g() {return 2; })();
console.log(f); //2  逗号操作符 对它的每个操作对象求值（从左至右），然后返回最后一个操作对象的值
```





