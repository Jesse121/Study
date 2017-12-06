/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-20 23:26:35
 * @version $Id$
 */

/*var box="//Jesse杨";    
  alert(encodeURI(box)+" encodeURI不会对本身属于URI的特殊字符进行编码");     
  alert(encodeURIComponent(box)+" encodeURIComponent会对它发现的任何非标准字符进行编码");    //encodeURIComponent使用频率会高点

  var a=encodeURI(box);
  var b=encodeURIComponent(box);
  alert(decodeURI(a));
  alert(decodeURIComponent(b));
*/

eval("var box=100");
alert(box);