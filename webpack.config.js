var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [path.resolve(__dirname, 'scripts/main.js')],
    output: {
        path: path.resolve(__dirname, 'views'),
        filename: 'index.js'
    },
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
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=100000!img-loader?progressive=true'
            }
        ]
    }
}
