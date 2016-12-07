'use strict';

const greet = require('./lib/greet.js');
let name = process.argv[2];

if(!name) name = 'jonny';

greet.sayHey(name);
greet.sayBye(name);
