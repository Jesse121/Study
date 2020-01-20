/*
 * @Date: 2019-09-08 11:07:54
 * @LastEditors: Jesse
 * @LastEditTime: 2019-09-08 11:11:16
 */
var http = require('http')
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('hello nodejs')
}).listen(3000,"127.0.0.1")

