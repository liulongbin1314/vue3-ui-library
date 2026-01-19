import gulp from 'gulp'
import { buildUmd, fileTask } from './src/index.js'

// 任务序列，任务从前到后依次执行
export default gulp.series(fileTask, buildUmd)
