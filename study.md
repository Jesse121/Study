picturefill提供了针对picture标签和srcset属性的兼容 这俩支持设备分辨率不同加载不同图片

ES6  原生js 
vue element
express nodejs

lodash
flexible

sprite-loader

如何学习源码

编写页面性能提升方案，通过自动化测试从时间上直接体现优化结果


```
.fontDpr(@fontSize){
    font-size: @fontSize;
    [data-dpr="2"] & {
        font-size: @fontSize*2;
    }
    [data-dpr="3"] & {
        font-size: @fontSize*3;
    }
}

```

### ios上overflow:hidden失效

#### 移动端禁止页面长按复制
```css
body{
    -webkit-user-select:none;
}
```
user-select：none | text | all | element   
none：文本不能被选择  
text：可以选择文本  
all：当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素。  
element：可以选择文本，但选择范围受元素边界的约束  
详细可参考[user-select](http://www.css88.com/book/css/properties/user-interface/user-select.htm)


#### 工作中用到的特殊的css样式总结
##### chrome滚动条样式
```css
.scrollBox{
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-button{
        background-color: transparent;
    }
    &::-webkit-scrollbar-track{
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #fe2545;
        border-radius: 5px;
    }
}
```

##### 镂空字体1 
<p style="-webkit-text-stroke: 1px red;color:transparent;font-size:28px;font-weight:bold;">Jesse</p>
关键css:    
`-webkit-text-stroke: 1px red;`  
兼容性:  
IE都不兼容 Edge15+ 需要加-webkit-前缀  
firefox49+ 需要加-webkit-前缀  
chrome 需要加-webkit-前缀  
android 4+ 需要加-webkit-前缀  
ios 需要加-webkit-前缀  

##### 镂空字体2 
背景是图片
<div style="background: url('http://o8l2fza1x.bkt.clouddn.com/bg.jpg');-webkit-background-clip:text;"><p style="font-size: 40px;font-weight: bold;-webkit-text-fill-color:transparent;">Jesse</p></div>
关键css:  
```
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
```
兼容性：
Firefox, Chrome and Safari support the unofficial -webkit-background-clip: text (only with prefix)  

##### 渐变字体
背景是渐变色
<p style="font-size: 40px;
    color: #fde2ba;
    font-weight:bold;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fffaf3), to(#fbc677));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;">Jesse</p>
```
.text{
    font-size:40px;
    font-weight:bold;
    color: #fde2ba;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#fffaf3), to(#fbc677));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

##### 3D镂空字体
<div style="text-align: center;
    -webkit-text-stroke: 2px white;
    position: relative;
    text-transform: uppercase;
    color: #252527;
    font-size: 14vw;
    letter-spacing: 1.2vw;
    font-weight: 700;
    text-shadow: 0 1px 0 #4a4a4e, -1px -1px 0 #4a4a4e, /*main 3d shadow*/ -1px 0px 0 #343437, -2px 1px 0 #343437, -3px 2px 0 #313134, -4px 3px 0 #2f2f31, -5px 4px 0 #2c2c2f, -6px 5px 0 #2a2a2c, -7px 6px 0 #27272a, -8px 7px 0 #252527, -9px 8px 0 #232324, -10px 9px 0 #202022, -11px 10px 0 #1e1e1f, -12px 11px 0 #1b1b1d, -13px 12px 0 #19191a, -14px 13px 0 #161617, -15px 14px 0 #141415, -16px 15px 0 #111112, /*top right*/ 0 -1px 1px #ffffff, 0 -2px 0px #ffffff, /*bottom left corner*/ -15px 14px 0px #ffffff, -16px 15px 0px #ffffff, -17px 16px 0px #ffffff, -18px 17px 0px #ffffff, -2px -1px 0 #ffffff, -3px 0px 0 #ffffff, /*top left corner*/ -19px 15px 0 #ffffff, -18px 14px 0 #ffffff, -17px 13px 0 #ffffff, -16px 12px 0 #ffffff, -15px 11px 0 #ffffff, -14px 10px 0 #ffffff, -13px 9px 0 #ffffff, -12px 8px 0 #ffffff, -11px 7px 0 #ffffff, -10px 6px 0 #ffffff, -9px 5px 0 #ffffff, -8px 4px 0 #ffffff, -7px 3px 0 #ffffff, -6px 2px 0 #ffffff, -5px 1px 0 #ffffff, -4px 0px 0 #ffffff, /*lower right / (upper right side for capital T like H etc letters. */ 0px 2px 0px #ffffff, -1px 3px 0px #ffffff, -2px 4px 0px #ffffff, -3px 5px 0px #ffffff, -4px 6px 0px #ffffff, -5px 7px 0px #ffffff, -6px 8px 0px #ffffff, -7px 9px 0px #ffffff, -8px 10px 0px #ffffff, -9px 11px 0px #ffffff, -10px 12px 0px #ffffff, -11px 13px 0px #ffffff, -12px 14px 0px #ffffff, -13px 15px 0px #ffffff, -14px 16px 0px #ffffff, -15px 17px 0px #ffffff;">3d text</div> 
关键css:  
<pre>
-webkit-text-stroke: 2px white;  
text-shadow: 0 1px 0 #4a4a4e, -1px -1px 0 #4a4a4e, /*main 3d shadow*/ -1px 0px 0 #343437, -2px 1px 0 #343437, -3px 2px 0 #313134, -4px 3px 0 #2f2f31, -5px 4px 0 #2c2c2f, -6px 5px 0 #2a2a2c, -7px 6px 0 #27272a, -8px 7px 0 #252527, -9px 8px 0 #232324, -10px 9px 0 #202022, -11px 10px 0 #1e1e1f, -12px 11px 0 #1b1b1d, -13px 12px 0 #19191a, -14px 13px 0 #161617, -15px 14px 0 #141415, -16px 15px 0 #111112, /*top right*/ 0 -1px 1px #ffffff, 0 -2px 0px #ffffff, /*bottom left corner*/ -15px 14px 0px #ffffff, -16px 15px 0px #ffffff, -17px 16px 0px #ffffff, -18px 17px 0px #ffffff, -2px -1px 0 #ffffff, -3px 0px 0 #ffffff, /*top left corner*/ -19px 15px 0 #ffffff, -18px 14px 0 #ffffff, -17px 13px 0 #ffffff, -16px 12px 0 #ffffff, -15px 11px 0 #ffffff, -14px 10px 0 #ffffff, -13px 9px 0 #ffffff, -12px 8px 0 #ffffff, -11px 7px 0 #ffffff, -10px 6px 0 #ffffff, -9px 5px 0 #ffffff, -8px 4px 0 #ffffff, -7px 3px 0 #ffffff, -6px 2px 0 #ffffff, -5px 1px 0 #ffffff, -4px 0px 0 #ffffff, /*lower right / (upper right side for capital T like H etc letters. */ 0px 2px 0px #ffffff, -1px 3px 0px #ffffff, -2px 4px 0px #ffffff, -3px 5px 0px #ffffff, -4px 6px 0px #ffffff, -5px 7px 0px #ffffff, -6px 8px 0px #ffffff, -7px 9px 0px #ffffff, -8px 10px 0px #ffffff, -9px 11px 0px #ffffff, -10px 12px 0px #ffffff, -11px 13px 0px #ffffff, -12px 14px 0px #ffffff, -13px 15px 0px #ffffff, -14px 16px 0px #ffffff, -15px 17px 0px #ffffff;
</pre>
##### 边框渐变  
<section style="width: 500px;
    height: 200px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #ff233f;
    background: -webkit-repeating-linear-gradient(45deg, #ffc9d0, #ffc9d0 10px, #ff233f 10px, #ff233f 40px);
    overflow: hidden;">
    <div style="width: 480px;
        margin: 10px auto;
        background-color: #f8f4ef;
        height: 180px;
        border-radius: 20px;">
    </div>
</section>
原理：  
对外层的div使用循环渐变
```css
background: -webkit-repeating-linear-gradient(45deg, #ffc9d0 0px, #ffc9d0 10px, #ff 233f 10px, #ff233f 40px);
```
兼容性：  
IE10+ Firefox Chrome safari6.1基本都支持   
android 4+ 需要-webkit-  
ios 5.1 需要-webkit-  

line-height:initial; 所有IE都不兼容  

#### ios中激活active伪类
在iOS系统的移动设备中，需要在按钮元素或body/html上绑定一个touchstart事件才能激活:active状态。
```js
//ios中激活active伪类
document.body.addEventListener('touchstart', function () {});  
```

####  属性控制元素在IOS设备上是否使用滚动回弹效果.
从前端开发的角度讲，只需要知道CSS的属性-webkit-overflow-scrolling是真的创建了带有硬件加速的系统级控件，所以效率很高。但是这相对是耗更多内存的，最好在产生了非常大面积的overflow时才应用。
```css
/**/
body {
    -webkit-overflow-scrolling: touch;
}
```

#### css波浪下划线
<div style="text-decoration-style:wavy;text-decoration-color: red;text-decoration-line:underline;">this is a test</div>
```css
text-decoration-style:wavy;  
text-decoration-color: red;
text-decoration-line:underline;
```
具体参考：
[text-decoration](https://www.w3.org/TR/css-text-decor-3/#text-decoration-skip-property)
[兼容](https://www.jianshu.com/p/8570433e3669)

### xshell常用命令  
打开会话：alt+o  
切换会话：shift+tab    
减小字号：ctrl+shift+alt+[  
增大字号：ctrl+shift+alt+]  

复制：ctrl+insert  
粘贴：shift+insert  
查找：ctrl+e+f  
撤销：Ctrl+x+u 

Ctrl + a/Home 切换到命令行开始  
Ctrl + e/End 切换到命令行末尾   
Ctrl + l 清除屏幕内容，效果等同于clear  
Ctrl + u 清除剪切光标之前的内容  
Ctrl + k 剪切清除光标之后的内容   
Ctrl + y 粘贴刚才所删除的字符  
Ctrl + r 在历史命令中查找 （这个非常好用，输入关键字就调出以前的命令了）                
Ctrl + c 终止命令  
ctrl + o 重复执行命令  
Ctrl + d 退出shell，logout  
Ctrl + z 转入后台运行,但在当前用户退出后就会终止  
Ctrl + t 颠倒光标所在处及其之前的字符位置，并将光标移动到下一个字符  
Alt + t 交换当前与以前单词的位置  
Alt + d 剪切光标之后的词  
Ctrl+w 剪切光标所在处之前的一个词（以空格、标点等为分隔符）  
Ctrl+（x u） 按住Ctrl的同时再先后按x和u，撤销刚才的操作  
Ctrl+s 锁住终端  
Ctrl+q 解锁终端  
