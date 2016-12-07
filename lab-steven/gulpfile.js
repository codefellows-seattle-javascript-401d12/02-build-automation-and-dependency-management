'use strict';

const gulp = require('gulp');
const linter = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('test', function() {
  gulp.src('./test/*-test.js', {read: false}).pipe(mocha({reporter: 'nyan'}));
});
