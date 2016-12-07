'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('test', function() {
  gulp.src('./test/*-test.js', {read: false})
  .pipe(mocha({reporter: 'spec'}));
});

gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('dev', ['log'], function() {
  gulp.watch(['**/*.js', '!node_modules/**'], ['lint', 'test']);
});

gulp.task('log', function() {
  gulp.watch(['**/*.js', '!node_modules/**'], function(event) {
    console.log(`File ${event.path} was ${event.type}, running tasks..`);
  });
});

gulp.task('default', ['dev']);
