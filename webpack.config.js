const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        chunkFilename:'[name].bundle.js'
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),//每次打包清空上次打包文件
        new HtmlWebpackPlugin({
            title:'个人简历',
            template:'./index.html'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common'//指定公共bundle的名称
        }),
        new ExtractTextPlugin('[name].css')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['env','es2015','react']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'file-loader'
            }
        ]
    }
}
