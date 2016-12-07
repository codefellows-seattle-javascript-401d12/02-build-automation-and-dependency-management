'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet', function() {
  const testName = greet.getName();
  describe('#getName', function() {
    it('Should have a name equal to Mocha if no name provided in CLI.', function() {
      expect(testName).to.equal('Mocha');
    });
  });

  describe('#greet', function() {
    it('Expected to output "hello <name>"', function() {
      const result = greet.greet(testName);
      expect(result).to.equal('hello Mocha');
    });
  });
});
