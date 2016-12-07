'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Test Module', function () {
  describe('#greet', function () {
    //pointing back to run greet function
    it(`should return hello ${process.argv[2]}!`, function () {
      var result = greet.greet(process.argv[2]);
      //creating variable that stores value of greet
      assert.ok(result === `hello ${process.argv[2]}!`, `not equal to hello ${result}!`);
      //using ok method to display result status
    });
    it('should throw error that name is missing', function () {
      assert.throws(function() {
        greet.greet();
      }, 'no error thrown');
    });
  });
});
