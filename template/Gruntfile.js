module.exports = function(grunt) {

    // Load grunt tasks automatically
    // Time how long tasks take. Can help when optimizing build times
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

	var appConfig = {
		src: 'src',
		build: 'build',
		imgMin: 'imgMin'
	},

	packageConfig = grunt.file.readJSON('package.json');

	grunt.initConfig({

		prj: appConfig,
		pkg: packageConfig,

		watch: {
			compass: {
				files: [
                    '**/*.scss'
                ],
				tasks: [
                    'compass:dev',
                    'cssmin:dev',
                    'autoprefixer',
                    'clean:dev'
                ]
			},
			includes: {
				files: [
                    '<%= prj.src %>/html/tpls/*.html',
                    '<%= prj.src %>/html/tpls/includes/*.html'
                ],
				tasks: [
                    'includereplace'
                ]
			}
		},

		compass: {
			dev: {
				options: {
					noLineComments: true,
					sassDir: [
                        '<%= prj.src %>/scss'
                    ],
					cssDir: [
                        '<%= prj.src %>/scss'
                    ],
					environment: 'development',
					imagesDir: '<%= prj.src %>/img-sprites-src',
					generatedImagesPath: '<%= prj.src %>/img/sp',
					httpGeneratedImagesPath: '../img/sp'
				}
			}
		},

		cssmin: {
			option: {
				shorthandCompacting: false
			},
			dev: {
				files: {
					'<%= prj.src %>/css/all.min.css': [
						'<%= prj.src %>/scss/*.css'
					]
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: [
                    '> 1%',
                    'last 2 versions',
                    'iOS 5',
                    'Android 2.3',
                    'FF 20',
                    'Opera 10',
                    'IE 8'
                ], // display:box 지원
                remove: false
			},
			dev: {
				src: '<%= prj.src %>/css/all.min.css',
				dest: '<%= prj.src %>/css/stylesheet.min.css'
			}
		},

		// includes: {
		// 	dev: {
		// 		cwd: '<%= prj.src %>/html/tpls',
		// 		src: ['*.html'],
		// 		dest: '<%= prj.src %>/html/',
		// 		options: {
		// 			flatten: true,
		// 			includePath: '<%= prj.src %>/html/includes/'
		// 		}
		// 	}
		// },

		includereplace: {
			dev: {
				cwd: '<%= prj.src %>/html/tpls',
				src: '*.html',
				dest: '<%= prj.src %>/html/',
				expand: true
			}
		},

		clean: {
			options: {
				force: true,
				dot: true
			},
			dev: [
                '<%= prj.src %>/scss/*.css'
            ],
			build: [
                '<%= prj.build %>/',
                '<%= prj.imgMin %>/'
            ],
		},

		imagemin: {
			build: {
				expand: true,
				cwd: '<%= prj.src %>/img/',
				src: [
                    '**/*.{png, jpg, gif}'
                ],
				dest: '<%= prj.build %>/img'
			}
		},

		encodeImages: {
			build: {
				files: [{
					expand: true,
					cwd: '<%= prj.build %>/css/',
					src: '**/giftshop.css',
					dest: '<%= prj.build %>/css/'
				}]
			}
		},

		validation: {
			options: {
				reset: grunt.option('reset') || false,
				stoponerror: false,
				relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.']
			},
			files: {
				src: ['<%= prj.src %>/html/*.html']
			}
		},

		copy: {
			build: {
				files: [
					{
						expand:true,
						cwd: '<%= prj.src %>/',
						src: [
							'html/*.html',
							'css/stylesheet.min.css',
							'img/**/*.jpg',
							'img/**/*.gif'
						],
						dest: '<%= prj.build %>/'
					}
				]
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
				cwd: '<%= prj.build %>/',
				src: [
                    'html/*.html'
                ],
				dest: '<%= prj.build %>/'
			}
		},

		image: {
			static: {
				options: {
					pngquant: true,
					optipng: true,
					advpng: true,
					zopflipng: true,
					pngcrush: true,
					pngout: true,
					mozjpeg: true,
					jpegRecompress: true,
					jpegoptim: true,
					gifsicle: true,
					svgo: true
				},
				// files: {
				// 	'dist/img.png': '<%= prj.src %>/img/img.png',
				// 	'dist/img.jpg': '<%= prj.src %>/img/img.jpg',
				// 	'dist/img.gif': '<%= prj.src %>/img/img.gif',
				// 	'dist/img.svg': '<%= prj.src %>/img/img.svg'
				// }
			},
			dynamic: {
				files: [{
					expand: true,
					cwd: '<%= prj.src %>/img/',
					src: [
                        '**/*.{png,jpg,gif,svg}'
                    ],
					dest: '<%= prj.imgMin %>/'
				}]
			}
		}
	});
	// grunt.loadNpmTasks('grunt-contrib-compress');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-compass');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-imagemin');
	// grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('grunt-contrib-clean');
	// grunt.loadNpmTasks('grunt-encode-images');
	// grunt.loadNpmTasks('grunt-prettify');
	// grunt.loadNpmTasks('grunt-includes');
	// grunt.loadNpmTasks('grunt-include-replace');
	// grunt.loadNpmTasks('grunt-html-validation');
    // grunt.loadNpmTasks('grunt-autoprefixer');
	// grunt.loadNpmTasks('grunt-image');

	grunt.registerTask('default', [
        'watch'
    ]);
	grunt.registerTask('build', [
        'clean:build',
        'imagemin',
        'copy:build',
        'prettify',
        'image'
    ]);
};
