import { getCurrentInstance, computed, ref } from 'vue'

// 状态模块
export const useCheckboxState = ({ groupProps, isGroupMode, model }) => {
  // 获取当前组件的实例对象
  const instance = getCurrentInstance()
  const props = instance.props

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
  const isChecked = computed(() => {
    if (isGroupMode.value) {
      // 复选框组模式
      return model.value.includes(props.value)
    } else {
      // 单个复选框
      // 注意：getter 函数中，最后必须 return 一个布尔值，
      // 才能正确控制复选框的选中状态
      if (typeof model.value === 'boolean') {
        return model.value
      } else {
        return model.value === props.trueValue
      }
    }
  })
  // loading 加载中
  const isLoading = ref(false)

  const cbType = computed(() => props.type || (isGroupMode.value && groupProps.type.value))

  return { cbSize, isDisabled, isChecked, isLoading, cbType }
}
