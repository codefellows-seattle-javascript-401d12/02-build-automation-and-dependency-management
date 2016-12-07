'use strict';

// module.exports = exports = {};
// try naming 'exports' something more random
// unlike original, it doesn't appear to work without var declaration
var fishExports = module.exports = {};

fishExports.welcome = function(name) {
  if (/[^a-z]/i.test(name)) throw new Error('non-alphabetical characters not allowed, or no name provided');
  if (arguments.length === 0) throw new Error('no name provided');
  var welcomeMessage = `Hello and welcome, ${name}! Glad you can be here!`;
  console.log(welcomeMessage);
  return welcomeMessage;
};

fishExports.farewell = function(name) {
  var farewellMessage = `Glad you could stay for a while, ${name}! Bye and see you next time!`;
  console.log(farewellMessage);
  return farewellMessage;
};
