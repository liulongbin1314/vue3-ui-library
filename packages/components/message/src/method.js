import Message from './index.vue'
import { h, render } from 'vue'
import { instanceArray } from './instance'

// 默认的配置选项
const defaultOptions = { type: 'info', content: '' }
// 唯一的 id
let onlyId = 0

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

  const id = `a-message-${onlyId++}`
  const instance = { id, vnode: null, vm: null }
  instanceArray.value.push(instance)

  const vnode = h(Message, { ...options, id })
  render(vnode, container)

  // 在这里对 vnode 和 vm 赋值
  instance.vnode = vnode
  instance.vm = vnode.component

  target.appendChild(container.firstElementChild)

  console.log(instanceArray.value)
}

// 关闭所有的 Message 消息
const closeAll = () => {
  // 循环关闭所有的 Message 组件
  instanceArray.value.forEach((item) => {
    item.vm.setupState.visible = false
  })
  // 清空列表
  instanceArray.value = []
}

// 调用此函数，即可在页面上展示 Message 组件
export const message = (params) => {
  const options = initOptions(params)
  createMessage(options)
}

message.closeAll = closeAll

export default message
