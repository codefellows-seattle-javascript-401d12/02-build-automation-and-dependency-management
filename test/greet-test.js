'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');
let name = process.argv[2];

if(!name) name = 'jonny';

describe('Test greet file', function() {
  describe('#sayHey', function() {
    it('should return what\'s up {name}', function() {
      assert.ok(greet.sayHey(name) === `what\'s up ${name}!`, `sayHey function does not return what\'s up ${name}`);
    });
    it('should return missing name error', function() {
      assert.throws(function() {
        greet.sayHey();
      }, 'error not thrown when it should have been');
    });
  });
  describe('#sayBye', function() {
    it('should return see ya later {name}', function() {
      assert.ok(greet.sayBye(name) === `See ya later ${name}!`, `sayBye function does not return see ya later ${name}!`);
    });
    it('should return missing name error', function(){
      assert.throws(function() {
        greet.sayBye();
      }, 'error not thrown when it should have been');
    });
  });
});
