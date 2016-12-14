/* eslint-disable no-var, prefer-template, object-shorthand */

var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var libraryName = 'Library'
var outputFile = libraryName + '.[name]'
var Config = require('webpack-config').default
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = new Config().merge({
  entry: {
    build: path.resolve('src/index.js'),
    component: path.resolve('src/component.js'),
  },
  output: {
    path: path.resolve('lib'),
    filename: outputFile + '.js',
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
        test: /\.s(c|a)ss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass?sourceMap=true'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin(outputFile + '.css'),
    new CleanWebpackPlugin(['lib'], {
      root: path.resolve('.'),
      verbose: false,
      dry: false,
    }),
  ],
})
