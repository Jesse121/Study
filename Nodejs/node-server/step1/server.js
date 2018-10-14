var http = require("http");
var path = require("path");
var fs = require("fs");
var url = require("url");
var mime = require("./mime").types;
var config = require("./config");

var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = "static" + pathname;
    //判断静态文件是否存在磁盘上
    fs.exists(realPath, function(exists) {
        if (!exists) {
            response.writeHead(404, {
                "Content-Type": "text/plain"
            });
            response.write(
                "This request URL " +
                    pathname +
                    " was not found on this server."
            );
            response.end();
        } else {
            var ext = path.extname(realPath); //获取文件的后缀名
            ext = ext ? ext.slice(1) : "unknown";
            //确定mime类型
            var contentType = mime[ext] || "text/plain";
            //添加缓存控制
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
            var lastModified
            fs.stat(realPath, function(err, stat) {
                lastModified = stat.mtime.toUTCString();
                response.setHeader("Last-Modified", lastModified);
            });


            fs.readFile(realPath, "binary", function(err, file) {
                if (err) {
                    response.writeHead(500, {
                        "Content-Type": "text/plain"
                    });
                    response.end(err);
                } else {
                    console.log(request.headers)
                    if (request.headers["if-modified-since"] && lastModified == request.headers["if-modified-since"]) {
                        response.writeHead(304, "Not Modified");
                    }else{
                        response.writeHead(200, {
                            "Content-Type": contentType
                        });
                        response.write(file, "binary");
                    }
                    response.end();
                }
            });
        }
    });
});

server.listen(8080);
