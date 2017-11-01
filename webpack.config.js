var webpack = require('webpack');
var path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

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
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
              test: /\.svg$/,
              loader: 'raw-loader'
            }
        ]
    },
    plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery":"jquery"
    }),
    // Extract css files
    new ExtractTextPlugin('[name].[hash].css'),
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),
    // Dedupe modules in the output
    new webpack.optimize.DedupePlugin(),
    // // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
          keep_fnames: true//it works
      },
      sourceMap: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: false,
        keep_fnames: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoErrorsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ],
  externals: {
    'TweenLite': 'TweenLite',
  },
    resolve: {
      modules: [
          path.join(__dirname, "src/js/vendor")
      ]
    },
    devtool: "source-map",
};
