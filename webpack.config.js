var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: true,
    entry: {
        main: './src/js/entry'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                presets: ['es2015', 'react'],
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
        ]
    },
    devtool: "source-map",
};
