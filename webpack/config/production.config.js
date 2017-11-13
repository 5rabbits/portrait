/* eslint-disable no-var */

var path = require('path')
var Config = require('webpack-config').default
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new Config().extend('webpack/config/base.config.js').merge({
  devtool: 'source-map',
  entry: {
    portrait: path.resolve('src/components/index.js'),
  },
  output: {
    publicPath: '../',
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CleanWebpackPlugin(['lib'], {
      root: path.resolve('.'),
      verbose: false,
      dry: false,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve('src/styles'),
        to: 'scss',
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve('docs/index.html'),
      filename: 'docs/index.html',
    }),
  ],
})
