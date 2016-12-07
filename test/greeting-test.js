'use strict';

const greeting = require('../lib/greeting.js');

const assert = require('assert');

describe('Greeting', function() {
  describe('#welcome', function() {
    it('should print a greeting message customized with the user\'s inputted name.', function() {
      var result = greeting.welcome('Caleb');
      assert.ok(result === 'Hello and welcome, Caleb! Glad you can be here!', 'greeting not printed as expected');
    });
    it('should throw an error indicating a missing name or unexpected charater', function() {
      assert.throws(function() {
        greeting.welcome();
      }, 'error not thrown');
    });
  });
});
