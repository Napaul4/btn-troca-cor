module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    'end/styles/main.css': 'start/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'end/styles/main.min.css': 'start/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'end/scripts/main.min.js': 'start/scripts/main.js'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    

    grunt.registerTask('default', ['less', 'uglify']);
}