var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [path.resolve(__dirname, 'scripts/main.js')],
    output: {
        path: path.resolve(__dirname, 'views'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
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
            test: /\.scss$/,
            loader: 'style!css!sass',
        }]
    }
}
