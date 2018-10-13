var http = require('http')

var server = http.createServer(function(request, response){

    response.setHeader('Content-Type','text/html; charset=utf-8')
    // response.write('<html><head><meta charset="gbk" /></head>')
    // response.write('<body>')
    // response.write('<h1>你好</h1>')
    // response.write('</body>')
    // response.write('</html>')

    response.writeHead(404, 'Not Found')
    response.end()

})

console.log('open http://localhost:8080')
server.listen(8080)
