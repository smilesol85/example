module.exports = function(grunt) {
	
	var appConfig = {
		app: 'src',
		dist: 'dist'
	};
    
    var packageConfig = grunt.file.readJSON('package.json');

	// 프로젝트 환경설정.
	grunt.initConfig({
		prj: appConfig,
		pkg: packageConfig,
		watch: {
			compass: {
				files: ['<%= prj.app %>/scss/*.scss'],
				tasks: ['compass:dev', 'cssmin:dev', 'autoprefixer']
			},
			
			htmls: {
				files: ['<%= prj.app %>/tpls/*.html'],
				tasks: ['includes', 'htmllint']
			},
			
			jss: {
				files: ['<%= prj.app %>/src/*.js'],
				tasks: ['uglify:dev']
			}
		},
		
		compass: {
			dev: {
				options: {
					sassDir: ['<%= prj.app %>/scss'],
					cssDir: ['<%= prj.app %>/src'],
					environment: 'development',
                    imagesDir: 'src/img-sprites-src',
					generatedImagesPath: 'src/img/sprites',
					httpGeneratedImagesPath: '../img/sprites'
				}
			}
		},
		
		cssmin: {
			dev: {
				files: {
					'<%= prj.app %>/css/all.min.css': ['<%= prj.app %>/src/*.css']
				}
			}
		},
		
		autoprefixer: {
			options: {
				browsers: [
					'Android 2.3',
					'Android >= 4',
					'Chrome >= 20',
					'Firefox >= 24', // Firefox 24 is the latest ESR
					'Explorer >= 6',
					'iOS >= 5',
					'Opera >= 12',
					'Safari >= 6'
				]
			},
			
			dev: {
				options: {
					diff: true,
//					map: true
				},
				src: '<%= prj.app %>/css/all.min.css',
				dest: '<%= prj.app %>/css/stylesheet.min.css'
			},
			
			build: {
				src: '<%= prj.app %>/css/all.min.css',
				dest: '<%= prj.dist %>/css/stylesheet.min.css'
			}
		},
		
		htmllint: {
			all: ['<%= prj.app %>/html/index.html']
		},
		
//		uncss: {
//			build: {
//				files: {
//					'<%= prj.app %>/css/uncss.css': [
//						'<%= prj.app %>/html/*.html'
//					]
//				}
//			}
//		},
		
		uglify: {
			dev: {
				src: '<%= prj.app %>/src/*.js',
				dest: '<%= prj.app %>/js/uglify.min.js'
			},
			
			build: {
				src: '<%= prj.app %>/src/*.js',
				dest: '<%= prj.dist %>/js/uglify.min.js'
			}
		},
		
		imagemin: {
			build: {
				expand: true,
				cwd: '<%= prj.app %>/img/',
				src: ['*.{png, jpg, gif}'],
				dest: '<%= prj.dist %>/img'
			}
		},
        
        prettify: {
            options: {
                config: '.prettifyrc'
            },
            // Prettify a directory of files
            dist: {
                expand: true,
                cwd: '<%= prj.dist %>/html',
                ext: '.html',
                src: ['*.html'],
                dest: '<%= prj.dist %>/html'
            }
        },
        
        includes: {
            build: {
                cwd: '<%= prj.app %>/tpls',
                src: ['*.html'],
                dest: '<%= prj.app %>/html',
                options: {
                    flatten: true,
                    includePath: '<%= prj.app %>/include'
                }
            }
        },
        
        copy: {
            build: {
                files: [
                    // includes files within path
//                    {expand: true, src: ['<%= prj.app %>/html/*'], dest: '<%= prj.dist %>/html/', filter: 'isFile'},

                    // makes all src relative to cwd
                    {expand: true, cwd: '<%= prj.app %>/', src: ['html/**'], dest: '<%= prj.dist %>/'},
                ]
            },
        }
	});

	// task를 지원하는 플러그인 로드.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-html');
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-includes');

	// task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['uglify:build', 'imagemin', 'copy', 'prettify']);
	grunt.registerTask('concats', ['concat']);
};