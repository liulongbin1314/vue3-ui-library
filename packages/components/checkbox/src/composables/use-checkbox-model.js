// 数据处理模块
import { computed } from 'vue'

export const useCheckboxModel = ({ cbModel }) => {
  // 可读可写的计算属性
  const model = computed({
    get() {
      return cbModel.value
    },
    set(value) {
      cbModel.value = value
    }
  })

  return { model }
}
