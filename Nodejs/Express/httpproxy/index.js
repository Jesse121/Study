const express = require('express');
const proxy = require('http-proxy-middleware');//引入代理中间件
const app = express();
app.use(express.static('public'));
 
// Add middleware for http proxying
//将服务器代理到localhost:8080端口上[本地服务器为localhost:3000]
const apiProxy = proxy('/api', { target: 'http://localhost:8080',changeOrigin: true });
app.use('/api/*', apiProxy);//api子目录下的都是用代理
 
 
 
 
app.listen(3000, () => {
  console.log('Listening on: http://localhost:3000');
});