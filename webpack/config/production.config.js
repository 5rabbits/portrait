/* eslint-disable no-var */

var webpack = require('webpack')
var path = require('path')
var Config = require('webpack-config').default
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = new Config().extend('webpack/config/base.config.js').merge({
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.s(c|a)ss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass?sourceMap=true'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new CleanWebpackPlugin(['lib'], {
      root: path.resolve('.'),
      verbose: false,
      dry: false,
    }),
  ],
})
