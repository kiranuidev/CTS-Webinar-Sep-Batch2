var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint');

gulp.task('scripts', function () {
    return gulp.src(['./app/*/*.js', './app/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', function() {
  return gulp.src(['./app/*/*.js', './app/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src(['./app/templats/*.html',
            './app/*.js',
            './app/*/*.js'])
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch','lint','scripts']);
