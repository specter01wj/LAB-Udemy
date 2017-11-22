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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', [
		'jshint',
		'concat',
		'less'
	]);

};