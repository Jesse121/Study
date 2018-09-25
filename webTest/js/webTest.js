function getPerformanceTiming() {
    var performance = window.performance;
    if (!performance) {
        // 当前浏览器不支持
        console.log('你的浏览器不支持 performance 接口');
        return;
    }
    var t = performance.timing;
    console.log(t.navigationStart)
    console.log(t.fetchStart)
    console.log(t.domLoading)
    console.log(t.domContentLoadedEventEnd)
    console.log(t.domComplete)
    var times = {};
    //【重要】重定向的时间
    //【原因】拒绝重定向！比如，http://example.com/ 就不该写成 http://example.com
    times.Redirect = t.redirectEnd - t.redirectStart;
    // DNS 缓存时间
    times.Appcache = t.domainLookupStart - t.fetchStart;
    //【重要】DNS 查询时间
    //【原因】DNS 预加载做了么？页面内是不是使用了太多不同的域名导致域名查询的时间太长？
    times.DNS = t.domainLookupEnd - t.domainLookupStart;
    // TCP 建立连接完成握手的时间
    times.TCP = t.connectEnd - t.connectStart;

    //【重要】读取页面第一个字节的时间
    //【原因】这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？
    // TTFB 即 Time To First Byte 的意思
    times.ttfb = t.responseStart - t.navigationStart;

    //【重要】内容加载完成的时间
    //【原因】页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？
    times.loadResources = t.responseEnd - t.requestStart;

    //【重要】解析 DOM 树结构的时间
    //【原因】反省下你的 DOM 树嵌套是不是太多了！
    times.domReady = t.domComplete - t.responseEnd; //t.domLoading

    //【重要】执行 onload 回调函数的时间
    //【原因】是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？
    times.loadEvent = t.loadEventEnd - t.loadEventStart;

    //【重要】页面加载完成的时间
    //【原因】这几乎代表了用户等待页面可用的时间
    times.loadPage = t.loadEventEnd - t.navigationStart;
    console.log('页面加载耗时：',times.loadPage)
    // 前一个网页卸载页面的时间
    times.unloadEvent = t.unloadEventEnd - t.unloadEventStart;

    return times;
}
console.log(getPerformanceTiming())
