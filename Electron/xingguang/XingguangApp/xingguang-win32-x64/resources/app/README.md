
### 写一个简单的electron应用
npm init

npm install --save-dev electron

touch main.js index.html

main.js
```js
const {app, BrowserWindow} = require('electron')
  
  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let win
  
  function createWindow () {
    // 创建浏览器窗口。
    win = new BrowserWindow({width: 800, height: 600})
  
    // 然后加载应用的 index.html。
    win.loadFile('index.html')
  
    // 打开开发者工具
    win.webContents.openDevTools()
  
    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
      // 取消引用 window 对象，如果你的应用支持多窗口的话，
      // 通常会把多个 window 对象存放在一个数组里面，
      // 与此同时，你应该删除相应的元素。
      win = null
    })
  }
  
  // Electron 会在初始化后并准备
  // 创建浏览器窗口时，调用这个函数。
  // 部分 API 在 ready 事件触发后才能使用。
  app.on('ready', createWindow)
  
  // 当全部窗口关闭时退出。
  app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
      createWindow()
    }
  })
  
  // 在这个文件中，你可以续写应用剩下主进程代码。
  // 也可以拆分成几个文件，然后用 require 导入。
```

index.html
```
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Hello World!</title>
    </head>
    <body>
      <h1>Hello World!</h1>
      We are using node <script>document.write(process.versions.node)</script>,
      Chrome <script>document.write(process.versions.chrome)</script>,
      and Electron <script>document.write(process.versions.electron)</script>.
    </body>
  </html>
```

修改package.json
```
"main": "main.js",
"scripts": {
  "start": "electron ."
}
```

执行 npm start 即可启动electron应用

### Electron打包成win安装包并创建桌面快捷方式
#### 将程序打包
npm install electron-packager --save-dev

修改package.json
```
"packager": "electron-packager . electron-quick-start --overwrite --win=x32 --out  ./HelloWorldApp --arch=x64 --app-version=1.0.0 --electron-version=2.0.0"
```
electron-packager <路径(.代表根目录)> <可执行文件的文件名> –win=x32<系统> –out <打包成的文件夹名> –arch=x64 –app-version=0.0.1<应用版本> –electron-version=2.0.0<使用electron的版本>

执行npm run packager 将程序打包
#### 打包成安装程序
npm install --save-dev electron-winstaller
创建一个build.js
```js
var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join('./HelloWorldApp/electron-quick-start-win32-x64'), //刚才生成打包文件的路径
    outputDirectory: path.join('./tmp/build/installer64'), //输出路径
    authors: 'qfy', // 作者名称
    exe: 'electron-quick-start.exe', //在appDirectory寻找exe的名字
    noMsi: true, //不需要mis![这里写图片描述](https://img-blog.csdn.net/20180712225817503?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI2NjI2MTEz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
```
执行node build.js 
#### 安装时添加桌面快捷方式
npm i electron-squirrel-startup --save

我们在main.js添加如下代码 
if(require('electron-squirrel-startup')) return; 

之后我们重新打包

npm run packager
node build.js