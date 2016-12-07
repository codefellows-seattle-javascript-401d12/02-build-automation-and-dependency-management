'use strict';

const greeting = require('./lib/greeting.js');

// set name as user inputed command line argument following 'node' and filename
var name = process.argv[process.argv.length - 1];

greeting.welcome(name);
greeting.farewell(name);
