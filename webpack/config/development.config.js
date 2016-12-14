/* eslint-disable no-var */

var webpack = require('webpack')
var Config = require('webpack-config').default

module.exports = new Config().extend('webpack/config/base.config.js').merge({
  devtool: 'cheap-module-eval-source-map',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
})
