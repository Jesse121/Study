## Javascript设计模式
面向对象编程的三大基本特征：封装 继承 多态
### 封装
把需要的方法和属性封装在类里
#### 利用闭包实现封装
由于Javascript 的函数级作用域，声明在函数内部的变量以及方法在外界是访问不到的，通过此特性即可创建类的私有变量和私有方法。通过this创建的属性和方法，在类创建对象时每个对象自身都拥有一份并且外部可以访问到，因此可看作是公有属性和公有方法
```js
var Book = (function(){
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkBook(name){}
    //创建类
    function _book(newId,newName,newPrice){
        //私有变量
        var name,price;
        //私有方法
        function checkId(id){}
        //特权方法
        this.getName = function(){};
        this.getPrice = function(){};
        this.setName = function(newName){
            this.name = newName;
        };
        this.setPrice = function(newPrice){
            this.price = newPrice;
        };
        //公有属性
        this.id = newId;
        //公有方法
        this.copy = function(){};
        bookNum ++ ;
        if(bookNum > 100){
            throw new Error('error');
        }
        //构造器
        this.setName(name);
        this.setPrice(price);
    }
    //构建原型
    _book.prototype = {
        //静态公有属性
        isJSBook:false,
        //静态公有方法
        display:function(){}
    };
    return _book;
})();
var book = new Book(123,'js',25);
```
#### 创建对象的安全模式
```js
var Book = function(title,time,type){
    if(this instanceof Book){
        this.title = title;
        this.time = time;
        this.type = type;
    }else{
        return new Book(title,time,type);
    }
};
var book = Book('javascript','2018','js');
```

### 继承
#### 类式继承
```js
function SuperClass(){
    this.superValue = true;
}
SuperClass.prototype.getSuperValue = function(){
    return this.superValue;
}
function SubClass(){
    this.subValue = false;
}
SubClass.prototype = new SuperClass() //将父类的实例赋值给子类的原型
```
#### 构造函数继承
```js
function SuperClass(){
    this.id = id;
    this.books = ['js','html','css'];
}
SuperClass.prototype.showBook = function(){
    return this.books;
}
function SubClass(id){
    SuperClass.call(this,id)//将子类的this在父类中执行一遍，实现了继承，没有涉及原型，子类创建的实例是独立的
}
```
#### 组合继承
```js
function SuperClass(name){
    this.name = name;
    this.books = ['html','css','js'];
}
SuperClass.prototype.getName = function(){
    console.log(this.name)
}
function SubClass(name){
    SuperClass.call(this,name);
}
SubClass.prototype = new SuperClass();  //父类构造函数调用2遍
```
#### 原型式继承
```js
function inherit(o){
    function F(){}
    F.prototype = o; //和类式继承一样，引用类型属性被共用
    return new F();
}
```
#### 寄生组合式继承
```js
function inheritPrototype(subClass,superClass){
    var  p = inherit(superClass.prototype);
    p.constructor = subClass;//因为重写子类的原型导致需要修正其constructor
    subClass.prototype = p;//将父类的原型的实例赋值给子类的原型
}
function SuperClass(name){
    this.name = name;
    this.books = ['html','css','js'];
}
SuperClass.prototype.getName = function(){
    console.log(this.name)
}
function SubClass(name){
    SuperClass.call(this,name);
}
inheritPrototype(SubClass,SuperClass);
```
#### 工厂模式
由工厂对象决定创建某一种对象类的实例。主要用来创建同一类对象
```js
//多个构造函数
var Basketball = function (){}
var Football = function (){}
var Tennis = function(){}
//工厂函数用于实例化多个对象
var SportFactory = function(name){
    switch (name){
        case 'NBA':
        return new Basketball();
        case 'wordCup':
        return new Football();
        case 'FrenchOpen':
        return new Tennis();
    }
}
```
#### 创建者模式
将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示
```js
var Human = function(){}
Human.prototype = {}
var Name = function(){}
Name.prototype = {}
var Work = function(){}
Work.prototype = function(){}
var Person = function(name,work){
    var _person = new Human();
    _person.name = new Name(name);
    _person.work = new Work(work);
    return _person; 
}
```
#### 单例模式
只允许实例化一次的类，用一个对象来规划命名空间。
```js
var LazySingle = (function(){
    var _instance = null;
    function Single(){
        //定义私有属性和方法
        return {
            publicMethod：funciton(){},
            publicProperty:'1.0'
        }
    }
    return function(){
        if(!_instance){
            _instance = Singles();
        }
        return _instance;
    }
})()
```
#### 装饰者模式
在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以满足用户更复杂的需求
```js
var decorator = function(input,in){
    var input = document.getElementById(input);
    if(typeof input.onclick === 'function'){
        var oldClickFn = input.onclick;
        input.onclick = function(){
            oldClickFn();
            fn();//扩展click事件
    }else{
        input.onclick = fn;
    }
}
```
