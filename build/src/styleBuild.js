import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import * as dartSass from 'sass'
import autoPrefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import gulpConcat from 'gulp-concat'
import { join } from 'node:path'
import gulpReplace from 'gulp-replace'
import { inputDir, outputUmd, outputTheme } from './common.js'

// umd 全量打包 .scss 样式
const fullStyleBuildEntry = () => {
  // 创建编译 sass 样式的 gulp 插件
  const sass = gulpSass(dartSass)

  return new Promise((resolve) => {
    gulp
      .src(join(inputDir, 'theme/src/index.scss'))
      .pipe(sass.sync())
      .pipe(autoPrefixer())
      .pipe(gulpReplace(/iconfont\.(ttf|woff|woff2)/g, 'fonts/iconfont.$1'))
      .pipe(cleanCSS())
      .pipe(gulpConcat('index.min.css'))
      .pipe(gulp.dest(outputUmd))
      .on('end', resolve)
  })
}

// 模块化打包 .scss 样式
const moduleStyleBuildEntry = () => {
  const sass = gulpSass(dartSass)

  return new Promise((resolve) => {
    gulp
      .src([`${inputDir}/theme/src/*.scss`, `!${inputDir}/theme/src/{index,initRoot,loading}.scss`])
      .pipe(sass.sync())
      .pipe(autoPrefixer())
      .pipe(cleanCSS())
      .pipe(gulp.dest(`${outputTheme}/src`))
      .on('end', resolve)
  })
}

// 编译样式的 gulp 任务
export const buildStyleTask = async () => {
  return Promise.all([fullStyleBuildEntry(), moduleStyleBuildEntry()])
}
