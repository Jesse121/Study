const path = require('path')
const webpack = require('webpack')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const smp = new SpeedMeasurePlugin()
module.exports = smp.wrap({
    context:path.join(__dirname,'project/src'),
    entry:'./js/index.js',
    output:{
        path: path.resolve(__dirname, 'project/dist'),
        filename: './js/[name].[hash:8].js',
    },
    mode:'development',
    devServer:{
        publicPath:'/project/dist/',
        port:9000,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'force-strict-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin ({
            filename: path.resolve(__dirname, 'project/html/index.html'),
            template: path.resolve(__dirname,'project/src/template.html')
        })

    ]

})
