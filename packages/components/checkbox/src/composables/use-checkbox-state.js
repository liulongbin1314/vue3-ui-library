import { getCurrentInstance, computed } from 'vue'

// 状态模块
export const useCheckboxState = ({ groupProps, isGroupMode }) => {
  // 获取当前组件的实例对象
  const instance = getCurrentInstance()

  // 获取组件的 size 尺寸
  const cbSize = computed(() => {
    if (instance.props.size === 'default') {
      // 进一步判断是否属于复选框组
      if (isGroupMode.value) {
        return groupProps.size.value
      } else {
        return 'default'
      }
    } else {
      return instance.props.size
    }
  })
  // 禁用状态
  const isDisabled = computed(() => instance.props.disabled)
  // 勾选状态
  const isChecked = computed(() => instance.props.checked)

  return { cbSize, isDisabled, isChecked }
}
