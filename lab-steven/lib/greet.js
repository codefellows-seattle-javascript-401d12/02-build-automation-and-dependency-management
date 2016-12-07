'use strict';

module.exports = exports = {};

exports.getName = function() {
  if (process.argv[2]) {
    return process.argv[2];
  } else {
    return 'Mocha';
  }
};

exports.greet = function(name) {
  console.log(`hello ${name}`);
  return `hello ${name}`;
};
