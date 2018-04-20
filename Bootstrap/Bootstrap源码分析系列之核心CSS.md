本节主要介绍核心CSS，从整体架构中的7个Less文件对应的源码分别进行分析
### scaffolding.less
这个文件编译后的css文件(886~989行)其作用就像定义全局样式。  
```css
//调整css盒模型为border-box,这样修改使得添加padding不至于元素宽度超出边界 
* { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
*:before,
*:after { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
//由此可知IE8+都支持box-sizing: border-box;
//对body input a 等一些元素进行初始化，还包括对图片，缩略图的处理
html { font-size: 10px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
//个人觉得这里的font-size: 10px;根本没起作用，会被body中定义的字体大小覆盖
//-webkit-tap-highlight-color: rgba(0, 0, 0, 0);适用于webkit内核浏览器中取消可点击元素的半透明灰色背景
body { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.42857143; color: #333; background-color: #fff; }
input,
button,
select,
textarea { font-family: inherit; font-size: inherit; line-height: inherit; }
a { color: #428bca; text-decoration: none; }
a:hover,
a:focus { color: #2a6496; text-decoration: underline; }
a:focus { outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px; }
//这里定义a连接获得焦点的状态，除了outline: thin dotted;后面几个浏览器不全支持
figure { margin: 0; }
img { vertical-align: middle; }
.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img { display: block; max-width: 100%; height: auto; }
.img-rounded { border-radius: 6px; }
.img-thumbnail { display: inline-block; max-width: 100%; height: auto; padding: 4px; line-height: 1.42857143; background-color: #fff; border: 1px solid #ddd; border-radius: 4px; -webkit-transition: all .2s ease-in-out; -o-transition: all .2s ease-in-out; transition: all .2s ease-in-out; }
.img-circle { border-radius: 50%; }
hr { margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee; }
//定义在阅读屏幕中的样式
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; }
.sr-only-focusable:active,
.sr-only-focusable:focus { position: static; width: auto; height: auto; margin: 0; overflow: visible; clip: auto; }
```
### type.less
排版样式，编译后对应源码为990~1335行
```css
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 { font-family: inherit; font-weight: 500; line-height: 1.1; color: inherit; }
h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small,
.h1 small,
.h2 small,
.h3 small,
.h4 small,
.h5 small,
.h6 small,
h1 .small,
h2 .small,
h3 .small,
h4 .small,
h5 .small,
h6 .small,
.h1 .small,
.h2 .small,
.h3 .small,
.h4 .small,
.h5 .small,
.h6 .small { font-weight: normal; line-height: 1; color: #777; }
h1,
.h1,
h2,
.h2,
h3,
.h3 { margin-top: 20px; margin-bottom: 10px; }
h1 small,
.h1 small,
h2 small,
.h2 small,
h3 small,
.h3 small,
h1 .small,
.h1 .small,
h2 .small,
.h2 .small,
h3 .small,
.h3 .small { font-size: 65%; }
h4,
.h4,
h5,
.h5,
h6,
.h6 { margin-top: 10px; margin-bottom: 10px; }
h4 small,
.h4 small,
h5 small,
.h5 small,
h6 small,
.h6 small,
h4 .small,
.h4 .small,
h5 .small,
.h5 .small,
h6 .small,
.h6 .small { font-size: 75%; }
h1,
.h1 { font-size: 36px; }
h2,
.h2 { font-size: 30px; }
h3,
.h3 { font-size: 24px; }
h4,
.h4 { font-size: 18px; }
h5,
.h5 { font-size: 14px; }
h6,
.h6 { font-size: 12px; }
//对标题h1~h6样式定义，并定义了副标题small
p { margin: 0 0 10px; }
.lead { margin-bottom: 20px; font-size: 16px; font-weight: 300; line-height: 1.4; }
@media (min-width: 768px) {.lead {font-size: 21px;}}
//添加 .lead 类可以让段落突出显示
small,
.small { font-size: 85%; }
mark,
.mark { padding: .2em; background-color: #fcf8e3; }
.text-left { text-align: left; }
.text-right { text-align: right; }
.text-center { text-align: center; }
.text-justify { text-align: justify; }
//文字对其样式
.text-nowrap { white-space: nowrap; }
.text-lowercase { text-transform: lowercase; }
.text-uppercase { text-transform: uppercase; }
.text-capitalize { text-transform: capitalize; }
.text-muted { color: #777; }
.text-primary { color: #428bca; }
a.text-primary:hover { color: #3071a9; }
.text-success { color: #3c763d; }
a.text-success:hover { color: #2b542c; }
.text-info { color: #31708f; }
a.text-info:hover { color: #245269; }
.text-warning { color: #8a6d3b; }
a.text-warning:hover { color: #66512c; }
.text-danger { color: #a94442; }
a.text-danger:hover { color: #843534; }
.bg-primary { color: #fff; background-color: #428bca; }
a.bg-primary:hover { background-color: #3071a9; }
.bg-success { background-color: #dff0d8; }
a.bg-success:hover { background-color: #c1e2b3; }
.bg-info { background-color: #d9edf7; }
a.bg-info:hover { background-color: #afd9ee; }
.bg-warning { background-color: #fcf8e3; }
a.bg-warning:hover { background-color: #f7ecb5; }
.bg-danger { background-color: #f2dede; }
a.bg-danger:hover { background-color: #e4b9b9; }
.page-header { padding-bottom: 9px; margin: 40px 0 20px; border-bottom: 1px solid #eee; }
ul,
ol { margin-top: 0; margin-bottom: 10px; }
ul ul,
ol ul,
ul ol,
ol ol { margin-bottom: 0; }
.list-unstyled { padding-left: 0; list-style: none; }
.list-inline { padding-left: 0; margin-left: -5px; list-style: none; }
.list-inline > li { display: inline-block; padding-right: 5px; padding-left: 5px; }
dl { margin-top: 0; margin-bottom: 20px; }
dt,
dd { line-height: 1.42857143; }
dt { font-weight: bold; }
dd { margin-left: 0; }
@media (min-width: 768px) { .dl-horizontal dt { float: left; width: 160px; overflow: hidden; clear: left; text-align: right; text-overflow: ellipsis; white-space: nowrap; }le] { cursor: help; border-bottom: 1px dotted #777; }
//列表样式
.initialism { font-size: 90%; text-transform: uppercase; }
blockquote { padding: 10px 20px; margin: 0 0 20px; font-size: 17.5px; border-left: 5px solid #eee; }
blockquote p:last-child,
blockquote ul:last-child,
blockquote ol:last-child { margin-bottom: 0; }
blockquote footer,
blockquote small,
blockquote .small { display: block; font-size: 80%; line-height: 1.42857143; color: #777; }
blockquote footer:before,
blockquote small:before,
blockquote .small:before { content: '\2014 \00A0'; }
.blockquote-reverse,
blockquote.pull-right { padding-right: 15px; padding-left: 0; text-align: right; border-right: 5px solid #eee; border-left: 0; }
.blockquote-reverse footer:before,
blockquote.pull-right footer:before,
.blockquote-reverse small:before,
blockquote.pull-right small:before,
.blockquote-reverse .small:before,
blockquote.pull-right .small:before { content: ''; }
.blockquote-reverse footer:after,
blockquote.pull-right footer:after,
.blockquote-reverse small:after,
blockquote.pull-right small:after,
.blockquote-reverse .small:after,
blockquote.pull-right .small:after { content: '\00A0 \2014'; }
//引用样式
address { margin-bottom: 20px; font-style: normal; line-height: 1.42857143; }
//地址或联系方式样式
```
### code.less
代码样式，编译后对应源码为1336~1389行
```css
code,kbd,pre,samp { font-family: Menlo, Monaco, Consolas, "Courier New", monospace; }
code { padding: 2px 4px; font-size: 90%; color: #c7254e; background-color: #f9f2f4; border-radius: 4px; }
kbd { padding: 2px 4px; font-size: 90%; color: #fff; background-color: #333; border-radius: 3px; -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25); box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25); }
kbd kbd { padding: 0; font-size: 100%; font-weight: bold; -webkit-box-shadow: none; box-shadow: none; }
pre { display: block; padding: 9.5px; margin: 0 0 10px; font-size: 13px; line-height: 1.42857143; color: #333; word-break: break-all; word-wrap: break-word; background-color: #f5f5f5; border: 1px solid #ccc; border-radius: 4px; }
pre code { padding: 0; font-size: inherit; color: inherit; white-space: pre-wrap; background-color: transparent; border-radius: 0; }
.pre-scrollable { max-height: 340px; overflow-y: scroll; }
```
### grid.less
栅格系统，编译后对应源码为1390~2056行  
关于栅格系统，新手会觉得它很难理解。其实你只要记住的总是把一个容器分成12列(colspan)，根据屏幕的大小(通过媒体查询@media)分为超小屏幕xs(x-small),小屏幕sm(small),中等屏幕md(middle)，大屏幕lg(large)  
在响应式布局中可以针对不同的屏幕大小给某一列添加多个类
```html
<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>
```
每一列单元格可以嵌套，就像单元格的拆分一样，但是被嵌套的行（row）所包含的列（column）的个数不能超过12
```
<div class="row">
  <div class="col-sm-9">
    <div class="row">
      <div class="col-xs-8 col-sm-6">Level 2: .col-xs-8 .col-sm-6</div>
      <div class="col-xs-4 col-sm-6">Level 2: .col-xs-4 .col-sm-6</div>
    </div>
  </div>
</div>
```
使用offset可以将列向右侧偏移，向右侧偏移的列数和这行剩下的列数总和为12
```html
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
</div>
```
通过使用push可以实现将列向右移，使用pull可以实现将列向右移
```
<div class="row">
  <div class="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3</div>
  <div class="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9</div>
</div>
```
### tables.less
表格样式，编译后对应源码为2057~2296行  
table样式非常适合从框架中分离出来单独使用
```css
table { background-color: transparent; }
caption { padding-top: 8px; padding-bottom: 8px; color: #777; text-align: left; }
th { text-align: left; }
.table { width: 100%; max-width: 100%; margin-bottom: 20px; }
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td { padding: 8px; line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd; }
.table > thead > tr > th { vertical-align: bottom; border-bottom: 2px solid #ddd; }
.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td { border-top: 0; }
.table > tbody + tbody { border-top: 2px solid #ddd; }
.table .table { background-color: #fff; }
//table基本样式
.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td { padding: 5px; }
//紧缩表格，通过设置单元格padding来实现
.table-bordered { border: 1px solid #ddd; }
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td { border: 1px solid #ddd; }
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td { border-bottom-width: 2px; }
//带边框的表格，通过设置border来实现边框
.table-striped > tbody > tr:nth-child(odd) { background-color: #f9f9f9; }
//条纹状表格，通过更改奇数行的背景颜色来实现
.table-hover > tbody > tr:hover { background-color: #f5f5f5; }
table col[class*="col-"] { position: static; display: table-column; float: none; }
table td[class*="col-"],
table th[class*="col-"] { position: static; display: table-cell; float: none; }
.table > thead > tr > td.active,
.table > tbody > tr > td.active,
.table > tfoot > tr > td.active,
.table > thead > tr > th.active,
.table > tbody > tr > th.active,
.table > tfoot > tr > th.active,
.table > thead > tr.active > td,
.table > tbody > tr.active > td,
.table > tfoot > tr.active > td,
.table > thead > tr.active > th,
.table > tbody > tr.active > th,
.table > tfoot > tr.active > th { background-color: #f5f5f5; }
//鼠标悬停在行或单元格上时所设置背景颜色
.table-hover > tbody > tr > td.active:hover,
.table-hover > tbody > tr > th.active:hover,
.table-hover > tbody > tr.active:hover > td,
.table-hover > tbody > tr:hover > .active,
.table-hover > tbody > tr.active:hover > th { background-color: #e8e8e8; }
//鼠标悬停背景颜色变化表格
.table > thead > tr > td.success,
.table > tbody > tr > td.success,
.table > tfoot > tr > td.success,
.table > thead > tr > th.success,
.table > tbody > tr > th.success,
.table > tfoot > tr > th.success,
.table > thead > tr.success > td,
.table > tbody > tr.success > td,
.table > tfoot > tr.success > td,
.table > thead > tr.success > th,
.table > tbody > tr.success > th,
.table > tfoot > tr.success > th { background-color: #dff0d8; }
.table-hover > tbody > tr > td.success:hover,
.table-hover > tbody > tr > th.success:hover,
.table-hover > tbody > tr.success:hover > td,
.table-hover > tbody > tr:hover > .success,
.table-hover > tbody > tr.success:hover > th { background-color: #d0e9c6; }
//标识成功或积极的动作
.table > thead > tr > td.info,
.table > tbody > tr > td.info,
.table > tfoot > tr > td.info,
.table > thead > tr > th.info,
.table > tbody > tr > th.info,
.table > tfoot > tr > th.info,
.table > thead > tr.info > td,
.table > tbody > tr.info > td,
.table > tfoot > tr.info > td,
.table > thead > tr.info > th,
.table > tbody > tr.info > th,
.table > tfoot > tr.info > th { background-color: #d9edf7; }
.table-hover > tbody > tr > td.info:hover,
.table-hover > tbody > tr > th.info:hover,
.table-hover > tbody > tr.info:hover > td,
.table-hover > tbody > tr:hover > .info,
.table-hover > tbody > tr.info:hover > th { background-color: #c4e3f3; }
//标识普通的提示信息或动作
.table > thead > tr > td.warning,
.table > tbody > tr > td.warning,
.table > tfoot > tr > td.warning,
.table > thead > tr > th.warning,
.table > tbody > tr > th.warning,
.table > tfoot > tr > th.warning,
.table > thead > tr.warning > td,
.table > tbody > tr.warning > td,
.table > tfoot > tr.warning > td,
.table > thead > tr.warning > th,
.table > tbody > tr.warning > th,
.table > tfoot > tr.warning > th { background-color: #fcf8e3; }
.table-hover > tbody > tr > td.warning:hover,
.table-hover > tbody > tr > th.warning:hover,
.table-hover > tbody > tr.warning:hover > td,
.table-hover > tbody > tr:hover > .warning,
.table-hover > tbody > tr.warning:hover > th { background-color: #faf2cc; }
//标识警告或需要用户注意
.table > thead > tr > td.danger,
.table > tbody > tr > td.danger,
.table > tfoot > tr > td.danger,
.table > thead > tr > th.danger,
.table > tbody > tr > th.danger,
.table > tfoot > tr > th.danger,
.table > thead > tr.danger > td,
.table > tbody > tr.danger > td,
.table > tfoot > tr.danger > td,
.table > thead > tr.danger > th,
.table > tbody > tr.danger > th,
.table > tfoot > tr.danger > th { background-color: #f2dede; }
.table-hover > tbody > tr > td.danger:hover,
.table-hover > tbody > tr > th.danger:hover,
.table-hover > tbody > tr.danger:hover > td,
.table-hover > tbody > tr:hover > .danger,
.table-hover > tbody > tr.danger:hover > th { background-color: #ebcccc; }
//标识危险或潜在的带来负面影响的动作
.table-responsive { min-height: .01%; overflow-x: auto; }
//min-height: .01%;消除IE9的BUG
@media screen and (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
  }
  .table-responsive > .table {
    margin-bottom: 0;
  }
  .table-responsive > .table > thead > tr > th,
  .table-responsive > .table > tbody > tr > th,
  .table-responsive > .table > tfoot > tr > th,
  .table-responsive > .table > thead > tr > td,
  .table-responsive > .table > tbody > tr > td,
  .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }
  .table-responsive > .table-bordered {
    border: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:first-child,
  .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .table-responsive > .table-bordered > thead > tr > td:first-child,
  .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:last-child,
  .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .table-responsive > .table-bordered > thead > tr > td:last-child,
  .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
  }
  .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .table-responsive > .table-bordered > tfoot > tr:last-child > td {
    border-bottom: 0;
  }
}
//响应式中的表格
```
### forms.less
表单样式，编译后对应源码为2297~2781行  
```CSS
fieldset { min-width: 0; padding: 0; margin: 0; border: 0; }
//min-width: 0;是的更像一个块状元素
legend { display: block; width: 100%; padding: 0; margin-bottom: 20px; font-size: 21px; line-height: inherit; color: #333; border: 0; border-bottom: 1px solid #e5e5e5; }
label { display: inline-block; max-width: 100%; margin-bottom: 5px; font-weight: bold; }
input[type="search"] { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }
input[type="radio"],
input[type="checkbox"] { margin: 4px 0 0; margin-top: 1px \9; line-height: normal; }
//margin-top: 1px\9;IE hack
input[type="file"] { display: block; }
input[type="range"] { display: block; width: 100%; }
select[multiple],
select[size] { height: auto; }
input[type="file"]:focus, 
input[type="radio"]:focus,
input[type="checkbox"]:focus { outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px; }
output { display: block; padding-top: 7px; font-size: 14px; line-height: 1.42857143; color: #555; }
//output不同类型的输出，比如脚本的输出。IE不支持
.form-control { display: block; width: 100%; height: 34px; padding: 6px 12px; font-size: 14px; line-height: 1.42857143; color: #555; background-color: #fff; background-image: none; border: 1px solid #ccc; border-radius: 4px; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s; -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }
.form-control:focus { border-color: #66afe9; outline: 0; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6); box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6); }
.form-control::-moz-placeholder { color: #999; opacity: 1; }
.form-control:-ms-input-placeholder { color: #999; }
.form-control::-webkit-input-placeholder { color: #999; }
//表单控件样式
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control { cursor: not-allowed; background-color: #eee; opacity: 1; }
textarea.form-control { height: auto; }
//文本域
input[type="search"] { -webkit-appearance: none; }
input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] { line-height: 34px; line-height: 1.42857143 \0; }
input[type="date"].input-sm,
input[type="time"].input-sm,
input[type="datetime-local"].input-sm,
input[type="month"].input-sm { line-height: 30px; line-height: 1.5 \0; }
input[type="date"].input-lg,
input[type="time"].input-lg,
input[type="datetime-local"].input-lg,
input[type="month"].input-lg { line-height: 46px; line-height: 1.33 \0; }
_:-ms-fullscreen,
:root input[type="date"],
_:-ms-fullscreen,
:root input[type="time"],
_:-ms-fullscreen,
:root input[type="datetime-local"],
_:-ms-fullscreen,
:root input[type="month"] { line-height: 1.42857143; }
_:-ms-fullscreen.input-sm,
:root input[type="date"].input-sm,
_:-ms-fullscreen.input-sm,
:root input[type="time"].input-sm,
_:-ms-fullscreen.input-sm,
:root input[type="datetime-local"].input-sm,
_:-ms-fullscreen.input-sm,
:root input[type="month"].input-sm { line-height: 1.5; }
_:-ms-fullscreen.input-lg,
:root input[type="date"].input-lg,
_:-ms-fullscreen.input-lg,
:root input[type="time"].input-lg,
_:-ms-fullscreen.input-lg,
:root input[type="datetime-local"].input-lg,
_:-ms-fullscreen.input-lg,
:root input[type="month"].input-lg { line-height: 1.33; }
//日期控件
//_:-ms-fullscreen IE 11黑客逆向iOS破解时间输入。
//:root根目录，IE8不支持
.form-group { margin-bottom: 15px; }
.radio,
.checkbox { position: relative; display: block; margin-top: 10px; margin-bottom: 10px; }
.radio label,
.checkbox label { min-height: 20px; padding-left: 20px; margin-bottom: 0; font-weight: normal; cursor: pointer; }
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] { position: absolute; margin-top: 4px \9; margin-left: -20px; }
.radio + .radio,
.checkbox + .checkbox { margin-top: -5px; }
.radio-inline,
.checkbox-inline { display: inline-block; padding-left: 20px; margin-bottom: 0; font-weight: normal; vertical-align: middle; cursor: pointer; }
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline { margin-top: 0; margin-left: 10px; }
input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] { cursor: not-allowed; }
.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline { cursor: not-allowed; }
.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label { cursor: not-allowed; }
//单选和多选控件
.form-control-static { padding-top: 7px; padding-bottom: 7px; margin-bottom: 0; }
.form-control-static.input-lg,
.form-control-static.input-sm { padding-right: 0; padding-left: 0; }
.input-sm,
.form-group-sm .form-control { height: 30px; padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }
select.input-sm,
select.form-group-sm .form-control { height: 30px; line-height: 30px; }
textarea.input-sm,
textarea.form-group-sm .form-control,
select[multiple].input-sm,
select[multiple].form-group-sm .form-control { height: auto; }
.input-lg,
.form-group-lg .form-control { height: 46px; padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }
select.input-lg,
select.form-group-lg .form-control { height: 46px; line-height: 46px; }
textarea.input-lg,
textarea.form-group-lg .form-control,
select[multiple].input-lg,
select[multiple].form-group-lg .form-control { height: auto; }
//下拉列表
.has-feedback { position: relative; }
.has-feedback .form-control { padding-right: 42.5px; }
.form-control-feedback { position: absolute; top: 0; right: 0; z-index: 2; display: block; width: 34px; height: 34px; line-height: 34px; text-align: center; pointer-events: none; }
.input-lg + .form-control-feedback { width: 46px; height: 46px; line-height: 46px; }
.input-sm + .form-control-feedback { width: 30px; height: 30px; line-height: 30px; }
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline,
.has-success.radio label,
.has-success.checkbox label,
.has-success.radio-inline label,
.has-success.checkbox-inline label { color: #3c763d; }
.has-success .form-control { border-color: #3c763d; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); }
.has-success .form-control:focus { border-color: #2b542c; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168; box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168; }
.has-success .input-group-addon { color: #3c763d; background-color: #dff0d8; border-color: #3c763d; }
.has-success .form-control-feedback { color: #3c763d; }
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline,
.has-warning.radio label,
.has-warning.checkbox label,
.has-warning.radio-inline label,
.has-warning.checkbox-inline label { color: #8a6d3b; }
.has-warning .form-control { border-color: #8a6d3b; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); }
.has-warning .form-control:focus { border-color: #66512c; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b; box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b; }
.has-warning .input-group-addon { color: #8a6d3b; background-color: #fcf8e3; border-color: #8a6d3b; }
.has-warning .form-control-feedback { color: #8a6d3b; }
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline,
.has-error.radio label,
.has-error.checkbox label,
.has-error.radio-inline label,
.has-error.checkbox-inline label { color: #a94442; }
.has-error .form-control { border-color: #a94442; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075); }
.has-error .form-control:focus { border-color: #843534; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483; box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483; }
.has-error .input-group-addon { color: #a94442; background-color: #f2dede; border-color: #a94442; }
.has-error .form-control-feedback { color: #a94442; }
.has-feedback label ~ .form-control-feedback { top: 25px; }
.has-feedback label.sr-only ~ .form-control-feedback { top: 0; }
.help-block { display: block; margin-top: 5px; margin-bottom: 10px; color: #737373; }
//校验状态
@media (min-width: 768px) { .form-inline .form-group { display: inline-block; margin-bottom: 0; vertical-align: middle; }eckbox-inline { padding-top: 7px; margin-top: 0; margin-bottom: 0; }
.form-horizontal .radio,
.form-horizontal .checkbox { min-height: 27px; }
.form-horizontal .form-group { margin-right: -15px; margin-left: -15px; }
@media (min-width: 768px) {
  .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  right: 15px;
}
@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 14.3px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
  }
}
```
### buttons.less
按钮样式，编译后对应源码为2782~3171行
```css
.btn { display: inline-block; padding: 6px 12px; margin-bottom: 0; font-size: 14px; font-weight: normal; line-height: 1.42857143; text-align: center; white-space: nowrap; vertical-align: middle; -ms-touch-action: manipulation; touch-action: manipulation; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; background-image: none; border: 1px solid transparent; border-radius: 4px; }
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus { outline: thin dotted; outline: 5px auto -webkit-focus-ring-color; outline-offset: -2px; }
.btn:hover,
.btn:focus,
.btn.focus { color: #333; text-decoration: none; }
.btn:active,
.btn.active { background-image: none; outline: 0; -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125); box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125); }
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn { pointer-events: none; cursor: not-allowed; filter: alpha(opacity=65); -webkit-box-shadow: none; box-shadow: none; opacity: .65; }
//按钮基本样式
.btn-default { color: #333; background-color: #fff; border-color: #ccc; }
.btn-default:hover,
.btn-default:focus,
.btn-default.focus,
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default { color: #333; background-color: #e6e6e6; border-color: #adadad; }
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default { background-image: none; }
.btn-default.disabled,
.btn-default[disabled],
fieldset[disabled] .btn-default,
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled.focus,
.btn-default[disabled].focus,
fieldset[disabled] .btn-default.focus,
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active { background-color: #fff; border-color: #ccc; }
.btn-default .badge { color: #fff; background-color: #333; }
//默认按钮
.btn-primary { color: #fff; background-color: #428bca; border-color: #357ebd; }
.btn-primary:hover,
.btn-primary:focus,
.btn-primary.focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary { color: #fff; background-color: #3071a9; border-color: #285e8e; }
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary { background-image: none; }
.btn-primary.disabled,
.btn-primary[disabled],
fieldset[disabled] .btn-primary,
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled.focus,
.btn-primary[disabled].focus,
fieldset[disabled] .btn-primary.focus,
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active { background-color: #428bca; border-color: #357ebd; }
.btn-primary .badge { color: #428bca; background-color: #fff; }
//原始按钮
.btn-success { color: #fff; background-color: #5cb85c; border-color: #4cae4c; }
.btn-success:hover,
.btn-success:focus,
.btn-success.focus,
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success { color: #fff; background-color: #449d44; border-color: #398439; }
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success { background-image: none; }
.btn-success.disabled,
.btn-success[disabled],
fieldset[disabled] .btn-success,
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled.focus,
.btn-success[disabled].focus,
fieldset[disabled] .btn-success.focus,
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active { background-color: #5cb85c; border-color: #4cae4c; }
.btn-success .badge { color: #5cb85c; background-color: #fff; }
//表示成功的按钮
.btn-info { color: #fff; background-color: #5bc0de; border-color: #46b8da; }
.btn-info:hover,
.btn-info:focus,
.btn-info.focus,
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info { color: #fff; background-color: #31b0d5; border-color: #269abc; }
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info { background-image: none; }
.btn-info.disabled,
.btn-info[disabled],
fieldset[disabled] .btn-info,
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled.focus,
.btn-info[disabled].focus,
fieldset[disabled] .btn-info.focus,
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active { background-color: #5bc0de; border-color: #46b8da; }
.btn-info .badge { color: #5bc0de; background-color: #fff; }
//提示信息的按钮
.btn-warning { color: #fff; background-color: #f0ad4e; border-color: #eea236; }
.btn-warning:hover,
.btn-warning:focus,
.btn-warning.focus,
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning { color: #fff; background-color: #ec971f; border-color: #d58512; }
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning { background-image: none; }
.btn-warning.disabled,
.btn-warning[disabled],
fieldset[disabled] .btn-warning,
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled.focus,
.btn-warning[disabled].focus,
fieldset[disabled] .btn-warning.focus,
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active { background-color: #f0ad4e; border-color: #eea236; }
.btn-warning .badge { color: #f0ad4e; background-color: #fff; }
//表示警告按钮
.btn-danger { color: #fff; background-color: #d9534f; border-color: #d43f3a; }
.btn-danger:hover,
.btn-danger:focus,
.btn-danger.focus,
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger { color: #fff; background-color: #c9302c; border-color: #ac2925; }
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger { background-image: none; }
.btn-danger.disabled,
.btn-danger[disabled],
fieldset[disabled] .btn-danger,
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled.focus,
.btn-danger[disabled].focus,
fieldset[disabled] .btn-danger.focus,
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active { background-color: #d9534f; border-color: #d43f3a; }
.btn-danger .badge { color: #d9534f; background-color: #fff; }
//表示危险按钮
.btn-link { font-weight: normal; color: #428bca; border-radius: 0; }
.btn-link,
.btn-link:active,
.btn-link.active,
.btn-link[disabled],
fieldset[disabled] .btn-link { background-color: transparent; -webkit-box-shadow: none; box-shadow: none; }
.btn-link,
.btn-link:hover,
.btn-link:focus,
.btn-link:active { border-color: transparent; }
.btn-link:hover,
.btn-link:focus { color: #2a6496; text-decoration: underline; background-color: transparent; }
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus { color: #777; text-decoration: none; }
//链接按钮
.btn-lg,
.btn-group-lg > .btn { padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px; }
.btn-sm,
.btn-group-sm > .btn { padding: 5px 10px; font-size: 12px; line-height: 1.5; border-radius: 3px; }
.btn-xs,
.btn-group-xs > .btn { padding: 1px 5px; font-size: 12px; line-height: 1.5; border-radius: 3px; }
//按钮尺寸
.btn-block { display: block; width: 100%; }
.btn-block + .btn-block { margin-top: 5px; }
input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block { width: 100%; }
```