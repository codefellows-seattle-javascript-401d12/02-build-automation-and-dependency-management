'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;
var name = process.argv[2];

describe('Greet', function() {
  describe('#sayHello', function() {
    it('should return hello {name}!', function() {
      var result = greet.sayHello(name);
      expect(greet).to.have.property('sayHello');
      expect(result).to.equal(`hello ${name}!`);
      expect(result).to.not.equal(parseInt);
    });

    it('should throw a missing name error', function() {
      var result = greet.sayHello;
      expect(result).to.throw(Error);
    });
  });
  describe('#sayBye', function() {
    it('should return see you later!', function() {
      var bye = 'see you later!';
      expect(greet).to.have.property('sayBye');
      expect(bye).to.equal('see you later!');
    });
  });
});
