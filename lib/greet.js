'use strict';

module.exports = exports = {};
var name = process.argv[2];

exports.greet = function(name) {
  if (!name) throw new Error ('name not included');
  console.log(`hello ${name}`);
  return (`hello ${name}`);
};
exports.favPlace = function(place) {
  if (!place) throw new Error ('place not included');
  return (`your favorite place is ${place}`);
};

exports.greet(name);
