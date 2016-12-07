'use strict';

module.exports = exports = {};
var name = process.argv[2];

exports.sayHello = function(name) {
  if(arguments.length === 0) throw new Error('name not provided');
  console.log(`hello ${name}!`);
  return `hello ${name}!`;
};

exports.sayBye = function() {
  return 'see you later!';
};

exports.sayHello(name);
