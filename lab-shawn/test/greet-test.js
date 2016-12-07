'use strict';

const greeting = require('../lib/greet.js');
const expect = require('chai').expect;


describe('Greet Module', function(){
  describe('#greet', function(){
    it('should return Hello shawn', function(){
      var result = greeting.greet('shawn');
      expect(greeting).to.have.property('greet');
      expect(result).to.equal('Hello, shawn');
    });
    it('should return a string result', function(){
      var result = greeting.greet('shawn');
      expect(result).to.be.a('string');
    });
  });
});
