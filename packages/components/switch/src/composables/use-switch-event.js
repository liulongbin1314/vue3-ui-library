import { getCurrentInstance, computed } from 'vue'

export const useSwitchEvent = ({ isLoading, model }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  const isFn = computed(
    () => props.beforeChange !== undefined && typeof props.beforeChange === 'function'
  )

  const clickEvent = (e) => {
    if (!isFn.value) return

    if (props.disabled || isLoading.value) return

    const targetValue = getValue(model.value)
    const invokeResult = props.beforeChange(targetValue.nextValue, targetValue.currentValue)
    if (!(invokeResult instanceof Promise)) return

    e.preventDefault()
    isLoading.value = true
    invokeResult
      .then((fn) => {
        model.value = !model.value
        typeof fn === 'function' && fn()
      })
      .catch((fn) => {
        typeof fn === 'function' && fn()
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  function getValue(boo) {
    const currentValue = transformValue(boo)
    const nextValue = transformValue(!boo)

    return { currentValue, nextValue }
  }

  function transformValue(val) {
    if (typeof val !== 'boolean') return val

    if (val && props.activeValue) {
      return props.activeValue
    }
    if (!val && props.inactiveValue) {
      return props.inactiveValue
    }
    return val
  }

  return { clickEvent }
}
