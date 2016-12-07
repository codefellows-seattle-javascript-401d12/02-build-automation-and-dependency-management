'use strict';

const greeting = require('../lib/greeting.js');

const expect = require('chai').expect;

describe('Greeting', function() {
  describe('#welcome', function() {
    it('should print a greeting message customized with the name \'Caleb.\'', function() {
      var result = greeting.welcome('Caleb');
      expect(greeting).to.have.property('welcome');
      expect(result).to.equal('Hello and welcome, Caleb! Glad you can be here!', 'greeting not printed as expected');
    });
    it('should throw an error indicating a missing name or unexpected charater', function() {
      var result = greeting.welcome;
      expect(result).to.throw(Error);
    });
  });
});
