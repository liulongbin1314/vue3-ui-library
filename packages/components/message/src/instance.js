import { ref } from 'vue'

// 用来存储页面上需要展示的消息组件的信息对象
// 格式为 { id: 唯一标识, vnode: 虚拟DOM, vm: 当前消息组件的实例 }
export const instanceArray = ref([])
