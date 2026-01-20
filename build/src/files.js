import { deleteAsync } from 'del'
import gulp from 'gulp'
import { join } from 'node:path'
import { outputDir, inputDir, outputUmd } from './common.js'

// 删除组件库的目录 escook-ui
const deleteUIPackage = () => {
  return deleteAsync(outputDir, { force: true })
}

// 拷贝 UMD 的字体文件
const copyUmdFonts = () => {
  return new Promise((resolve) => {
    gulp
      .src(join(inputDir, 'theme/icon-fonts/iconfont.{ttf,woff,woff2}'), { encoding: false })
      .pipe(gulp.dest(join(outputUmd, 'fonts')))
      .on('end', resolve)
  })
}

// 文件相关的任务
// export const fileTask = async () => {
//   return Promise.all([deleteUIPackage(), copyUmdFonts()])
// }

export const fileTask = gulp.series(deleteUIPackage, copyUmdFonts)
