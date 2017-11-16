const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
            name:'runtime'
        }),
        // new ExtractTextPlugin('[name].css')
    ],
    module: {
        rules: [{
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
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
