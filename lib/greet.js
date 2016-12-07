'use strict';

module.exports = exports = {};
var name = process.argv[2];

exports.greet = function(name) {
  if (arguments.length === 0) throw new Error ('name not included');
  console.log(`hello ${name}`);
  return (`hello ${name}`);
};
exports.favPlace = function(place) {
  if (arguments.length === 0) throw new Error ('place not included');
  return (`your favorite place is ${place}`);
};

exports.greet(name);
