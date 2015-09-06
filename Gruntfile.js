var cli = require("cli-color");
var sys = require('sys');
var execute = require('child_process').exec;

module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'coverage/cover.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/*.js']
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'views/css/dashboard.css': 'views/css/dashboard.scss',       // 'destination': 'source'
        }
      },
      min: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'views/css/dashboard.min.css': 'views/css/dashboard.scss',       // 'destination': 'source'
        }
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');

  grunt.registerTask('compile:scss', 'sass:dist');
  grunt.registerTask('compile:min', 'sass:min');
  grunt.registerTask('compile', ['sass:min', 'sass:dist']);

  // mochaTest

};
