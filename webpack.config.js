var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var libraryName = "Library";
var outputFile, plugins = [];

if (env == 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
}

outputFile = libraryName + ".[name]";

plugins.push(new ExtractTextPlugin(outputFile + ".css"));

var config = {
  entry: {
    build: __dirname + '/src/index.js',
    component: __dirname + '/src/component.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile + '.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass?indentedSyntax=true&sourceMap=true')
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;
