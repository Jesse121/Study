### 进击Node.js基础
#### Linux(centos)下安装node.js
查看发行版本 cat /etc/redhat-release
查看gcc rpm -q gcc rpm -q gcc-c++
安装gcc等 yum -y install gcc gcc-c++ kernel-devel
查看python python -V
wget https://nodejs.org/dist/v8.11.1/node-v8.11.1.tar.gz
tar -xf node***
cd node***
./configure
make
sudo make install
node -v


chrome浏览器自身DNS缓存查询地址
chrome://net-internals/#dns

#### 域名解析过程
1. 浏览器自身dns缓存
2. 操作系统自身DNS缓存
3. 本地host文件
4. 浏览器向宽带运营商dns服务器发起解析请求
    1. dns服务器查看自身缓存
    2. 发起一个迭代dns解析请求
    3. 运营商服务器把查询结果返回操作系统内核同时缓存起来
    4. 操作系统内核把结果返回浏览器，浏览器最终拿到域名对应的ip地址


#### 事件模块
```js
var EventEmitter = require('events').EventEmitter
var life = new EventEmitter();
function water(){

}
life.on('event',water(argument));//监听事件
life.emit('event',argument);//触发事件
life.removeListener('event',water)//移除事件
```