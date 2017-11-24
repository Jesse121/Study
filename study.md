picturefill提供了针对picture标签和srcset属性的兼容 这俩支持设备分辨率不同加载不同图片

gulp webpack打包 vue的使用 ES6  原生js 

vue todomvc
layer
express nodejs
lodash
flexible

vue做榜单切换

如何学习源码

编写页面性能提升方案，通过自动化测试从时间上直接体现优化结果

editorcinfig
eslint

line-height:initial; 所有IE都不兼容

.fontDpr(@fontSize){
    font-size: @fontSize;
    [data-dpr="2"] & {
        font-size: @fontSize*2;
    }
    [data-dpr="3"] & {
        font-size: @fontSize*3;
    }
}

.list {
    width: 1040/@bf;
    margin: 0 auto;
    height: 1000/@bf;
    border-radius: 20/@bf;
    background-color: #ff233f;
    background: -webkit-repeating-linear-gradient(45deg, #ffc9d0, #ffc9d0 10px, #ff233f 10px, #ff233f 40px);
    overflow: hidden;
    .list_content {
        width: 1012/@bf;
        margin: 14/@bf auto;
        background-color: #f8f4ef;
        height: 900/@bf;
        border-radius: 20/@bf;
    }
}
<section class="list">
    <div class="list_content">
        
    </div>
</section>

-webkit-text-stroke: 1px red;




### xshell常用命令  
打开会话：alt+o  
切换会话：shift+tab    
减小字号：ctrl+shift+alt+[  
增大字号：ctrl+shift+alt+]  

复制：ctrl+insert  
粘贴：shift+insert  
查找：ctrl+e+f  
撤销：Ctrl+x+u 

终端快捷键：
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
