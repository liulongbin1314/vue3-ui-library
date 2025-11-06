import { computed, getCurrentInstance } from 'vue'

export const useCheckboxEvent = ({ groupProps, isGroupMode, model, isDisabled, isLoading }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  const beforeChange = computed(() =>
    isGroupMode.value ? groupProps.beforeChange.value : props.beforeChange
  )

  const isFunction = computed(() => typeof beforeChange.value === 'function')

  const clickEvent = (e) => {
    if (!isFunction.value) return

    // 阻止复选框切换选中状态的默认行为
    e.preventDefault()
  }

  return { clickEvent }
}
