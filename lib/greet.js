'use strict';

module.exports = exports = {};

exports.greet = function(name) {
  if (!name) throw new Error('name not provided');
  return `hello ${name}`;
};

exports.bye = function(name) {
  if(!name) throw new Error('name not provided');
  return `bye ${name}`;
};
