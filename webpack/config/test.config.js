/* eslint-disable no-var, prefer-template, object-shorthand, global-require */

var path = require('path')
var webpack = require('webpack')
var Config = require('webpack-config').default

module.exports = function testConfig(config) {
  var indexPath = path.resolve('test/index.js')
  var preprocessors = {}

  preprocessors[indexPath] = 'webpack'

  config.set({
    browsers: ['PhantomJS'],
    singleRun: !!process.env.CI || process.env.SINGLE_RUN === 'true',
    frameworks: ['mocha'],
    files: [
      indexPath,
    ],
    preprocessors: preprocessors,
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary',
        },
        {
          type: 'html',
          dir: path.resolve('test/coverage'),
        },
      ],
    },
    reporters: ['mocha', 'coverage'],
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage'),
    ],
    webpackServer: {
      noInfo: true,
    },
    webpack: new Config().extend('webpack/config/base.config.js').merge({
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: /(-test\.js|node_modules\/|bower_components\/|test\/*)/,
            loader: 'isparta',
          },
        ],
        loaders: [
          {
            test: /sinon\.js$/,
            loader: 'imports?define=>false,require=>false',
          },
          {
            test: /\.(css|sass|scss)$/,
            loaders: ['style', 'css', 'sass?sourceMap=true'],
          },
        ],
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
      },
      resolve: {
        alias: {
          sinon: 'sinon/pkg/sinon',
        },
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test'),
        }),
      ],
    }),
  })
}
