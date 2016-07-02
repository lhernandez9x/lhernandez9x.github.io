var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
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
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('compress', function(){
    //CSS Minify
    
    gulp.src('css/*.css')
    .pipe(cleanCSS({keepSpecialComments: '*'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/'))
    // JS Minify
    
    gulp.src('js/*.js')
    .pipe(uglyfly({preserveComments: 'all'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js/'))
});