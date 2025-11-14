import { computed, getCurrentInstance } from 'vue'

export const useSwitchModel = ({ switchModel }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  const model = computed({
    get() {
      // 必须 return 一个布尔值
      if (typeof switchModel.value === 'boolean') {
        return switchModel.value
      }
      return switchModel.value === props.activeValue
    },
    set(value) {
      // 形参中的 value 值永远是 true 或 false
      let targetValue = value

      if (value && props.activeValue !== false) {
        targetValue = props.activeValue
      }
      if (!value && props.inactiveValue !== false) {
        targetValue = props.inactiveValue
      }

      switchModel.value = targetValue
    }
  })

  return { model }
}
