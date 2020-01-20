#### DOM2级事件处理程序
兼容方法：
var EventUtil = {
    addHandler:function(element,type,handler){
        if(element.addEvenListener){
            element.addEventLister(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,hanler);
        }else{
            element["on"+type] = handler;
        }
    },
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type] = null;
        }
    }
}

substr()当参数为负数时在IE8中不兼容


### ECMAScript 5
对于ES5中的方法，IE8很多都不兼容，在考虑IE8兼容性时建议用ES3替代  
#### Array类型
Array.isArray()确定某值是不是数组
#### 位置方法

* indexOf()从头开始查找
* lastIndexOf()从数组的末尾开始查找

这两个方法都返回要查找的箱在数组中的位置，或者在没有找到的情况下返回-1

#### 迭代方法:

* filter()对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组  
* forEach()对数组中的每一项运行给定函数，该方法没有返回值  
* map()对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。  
* every()对数组中的每一项运行给定函数，如果该函数对每一项返回true，则返回true  
* some()对数组中的每一项运行给定函数，如果该函数对任意一项返回true，则返回true  

以上方法都不会修改数组中包含的值。IE9+支持。详见《JavaScript高级程序设计》96页  

#### 归并方法

* reduce()
* reduceRight()

这俩方法都会迭代数组中的所有项，并构建一个而最终的返回值，不同的是后者从数组的最后项开始遍历

#### Date类型
Date.now()返回调用这个方法时的日期和时间的毫秒数
#### Function类型
* bind()这个方法会创建一个函数的实例，其this值会被绑定到传给bind()函数的值

#### String类型
* trim()这个方法会创建一个字符串的副本，删除前置及后缀的所有空格



Object.getPrototypeOf()返回该对象的原型
Object.getPrototypeOf(person1) == Person.prototype
Object.key()取得对象上所有可枚举的实例属性


2.getElementByClassName()   低版本的IE不支持
解决方法：
        function getElementsByClassName(element, names) {
            if (element.getElementsByClassName) {
                return element.getElementsByClassName(names);
            } else {
                var elements = element.getElementsByTagName('*');
                var result = [];
                var element,
                    classNameStr,
                    flag;
                names = names.split(' ');
                for (var i = 0; element = elements[i]; i++) {
                    classNameStr = ' ' + element.className + ' ';
                    flag = true;
                    for (var j = 0, name; name = names[j]; j++) {
                        if (classNameStr.indexOf(' ' + name + '') == -1) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        result.push(element);
                    }
                }
                return result;
            }
        }

3.实现浏览器兼容版的window.getComputedStyle     IE678不支持
function getStyle(elem){
    return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
  }