module.exports = function(grunt) {

	grunt.initConfig({
		cssmin: {
			dist: {
				files: {
					'css/style.min.css': ['css/reset.css', 'css/style.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', [
		'cssmin'
	]);

};