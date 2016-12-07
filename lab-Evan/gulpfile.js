'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const babel = require('gulp-babel');

// test
gulp.task('test', function() {
  gulp.src('./test/**/*.js', { read: false })
  .pipe(mocha({ reporter: 'spec' }));
});

// eslint
gulp.task('lint', function() {
  return gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

// added task
// transpile to es2015
// this gulp task converts es6 code into browser-friendly es2015 code
gulp.task('babel',function() {
  return gulp.src('./lib/**/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('./dist'));
});


// dev
gulp.task('dev', function() {
  gulp.watch(['**/*.js', '!node_modules/**', ['test', 'lint']]);
});

gulp.task('default', ['dev']);
