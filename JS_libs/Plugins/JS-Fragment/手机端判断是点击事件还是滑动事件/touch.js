/**
 * @手机端判断是点击事件还是滑动事件
 * @authors Your Name (you@example.org)
 * @date    2015-12-27 17:11:42
 * @version $Id$
 */

var flag = false;
var $selector = $('#selectorID');

 $selector.on('touchstart touchmove touchend', function(event) {
    switch(event.type) {
        case 'touchstart':
            falg = false;
            break;
        case 'touchmove':
            falg = true;
             break;
        case 'touchend':
            if( !falg ) {
                console.log('点击');
            } else {
                console.log('滑动');
            }
            break;
    }
});