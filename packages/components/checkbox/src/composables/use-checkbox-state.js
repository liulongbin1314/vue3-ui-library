import { getCurrentInstance, computed } from 'vue'

// 状态模块
export const useCheckboxState = () => {
  // 获取当前组件的实例对象
  const instance = getCurrentInstance()

  // 获取组件的 size 尺寸
  const cbSize = computed(() => instance.props.size)

  return { cbSize }
}
