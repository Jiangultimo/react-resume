const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.config');
const webpack = require('webpack');

module.exports = merge({
    devtool:'source-map',
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        })
    ]
});