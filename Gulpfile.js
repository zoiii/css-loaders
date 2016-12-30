'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')
const nunjucks = require('gulp-nunjucks')
const concat = require('gulp-concat')

gulp.task('sass', () => {
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(concat('loader.css'))
    .pipe(gulp.dest('css'))
})

gulp.task('sass:watch', () => {
  gulp.watch('sass/*.scss', ['sass'])
})

gulp.task('templates', () => {
  gulp.src('templates/*.html')
    .pipe(nunjucks.compile())
    .pipe(gulp.dest('./'))
})

gulp.task('templates:watch', () => {
  gulp.watch('templates/*.html', ['templates'])
})

gulp.task('default', ['sass:watch', 'templates:watch'])
