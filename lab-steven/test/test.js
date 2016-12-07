'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet', function() {
  describe('#greet', function() {
    it('Expected to output "hello <name>"', function() {
      var result = greet.greet(process.argv[2]);
      assert.ok(result === `hello ${process.argv[2]}`, `Instead says ${result}`);
    });

    it('Name expected to be undefined when using mocha', function() {
      assert.ok(greet.greet() === 'hello undefined', 'Did not come back as hello undefined');
    });
  });
});
