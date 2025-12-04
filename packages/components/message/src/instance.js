import { ref } from 'vue'

// 用来存储页面上需要展示的消息组件的信息对象
// 格式为 { id: 唯一标识, vnode: 虚拟DOM, vm: 当前消息组件的实例 }
export const instanceArray = ref([])

// 根据 id 查询对应的 instance 对象和前一个 instance 对象
export const getInstance = (id) => {
  let current = null
  let prev = null

  const index = instanceArray.value.findIndex((item) => item.id === id)

  if (index > 0) {
    current = instanceArray.value[index]
    prev = instanceArray.value[index - 1]
  } else if (index === 0) {
    current = instanceArray.value[index]
  }

  return { current, prev, index }
}

// 根据 id 获取前一个 Message 组件的底部位置
export const getPrevBottomPosition = (id) => {
  const { prev } = getInstance(id)
  if (!prev) return 0

  // 注意：这里的值是一个 ref，需要使用 .value 获取到真正的值
  return prev.vm.exposed.bottomPosition.value
}

// 根据指定的 id，关闭对应的弹窗
export const closeMessage = (id) => {
  const { current, index } = getInstance(id)
  if (current) {
    current.vm.setupState.visible = false
    instanceArray.value.splice(index, 1)
  }
}
