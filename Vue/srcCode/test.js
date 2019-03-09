function cached(fn) {
    var cache = Object.create(null);
    return (function cachedFn(str) {
        var hit = cache[str];
        return hit || (cache[str] = fn(str))
    })
}

/**
 * Camelize a hyphen-delimited string.驼峰化一个连字符连接的字符串
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {

    return str.replace(camelizeRE, function (_, c) {
        return c ? c.toUpperCase() : '';
    })
});
console.log(camelize('jess-e'));
