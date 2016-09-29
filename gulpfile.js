var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();

var src = {

  html: './app/views/*.html',
  sass: './app/css/sass/*.scss',
  css: './app/css/'

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

gulp.task('default', ['serve','sass:watch', 'sass']);
