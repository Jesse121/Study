### 第2章 this call apply
bind()方法底层实现
```js
Function.prototype.bind = function(context){
    var self = this;//this指向func函数
    return function(){
        return self.apply(context,arguments);
    }
};
var obj = {
    name:'seven'
}
var func = function(){
    alert(this.name);
}.bind(obj);
func();
```

### 第3章 闭包和高阶函数
#### 高阶函数的应用
函数柯里化
```js
var curring = function(fn){
    var args = [];
    return  function(){
        if(arguments.length === 0){
            return fn.apply(this,args);
        }else{
            [].push.apply(args,arguments);
            return arguments.callee;
        }
    }
}
var cost = (function(){
    var money = 0;
    return function(){
        for(var i = 0;,l = arguments.length;i < l;i++){
            money += aruments[i];
        }
        return money;
    }
})()
var cost = curring(cost);
cost(100);
console.log(cost());
```
uncurring()
```js
Function.prototype.uncurring = fucntion(){
    var self = this;
    return function(){
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj,arguments);
    }
}
var push = Array.prototype.push.uncurring();
(function(){
    push(arguments,4);
    console.log(arguments); //[1,2,3,4]
})(1,2,3);
```
函数节流，用于解决函数频繁被调用而造成的性能问题
```js
var throttle = function(fn,interval){
    var _self = fn,timer,firstTime = true;
    return function(){
        var args = arguments,_me = this;
        if(firstTime){
            _self.apply(_me,args);
            return firstTime = false;
        }
        if(timer){//500毫秒之内再次触发的缩放事件不处理
            return false;
        }
        timer = setTimeout(function(){
            clearTimeout(timer);
            timer = null;
            _self.apply(_me,args);
        },interval||500);
    };
};
window.onresize = throttle(function(){
    console.log(1)
},500);
```
惰性加载函数
```js
var addEvent = function( elem, type, handler ){
    if ( window.addEventListener ){
        addEvent = function( elem, type, handler ){//重写函数,避免频繁调用嗅探函数
            elem.addEventListener( type, handler, false );
        }
    }else if ( window.attachEvent ){
        addEvent = function( elem, type, handler ){
            elem.attachEvent( 'on' + type, handler );
        }
    }
    addEvent( elem, type, handler );
};

var div = document.getElementById( 'div1' );
addEvent( div, 'click', function(){
    alert (1);
});
addEvent( div, 'click', function(){
    alert (2);
});
```

### 第4章 单例模式
单例模式的核心是确保只有一个实例，并提供全局访问。
```js
var CreateDiv = function( html ){
    this.html = html;
    this.init();
};
CreateDiv.prototype.init = function(){
    var div = document.createElement( 'div' );
    div.innerHTML = this.html;
    document.body.appendChild( div );
};
//将创建对象和保证单一对象分开
var ProxySingletonCreateDiv = (function(){
    var instance;
    return function( html ){
        if ( !instance ){
            instance = new CreateDiv( html );
        }
        return instance;
    }
})();

var a = new ProxySingletonCreateDiv( 'sven1' );
var b = new ProxySingletonCreateDiv( 'sven2' );
alert ( a === b );
```

### 第5章 策略模式
策略模式指的是定义一系列的算法，并将算法的使用和实现分开
```js
var strategies = {
    "S": function( salary ){
        return salary * 4;
    },
    "A": function( salary ){
        return salary * 3;
    },
    "B": function( salary ){
        return salary * 2;

    }
};
var calculateBonus = function( level, salary ){
    return strategies[ level ]( salary );
};

console.log( calculateBonus( 'S', 20000 ) ); // 输出：80000
console.log( calculateBonus( 'A', 10000 ) ); // 输出：30000
```

### 第6章 代理模式
#### 虚拟代理在惰性加载中的应用
```js
var miniConsole = (function(){
    var cache = [];
    var handler = function( ev ){
        if ( ev.keyCode === 113 ){
            var script = document.createElement( 'script' );
            script.onload = function(){
                for ( var i = 0, fn; fn = cache[ i++ ]; ){
                    fn();
                }
            };
            script.src = 'miniConsole.js';
            document.getElementsByTagName( 'head' )[0].appendChild( script );
            document.body.removeEventListener( 'keydown', handler );// 只加载一次miniConsole.js
        }
    };
    document.body.addEventListener( 'keydown', handler, false );
    return {
        log: function(){
            var args = arguments;
            cache.push( function(){
                return miniConsole.log.apply( miniConsole, args );
            });
        }
    }
})();

miniConsole.log( 11 ); // 开始打印log
// miniConsole.js 代码
miniConsole = {
    log: function(){
    // 真正代码略
    console.log( Array.prototype.join.call( arguments ) );
}
```
#### 代理缓存
```js
var mult = function(){
    console.log( '开始计算乘积' );
    var a = 1;
    for ( var i = 0, l = arguments.length; i < l; i++ ){
        a = a * arguments[i];
    }
    return a;
};
mult( 2, 3 ); // 输出：6
mult( 2, 3, 4 ); // 输出：24
//现在加入缓存代理函数：
var proxyMult = (function(){
    var cache = {};
    return function(){
        var args = Array.prototype.join.call( arguments, ',' );
        if ( args in cache ){
            return cache[ args ];
        }
        return cache[ args ] = mult.apply( this, arguments );
    }
})();

proxyMult( 1, 2, 3, 4 ); // 输出：24
proxyMult( 1, 2, 3, 4 ); // 输出：24
```
### 第7章 迭代器模式
迭代器模式是指提供一种方法顺序访问一个聚合对象中的各种元素，而又不需要暴露该对象的内部表示
```js
var getActiveUploadObj = function(){
    //...
};
var getFlashUploadObj = function(){
    //...
};
var getFormUploadObj = function(){
    //...
};
var iteratorUploadObj = function(){
    for(var i=0,fn;fn=arguments[i++];){
        var uploadObj = fn();
        if(uploadObj !== false){
            return uploadObj;
        }
    }
};
var uploadObj = iteratorUploadObj(getActiveUploadObj,getFlashUploadObj,getFormUploadObj);

```
