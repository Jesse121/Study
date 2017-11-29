picturefill提供了针对picture标签和srcset属性的兼容 这俩支持设备分辨率不同加载不同图片

gulp webpack打包 vue的使用 ES6  原生js 

vue todomvc
layer
express nodejs
lodash
flexible


如何学习源码

编写页面性能提升方案，通过自动化测试从时间上直接体现优化结果

webpack
editorconfig
eslint


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



#### 工作中用到的特殊的css样式总结
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
