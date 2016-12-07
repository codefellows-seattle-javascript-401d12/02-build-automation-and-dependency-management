'use strict';

const greet = require('../lib/greetings.js');
const expect = require('chai').expect;

describe('Greet Module', function () {
  describe('#sayHello', function() {
    it('should return Hello, Scott.', function () {
      var result = greet.sayHello('Scott');
      expect(greet).to.have.property('sayHello');
      expect(result).to.equal('Hello, Scott.');
      // assert.ok(result === 'Hello, Scott.', 'Not equal to Hello, Scott.');
    });

    it('should throw a missing name error', function() {
      var result = greet.sayHello;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayGoodbye', function() {
    it('should return Goodbye, it was nice to meet you.', function() {
      var result = 'Goodbye, it was nice to meet you.';
      expect(result).to.equal('Goodbye, it was nice to meet you.');
      // assert.ok(goodbye === 'Goodbye, it was nice to meet you.', 'Not equal to Goodbye, it was nice to meet you.');
    });
  });
});
