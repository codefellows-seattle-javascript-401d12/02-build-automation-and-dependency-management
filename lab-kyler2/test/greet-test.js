'use strict';

const expect = require('chai').expect;
const kgreet = require('../greet.js');

describe('Greet module', function() {
  describe('#greet', function() {

    it('should return "Hello, (name)!" regardless of name', function () {
      expect(kgreet.greet('Newman')).equal('Hello, Newman!');
      expect(kgreet.greet('World')).equal('Hello, World!');
    });

    it('should throw an error', function () {
      expect(function() {
        kgreet.greet();
      }).to.throw(Error);
    });

  });
});
