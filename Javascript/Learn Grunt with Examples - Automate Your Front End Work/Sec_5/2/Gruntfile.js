module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: ['javascript/scripts.js']
		},

		csslint: {
			all: ['css/reset.css', 'css/style.css']
		},

		cssmin: {
			dist: {
				files: {
					'css/style.min.css' : ['css/reset.css', 'css/style.css']
				}
			}
		},

		autoprefixer: {
			all: {
				src: 'css/style.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', [
		'jshint',
		'csslint',
		'cssmin',
		'autoprefixer'
	]);

};