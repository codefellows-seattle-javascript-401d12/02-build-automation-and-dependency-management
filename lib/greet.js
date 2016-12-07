'use strict';

module.exports = exports = {};

exports.sayHey = function(name) {
  if(!name) throw new Error('no name was provided');
  console.log(`what\'s up ${name}!`);
  return `what\'s up ${name}!`;
};

exports.sayBye = function(name) {
  if(!name) throw new Error('no name was provided');
  console.log(`See ya later ${name}!`);
  return `See ya later ${name}!`;
};
