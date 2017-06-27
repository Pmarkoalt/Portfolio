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
                preset: 'es2015',
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
        ]
    },
    plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
    resolve: {
      modules: [
          path.join(__dirname, "src/js/vendor")
      ]
    },
    devtool: "source-map",
};
