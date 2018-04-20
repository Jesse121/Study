在上一节中我们介绍了Bootstrap整体架构，本节我们将介绍Bootstrap框架第二部分初始化及依赖项，这部分内容位于源码的第8~885行，打开源码这部分内容似乎也不是很难理解。但是请站在一个开发者的角度来面对这段源码。为什么要这样写？如果没有Bootstrap框架我能写出类似这样的框架吗？  
我们先来分析normalize.less编译后的源码,我们知道normalize.css是一个专门将不同浏览器的默认css特性设置为统一效果的css库,它和reset.css还是有区别的，normalize.css并不是简单的重置了所有的样式，而是有针对的修改，同时也保留了标签的语义化。
```css
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;  //防止IOS系统方向改变(特别是手持设备)后字体大小的调整，不禁用用户缩放。
      -ms-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block; //修正IE中未定义的html5块状元素
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {//否定伪类,匹配所有没有controls属性的audio
  display: none;  //防止现代浏览器显示没有控制条的音频。
  height: 0;  //在iOS5设备中去除多余的高度。
}
[hidden],
template {//template标签主要用于声明是“模板元素”。
  display: none; //template标签和有hidden属性的元素不显示
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
abbr[title] {
  border-bottom: 1px dotted;//这是缩写形式，border-bottom-color:initial;
}
b,
strong {
  font-weight: bold;
}
dfn {  //用来定义一个定义项目。
  font-style: italic;
}
h1 {
  margin: .67em 0;
  font-size: 2em;
}
mark { //部分文本高亮显示,请在需要突出显示文本时使用
  color: #000;
  background: #ff0;
}
small {
  font-size: 80%;
}
sub,
sup { //防止sub sup影响行高
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -.5em;
}
sub {
  bottom: -.25em;
}
img {
  border: 0;
}
svg:not(:root) {//非根目录的svg标签
  overflow: hidden;
}
figure { //标记文档中的一个图像
  margin: 1em 40px;
}
hr {
  height: 0;
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}
pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner { //删除在火狐浏览器4及以上中的按钮的内部填充和边框
  padding: 0;
  border: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {//将表单内的相关元素分组。
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}
legend {
  padding: 0;
  border: 0;
}
textarea {
  overflow: auto;
}
optgroup {//用于把相关的选项组合在一起。
  font-weight: bold;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td,
th {
  padding: 0;
}
```
print.less主要是网页的打印样式，在此就不做分析了  
glyphicons.less是Bootstrap引入的字体图标样式，个人觉得提供的字体图标样式太少，而且不太适合国内的网页特点，所以在定制自己的Bootstrap框架时完全可以将其去掉，或者用其他的字体替换。我个人喜欢使用淘宝的iconfont字体，其使用方式与Bootstrap相同，都是在需要使用图标的地方加上相应的类名即可。  
来分析下部分glyphicons源码
```css
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased; //字体灰度平滑
  -moz-osx-font-smoothing: grayscale;// 灰阶渲染
}
.glyphicon-asterisk:before {
  content: "\2a"; //与引入的字体文件中图标对应
}
```
这些字体图标的本质是使用before伪类，其content后面的数字码则是与那个图标一一对应。