import { ref, computed, getCurrentInstance } from 'vue'

// 类型和图标的映射关系
const iconMap = {
  info: 'icon-info-fill',
  primary: 'icon-info-fill',
  success: 'icon-success-fill',
  warning: 'icon-warning-fill',
  error: 'icon-error-fill'
}

export const useMessageState = () => {
  const instance = getCurrentInstance()
  const props = instance.props

  // 组件的高度
  const height = ref(40)

  // 计算属性
  const prevBottomPosition = computed(() => 0)
  const offsetTop = computed(() => prevBottomPosition.value + props.offset)
  const bottomPosition = computed(() => offsetTop.value + height.value)

  const styledTop = computed(() => ({ top: offsetTop.value + 'px' }))

  return { iconMap, styledTop, bottomPosition }
}
