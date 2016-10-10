var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  htmlmin = require('gulp-htmlmin'),
  uglify = require('gulp-uglify'),
  pump = require('pump');


var src = {

  html: './app/views/*.html',
  htmlDest: './app/views/minified/',
  sass: './app/css/sass/*.scss',
  css: './app/css/',
  js: './app/js/*.js',
  minJS: './app/js/minJS/',
  prefixCss: './app/css/*.css',
  minCss: './app/css/minified/',
  images: './app/images/**/*',
  imgDest: './app/images/min/'

}

gulp.task('serve', ['sass'], function() {

  browserSync.init({
    proxy: "http://localhost:3000/"
  });

  gulp.watch(src.sass, ['sass']);
  gulp.watch(src.html).on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src(src.sass)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(src.css))
    .pipe(browserSync.stream());

});

gulp.task('sass:watch', function() {
  gulp.watch(src.sass, ['sass']);
});




gulp.task('prefix', function() {
  gulp.src(src.prefixCss)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(src.css));
});

gulp.task('minify-css', function() {
  return gulp.src(src.prefixCss)
    .pipe(cleanCSS({
      debug: true
    }, function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest(src.minCss));
});

gulp.task('html-minify', function() {
  return gulp.src(src.html)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(src.htmlDest));
});

gulp.task('compress', function(cb) {
  pump([
      gulp.src(src.js),
      uglify(),
      gulp.dest(src.minJS)
    ],
    cb
  );
});


gulp.task('default', ['sass:watch', 'sass', 'serve', 'prefix', 'minify-css', 'html-minify', 'compress']);
