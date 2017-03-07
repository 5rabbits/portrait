/* eslint-disable no-var, prefer-template, object-shorthand */

var path = require('path')
var webpack = require('webpack')
var Config = require('webpack-config').default
var DirectoryNamedWebpackPlugin = require('../plugins/directory-named')

module.exports = new Config().merge({
  cache: true,
  entry: {
    portrait: path.resolve('src/index.js'),
    'docs/index': [
      'bootstrap-sass/assets/javascripts/bootstrap',
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
    loaders: [
      {
        test: require.resolve('bootstrap-sass//assets/javascripts/bootstrap'),
        loader: 'imports-loader?jQuery=jquery,$=jquery',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel?cacheDirectory=true',
        exclude: /node_modules/,
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.yml/,
        loaders: ['json', 'yaml'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    root: path.resolve('src'),
    extensions: ['', '.js', '.jsx'],
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
