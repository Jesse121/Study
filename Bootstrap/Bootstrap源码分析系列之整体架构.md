![Bootstrap源码分析系列](http://o8l2fza1x.bkt.clouddn.com/bootstrap.png)
作为一名合格的前端工程师，你肯定听说过Bootstarp框架。确实可以说Bootstrap框架是最流行的前端框架之一。可是也有人说Bootstrap是给后端和前端小白用的，我认为只要学习它能给我们前端技能带来提升，那么我们就有必要研究一下它。Bootstrap框架虽然也提供了javascript插件，但总感觉不够用。Bootrtrap更多的则是被用作css框架。之前我也用过几次Bootstrap，感觉确实很快，很方便，用的次数多了就越想弄清楚它到底是怎么回事？它好在哪里？  

这篇博文不适合Bootstrap新手

在[Bootstrap官网](http://v3.bootcss.com/getting-started/#download)点击下载我们可以看到有用于生产环境中的Bootstrap和Bootstrap源码以及Sass，我们知道Bootstrap 的源码是基于最流行的 CSS 预处理脚本 - Less 和 Sass 开发的。今天我们就来学习一下以Less开发的Bootstrap。如果不熟悉Less语法的朋友可以先在[Less官网](http://lesscss.cn/)学习下，在下载的bootstrap-3.3.0\less文件夹中打开bootstrap.less，我们可以看到源码的整体架构
```
// Core variables and mixins
//定义变量，方便后面调用
@import "variables.less";               
//定义混合 这类似定义函数或者宏，在mixins文件夹中可看到所定义的函数
@import "mixins.less";                  

// Reset and dependencies  初始化和依赖项
//标准化css，这是一个专门将不同浏览器的默认css特性设置为统一效果的css库，编译后对应源码为8~190行
@import "normalize.less";               
//打印样式，编译后对应源码为192~266行
@import "print.less";                   
//图标样式，编译后对应源码为267~885行
@import "glyphicons.less";              

// Core CSS  核心CSS
//脚手架，相当于全局样式，编译后对应源码为886~989行
@import "scaffolding.less";             
//排版样式，编译后对应源码为990~1335行
@import "type.less";                    
//代码样式，编译后对应源码为1336~1389行
@import "code.less";                    
//栅格系统，编译后对应源码为1390~2056行
@import "grid.less";                    
//表格样式，编译后对应源码为2057~2296行
@import "tables.less";                  
//表单样式，编译后对应源码为2297~2781行
@import "forms.less";                   
//按钮样式，编译后对应源码为2782~3171行
@import "buttons.less";                 

// Components  组件
//组件中折叠和隐藏动画，编译后对应源码为2782~3171行
@import "component-animations.less";    
//下拉菜单及下三角符号，编译后对应源码为3209~3348行
@import "dropdowns.less";               
//按钮组，编译后对应源码为3349~3520行
@import "button-groups.less";           
//输入框组，编译后对应源码为3521~3674行
@import "input-groups.less";            
//导航，编译后对应源码为3675~3868行
@import "navs.less";                    
//导航条，编译后对应源码为3869~4393行
@import "navbar.less";                  
//面包屑，编译后对应源码为4394~4411行
@import "breadcrumbs.less";             
//默认分页，编译后对应源码为4412~4504行
@import "pagination.less";              
//翻页，编译后对应源码为4505~4542行
@import "pager.less";                   
//标签，编译后对应源码为4543~4609行
@import "labels.less";                  
//徽章，编译后对应源码为4610~4648行
@import "badges.less";                  
//巨幕，编译后对应源码为4649~4686行
@import "jumbotron.less";               
//缩略图，编译后对应源码为4687~4712行
@import "thumbnails.less";              
//警告框，编译后对应源码为4713~4787行
@import "alerts.less";                  
//进度条，编译后对应源码为4788~4881行
@import "progress-bars.less";           
//媒体对象，编译后对应源码为4882~4915行
@import "media.less";                   
//列表组，编译后对应源码为4916~5091行
@import "list-group.less";              
//面板，编译后对应源码为5092~5426行
@import "panels.less";                  
//具有响应式特性的嵌入内容，编译后对应源码为5427~5452行
@import "responsive-embed.less";        
//well效果，编译后对应源码为5453~5474行
@import "wells.less";                   
//关闭按钮图标，编译后对应源码为5475~5499行
@import "close.less";                   

// Components w/ JavaScript
//模态框，编译后对应源码为5500~5622行
@import "modals.less";                  
//工具提示，编译后对应源码为5623~5720行
@import "tooltip.less";                 
//弹出框，编译后对应源码为5721~5841行
@import "popovers.less";                
//轮播，编译后对应源码为5842~6063行
@import "carousel.less";                

// Utility classes 工具类
//实用工具类，编译后对应源码为6064~6147行
@import "utilities.less";               
//响应式工具类，编译后对应源码为6148~6357行
@import "responsive-utilities.less";    
```
这些Less文件进过编译后形成了完整的Bootstrap框架。在Bootstrap官网最后我们可以定制自己的Bootstrap，可根据项目的需要自行选择不同的Less文件。
在《深入理解Bootstrap》一书中以图表的形式概括了Bootstrap整体架构，图片如下：
![Bootstrap源码分析系列之整体架构](http://o8l2fza1x.bkt.clouddn.com/594946-20160105095231746-1295822530.png)  
在接下来的文章中，将对Bootstrap框架中一些常用的样式及组件进行分析，经过自己梳理使得对Bootstrap更加了解了。
整个Bootstrap源码可分为4个部分：  
第一部分是定义的变量及混合，方便后面的css属性使用，这也使得后期的修改和维护将更加的容易。  
第二部分是css初始化和依赖项，这部分也是为后面的css做准备，这部分包括normalize标准化css样式库和打印样式及字体。  
第三部分是核心CSS，这里包括许多常用的表格、表单及按钮等样式，最重要的是引入了栅格系统，这正是Bootstrap支持响应式的根本。  
第四部分是常用的CSS组件，这里将介绍网页中常用的各种样式组件，如果还有其他组件这里还可以继续扩充，这使得Bootstrap能都不断完善。  
第五部分是javascript组件库所需的样式。  
第六部分是常用的工具类，包括响应式工具类和打印类  
在Bootstrap框架的实际使用中，我们不仅要知道各种样式的成因，还需要熟练使用他们的类名与HTML的完美配合才能体现书Bootstrap框架的魅力。