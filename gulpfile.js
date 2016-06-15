var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
  return gulp.src('./src/swatchable.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('compress', function() {
  return gulp.src('src/*.js')
    .pipe(uglify({preserveComments: 'all'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'compress']);