'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

// this task automates our tests.
// it looks for any test scripts in our test dir, and following our file naming convention.
// it also 'pipes in' and utilizes mocha.
gulp.task('test', function() {
  gulp.src('./test/*-test.js', { read: false })
  .pipe(mocha({ reporter: 'spec' }));
});
