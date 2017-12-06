介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？

CSS选择符有哪些？哪些属性可以继承？

CSS优先级算法如何计算？

CSS3新增伪类有那些？

如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中？

display有哪些值？说明他们的作用。

position的值relative和absolute定位原点是？

CSS3有哪些新特性？

请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？

用纯CSS创建一个三角形的原理是什么？

css多列等高如何实现？

一个满屏 品 字布局 如何设计?

经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？

li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

为什么要初始化CSS样式?

absolute的containing block计算方式跟正常流有什么不同？

CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？

position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？

对BFC规范(块级格式化上下文：block formatting context)的理解？

CSS权重优先级是如何计算的？

请解释一下为什么需要清除浮动？清除浮动的方式

zoom:1的清楚浮动原理?

移动端的布局用过媒体查询吗？

使用 CSS 预处理器吗？喜欢那个？

CSS优化、提高性能的方法有哪些？

浏览器是怎样解析CSS选择器的？

在网页中的应该使用奇数还是偶数的字体？为什么呢？

margin和padding分别适合什么场景使用？

抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

元素竖向的百分比设定是相对于容器的高度吗？

全屏滚动的原理是什么？用到了CSS的那些属性？

什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？

视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）

::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。

如何修改chrome记住密码后自动填充表单的黄色背景 ？

你对line-height是如何理解的？

设置元素浮动后，该元素的display值是多少？（自动变成display:block）

怎么让Chrome支持小于12px 的文字？

让页面里的字体变清晰，变细用CSS怎么做？（-webkit-font-smoothing: antialiased;）

font-style属性可以让它赋值为“oblique” oblique是什么意思？

position:fixed;在android下无效怎么处理？

如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）

display:inline-block 什么时候会显示间隙？(携程)

overflow: scroll时不能平滑滚动的问题怎么处理？

有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。

png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？

什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）

style标签写在body后与body前有什么区别？

什么是CSS 预处理器 / 后处理器？


一、  介绍一下CSS的盒子模型？  
有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 pading;  
盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border).  
二、  CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？  
1.id选择器（ # myid）
2.类选择器（.myclassname）
3.标签选择器（div, h1, p）
4.相邻选择器（h1 + p）
5.子选择器（ul > li）
6.后代选择器（li a）
7.通配符选择器（ * ）
8.属性选择器（a[rel = "external"]）
9.伪类选择器（a: hover, li: nth - child）

可继承的属性： font-variant font-weight font-size line-height font-family color text-indent text-align text-transform word-break line-break word-wrap ;
不可继承的样式：border padding margin width height ;
优先级就近原则，同权重情况下样式定义最近者为准;
载入样式以最后载入的定位为准;
优先级为:
  !important >  id > class > tag  
  important 比 内联优先级高
三、  CSS3新增伪类举例：
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
:enabled  :disabled 控制表单控件的禁用状态。
:checked        单选框或复选框被选中。
四、  如何居中div？如何居中一个浮动元素？
给div设置一个宽度，然后添加margin:0 auto属性
div{width:200px; margin:0 auto; }  
五、  居中一个浮动元素
  确定容器的宽高 宽500 高 300 的层
  设置层的外边距
 .div {  Width:500px ; height:300px;//高度可以不设
  Margin: -150px 0 0 -250px;
  position:relative;相对定位
  background-color:pink;//方便看效果
  left:50%;  top:50%;} 
六、  列出display的值，说明他们的作用。position的值， relative和absolute定位原点是？
1. block 象块类型元素一样显示。
  none 缺省值。象行内元素类型一样显示。
  inline-block 象行内元素一样显示，但其内容象块类型元素一样显示。
  list-item 象块类型元素一样显示，并添加样式列表标记。
2. *absolute 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 
*fixed （老IE不支持）生成绝对定位的元素，相对于浏览器窗口进行定位。 
*relative生成相对定位的元素，相对于其正常位置进行定位。 
* static  默认值。没有定位，元素出现在正常的流中
*（忽略 top, bottom, left, right z-index 声明）
* inherit 规定从父元素继承 position 属性的值。
七、  CSS3有哪些新特性？
  CSS3实现圆角（border-radius:8px），阴影（box-shadow:10px），
  对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
  transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜
  增加了更多的CSS选择器  多背景 rgba 
八、  一个满屏 品 字布局 如何设计?
九、  经常遇到的CSS的兼容性有哪些？原因，解决方法是什么？
十、  为什么要初始化CSS样式。
因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
*最简单的初始化方法就是： * {padding: 0; margin: 0;} （不建议）
淘宝的样式初始化： 
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
h1, h2, h3, h4, h5, h6{ font-size:100%; }
address, cite, dfn, em, var { font-style:normal; }
code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
small{ font-size:12px; }
ul, ol { list-style:none; }
a { text-decoration:none; }
a:hover { text-decoration:underline; }
sup { vertical-align:text-top; }
sub{ vertical-align:text-bottom; }
legend { color:#000; }
fieldset, img { border:0; }
button, input, select, textarea { font-size:100%; }
table { border-collapse:collapse; border-spacing:0; } 
十一、 absolute的containing block计算方式跟正常流有什么不同？
十二、 position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？
十三、 对BFC规范的理解？
（W3C CSS 2.1 规范中的一个概念,它决定了元素如何对其内容进行定位,以及与其他元素的关 系和相互作用。）
十四、 css定义的权重
以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下例子是演示各种定义的权重值：
/*权重为1*/
div{}
/*权重为10*/
.class1{}
/*权重为100*/
#id1{}
/*权重为100+1=101*/
#id1 div{}
/*权重为10+1=11*/
.class1 div{}
/*权重为10+10+1=21*/
.class1 .class2 div{} 
如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现
十五、 解释下浮动和它的工作原理？清除浮动的技巧
十六、 用过媒体查询，针对移动端的布局吗？
十七、 使用 CSS 预处理器吗？喜欢那个？
SASS 
十八、 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）
多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms
十九、 display:inline-block 什么时候会显示间隙？(携程)
移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing
