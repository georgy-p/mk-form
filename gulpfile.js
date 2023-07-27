/* eslint-disable no-undef */
const { src, dest, series, watch } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const fileInclude = require('gulp-file-include');
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');
const revDel = require('gulp-rev-delete-original');
const htmlmin = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const notify = require('gulp-notify');
const image = require('gulp-imagemin');
const { readFileSync } = require('fs');
const mainSass = gulpSass(sass);
const webp = require('gulp-webp');
const webpackStream = require('webpack-stream');
const plumber = require('gulp-plumber');
const path = require('path');
const zip = require('gulp-zip');
const typograf = require('gulp-typograf');
const gulpIf = require('gulp-if');
const rootFooter = path.basename(path.resolve());

//paths
const srcFolder = './src';
const buildFolder = './build';
const paths = {
  srcImgFolder: `${srcFolder}/img`,
  buildImgFolder: `${buildFolder}/img`,
  srcScss: `${srcFolder}/scss/**/*.scss`,
  buildCssFolder: `${buildFolder}/css`,
  srcFullJs: `${srcFolder}/js/**/*.js`,
  srcMainJs: `${srcFolder}/js/main.js`,
  buildJsFolder: `${buildFolder}/js`,
  srcPartialsFolder: `${srcFolder}/partials`,
  resourcesFolder: `${srcFolder}/resources`,
};

let isProd = false; // dev by default

const clean = () => del([buildFolder]);

const styles = () =>
  src(paths.srcScss, { sourcemaps: !isProd })
    .pipe(
      plumber(
        notify.onError({
          title: 'SCSS',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(mainSass())
    .pipe(gulpif(isProd, cleanCSS({ level: 2 })))
    .pipe(dest(paths.buildCssFolder, { sourcemaps: '.' }))
    .pipe(browserSync.stream());

const scripts = () =>
  src(paths.srcMainJs)
    .pipe(
      plumber(
        notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(
      webpackStream({
        mode: isProd ? 'production' : 'development',
        output: {
          filename: 'main.js',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', { targets: 'defaults' }]],
                },
              },
            },
          ],
        },
        devtool: !isProd ? 'source-map' : false,
      }),
    )
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(dest(paths.buildJsFolder))
    .pipe(browserSync.stream());

const resources = () =>
  src(`${paths.resourcesFolder}/**`).pipe(dest(buildFolder));

const images = () =>
  src([`${paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`])
    .pipe(
      gulpIf(
        isProd,
        image([
          image.mozjpeg({
            quality: 80,
            progressive: true,
          }),
          image.optipng({
            optimizationLevel: 2,
          }),
        ]),
      ),
    )
    .pipe(dest(paths.buildImgFolder));

const webImages = () =>
  src([`${paths.srcImgFolder}/**/**.{jpg,jpeg,png}`])
    .pipe(webp())
    .pipe(dest(paths.buildImgFolder));

const htmlInclude = () =>
  src([`${srcFolder}/*.html`])
    .pipe(
      fileInclude({
        prefix: '@',
        basepath: '@file',
      }),
    )
    .pipe(
      typograf({
        locale: ['ru', 'en-US'],
      }),
    )
    .pipe(dest(buildFolder))
    .pipe(browserSync.stream());

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: `${buildFolder}`,
    },
  });
  watch(paths.srcScss, styles);
  watch(paths.srcFullJs, scripts);
  watch(`${paths.srcPartialsFolder}/*.html`, htmlInclude);
  watch(`${srcFolder}/*.html`, htmlInclude);
};

const cache = () =>
  src(`${buildFolder}//**/*.{css,js,svg,png,jpg,jpeg,webp,woff2}`, {
    base: buildFolder,
  })
    .pipe(rev())
    .pipe(revDel())
    .pipe(dest(buildFolder))
    .pipe(rev.manifest('rev.json'))
    .pipe(dest(buildFolder));

const rewrite = () => {
  const manifest = readFileSync('build/rev.json');
  src(`${paths.buildCssFolder}/*.css`)
    .pipe(revRewrite({ manifest }))
    .pipe(dest(paths.buildCssFolder));

  return src(`${buildFolder}/**/*.html`)
    .pipe(revRewrite({ manifest }))
    .pipe(dest(buildFolder));
};

const htmlMinify = () =>
  src(`${buildFolder}/**/*.html`)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      }),
    )
    .pipe(dest(buildFolder));

const zipFiles = () => {
  del.deleteSync([`${buildFolder}/*.zip`]);
  return src(`${buildFolder}/**/*.*`, {})
    .pipe(
      plumber(
        notify.onError({
          title: 'ZIP',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(zip(`${rootFooter}.zip`))
    .pipe(dest(buildFolder));
};

const toProd = (done) => {
  isProd = true;
  done();
};

exports.default = series(
  clean,
  htmlInclude,
  scripts,
  styles,
  resources,
  images,
  webImages,
  watchFiles,
);
exports.build = series(
  toProd,
  clean,
  htmlInclude,
  scripts,
  styles,
  resources,
  images,
  webImages,
  htmlMinify,
);
exports.cache = series(cache, rewrite);
exports.zip = zipFiles;
