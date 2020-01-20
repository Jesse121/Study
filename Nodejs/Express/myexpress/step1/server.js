var http = require("http");
var path = require("path");
var fs = require("fs");
var url = require("url");
var mime = require("./mime");
var config = require("./config");
var zlib = require("zlib");

var server = http.createServer(function(request, response) {
    var pathname = request.url;
    console.log(pathname);
    //设置默认读取index.html
    if (pathname.slice(-1) === "/") {
        pathname = pathname + config.Welcome.file;
    }
    //优化路径，防止/../路径访问
    var realPath = path.join(
        "static",
        path.normalize(pathname.replace(/\.\./g, ""))
    );
    //判断静态文件是否存在磁盘上
    fs.stat(realPath, function(err, stat) {
        if (err || !stat.isFile()) {
            response.writeHead(404, {
                "Content-Type": "text/plain"
            });
            response.write(
                "This request URL " +
                    pathname +
                    " was not found on this server."
            );
            response.end();
        } else if (stat.isDirectory()) {
            realPath = path.join(realPath, "/", config.Welcome.file);
        } else {
            var ext = path.extname(realPath); //获取文件的后缀名
            ext = ext ? ext.slice(1) : "unknown";
            //确定mime类型
            var contentType = mime[ext] || "text/plain";

            //添加缓存策略控制
            if (ext.match(config.Expires.fileMatch)) {
                var expires = new Date();
                expires.setTime(
                    expires.getTime() + config.Expires.maxAge * 1000
                );
                response.setHeader("Expires", expires.toUTCString());
                response.setHeader(
                    "Cache-Control",
                    "max-age=" + config.Expires.maxAge
                );
            }
            //添加Last-Modified头 读取文件的最后修改时间是通过fs模块的fs.stat()方法来实现
            var lastModified = stat.mtime.toUTCString();
            response.setHeader("Last-Modified", lastModified);

            //添加gzip压缩
            var raw = fs.createReadStream(realPath);
            var acceptEncoding = request.headers["accept-encoding"] || "";
            var matched = ext.match(config.Compress.match);

            fs.readFile(realPath, "binary", function(err, file) {
                if (err) {
                    response.writeHead(500, {
                        "Content-Type": "text/plain"
                    });
                    response.end(err);
                } else {
                    if (
                        request.headers["if-modified-since"] &&
                        lastModified == request.headers["if-modified-since"]
                    ) {
                        response.writeHead(304, "Not Modified");
                        response.end();
                    } else {
                        if (matched && acceptEncoding.match(/\bgzip\b/)) {
                            response.writeHead(200, "Ok", {
                                "Content-Type": contentType,
                                "Content-Encoding": "gzip"
                            });
                            raw.pipe(zlib.createGzip()).pipe(response);
                        } else if (
                            matched &&
                            acceptEncoding.match(/\bdeflate\b/)
                        ) {
                            response.writeHead(200, "Ok", {
                                "Content-Type": contentType,
                                "Content-Encoding": "deflate"
                            });
                            raw.pipe(zlib.createDeflate()).pipe(response);
                        } else {
                            response.writeHead(200, "Ok", {
                                "Content-Type": contentType
                            });
                            raw.pipe(response);
                        }
                        // response.write(file, 'binary');
                        // response.end();
                    }
                }
            });
        }
    });
});

server.listen(3000);
