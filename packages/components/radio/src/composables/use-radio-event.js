import { computed, getCurrentInstance } from 'vue'

export const useRadioEvent = ({ isDisabled, isLoading }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  const beforeChange = computed(() => props.beforeChange)
  const isFn = computed(() => typeof beforeChange.value === 'function')

  const clickEvent = (e) => {
    if (!isFn) return
    if (isDisabled.value || isLoading.value) return

    const invokeResult = beforeChange.value()
    if (!(invokeResult instanceof Promise)) return

    e.preventDefault()
    isLoading.value = true
    invokeResult
      .then()
      .catch()
      .finally(() => {
        isLoading.value = false
      })
  }

  return { clickEvent }
}
