'use strict';

const greet = require('./lib/greet.js');
let name = process.argv[2];

greet.sayHey(name);
greet.sayBye(name);
