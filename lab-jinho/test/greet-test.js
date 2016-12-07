'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet', function() {
  describe('#sayHey', function() {
    it('should return hey Jinho!', function() {
      var result = greet.sayHey('Jinho');
      expect(greet).to.have.property('sayHey');
      expect(result).to.equal('hey Jinho!');
    });

    it('should throw a missing name error', function() {
      var result = greet.sayHey;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayBye', function() {
    it('should return see ya later!', function() {
      // TODO: finish building out test
    });
  });
});
