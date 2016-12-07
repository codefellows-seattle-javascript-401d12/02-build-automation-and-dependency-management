'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;
var name = process.argv[2];

describe('Greet Module', function() {
  describe('#sayHi', function() {
    it('should return Hi {name}!', function() {
      var result = greet.sayHi(name);
      //expect(greet) is invoking  greet.sayHi(name)
      expect(greet).to.have.property('sayHi');
      expect(result).to.equal('hi hawa');
    });
    it('should throw a missing name error', function() {
      var result = greet.sayHi;
      //expect(result) is invoking greet.sayHi <-- without the (name) so thats an error
      expect(result).to.throw(Error);
    });
  });


  describe('#saySeeYaLater', function() {
    it('should return See ya later {petName}!', function(){
      var result = greet.saySeeYaLater('Gaara');
      expect(result).to.equal('See ya later, Gaara!');
    });
    it('should throw a missing name error', function(){
      //TODO: finish building out test
      var result = greet.sayHi;
      expect(result).to.throw(Error);
    });
  });
});
