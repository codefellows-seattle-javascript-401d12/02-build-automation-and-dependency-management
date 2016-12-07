'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
//remember to add gulp-eslint and gulp-mocha into dev dependencies

gulp.task('test', function () {
  gulp.src('./test/*-test.js', { read: false })
  .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!node_modules'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError);
});

gulp.task('dev', function () {
  gulp.watch(['**/*.js', '!node_modules'], ['lint', 'test']);
  //watching for changes in js files
  //subsequently runs the lint and test tasks
});

gulp.task('default', ['dev']);
