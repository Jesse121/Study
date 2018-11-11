### 用Express+MongoDB构建的简易博客

#### express生成器快速创建应用
```
//全局安装express-generator
npm install express-generator -g
//快速创建Blog应用，模板引擎使用ejs
express --view=ejs Blog
```
此时会自动创建好Blog
```
create : Blog/
create : Blog/public/
create : Blog/public/javascripts/
create : Blog/public/images/
create : Blog/public/stylesheets/
create : Blog/public/stylesheets/style.css
create : Blog/routes/
create : Blog/routes/index.js
create : Blog/routes/users.js
create : Blog/views/
create : Blog/views/error.ejs
create : Blog/views/index.ejs
create : Blog/app.js
create : Blog/package.json
create : Blog/bin/
create : Blog/bin/www
```
根据提示依次执行
```
cd Blog 
npm install
```


###### 参考
https://blog.csdn.net/YIDBoy/article/details/53700141
https://blog.csdn.net/YIDBoy/article/details/53700837
https://blog.csdn.net/YIDBoy/article/details/54318202
https://blog.csdn.net/YIDBoy/article/details/54322300
https://blog.csdn.net/YIDBoy/article/details/54348274
https://blog.csdn.net/YIDBoy/article/details/54348355

[connect-falsh](https://www.cnblogs.com/little-ab/articles/6913349.html)

### 待完善的地方
1. 路由抽离成单独文件
2. markdown控件编辑文件
