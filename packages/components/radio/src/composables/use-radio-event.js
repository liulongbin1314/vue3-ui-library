import { computed, getCurrentInstance } from 'vue'

export const useRadioEvent = ({ isDisabled, isLoading, model, isGroupMode, groupProps }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  const beforeChange = computed(() =>
    isGroupMode.value ? groupProps.beforeChange.value : props.beforeChange
  )
  const isFn = computed(() => typeof beforeChange.value === 'function')

  const clickEvent = (e) => {
    if (!isFn.value) return
    if (isDisabled.value || isLoading.value) return

    const invokeResult = beforeChange.value(props.value, model.value)
    if (!(invokeResult instanceof Promise)) return

    e.preventDefault()
    isLoading.value = true
    isGroupMode.value && (groupProps.disabled.value = true)
    invokeResult
      .then((fn) => {
        model.value = props.value
        fn && typeof fn === 'function' && fn()
      })
      .catch((fn) => {
        fn && typeof fn === 'function' && fn()
      })
      .finally(() => {
        isLoading.value = false
        isGroupMode.value && (groupProps.disabled.value = false)
      })
  }

  return { clickEvent }
}
