'use strict';

module.exports;

exports.greet = function(name) {
  if (!arguments.length) throw new Error('name not provided');
  return `hello ${name}`;
};
