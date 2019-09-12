const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');

const reload = browserSync.reload;

const path = {
  src: {
    html: './index.html',
    scss: './src/scss/**/*.scss',
    images: './src/img/*',
    js: ['./src/js/script.js'],
    fonts: './src/fonts/**'
  },
  build: {
    root: './dist',
    css: './dist/css',
    images: './dist/img',
    svg: './dist/img/*.svg',
    js: './dist/js',
    fonts: './dist/fonts'
  }
};

gulp.task('html', () => {
  return gulp
  .src(path.src.html)
  .pipe(reload({stream: true}));
});

gulp.task('styles', () => {
  return gulp
  .src(path.src.scss)
  .pipe($.plumber())
  .pipe($.sass())
  .pipe(
      $.autoprefixer({
        grid: true
      })
  )
  .pipe(reload({stream: true}))
  .pipe(gulp.dest(path.build.css));
});

gulp.task('scripts', () => {
  return gulp
  .src(path.src.js)
  .pipe($.concat('main.js'))
  .pipe(
      $.babel({
        presets: ['@babel/env']
      })
  )
  .pipe(reload({stream: true}))
  .pipe(gulp.dest(path.build.js));
});

gulp.task('images', () => {
  return gulp
  .src(path.src.images)
  .pipe($.imagemin())
  .pipe(reload({stream: true}))
  .pipe(gulp.dest(path.build.images));
});

gulp.task('svg-sprite', () => {
  return gulp
  .src(path.build.svg)
  .pipe(
      $.svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg'
          }
        }
      })
  )
  .pipe(reload({stream: true}))
  .pipe(gulp.dest(`${path.build.images}`));
});

gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './'
    },
    port: 1337,
    open: true,
    notify: false
  });
});

gulp.task('fonts', () => {
  return gulp.src(path.src.fonts)
  .pipe(gulp.dest(path.build.fonts));
});

gulp.task('watch', () => {
  gulp.watch(path.src.scss, gulp.series('styles'));
  gulp.watch(path.src.js, gulp.series('scripts'));
  gulp.watch(path.src.html, gulp.series('html'));
  gulp.watch(path.src.fonts, gulp.series('fonts'));
});

gulp.task(
    'build',
    gulp.parallel('styles', 'scripts', 'fonts', gulp.series('images', 'svg-sprite'))
);

gulp.task('default', gulp.parallel('browserSync', 'watch', 'styles', 'scripts', 'fonts'));
