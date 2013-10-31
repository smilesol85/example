module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		less : {
			compile : {
				files : {
					'dest/css/main.css' : ['less/main.less']
				}
			}
		},

		csslint : {
			strict : {
				options : {
					'vendor-prefix' : false
				},
				src : ['dest/css/main.css']
			}
		},

		cssmin : {
			minify : {
				expand : true,
				cwd : 'dest/css/',
				src : ['*.css'],
				dest : 'dest/css/',
				ext : '.min.css'
			}
		},

		watch : {
			/*
			jade : {
				files : ['index.jade'],
				tasks : ['jade']
			},
			*/
			less : {
				files : ['less/main.less'],
				tasks : ['less']
			},
			csslint_min : {
				files : ['dest/css/main.css'],
				//tasks : ['csslint','cssmin']
				tasks : ['cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//grunt.registerTask('default',['less','csslint','cssmin']);
	grunt.registerTask('default',['watch']);
}