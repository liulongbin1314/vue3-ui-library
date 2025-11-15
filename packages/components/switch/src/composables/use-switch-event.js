import { getCurrentInstance, computed } from 'vue'

export const useSwitchEvent = ({ isLoading }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  const isFn = computed(
    () => props.beforeChange !== undefined && typeof props.beforeChange === 'function'
  )

  const clickEvent = (e) => {
    if (!isFn.value) return

    if (props.disabled || isLoading.value) return

    const invokeResult = props.beforeChange()
    if (!(invokeResult instanceof Promise)) return

    e.preventDefault()
    isLoading.value = true
    invokeResult
      .then(() => {
        console.log('成功了')
      })
      .catch(() => {
        console.log('失败了')
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  return { clickEvent }
}
