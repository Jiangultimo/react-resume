const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const extractCSS = new ExtractTextPlugin('[name]-css.css');

// const resolve =  dir => path.join(__dirname, '.', dir); //配置全局路径别名
function resolve(dir) {
    return path.join(__dirname, '.', dir);
}

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
            template:'./index.html',
            filename: 'index.html'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common'//指定公共bundle的名称
        }),
        extractCSS
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
                use: extractCSS.extract(['css-loader','style-loader'])
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': resolve('src')
        }
    }
}
