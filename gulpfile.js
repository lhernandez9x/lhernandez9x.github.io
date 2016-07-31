var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglyfly = require('gulp-uglyfly');
var rename = require('gulp-rename');

gulp.task('default', function() {
    'use strict';
    gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('styles', function(){
    gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});