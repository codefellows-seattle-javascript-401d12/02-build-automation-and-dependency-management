'use strict';

module.exports = exports = {};

exports.sayHey = function(name) {
  // instead of arguments.length === 0 use !name
  if(arguments.length === 0) throw new Error('no name was provided');
  console.log(`what\'s up ${name}!`);
  return `what\'s up ${name}!`;
};

exports.sayBye = function(name) {
  if(arguments.length === 0) throw new Error('no name was provided');
  console.log(`See ya later ${name}!`);
  return `See ya later ${name}!`;
};
