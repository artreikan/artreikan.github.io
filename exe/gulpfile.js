const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const path = {
  src: {
    scss: './src/scss/**/*.scss',
    images: './src/img/*'
  },
  build: {
    root: './dist',
    css: './dist/css',
    images: './dist/img'
  },
}

gulp.task('styles', () => {
  return gulp.src(path.src.scss)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe($.sourcemaps.write())
    .pipe($.cleanCss())
    .pipe(gulp.dest(path.build.css))
});

gulp.task('images', () => {
  return gulp.src(path.src.images)
    .pipe($.imagemin())
    .pipe(gulp.dest(path.build.images))
})

gulp.task('watch', () => {
  gulp.watch(path.src.scss, gulp.series('styles'));
  gulp.watch(path.src.images, gulp.series('images'));
})

gulp.task('build', gulp.parallel('styles', 'images'));

gulp.task('default', gulp.parallel('watch', 'styles', 'images'));