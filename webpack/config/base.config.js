/* eslint-disable no-var, prefer-template, object-shorthand */

var path = require('path')
var webpack = require('webpack')
var Config = require('webpack-config').default
var DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = new Config().merge({
  cache: true,
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
    path: path.resolve('lib'),
    filename: '[name].js',
    chunkFilename: 'docs/chunks/[id].[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    pathinfo: true,
  },
  module: {
    rules: [
      {
        test: require.resolve('bootstrap-sass/assets/javascripts/bootstrap'),
        loader: 'imports-loader?jQuery=jquery,$=jquery',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'docs/fonts/[name].[ext]',
        },
      },
      {
        test: /\.yml/,
        use: ['json-loader', 'yaml-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('src/components'),
      path.resolve('src/styles'),
      path.resolve('node_modules'),
    ],
    plugins: [
      new DirectoryNamedWebpackPlugin({
        honorIndex: true,
        honorPackage: true,
      }),
    ],
  },
  resolveLoader: {
    modules: [
      path.resolve('webpack/loaders'),
      path.resolve('node_modules'),
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
  },
})
