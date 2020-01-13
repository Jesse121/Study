// webpack中内置的js压缩插件，存放在webpack的optimize对象下
// 引入webpack模块
var webpack = require('webpack')
// 缓存插件名称，以便简化后面的配置
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry:'../js/room/roomV5fix.js',
    // 发布文件
    output:{
        filename:'./dest.js'
    },
    // 我们要压缩所有的js文件，所以引入js压缩插件
    plugins:[
        // 压缩JS代码
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                ie8: false,
                output: {
                    comments: false,
                    beautify: false
                },
                compress: true,
                warnings: false
            }
        })
    ]
}
