'use strict';

module.exports = exports = {};

exports.saySomethingNice = function () {
  var niceThings = ['Have a good day!', 'Have a good week!', 'Do what you love!'];
  var somethingNice = niceThings[Math.floor(Math.random() * (niceThings.length - 1 - 0 + 1)) + 0];
  console.log(somethingNice);
  return somethingNice;
};

exports.sayYoureAwesome = function (name) {
  console.log('Hey ' + name + ', you\'re awesome!');
  return 'Hey ' + name + ', you\'re awesome!';
};

exports.showSomeMathSkills = function (num1, num2) {
  var sum = num1 + num2;
  console.log(sum);
  return sum;
};