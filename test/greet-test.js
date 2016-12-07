'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;
//.expect is invoked later

describe('Greet Test Module', function () {
  describe('#greet', function () {
    it(`should return hello ${process.argv[2]}!`, function () {
      var result = greet.greet(process.argv[2]);
      //creating variable that stores value of greet
      expect(greet).to.have.property('greet');
      expect(result).to.equal(`hello ${process.argv[2]}!`);
    });
    it('should throw error that the name is missing', function () {
      var result = greet.greet;
      expect(result).to.throw(Error);
      //expect(result) invokes greet.greet
    });
  });
});
