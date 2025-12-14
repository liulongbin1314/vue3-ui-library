import { h, render } from 'vue'
import MessageBox from './index.vue'

// 对 params 参数进行格式化
const initOptions = (params) => {
  let options = {}

  if (Object.prototype.toString.call(params) === '[object Object]') {
    options = params
  }

  return options
}

// 创建 MessageBox 组件，把它渲染到浏览器中
const createMessageBox = (options) => {
  const container = document.createElement('div')
  const vnode = h(MessageBox, { ...options })
  render(vnode, container)

  return { vnode, vm: vnode.component }
}

export const messageBox = (params) => {
  // 1. 对 params 参数进行格式化
  const options = initOptions(params)
  // 2. 创建 MessageBox 组件，把它渲染到浏览器中
  const { vm } = createMessageBox(options)

  return new Promise((resolve, reject) => {
    vm._resolve = resolve
    vm._reject = reject
  })
}
export default messageBox
