'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;
//.expect is invoked later

describe('Greet', function () {
  describe('#sayHello', function () {
    it('should return hello erick!', function () {
      var result = greet.sayHello('erick');
      //creating variable that stores value of sayHello
      expect(greet).to.have.property('sayHello');
      expect(result).to.equal('hello erick!');
      expect(result).to.have.length.within(7,12);
      expect(result).to.be.NaN;
    });
    it('should throw error that the name is missing', function () {
      var result = greet.sayHello;
      expect(result).to.throw(Error);
      //expect(result) invokes greet.greet
    });
  });
  describe('#sayBye', function () {
    it('should return farewell!', function () {
      var bye = 'farewell!';
      expect(bye).to.equal('farewell!');
      expect(bye).to.be.a('string');
    });
  });
});
