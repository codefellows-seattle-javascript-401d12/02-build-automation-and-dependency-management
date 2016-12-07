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

// this task automates our linting.
// it sources all of our project's js files, with the exception of node_modules.
// it 'pipes in' our eslint settings, and an error handling method for when our code doesn't pass eslint.
gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

// this task watches our dev environment (except node_modules) for changes.
// anytime we save changes, the watcher runs our previous two tests.
gulp.task('dev', function() {
  gulp.watch(['**/*.js', '!node_modules'], ['lint', 'test']);
});

// this task sets the dev environment watcher task as the default.
// since the first two tasks were set to run in the watcher task, all of our testing and linting is run when we update and save new code.
gulp.task('default', ['dev']);
