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
      all: ['tmp', 'views/jade', 'views/css/sass'],
      cleanup: ['tmp', 'testing']
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
          require: 'should',
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
          'views/css/sass/dashboard.css': 'views/css/dashboard.scss',
          'views/css/theme.css': 'views/css/theme.scss',       // 'destination': 'source'
          'views/css/sass/theme.css': 'views/css/theme.scss',
          'views/css/boot.theme.css': 'views/css/boot.theme.scss',       // 'destination': 'source'
          'views/css/sass/boot.theme.css': 'views/css/boot.theme.scss',
          'views/css/var.css': 'views/css/var.scss',       // 'destination': 'source'
          'views/css/sass/var.css': 'views/css/var.scss',
          'views/css/oobe.css': 'views/css/oobe.scss',       // 'destination': 'source'
          'views/css/sass/oobe.css': 'views/css/oobe.scss'
        }
      },
      min: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'views/css/dashboard.min.css': 'views/css/dashboard.scss',       // 'destination': 'source'
          'views/css/sass/dashboard.min.css': 'views/css/dashboard.scss',
          'views/css/theme.min.css': 'views/css/theme.scss',       // 'destination': 'source'
          'views/css/sass/theme.min.css': 'views/css/theme.scss',
          'views/css/boot.theme.min.css': 'views/css/boot.theme.scss',       // 'destination': 'source'
          'views/css/sass/boot.theme.min.css': 'views/css/boot.theme.scss',
          'views/css/var.min.css': 'views/css/var.scss',       // 'destination': 'source'
          'views/css/sass/var.min.css': 'views/css/var.scss',
          //min in dir
          'views/css/dashboard.min.css': 'views/css/dashboard.scss',       // 'destination': 'source'
          'views/css/sass/min/dashboard.min.css': 'views/css/dashboard.scss',
          'views/css/min/theme.min.css': 'views/css/theme.scss',       // 'destination': 'source'
          'views/css/sass/min/theme.min.css': 'views/css/theme.scss',
          'views/css/min/boot.theme.min.css': 'views/css/boot.theme.scss',       // 'destination': 'source'
          'views/css/sass/min/boot.theme.min.css': 'views/css/boot.theme.scss',
          'views/css/min/var.min.css': 'views/css/var.scss',       // 'destination': 'source'
          'views/css/sass/min/var.min.css': 'views/css/var.scss'
        }
      }
    },
    exec: {
      bundle: 'bundle install',
      install: 'npm install',
      dev: 'npm install --dev',
      test: 'npm test',
      logs: 'mkdir logs && touch logs/wos.log',
      testtmp: 'mkdir testing && echo testing > testing/test.txt',
      createtmp: 'mkdir tmp',
      testt: 'cd tmp && mkdir test'
    },
    watch: {
      scripts: {
        files: ['views/css/*.scss', 'Gruntfile.js'],
        tasks: ['compile:sass'],
        options: {
          interrupt: true,
        },
      },
      test: {
        files: ['test/**/*.js', 'Gruntfile.js'],
        tasks: ['test'],
        options: {
          interrupt: true,
        }
      },
      main: {
        files: ['views/**/*.scss', '*.js', 'libs/**/*.js', 'boot/**/*.js'],
        tasks: ['compile', 'test'],
        options: {
          interrupt: true,
        }
      }
    }
  });
  grunt.registerTask('default', ['test', 'clean', 'compile']);
  grunt.registerTask('main', ['watch:main']);
  grunt.registerTask('ci', ['compile', 'clean', 'create:logs', 'test']);

  grunt.registerTask('test', ['exec:testtmp', 'mochaTest', 'clean:cleanup']);
  grunt.registerTask('test:server', 'mochaTest:server');

  grunt.registerTask('compile:sass:scss', 'sass:dist');
  grunt.registerTask('compile:sass:min', 'sass:min');
  grunt.registerTask('compile:sass', ['sass:min', 'sass:dist']);
  grunt.registerTask('compile:watch', 'watch:scripts');
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
