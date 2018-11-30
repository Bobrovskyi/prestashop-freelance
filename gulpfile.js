var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var pug         = require('gulp-pug');
var sass        = require('gulp-sass');
var rename      = require("gulp-rename");
var sourcemaps  = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// BrowserSynk

gulp.task('server', function() {
    browserSync.init({
        server: {
        	port: 9000,
            baseDir: "build"
        }
    });


    gulp.watch('build/**/*').on('change', browserSync.reload);
});


// Pug

gulp.task('templates:compile', function buildHTML() {
  return gulp.src('_dev/templates/index.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});


// Sass

gulp.task('styles:compile', function () {
  return gulp.src('_dev/sass/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('build/css'));
});

// ----- JS -----

gulp.task('js:compile', function () {
  return gulp.src('_dev/js/common.js')
    .pipe(rename("common.min.js"))
    .pipe(gulp.dest('build/js'));
});

// Copy fonts

gulp.task('copy:fonts', function () {
  return gulp.src('_dev/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'));
});


// Copy images

gulp.task('copy:images', function () {
  return gulp.src('_dev/img/**/*.*')
    .pipe(gulp.dest('build/img'));
});

// Copy js

gulp.task('copy:js', function () {
  return gulp.src('_dev/js/**/*.*')
    .pipe(gulp.dest('build/js'));
});

// Copy

gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images', 'copy:js'));


// Sourcemaps

gulp.task('map:compile', () =>
    gulp.src('_dev/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'))
);


// Watchers

gulp.task('watch', function () {
  gulp.watch('_dev/templates/**/*.pug', gulp.series('templates:compile'));
  gulp.watch('_dev/sass/**/*.scss', gulp.series('styles:compile'));
  gulp.watch('_dev/js/**/*.js', gulp.series('js:compile'));
});


// Gulp default

gulp.task('default', gulp.series(
  gulp.parallel('templates:compile', 'styles:compile', 'js:compile', 'copy'),
  gulp.parallel('watch', 'server')
  )
);
