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
      if (value && props.trueValue) {
        cbModel.value = props.trueValue
      } else if (!value && props.falseValue) {
        cbModel.value = props.falseValue
      } else {
        cbModel.value = value
      }
    }
  })

  return { model }
}
