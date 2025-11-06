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
      .then(updateData) // 异步操作成功
      .catch() // 异步操作失败
      .finally(() => (isLoading.value = false))
  }

  // 当复选框的异步操作成功后，手动修改 v-model 的数据
  function updateData() {
    if (isGroupMode.value) {
      // 复选框组的模式
      const index = model.value.findIndex((item) => item === props.value)
      const targetValue = [...model.value]
      if (index === -1) {
        // 没找到，把 props.value push 到数组中
        targetValue.push(props.value)
      } else {
        // 找到了，把 props.value 从数组中移除
        targetValue.splice(index, 1)
      }
      groupProps.changeEvent(targetValue)
    } else {
      // 单个复选框的模式
      if (model.value === true || model.value === props.trueValue) {
        model.value = false
      } else {
        model.value = true
      }
    }
  }

  return { clickEvent }
}
