/* eslint-disable no-var */

var Config = require('webpack-config').default
var environment = require('webpack-config').environment

environment.setAll({
  env: function env() {
    return process.env.NODE_ENV
  },
})

module.exports = new Config().extend('webpack/config/[env].config.js')
