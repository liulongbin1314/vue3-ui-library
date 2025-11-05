// 数据处理模块
import { computed, getCurrentInstance } from 'vue'

export const useCheckboxModel = ({ cbModel, groupProps, isGroupMode }) => {
  const instance = getCurrentInstance()
  const props = instance.props

  // 可读可写的计算属性
  const model = computed({
    get() {
      // 先判断当前是复选框组模式还是单个复选框模式，
      // 并按需 return 数据给复选框进行 v-model 的双向数据绑定
      return isGroupMode.value ? groupProps.groupModel.value : cbModel.value
    },
    set(value) {
      if (isGroupMode.value) {
        // 复选框组的模式
        groupProps.changeEvent(value)
      } else {
        // 单个复选框
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
    }
  })

  return { model }
}
