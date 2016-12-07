'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

let name = process.argv[2];
if(!name) name = 'jonny';

describe('Test greet file', function() {
  describe('#sayHey', function(name) {
    it(`should return what\'s up ${name}`, function() {
      let name = greet.sayHey('jonny');
      expect(name).to.be.a('string');
      expect(name).to.equal('what\'s up jonny!');
    });
    it('should return missing name error', function() {
      let name = greet.sayHey;
      expect(name).to.throw(Error);
    });
  });
  describe('#sayBye', function() {
    it(`should return see ya later ${name}`, function() {
      let name = greet.sayBye('jonny');
      expect(name).to.be.a('string');
      expect(name).to.equal('See ya later jonny!');
    });
    it('should return missing name error', function(){
      let name = greet.sayBye;
      expect(name).to.throw(Error);
    });
  });
});
