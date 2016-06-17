/**
 * Created by stuart1 on 16/06/2016.
 */

module.exports = function(grunt) {
    var nightwatch = require('./lib/nightwatch');


    nightwatch.initGrunt(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nightwatch: {
            options: {
                cwd: './'
            },
            'default': {
            },

        },

        nightwatch_report: {
            files: ['./reports/**/*.xml'],
            options: {
                outputDir: './reports/summary'
            }
        }
    });


    // Load the plugin that provides the "nightwatch report" task.
    grunt.loadNpmTasks('grunt-nightwatch');
    grunt.loadNpmTasks('grunt-nightwatch-report');
    grunt.loadNpmTasks('grunt-force-task');



    // Default task(s).
    grunt.registerTask('default',['nightwatch','nightwatch_report']);


};
