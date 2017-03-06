/* eslint-disable no-var */

var path = require('path')
var webpack = require('webpack')
var Config = require('webpack-config').default
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new Config().extend('webpack/config/base.config.js').merge({
  devtool: false,
  devServer: {
    port: process.env.PORT || 8080,
  },
  entry: {
    'docs.build': path.resolve('docs/entry.js'),
  },
  output: {
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.s(c|a)ss$/,
        loaders: ['style', 'css', 'sass?sourceMap=true'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('docs/index.html'),
    }),
  ],
})
