/* eslint-disable no-var, prefer-template, object-shorthand */

var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var Config = require('webpack-config').default

module.exports = new Config().merge({
  entry: {
    'Library.build': path.resolve('src/index.js'),
    'Library.component': path.resolve('src/component.js'),
  },
  output: {
    path: path.resolve('lib'),
    filename: '[name].js',
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
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['lib'], {
      root: path.resolve('.'),
      verbose: false,
      dry: false,
    }),
  ],
})
