import { getCurrentInstance } from 'vue'

export const useSonOfContainer = () => {
  const _current = getCurrentInstance()
  if (_current.parent.type.name !== 'a-container') {
    console.warn(`${_current.type.name} 组件必须是 a-container 的直接子节点！`)
  }
}
