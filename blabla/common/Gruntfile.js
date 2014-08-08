module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			compass: {
				files: ['**/*.scss'],
				tasks: ['compass:dev', 'cssmin:minify']
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: ['app/scss'],
					cssDir: ['app/css'],
					environment: 'development'
				}
			},
			prod: {
				options: {
					sassDir: ['app/scss'],
					cssDir: ['app/css'],
					environment: 'production'
				}
			}
		},
		cssmin: {
			minify: {
				files: {
					'app/css/stylesheet.min.css': [
						'app/css/stylesheet.css'
					]
				}
			}
		},
		ngmin: {
			apps: {
				src: [
					'app/js/app.js',
					'app/js/app.controller.js',
					'app/js/app.service.js',
					'app/js/app.factory.js'
				],
				dest: 'app/js/app.min.js'
			}
		},
		uglify: {
			all: {
				files: {
					'app/js/jquery.min.js': [
						'bower_components/jquery/dist/jquery.js'
					],
					'app/js/angular.min.js': [
						'bower_components/angular/angular.js',
						'bower_components/angular-animate/angular-animate.js',
						'bower_components/angular-cookies/angular-cookies.js',
						'bower_components/angular-route/angular-route.js',
						'bower_components/angular-sanitize/angular-sanitize.js',
						'bower_components/angular-touch/angular-touch.js',
						'bower_components/angular-websql/angular-websql.js',
						'bower_components/angular-local-storage/angular-local-storage.js',
						'bower_components/angular-ui-router/release/angular-ui-router.js',
						'bower_components/angular-ui-router.stateHelper/statehelper.js',
						'bower_components/angular-ui-utils/ui-utils.js',
						'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js'
					],
					'app/js/fastclick.min.js': [
						'bower_components/fastclick/lib/fastclick.js'
					],
					'app/js/package.min.js': [
						'app/js/jquery.min.js',
						'app/js/angular.min.js',
						'app/js/fastclick.min.js'
					]
				}
			}
		},
		compress: {
			main: {
				options: {
					mode: 'gzip'
				},
				files: [{
					expand: true,
					cwd: 'app/js',
					src: ['**/*.min.js'],
					dest: 'app/js/',
					ext: '.min.js.gz'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-ngmin');

	grunt.registerTask('default', ['compass:dev', 'cssmin', 'watch']);
	grunt.registerTask('build', ['compass:dev', 'cssmin', 'ngmin', 'uglify']);
};
