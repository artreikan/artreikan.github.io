const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const path = {
  src: {
    html: './index.html',
    scss: './src/scss/**/*.scss',
    images: './src/img/*'
  },
  build: {
    root: './dist',
    css: './dist/css',
    images: './dist/img',
    svg: './dist/img/*.svg'
  },
}

gulp.task('styles', () => {
  return gulp.src(path.src.scss)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({
      grid: true
    }))
    .pipe($.cleanCss())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
});

gulp.task('images', () => {
  return gulp.src(path.src.images)
    .pipe($.imagemin())
    .pipe(gulp.dest(path.build.images))
});

gulp.task('svg-sprite', () => {
  return gulp.src(path.build.svg)
    .pipe($.svgSprite({
      mode: {
        symbol: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest(`${path.build.images}`))
})

gulp.task('watch', () => {
  gulp.watch(path.src.scss, gulp.series('styles'));
  gulp.watch(path.src.images, gulp.series('images'));
});

gulp.task('build', gulp.parallel('styles', gulp.series('images', 'svg-sprite')));

gulp.task('default', gulp.parallel('watch', 'styles', gulp.series('images', 'svg-sprite')));