import { deleteAsync } from 'del'
import { outputDir } from './common.js'

// 删除组件库的目录 escook-ui
const deleteUIPackage = async () => {
  await deleteAsync(outputDir, { force: true })
}

// 文件相关的任务
export const fileTask = async () => {
  return Promise.all([deleteUIPackage()])
}
