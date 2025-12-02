import Message from './index.vue'
import { h, render } from 'vue'

// 默认的配置选项
const defaultOptions = { type: 'info', content: '' }

// 这个函数用于对 params 参数进行格式化
// 格式化的结果，是返回一个对象形式的 options 配置
const initOptions = (params) => {
  let options = {}

  if (typeof params === 'string') {
    options.content = params
  }

  if (Object.prototype.toString.call(params) === '[object Object]') {
    options = params
  }

  return { ...defaultOptions, ...options }
}

// 用于创建 Message 组件实例，并渲染到页面上
const createMessage = (options) => {
  const container = document.createElement('div')
  const target = document.body

  const vnode = h(Message, { ...options })
  render(vnode, container)

  target.appendChild(container.firstElementChild)
}

// 调用此函数，即可在页面上展示 Message 组件
export const message = (params) => {
  const options = initOptions(params)
  createMessage(options)
}

export default message
