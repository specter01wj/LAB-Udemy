module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: ['javascript/scripts.js']
		},

		concat: {
			dist: {
				files: {
					'javascript/all.js' : ['javascript/scripts.js', 'javascript/plugins.js']
				}
			}
		},

		less: {
			dist: {
				files: {
					'css/style.min.css' : ['less/style.less', 'less/mixins.less']
				}
			},

			options: {
				compress: true
			}
		},

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'images/src/',
					src: ['**/*.{jpg,gif,png}'],
					dest: 'images/dist/'
				}]
			}
		},

		watch: {
			less: {
				files: ['less/*.less'],
				tasks: ['less'],
				options: {
					spawn: false
				}
			},

			js: {
				files: ['javascript/*.js'],
				tasks: ['jshint']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', [
		'jshint',
		'concat',
		'less',
		'imagemin'
	]);

};