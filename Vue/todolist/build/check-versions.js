// 设置命令行文字颜色
var chalk = require('chalk')
// npm语义化的版本管理器，是用来对特定的版本号做判断的
var semver = require('semver')
var packageConfig = require('../package.json')
var shell = require('shelljs')

function exec (cmd) {
  // 脚本可以通过 child_process 模块新建子进程，从而执行 Unix 系统命令
  //下面这段代码实际就是把cmd这个参数传递的值，转化成前后没有空格的字符串，也就是版本号
  return require('child_process').execSync(cmd).toString().trim()
}

var versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  var warnings = []
  for (var i = 0; i < versionRequirements.length; i++) {
    var mod = versionRequirements[i]
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    for (var i = 0; i < warnings.length; i++) {
      var warning = warnings[i]
      console.log('  ' + warning)
    }
    console.log()
    //退出当前程序
    process.exit(1)
  }
}
