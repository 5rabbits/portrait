/* eslint-disable no-var */

var path = require('path')
var webpack = require('webpack')
var Config = require('webpack-config').default
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new Config().extend('webpack/config/base.config.js').merge({
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    historyApiFallback: true,
  },
  entry: {
    portrait: path.resolve('src/components/index.js'),
    'docs/index': [
      'bootstrap-sass/assets/javascripts/bootstrap',
      'font-awesome/css/font-awesome.css',
      path.resolve('docs/entry.js'),
      path.resolve('docs/theme.scss'),
    ],
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('docs/index.html'),
      filename: 'index.html',
    }),
  ],
})
