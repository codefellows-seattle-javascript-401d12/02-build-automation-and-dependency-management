'use strict';

const greeting = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greeting', function() {
  describe('#greet', function() {
    it('should return hello britt', function() {
      let result = greeting.greet('britt');
      expect(greeting).to.have.property('greet');
      expect(result).to.equal('hello britt');
    });
    it('should throw an error if a name argument is missing', function() {
      let result = greeting.greet;
      expect(result).to.throw(Error);
    });
  });
});
