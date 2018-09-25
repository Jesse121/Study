function times() {
    var timing = performance.timing;
    var loadTime = timing.loadEventEnd - timing.navigationStart; //过早获取时,loadEventEnd有时会是0
    if (loadTime <= 0) {
        // 未加载完，延迟1s后继续times方法，直到成功
        setTimeout(function() {
            times();
            location.reload()
        },1000);
        return;
    }
    var time = {};
    time.readyStart = timing.fetchStart - timing.navigationStart;
    time.redirectTime = timing.redirectEnd - timing.redirectStart;
    time.appcacheTime = timing.domainLookupStart - timing.fetchStart;
    time.unloadEventTime = timing.unloadEventEnd - timing.unloadEventStart;
    time.lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart;
    time.connectTime = timing.connectEnd - timing.connectStart;
    time.ttfbTime = timing.responseStart - timing.navigationStart;
    time.loadResources = timing.responseEnd - timing.requestStart;
    time.domReadyTime = timing.domComplete - timing.responseEnd; //过早获取时,domComplete有时会是0
    time.loadEventTime = timing.loadEventEnd - timing.loadEventStart;
    time.loadPageTime = timing.loadEventEnd - timing.fetchStart;
    
    console.log(time)


    // var allTimes = [
    //     { "描述": "准备新页面时间耗时", "时间(ms)": readyStart },
    //     { "描述": "卸载前文档耗时", "时间(ms)": unloadEventTime },
    //     { "描述": "重定向耗时", "时间(ms)": redirectTime },
    //     { "描述": "DNS缓存耗时", "时间(ms)": appcacheTime },
    //     { "描述": "DNS查询耗时", "时间(ms)": lookupDomainTime },
    //     { "描述": "TCP连接耗时", "时间(ms)": connectTime },
    //     { "描述": "读取页面第一个字节耗时", "时间(ms)": ttfbTime },
    //     { "描述": "加载资源耗时", "时间(ms)": loadResources },
    //     { "描述": "解析DOM树耗时", "时间(ms)": domReadyTime },
    //     { "描述": "load事件耗时", "时间(ms)": loadEventTime },
    //     { "描述": "页面加载总耗时", "时间(ms)": loadPageTime }
    // ];
    // console.table(allTimes);
}
times()

// setTimeout(location.reload(),2000); //指定1秒刷新一次 

