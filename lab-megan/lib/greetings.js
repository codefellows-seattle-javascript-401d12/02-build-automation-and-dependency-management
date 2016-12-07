'use strict';

module.exports = exports = {};

exports.sayHello = function(theName) {
  if (arguments.length === 0) throw new Error('No name was given.');
  return(`Hello, ${theName}.`);
};

exports.sayGoodbye = function() {
  return('Goodbye, it was nice to meet you.');
};
