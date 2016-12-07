'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet', function() {
  describe('#greet', function() {
    it('should return "hello <name>"', function() {
      var result = greet.greet(process.argv[2]);
      expect(greet).to.have.property('greet');
      expect(result).to.equal('hey danny');
    });

    it('should throw a missing name error', function() {
      var result = greet.greet;
      expect(result).to.throw(Error);
    });
  });
  describe('#favPlace', function() {
    it('should return users favorite place', function() {

    });
  });
});
