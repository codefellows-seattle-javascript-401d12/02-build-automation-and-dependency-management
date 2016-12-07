'use strict';

module.exports = exports = {};
var name = process.argv[2];

exports.sayHi = function(name) {
  if(arguments.length === 0) throw new Error('name not provided');
  console.log(`Hi ${name}!`);
  return `Hi ${name}!`;
};

exports.saySeeYaLater = function(petName) {
  if(arguments.length === 0) throw new Error('pet name not provided');
  console.log(`See ya later, ${petName}!`);
  return `See ya later, ${petName}!`;
};

exports.sayHi(name);
exports.saySeeYaLater('Gaara');
