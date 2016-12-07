'use strict';

const greeting = require('./lib/greet.js');
const arg = process.argv[2];

greeting.greet(arg);
