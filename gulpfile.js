'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    eslint = require('gulp-eslint'),
    connect = require('gulp-connect'),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    postcss   = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    flexibility = require('postcss-flexibility'),
    uglify = require('gulp-uglify'),
    gutil = require('gutil'),
    sourcemaps = require('gulp-sourcemaps');

// Run server
gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 4000
    });
});

// SCRIPTS
gulp.task('scripts', function() {
    return browserify({
        entries: './app/js/app.js',
        debug: true
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('scripts:watch', function () {
    gulp.watch([
          'app/js/**/*.js'
      ], ['scripts']);
});

// HTML
gulp.task('html', function() {
    gulp.src('app/**/*.html')
    .pipe(gulp.dest('public/'))
    .pipe(browserSync.stream());
})

gulp.task('html:watch', function () {
    gulp.watch('app/**/*.html', ['html']);
});

// SCSS
gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

// ASSETS
gulp.task('assets', function() {
    gulp.src('app/assets/**/*.*')
    .pipe(gulp.dest('public/assets/'))
    .pipe(browserSync.stream());
})

// Watch
gulp.task('watch', function() {
    gulp.watch('app/js/**/*.js', ['browserify']);
    gulp.watch('app/scss/**/*.scss', ['sass']);
})

// Lint
gulp.task('lint', function () {
    return gulp.src(['**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', ['html', 'sass', 'scripts', 'watch', 'assets']);

gulp.task('watch', ['scripts:watch', 'html:watch', 'sass:watch']);

gulp.task('default', ['connect', 'build']);