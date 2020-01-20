const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
module.exports = {
    entry: path.resolve(__dirname, 'national-overseas/src/v2/mobile/js/recharge/test.js'),
    output: {
        path: path.resolve(__dirname, 'national-overseas/dist/v2/mobile'),
        filename: 'js/recharge/test.js'
    },
    devServer:{
        publicPath:'/national-overseas/dist/v2/mobile/',
        // contentBase:'/project/html/',
        port:9000,
        hot:true
    },
    module:{
        rules:[
            {
                test: /\.ejs$/,
                use: 'ejs-loader'
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackHarddiskPlugin()
    ]

}
var conf = {
    template: path.resolve(__dirname, './national-overseas/html/src/mobile/recharge/test.html'),
    filename: path.resolve(__dirname, './national-overseas/html/dist/mobile/recharge/test.html'),
    inject: true,
    alwaysWriteToDisk: true,
    // cache: true, // 只改动变动的文件
    minify: {
        removeComments: true,
        collapseWhitespace: false
    }
}
module.exports.plugins.push(new HtmlWebpackPlugin(conf))
