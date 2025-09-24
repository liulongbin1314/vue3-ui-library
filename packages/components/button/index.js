// 每个组件的文件夹下，都需要有个 index.js 模块，
// 用于向外默认和按需导出当前的组件

// 导入 Button 组件
import Button from './src/index.vue'
import { componentInstall } from '@ui-library/utils'

// 按需导出 Button 组件
export const AButton = componentInstall(Button)
// 默认导出
export default AButton
