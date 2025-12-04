import { ref, computed, getCurrentInstance, useTemplateRef, onMounted } from 'vue'
import { getPrevBottomPosition, closeMessage } from '../instance'
import { useZIndex } from '@ui-library/hooks'
import { useResizeObserver, useTimeoutFn } from '@vueuse/core'

// 类型和图标的映射关系
const iconMap = {
  info: 'icon-info-fill',
  primary: 'icon-info-fill',
  success: 'icon-success-fill',
  warning: 'icon-warning-fill',
  error: 'icon-error-fill'
}

export const useMessageState = () => {
  const { currentZIndex, genNextIndex } = useZIndex()
  const instance = getCurrentInstance()
  const props = instance.props

  const el = useTemplateRef('el')

  // 组件的高度
  const height = ref(0)
  const visible = ref(false)

  onMounted(() => (visible.value = true))

  useResizeObserver(el, (entries) => {
    const entry = entries[0]
    height.value = entry.contentRect.height
  })

  // 计算属性
  const prevBottomPosition = computed(() => getPrevBottomPosition(props.id))
  const offsetTop = computed(() => prevBottomPosition.value + props.offset)
  const bottomPosition = computed(() => offsetTop.value + height.value)

  const styledTop = computed(() => ({ top: offsetTop.value + 'px' }))
  const styledZIndex = {
    zIndex: currentZIndex.value
  }
  genNextIndex()

  const { start, stop } = useTimeoutFn(() => {
    closeMessage(props.id)
  }, 3000)

  return { iconMap, styledTop, bottomPosition, styledZIndex, el, visible }
}
