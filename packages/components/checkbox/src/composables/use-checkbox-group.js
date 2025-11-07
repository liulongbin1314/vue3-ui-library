import { computed, inject } from 'vue'
import { CHECKBOX_GROUP_PROPS, CHECKBOX_ALL_PROPS } from '../constant'

// 获取 checkbox-group 组件中的数据
export const useCheckboxGroup = () => {
  // 注入父组件向下提供的数据，
  // 一定要提供一个 undefined 默认值
  const groupProps = inject(CHECKBOX_GROUP_PROPS, undefined)

  // 计算属性，判断当前的 Checkbox 是否属于复选框组
  const isGroupMode = computed(() => groupProps !== undefined)

  // 注入 checkbox-all 向下提供的数据
  const allProps = inject(CHECKBOX_ALL_PROPS, undefined)
  const isAllMode = computed(() => allProps !== undefined)

  return { groupProps, isGroupMode, allProps, isAllMode }
}
