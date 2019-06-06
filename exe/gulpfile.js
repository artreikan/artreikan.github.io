const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const path = {
  src: {
    scss: './src/scss/**/*.scss',
  },
  build: {
    root: './dist',
    css: './dist/css',
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

gulp.task('watch', () => {
  gulp.watch(path.src.scss, gulp.series('styles'));
})

gulp.task('build', gulp.parallel('styles'));

gulp.task('default', gulp.parallel('watch', 'styles'));