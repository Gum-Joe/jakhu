var cli = require("cli-color");
var sys = require('sys');
var execute = require('child_process').exec;

module.exports = function(grunt) {

  // Add tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-js2coffee');

  grunt.initConfig({
    // Configure a mochaTest task
    // Configure Watching

    mochaTest: {
      server: {
        options: {
          reporter: 'spec',
          captureFile: 'coverage/cover.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/server/*.js']
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'node_modules/',
        src: '**/*',
        dest: 'tmp/node_modules',
        expand: true,
      },
    },
    js2coffee: {
    options: {
      // Task-level options go here
    },
    // Compile all
    // individual CofeeScript files, retaining the same directory structure
    // in the destination folder
    root: {
      options: {},
      files: [
        {
          cwd: './',
          src: ['**/*.js'],
          dest: './source/',
          ext: '.coffee'
        }
      ]
    },
    bin: {
      options: {},
      files: [
        {
          expand: true,
          cwd: './',
          src: ['**/*.js'],
          dest: './source/',
          ext: '.coffee'
        }
      ]
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
    },
    exec: {
      bundle: 'bundle install',
      install: 'npm install',
      dev: 'npm install --dev',
      test: 'npm test',
      logs: 'mkdir logs && touch logs/wos.log'
    },
    watch: {
      scripts: {
        files: ['views/css/*.scss', 'Gruntfile.js'],
        tasks: ['compile:sass'],
        options: {
          interrupt: true,
        }
      }
    }
  });
  grunt.registerTask('default', ['compile:sass', 'install', 'test']);
  grunt.registerTask('ci', ['create:logs', 'compile:sass', 'test']);

  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('test:server', 'mochaTest:server');

  grunt.registerTask('compile:sass:scss', 'sass:dist');
  grunt.registerTask('compile:sass:min', 'sass:min');
  grunt.registerTask('compile:sass', ['sass:min', 'sass:dist']);
  grunt.registerTask('compile:watch', 'watch');
  grunt.registerTask('compile:coffee', ['copy:main', 'js2coffee:bin']);
  grunt.registerTask('compile:coffee:sub', 'js2coffee:bin');

  grunt.registerTask('install:bundle', 'exec:bundle');
  grunt.registerTask('install:npm', 'exec:install');
  grunt.registerTask('install:dev', 'exec:dev');
  grunt.registerTask('install', ['exec:dev', 'exec:install', 'exec:bundle']);

  grunt.registerTask('create:logs', 'exec:logs');

};
