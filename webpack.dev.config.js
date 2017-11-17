const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.js');

module.exports = merge(base, {
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('dev')//指定开发环境
            }
        })
    ]
});