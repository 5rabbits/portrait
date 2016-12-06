module.exports =

  paths:
    public: 'public'

  files:
    javascripts:
      joinTo:
        'application.js': /^app/
        'vendor.js': /^(?!app)/

    stylesheets:
      joinTo:
        'application.css': /^app|bower_components/

  plugins:
    babel: {presets: ['react']}
    postcss: processors: [ require('autoprefixer') ]
