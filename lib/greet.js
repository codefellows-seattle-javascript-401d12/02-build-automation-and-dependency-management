'use strict';

module.exports = exports = {};
var name = process.argv[2];

exports.greet = function(name) {
  if (arguments.length === 0) throw new Error('name not entered');
  console.log(`hello ${name}!`);
  return `hello ${name}!`;
};

exports.greet(name);
