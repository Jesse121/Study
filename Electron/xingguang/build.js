
var electronInstaller = require('electron-winstaller');
var path = require("path");


resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join('./XingguangApp/xingguang-win32-x64'), //刚才生成打包文件的路径
    // outputDirectory: path.join('./tmp/build/installer64'), //输出路径
    authors: 'Jesse', // 作者名称
    exe: 'xingguang.exe', //在appDirectory寻找exe的名字
    iconUrl: 'http://static.guojiang.tv/src/mobile/v2/img/common/title_icon.png',
    setupIcon: path.join('./static/logo.ico'),
    setupExe: 'xingguangSetup.exe',
    noMsi: true,
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));