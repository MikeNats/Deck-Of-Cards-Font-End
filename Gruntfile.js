'use strict';

module.exports = (grunt) => {

	require('load-grunt-tasks')(grunt);

	let npmTask = [
      'grunt-karma',
      'grunt-browserify',
      'grunt-html-minify',
      'grunt-contrib-watch',
      'grunt-contrib-uglify',
      'grunt-contrib-sass'
    ],
		istanbul = require('browserify-istanbul'),
		config = {
			browserify: {
				dist: {
					options: {
						transform: [
                            ['babelify', {
									'presets': ['es2015']
              				 }
              				]
                        ]
					},

					files: {
						'../App/app.min.js': ['./src/app.js', './src/**/*.js','./src/*.js']
					}
				}
			},
			html_minify: {
				all: {
					files: [{
						expand: true,
						cwd: './',
						src: ['./index.html', './src/modules/**/*.html', './pages/*.html'],
						dest: '../App',
						ext: '.html'
            }]
				}
			},
			sass: {
				dist: {
					options: {
						cacheLocation: './node_modules/',
						cache: false,
						noCache: false,
						style: 'compressed',
						sourcemap: 'none',
						loadPath: ['node_modules/foundation-sites/assets']
					},
					files: {
						'../App/app.min.css': ['./scss/**/*.scss', './scss/*.scss'],
					}
				}
			},
			uglify: {
				my_target: {
					files: {
						'../App/app.min.js': ['../App/app.min.js']
					}
				}
			},
			eslint: {
				files: ['./src/**/*.js', './src/*.js']
			},
			watch: {
				browserify: {
					files: ['./src/**/*.js', './src/*.js'],
					tasks: ['browserify']
				},
				html_minify: {
					files: ['./**/*.html', './index.html'],
					tasks: ['html_minify']
				},
				sass: {
					files: './scss/**',
					tasks: ['sass']
				},
				uglify: {
					files: ['./src/**/*.js', './src/*.js'],
					tasks: ['uglify']
				}
			},
			karma: {
				unit: {
					browserify: {
						debug: true,
						transform: [[
				            'babelify', {
									'presets': ['es2015']
				            	}
				            ], istanbul
				            ]
					},
					configFile: 'karma.conf.js',
					singleRun: true,
					autoWatch: false,
					browsers: ['PhantomJS']
				}
			}
		};

	//Set Grunt configuration
	grunt.initConfig(config);

	//Load Grunt tasks
	npmTask.forEach((npmTask) => {
		grunt.loadNpmTasks(npmTask);
	});

	//Register Grunt Tasks
	grunt.registerTask('test', ['karma']);
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('deploy', ['eslint', 'browserify', 'karma', 'html_minify', 'sass', 'uglify']);
};