/*
	grunt-contrib-compress
	grunt-contrib-watch  // 특정 파일들 감시하다가, 변경되면 지정한 작업 수행
	grunt-contrib-compass  // sass/scss를 지원
	grunt-contrib-uglify
	grunt-contrib-cssmin
	grunt-ngmin
	grunt-contrib-concat
	grunt-encode-images  // 이미지 base64로 변환
*/
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			compass: {
				files: ['**/*.scss'],
				tasks: ['compass:dev', 'cssmin:minify']
			},
			scripts: {
                files: ['common/smilesol.js'],
                tasks: ['uglify']
            }
		},
		compass: {
			dev: {
				options: {
//					sassDir: ['app/scss'],
//					cssDir: ['app/css'],
					sassDir: ['common'],
					cssDir: ['common'],
					environment: 'development'
				}
			},
			prod: {
				options: {
//					sassDir: ['app/scss'],
//					cssDir: ['app/css'],
					sassDir: ['common'],
					cssDir: ['common'],
					environment: 'production'
				}
			}
		},
		cssmin: {
			minify: {
				files: {
					'common/stylesheet.min.css': [
						'common/stylesheet.css'
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
					'common/smilesol.js'
				],
				dest: 'common/smilesol.min.js'
			}
		},
		 uglify: {
			options: {
				banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */ ' //파일의 맨처음 붙는 banner 설정
			},
			build: {
				src: 'public/build/result.js', //uglify할 대상 설정
				dest: 'public/build/result.min.js' //uglify 결과 파일 설정
			}
        },
//		uglify: {
//			dist: {
//				files: {
//					'common/smilesol.min.js': 'common/smilesol.js'
//				}
//			}
//			all: {
//				files: {
//					'app/js/jquery.min.js': [
//						'bower_components/jquery/dist/jquery.js'
//					],
//					'app/js/angular.min.js': [
//						'bower_components/angular/angular.js',
//						'bower_components/angular-animate/angular-animate.js',
//						'bower_components/angular-cookies/angular-cookies.js',
//						'bower_components/angular-route/angular-route.js',
//						'bower_components/angular-sanitize/angular-sanitize.js',
//						'bower_components/angular-touch/angular-touch.js',
//						'bower_components/angular-websql/angular-websql.js',
//						'bower_components/angular-local-storage/angular-local-storage.js',
//						'bower_components/angular-ui-router/release/angular-ui-router.js',
//						'bower_components/angular-ui-router.stateHelper/statehelper.js',
//						'bower_components/angular-ui-utils/ui-utils.js',
//						'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js'
//					],
//					'app/js/fastclick.min.js': [
//						'bower_components/fastclick/lib/fastclick.js'
//					],
//					'app/js/package.min.js': [
//						'app/js/jquery.min.js',
//						'app/js/angular.min.js',
//						'app/js/fastclick.min.js'
//					]
//				}
//			}
//		},
		concat:{
            basic: {
                src: ['public/js/common/util.js', 'public/js/app.js', 'public/js/lib/*.js', 'public/js/ctrl/*.js'], //concat 타겟 설정(앞에서부터 순서대로 합쳐진다.)
                dest: 'public/build/result.js' //concat 결과 파일
            }
        },
		compress: {
			main: {
//				options: {
//					mode: 'gzip'
//				},
//				files: [{
//					expand: true,
//					cwd: 'app/js',
//					src: ['**/*.min.js'],
//					dest: 'app/js/',
//					ext: '.min.js.gz'
//				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-ngmin');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'compass:dev', 'cssmin', 'uglify', 'watch']);
	grunt.registerTask('build', ['compass:dev', 'cssmin', 'uglify']);
};
