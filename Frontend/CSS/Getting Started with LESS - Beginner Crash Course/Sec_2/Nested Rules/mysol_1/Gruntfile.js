module.exports = function(grunt) {

    grunt.initConfig({
        
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
                    'css/style.min.css' : 'less/style.less'
                }
            },

            options: {
                compress: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', [
        'jshint',
        'concat',
        'less'
    ]);

};