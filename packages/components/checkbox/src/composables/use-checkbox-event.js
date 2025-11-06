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

    // 如果当前复选框已经被禁用了，或者正处于 loading 状态，则 return 出去
    if (isDisabled.value || isLoading.value) return

    // 调用 beforeChange 函数，并得到其返回值，
    // 如果返回值的类型不是 Promise，则 return 出去
    const invokeResult = beforeChange.value()
    if (!(invokeResult instanceof Promise)) return

    // 阻止复选框切换选中状态的默认行为
    e.preventDefault()

    isLoading.value = true
    invokeResult
      .then() // 异步操作成功
      .catch() // 异步操作失败
      .finally(() => (isLoading.value = false))
  }

  return { clickEvent }
}
