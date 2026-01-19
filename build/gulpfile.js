import gulp from 'gulp'
import { buildUmd } from './src/index.js'

export default gulp.series(buildUmd)
