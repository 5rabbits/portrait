/* eslint-disable no-var, prefer-template, object-shorthand */

var path = require('path')
var webpack = require('webpack')
var Config = require('webpack-config').default
var DirectoryNamedWebpackPlugin = require('../plugins/directory-named')

module.exports = new Config().merge({
  entry: {
    portrait: path.resolve('src/index.js'),
    'docs/index': [
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
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.yml/,
        loaders: ['json', 'yaml'],
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      path.resolve('src'),
      'node_modules',
      path.resolve('.'),
    ],
  },
  resolveLoader: {
    fallback: [
      path.resolve('webpack/loaders'),
      path.resolve('node_modules'),
    ],
  },
  plugins: [
    new webpack.ResolverPlugin(new DirectoryNamedWebpackPlugin(true)),
  ],
})
