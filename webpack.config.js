var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server',path.resolve(__dirname,'app/scripts/main.js')],
    output: {
        path: 'build',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
