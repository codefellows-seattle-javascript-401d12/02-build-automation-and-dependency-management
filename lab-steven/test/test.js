'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet', function() {
  describe('#getName', function() {
    it('Should have a name equal to Mocha if no name provided in CLI.', function() {
      var testName = greet.getName();
      expect(testName).to.equal('Mocha');
    });
  });

  describe('#greet', function() {
    it('Expected to output "hello <name>"', function() {
      var result = greet.greet(process.argv[2]);
      expect(result).to.equal('hello undefined');
    });
  });
});
