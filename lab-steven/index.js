'use strict';

const greet = require('./lib/greet.js');

const userName = greet.getName();
greet.greet(userName);
