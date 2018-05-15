var http = require('http');
var optfile = require('./models/optfile');
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;  charset=utf-8' });
    if (request.url !== "/favicon.ico") { //清除第2此访问
        console.log('访问');//后台输出
        response.write('hello,world');//前台页面输出
        function callback(data){
            response.write(data);
            response.end(); //不写则没有http协议尾
        }
        optfile.readfile('./models/child.js',callback);
        // optfile.readfileSync('./models/child.js');
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');