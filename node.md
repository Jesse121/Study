### node项目linux下开机自启动设置
安装pm2
npm install pm2 -g
启动项目
pm2 start app.js
保存当前已经启动的服务
pm2 save
设置开机自启的配置
pm2 startup
