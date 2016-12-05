var webpack = require('webpack');
var commonPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); //引入提取公共代码的插件

module.exports = {
    entry: {
        index: './index.js'
    }, //入口文件
    output: {
        path: 'scripts',
        filename: '[name].js'
    },
    plugins: [commonsPlugin],
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {

            }
        ]
    }
}