// Karma configuration
// Generated on Tue Aug 13 2013 10:37:52 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [

      // Source files.
      { pattern: 'src/**/*.js', watched: true, included: false},
      { pattern: 'src/**/*.html', watched: true, included: false},

      // Test files.
      { pattern: 'test/specs/**/*spec.js', watched: true, included: false},

      // Libs.
      { pattern: 'bower_components/**/*.js', watched: false, included: false},

      // shared require config.
      'test/require.common.js',

      // Main test runner.
      'test/test-main.js'
    ],


    // list of files to exclude
    exclude: [],

    // Set preprocessers to be empty, so that .html files
    // will be served as html for require.js text plugin.
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
