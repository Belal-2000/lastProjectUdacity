module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'build/js/**/*.js',
        'build/tests/**/test_*.js'
      ],
      exclude: [
        ],
    customLaunchers: {
        ChromeHeadless: {
            base: 'Chrome',
            flags: [
            '--no-sandbox',
            '--disable-gpu',
            '--headless',
            '--remote-debugging-port=9222'
            ]
        }
        },
      preprocessors: {},
      reporters: ['dots'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['PhantomJS'],
      singleRun: true
    });
  };