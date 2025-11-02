// 数据处理模块
import { computed, getCurrentInstance } from 'vue'

export const useCheckboxModel = ({ cbModel }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  // 可读可写的计算属性
  const model = computed({
    get() {
      // 注意：getter 函数中，最后必须 return 一个布尔值，
      // 才能正确控制复选框的选中状态
      if (typeof cbModel.value === 'boolean') {
        return cbModel.value
      } else {
        return cbModel.value === props.trueValue
      }
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
