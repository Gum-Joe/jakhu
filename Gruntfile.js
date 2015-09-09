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
  grunt.loadNpmTasks('grunt-coveralls');
  grunt.loadNpmTasks('grunt-html2jade');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    clean: {
      all: ['tmp', 'views/jade', 'views/css/sass']
    },
    html2jade: {
     most: {
       options: {
       },
       files: {
         //src: 'views/index.ejs',
         'views/jade/index.jade': ['views/index.ejs'],
         'views/jade/boot.jade': ['views/boot.ejs'],
         'views/jade/booting.jade': ['views/booting.ejs'],
         'views/jade/recovery.jade': ['views/recovery.ejs'],
         'views/jade/setup.jade': ['views/setup.ejs'],
         'views/jade/signin.jade': ['views/signin.ejs'],
         'views/jade/signup.jade': ['views/signup.ejs']
       }
     }
   },
    coveralls: {
    options: {
      // LCOV coverage file relevant to every target
      src: 'coverage/lcov.info',

      // When true, grunt-coveralls will only print a warning rather than
      // an error, to prevent CI builds from failing unnecessarily (e.g. if
      // coveralls.io is down). Optional, defaults to false.
      force: false
    },
    report: {
      // Target-specific LCOV coverage file
      src: 'coverage/locv2.info'
    },
  },
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
        src: ['test/**/*.js']
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
      ignore: "node_modules"
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
          'views/css/sass/dashboard.css': 'views/css/dashboard.scss'
        }
      },
      min: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'views/css/dashboard.min.css': 'views/css/dashboard.scss',       // 'destination': 'source'
          'views/css/sass/dashboard.min.css': 'views/css/dashboard.scss'
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
      },
      test: {
        files: ['test/**/*.js', 'Gruntfile.js'],
        tasks: ['test'],
        options: {
          interrupt: true,
        }
      }
    }
  });
  grunt.registerTask('default', ['clean', 'test', 'compile']);
  grunt.registerTask('ci', ['clean', 'create:logs', 'compile', 'test']);

  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('test:server', 'mochaTest:server');

  grunt.registerTask('compile:sass:scss', 'sass:dist');
  grunt.registerTask('compile:sass:min', 'sass:min');
  grunt.registerTask('compile:sass', ['sass:min', 'sass:dist']);
  grunt.registerTask('compile:watch', 'watch');
  grunt.registerTask('compile:coffee', ['js2coffee:bin']);
  grunt.registerTask('compile:coffee:sub', 'js2coffee:bin');
  grunt.registerTask('compile:jade', 'html2jade:most');
  grunt.registerTask('compile', ['compile:sass', 'compile:jade']);

  grunt.registerTask('install:bundle', 'exec:bundle');
  grunt.registerTask('install:npm', 'exec:install');
  grunt.registerTask('install:dev', 'exec:dev');
  grunt.registerTask('install', ['exec:dev', 'exec:install', 'exec:bundle']);

  grunt.registerTask('create:logs', 'exec:logs');

};
