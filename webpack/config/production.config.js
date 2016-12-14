/* eslint-disable no-var */

var webpack = require('webpack')
var Config = require('webpack-config').default

module.exports = new Config().extend('webpack/config/base.config.js').merge({
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
})
