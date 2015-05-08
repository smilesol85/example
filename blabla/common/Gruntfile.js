module.exports = function(grunt) {
    var appConfig = {
        app: 'src',
        dist: 'dist',
//        webview: '../..'
    },
    packageConfig = grunt.file.readJSON('package.json');
	grunt.initConfig({

        prj: appConfig,
        pkg: packageConfig,

		watch: {
			compass: {
				files: ['**/*.scss'],
				tasks: ['compass:dev', 'cssmin:minify', 'autoprefixer', 'clean:dev']
			},
			includes: {
				files: ['<%= prj.app %>/html/tpls/*.html', '<%= prj.app %>/html/includes/*.html'],
				tasks: ['includes']
			},
            jsc: {
                files: ['<%= prj.app %>/js/*.js', '!<%= prj.app %>/js/*.min.js'],
                tasks: ['clean:dev', 'uglify']
            }
		},

        compass: {
			dev: {
				options: {
					noLineComments: true,
					sassDir: ['<%= prj.app %>/scss'],
					cssDir: ['<%= prj.app %>/scss'],
					environment: 'development',
					imagesDir: '<%= prj.app %>/img-sprites-src',
					generatedImagesPath: '<%= prj.app %>/img',
					httpGeneratedImagesPath: '../img'
				}
			}
		},

        cssmin: {
            option: {
                shorthandCompacting: false
            },
			minify: {
				files: {
					'<%= prj.app %>/css/all.min.css': [
						'<%= prj.app %>/scss/*.css'
					]
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
                src: '<%= prj.app %>/css/all.min.css',
                dest: '<%= prj.app %>/css/stylesheet.min.css'
            }
        },

        includes: {
            dev: {
				cwd: '<%= prj.app %>/html/tpls',
				src: ['*.html'],
				dest: '<%= prj.app %>/html/',
				options: {
					flatten: true,
					includePath: '<%= prj.app %>/html/includes/'
				}
			}
		},

        clean: {
            options: {
                force: true,
                dot: true
            },
            dev: ['<%= prj.app %>/js/*.min.js', '<%= prj.app %>/scss/*.css'],
			build: ['<%= prj.dist %>/'],
            webview: ['<%= prj.webview %>/'],
            webIndex: ['../markup/webview/LINE-Music/*.html'],
		},

        imagemin: {
			build: {
                expand: true,
                cwd: '<%= prj.app %>/img/',
                src: ['**/*.{png, jpg, gif}'],
                dest: '<%= prj.dist %>/img'
            }
		},

		encodeImages: {
			build: {
				files: [{
					expand: true,
					cwd: '<%= prj.dist %>/css/',
					src: '**/giftshop.css',
					dest: '<%= prj.dist %>/css/'
				}]
			}
		},

		prettify: {
			options: {
				"indent": 1,
				"indent_char": "\t",
				"indent_scripts": "normal",
				"wrap_line_length": 0,
				"brace_style": "collapse",
				"preserve_newlines": true,
				"max_preserve_newlines": 1,
				"unformatted": [
					"a",
					"code",
					"pre"
				]
			},
			files: {
				expand: true,
				cwd: '<%= prj.dist %>/',
				src: ['html/*.html'],
				dest: '<%= prj.dist %>/'
			}
		},

		validation: {
			options: {
				reset: grunt.option('reset') || false,
				stoponerror: false,
				relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.']
			},
			files: {
				src: ['<%= prj.app %>/html/*.html']
			}
		},

		copy: {
			build: {
				files: [
					{
						expand:true,
						cwd: '<%= prj.app %>/',
						src: [
                            'html/*.html',
                            'css/stylesheet.min.css',
                            'js/*.js',
                            'img/**/*.jpg',
                            'img/**/*.gif'
                        ],
						dest: '<%= prj.dist %>/'
					}
				]
			},
            webview: {
				files: [
					{
						expand:true,
						cwd: '<%= prj.dist %>/',
                        src: ['**'],
						dest: '<%= prj.webview %>/'
					}
				]
			},
            webIndex: {
                files: [
					{
						expand:true,
						cwd: '',
                        src: ['index.html'],
						dest: '../markup/webview/LINE-Music/'
					}
				]
            }
		},

		uglify: {
            dev: {
                src: '<%= prj.app %>/js/*.js',
                dest: '<%= prj.app %>/js/uglify.min.js'
            }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-encode-images');
	grunt.loadNpmTasks('grunt-pngmin');
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['clean:build', 'imagemin', 'copy:build', 'prettify']);
    grunt.registerTask('webview', ['clean:webview', 'clean:webIndex', 'copy:webview', 'copy:webIndex']);
};
