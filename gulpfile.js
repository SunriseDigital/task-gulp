var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-ruby-sass'),
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber'),
    compass = require('gulp-compass'),
    autoprefixer = require("gulp-autoprefixer"),
    imageMin = require('gulp-imagemin');

//sass watch
gulp.task('sassWatch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

//compass watch
gulp.task('compassWatch', function () {
  gulp.watch('scss/*.scss', ['compass']);
});

//sassのコンパイル
gulp.task('sass', function () {
  gulp.src('scss/*.scss')
      .pipe(plumber())
      .pipe(sass({
        style : 'expanded',
        noCache : true,
        compass : true,
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css/'));
});

//compassでsassをコンパイル
gulp.task('compass', function() {
  gulp.src('scss/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: 'config.rb',
      css: 'css',
      sass: 'scss',
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css/'));
});

//CSSの圧縮
gulp.task('minifycss', function() {
  gulp.src('css/*.css')
    .pipe(plumber())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css-min/'));
});

//画像の圧縮
gulp.task('imagemin', function () {
  return gulp.src('img/*.+(jpg|jpeg|png|gif|svg)')
    .pipe(plumber())
    .pipe(imageMin({
        optimizationLevel: 7
    }))
    .pipe(gulp.dest('img/'));
});

//task
gulp.task('default',['compass','minifycss'],function(){
  gulp.watch('scss/*.scss', ['compass']);
  gulp.watch('css/*.css', ['minifycss']);
});