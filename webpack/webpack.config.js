const path = require('path')
const webpack = require('webpack')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
module.exports = smp.wrap({
    context:path.join(__dirname,'./src'),
    entry:'./index.js',
    output:{
        filename:'./bundle.js'
    },
    mode:'development',
    devServer:{
        publicPath:'/dist/',
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
    ]

})
