##css属性继承:
1. 所有元素可继承：visibility和cursor。
2. 内联元素可继承：
letter-spacing、word-spacing、white-space、color、font、font-style、font-variant、font-weight、font-size、line-height、font-family、text-decoration、text-transform、direction。
3. 终端块状元素可继承：text-indent和text-align。  
4. 表格元素可继承：border-collapse,border-spacing  
5. 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。  
css属性值为相对大小值，在继承时先将相对值计算为绝对值再继承。

##css属性书写排列顺序：
1. 位置(position, top, right, z-index, display, float等)
2. 大小(width, height, padding, margin, border)
3. 文字(font, line-height, letter-spacing, color text-align等)
4. 背景(background)
5. 其他(animation, transition等)

##CSS选择器总结
|选择器                  |优先级|实例 |
|------------------------|------|-----|
|ID选择器                |100   | #idName|
|类选择器                |10    | .className|
|伪类选择器              |10    | :link  :visited  :focus  :hover  :actived  :lang|
|    UI元素状态伪类      |10    | E:enabled{}匹配所有用户界面（form表单）中处于可用状态的E元素|
|                        |      | E:disabled{}匹配所有用户界面（form表单）中处于不可用状态的E元素|
|                        |      | E:checked{}匹配所有用户界面（form表单）中处于选中状态的E元素|
|    结构性伪类          |10    | E:first-child{}匹配父元素中第一个E元素|
|                        | |      E:last-child{}匹配父元素中最后一个E元素|
|                        | |      E:nth-child(n){}匹配第n个子元素E|
|                        | |      E:nth-last-child(n){}匹配倒数第n个结构子元素E|
|                        | |      E:nth-of-type(n){}匹配同类型中的第n个同级兄弟元素E|
|                        | |      E:nth-last-of-type(n){}匹配同类型中的倒数第n个同级兄弟元素E|
|                        | |      E:first-of-type{}匹配同级兄弟元素中的第一个E元素|
|                        | |      E:only-child{}匹配属于父元素中唯一子元素的E|
|                        | |      E:only-of-type{}匹配属于同类型中唯一兄弟元素的E|
|                        | |      E:root{}  不常用 匹配文档的根元素。在HTML中，根元素永远是HTML|
|                        | |      E:empty{} 不常用 匹配没有任何子元素（包括text节点）的元素E|
|    否定伪类            |10|     p:not(s){}匹配所有不匹配简单选择符s的元素p|
|    目标伪类            |10|     不常用|
|属性选择器              |10|     input[type="text"]{}|
|    简单属性选择器      |10|     h1[foo]{color:red;}|
|    具体属性值选择器    |10|     h1[foo="sun"]{color:red;}  选择foo属性值是sun的所有h1元素|
|    子串匹配属性选择器  |10|     h1[foo*="sun"]{color:red;} 选择foo属性值中包含sun的所有h1元素|
|                        | |      h1[foo^="sun"]{color:red;} 选择foo属性值以sun开头的所有h1元素|
|                        | |      h1[foo$="sun"]{color:red;} 选择foo属性值以sun结尾的所有h1元素|
|元素选择器              |1|      tagName{}|
|    子元素选择器        |1|      h1 > span{color:red;}|
|    相邻兄弟元素选择器  |1|      h1 + h1{font-size:20px;}|
|伪元素选择器            |1|      p::first-letter{}设置段落p的首字母样式|
|                        | |      p::first-line{} 设置段落p的首行样式|
|                        | |      p::before{}  p::after{}  |
|                        | |      p::selection{}设置被用户选取部分的样式|
