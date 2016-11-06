'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const bs = require('browser-sync').create();
const del = require('del');
const sass = require('gulp-sass');
const ngAnnotate = require('ng-annotate');

const config = {
  index: './index.html',
  sassDir: './src/scss/'
};

// Deletes non-compiled files
gulp.task('clean', () => {
  del.sync('./css');
});

// Inits browser sync
gulp.task('serve', ['build'], () => {
  bs.init({
    server: '.',
    open: true
  });
});

// Compiles Sass
gulp.task('sass', () => {
  gulp.src(config.sassDir + 'main.scss')
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe(sass())
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest('./css/'))
      .pipe(bs.stream());
});

// Watches for changes and reload the page
gulp.task('watch', () => {
  gulp.watch(config.sassDir + '*.scss', ['sass']);
  gulp.watch(config.index).on('change', bs.reload);
});

gulp.task('build', ['clean', 'sass']);
gulp.task('default', ['build', 'serve', 'watch']);
