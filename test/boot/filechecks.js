// This test checks out files
var kernal = require('../../boot/index.js');
var fs = require('fs');
var clicolour = require('cli-color');
var assert = require("assert");
var expect = require('should');

describe('File checks', function() {
    it('tests checking out files', function (done) {
      expect(kernal.checks.checkFiles).toThrow([error], [message]);
      done();
    });
});
