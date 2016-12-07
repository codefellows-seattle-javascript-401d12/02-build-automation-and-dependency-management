'use strict';

module.exports = exports = {};

exports.saySomethingNice = function() {
  let niceThings = ['Have a good day!', 'Have a good week!', 'Do what you love!'];
  let somethingNice = niceThings[Math.floor(Math.random() * ((niceThings.length-1) - 0 + 1)) + 0];
  console.log(somethingNice);
  return somethingNice;
};

exports.sayYoureAwesome = function(name) {
  console.log(`Hey ${name}, you're awesome!`);
  return `Hey ${name}, you're awesome!`;
};

exports.showSomeMathSkills = function(num1, num2) {
  let sum = num1+num2;
  console.log(sum);
  return sum;
};
