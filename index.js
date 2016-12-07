'use strict';

const greet = require('./lib/greet.js');
var name = process.argv[2];

greet.sayHello(name);
greet.sayBye();
