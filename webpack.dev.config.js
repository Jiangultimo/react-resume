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
        new webpack.HotModuleReplacementPlugin()
    ]
});