'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

let name = process.argv[2];
if(!name) name = 'jonny';

describe('Test greet file', function() {
  describe('#sayHey', function() {
    it('should have a method sayHey', function() {
      expect(greet).to.have.property('sayHey');
      expect(greet).to.respondTo('sayHey');
    });
    it(`should return what\'s up ${name}`, function() {
      let greeting = greet.sayHey(name);
      expect(greeting).to.be.a('string');
      expect(greeting).to.equal(`what\'s up ${name}!`);
    });
    it('should return missing name error', function() {
      let name = greet.sayHey;
      expect(name).to.throw(Error);
    });
  });
  describe('#sayBye', function() {
    it('should have a method sayBye', function() {
      expect(greet).to.have.property('sayBye');
      expect(greet).to.respondTo('sayBye');
    });
    it(`should return see ya later ${name}`, function() {
      let greeting = greet.sayBye(name);
      expect(greeting).to.be.a('string');
      expect(greeting).to.equal(`See ya later ${name}!`);
    });
    it('should return missing name error', function(){
      let name = greet.sayBye;
      expect(name).to.throw(Error);
    });
  });
});
