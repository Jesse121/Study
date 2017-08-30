##### 转码结果输出到标准输出
$ babel example.js
##### 转码结果写入一个文件
##### --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
##### 或者
$ babel example.js -o compiled.js
##### 整个目录转码
##### --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
##### 或者
$ babel src -d lib


Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如
Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对
象，以及一些定义在全局对象上的方法（比如 Object.assign ）都不会转码。
如果想让这个方法运行，必须使用 babel-polyfill ，为当前环境提供一个垫片。
安装命令如下。
$ npm install --save babel-polyfill
然后，在脚本头部，加入如下一行代码。
import 'babel-polyfill';
// 或者
require('babel-polyfill');