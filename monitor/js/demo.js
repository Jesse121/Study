var storage = window.localStorage;
function times(n) {
    var timing = performance.timing;
    var loadTime = timing.loadEventEnd - timing.navigationStart; //过早获取时,loadEventEnd有时会是0
    if (loadTime <= 0) {
        // 未加载完，延迟200ms后继续times方法，直到成功
        setTimeout(function() {
            times(n);
        }, 200);
        return;
    }
    var loadPageTime = timing.loadEventEnd - timing.fetchStart;
    for(var i =0;i<n;i++){
        if(!storage.load){
            storage.setItem('load',JSON.stringify({
                index:0,
                time:loadPageTime
            }))
        }else{

        }
        
    }

}
times(2)

// window.onload = function(){
//     i++;
//     console.log(i)
//     location.reload(true)
// }
// 
// 
// 


