module.exports = {
  paths: {
    public: 'public'
  },
  files: {
    javascripts: {
      joinTo: {
        'application.js': /^app/,
        'vendor.js': /^(?!app)/
      }
    },
    stylesheets: {
      joinTo:
        'application.css': /^app|bower_components/
    }
  },
  plugins: {
    babel: {
      presets: ['es2015', 'es2016', 'react'],
      ignore: [
        /^(bower_components|vendor)/
      ],
      pattern: /\.(es6|jsx|js)$/
    }
  }
};
