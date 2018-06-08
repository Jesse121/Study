### 第2章 this call apply
bind()方法底层实现
```js
Function.prototype.bind = function(context){
    var self = this;
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