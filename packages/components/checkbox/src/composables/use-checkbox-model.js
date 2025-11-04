// 数据处理模块
import { computed, getCurrentInstance } from 'vue'

export const useCheckboxModel = ({ cbModel }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  // 可读可写的计算属性
  const model = computed({
    get() {
      return cbModel.value
    },
    set(value) {
      // 在 setter 中，形参 value 永远都是布尔值
      let targetValue = value
      if (value && props.trueValue) {
        targetValue = props.trueValue
      } else if (!value && props.falseValue) {
        targetValue = props.falseValue
      }

      cbModel.value = targetValue
      instance.emit('change', targetValue)
    }
  })

  return { model }
}
