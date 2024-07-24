const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

function css() {
  return gulp
    .src('./src/styles/tailwind.css')
    .pipe(sourcemaps.init())
    .pipe(
      postcss([tailwindcss('./tailwind.config.js'), autoprefixer(), cssnano()])
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
}

function watchFiles() {
  gulp.watch('./src/styles/**/*.css', css);
  gulp.watch('./src/**/*.html', css);
}

const watch = gulp.series(css, watchFiles);

exports.css = css;
exports.watch = watch;
exports.default = watch;
