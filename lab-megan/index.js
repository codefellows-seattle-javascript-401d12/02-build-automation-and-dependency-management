'use strict';

const greet = require('./lib/greetings.js');

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

greet.sayHello('Scott');
greet.sayGoodbye();
