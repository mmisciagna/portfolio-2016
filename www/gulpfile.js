const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const rename = require('gulp-rename');
const bs = require('browser-sync').create();
const del = require('del');
const ngAnnotate = require('ng-annotate');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const stringify = require('stringify');
const watchify = require('watchify');

const config = {
  index: './index.html',
  sassDir: './src/scss/',
  sassDestDir: './css/',
  jsSrcDir: './src/components/',
  jsDestDir: './js/',
};

// TODO: Remove when moving to GAE
const modRewrite  = require('connect-modrewrite');

// JS config
const jsSrc = config.jsSrcDir + 'main.js';
const b = watchify(browserify({
  entries: [jsSrc],
  cache: {},
  packageCache: {}
}).transform(stringify, {
  appliesTo: {
    includeExtensions: ['.html']
  }
}).transform(babelify, {
  presets: ['es2015']
}));

// Deletes non-compiled files
gulp.task('clean', () => {
  del.sync('./css');
});

// Inits browser sync
gulp.task('serve', ['build'], () => {
  bs.init({
    server: '.',
    open: false,
    // TODO: Remove when moving to GAE
    middleware: [
      modRewrite([
        '!\\.\\w+$ /index.html [L]'
      ])
    ]
  });
});

// Bundle JS
gulp.task('js', () => {
  return b.bundle()
      .on('error', function(err){
        $.util.log(err.message);
        this.emit('end');
      })
      .pipe(source('./main.js'))
      .pipe(buffer())
      .pipe($.sourcemaps.init({
        loadMaps: true
      }))
      .pipe($.ngAnnotate())
      .pipe($.uglify({
        // TODO: Remove this later.
        drop_debugger: false
      }))
      .pipe($.sourcemaps.write('./'))
      .pipe(rename('main.min.js'))
      .pipe(gulp.dest(config.jsDestDir));
});

// A wrapper to the js task to reload browsersync after compilation.
gulp.task('js-reload', ['js'], done => {
  bs.reload();
  done();
});

// Compiles Sass
gulp.task('sass', () => {
  gulp.src(config.sassDir + 'main.scss')
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.sass())
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest(config.sassDestDir))
      .pipe(bs.stream());
});

// Watches for changes and reloads the page
gulp.task('watch', () => {
  gulp.watch(config.sassDir + '*.scss', ['sass']);
  b.on('update', (ids) => {
    gulp.start('js-reload');
  });
  gulp.watch(config.index).on('change', bs.reload);
});

gulp.task('build', ['clean', 'js', 'sass']);
gulp.task('default', ['build', 'serve', 'watch']);
