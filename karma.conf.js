// Karma configuration
// Generated on Mon Apr 11 2016 00:39:01 GMT+0100 (BST)

module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: './',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['browserify', 'jasmine'],


		// list of files / patterns to load in the browser
		files: [
            'src/modules/**/*.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'tests/UnitTests/**/*.js'
        ],

		preprocessors: {
			'src/modules/**/*.js': ['browserify'],
			'tests/UnitTests/**/*.js': ['browserify', 'coverage']
		},


		// list of files to exclude
		exclude: [],

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['coverage', 'progress'],

		coverageReporter: {
			dir: 'coverage/',
			reporters: [
				{
					type: 'text-summary'
				}
          ]
		},


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
}