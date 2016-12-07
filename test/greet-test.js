'use strict';
/*
mocha gives us access to the describe and it blocks. It's a testing framework and that is all.
Node has a built in module called assert. This is a very basic way to run tests but best pracitices usually don't take advantage of the assert. 
*/

const greet = require('../lib/greet.js');
const assert = require('assert');
let name = process.argv[2];

if(name === undefined) name = 'jonny';

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
