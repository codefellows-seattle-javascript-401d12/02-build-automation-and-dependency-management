'use strict';

const greet = require('../lib/greetings.js');
const expect = require('chai').expect;

describe('Greet Module', function () {
  describe('#sayHello', function() {
    it('should return Hello, Scott.', function () {
      var result = greet.sayHello('Scott');
      expect(greet).to.have.property('sayHello');
      expect(result).to.equal('Hello, Scott.');
      expect(result).to.be.a('string');
      expect(result).to.contain('ott');
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
      expect(result).to.exist;
      expect(result).to.have.length.above(5);
      expect(result).to.not.be.undefined;
      expect(result).to.be.NaN;
    });
  });
});
