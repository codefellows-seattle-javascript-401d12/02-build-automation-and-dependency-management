'use strict';

const myObject = require('../lib/myObject.js');
const expect = require('chai').expect;

describe('myObject', function() {
  describe('#saySomethingNice()', function() {
    it('should return a nice phrase', function() {
      let nicePhrase = myObject.saySomethingNice();
      expect(nicePhrase).to.be.a('string');
    });
  });

  describe('#showSomeMathSkills()', function() {
    it('should add two numbers and return the sum, in this case 12', function() {
      let sum = myObject.showSomeMathSkills(4, 8);
      expect(sum).to.equal(12);
    });
  });

  describe('#sayYoureAwesome()', function() {
    it('should return a name plus you\'re awesome!', function() {
      let result = myObject.sayYoureAwesome('Evan');
      expect(result).to.equal('Hey Evan, you\'re awesome!');
    });
  });
});
