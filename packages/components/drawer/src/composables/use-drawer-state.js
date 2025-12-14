import { computed, ref, useTemplateRef, getCurrentInstance } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { useStyle } from '@ui-library/hooks'

const colors = {
  info: 'var(--a-color-black-light-5)',
  primary: 'var(--a-color-primary)',
  success: 'var(--a-color-success)',
  warning: 'var(--a-color-warning)',
  error: 'var(--a-color-error)'
}

export const useDrawerState = () => {
  const instance = getCurrentInstance()
  const props = instance.props

  const isCancelLoading = ref(false)
  const isConfirmLoading = ref(false)

  const uStyle = useStyle()
  const styledWidth = computed(() => uStyle.width(props.width))

  const destroyKey = ref(0)
  const iconWidth = ref(0)
  const el = useTemplateRef('icon')

  useResizeObserver(el, (entries) => {
    iconWidth.value = entries[0].borderBoxSize[0].inlineSize
  })

  const styledIconWidth = computed(() => ({
    paddingLeft: iconWidth.value + 'px'
  }))

  return { colors, styledIconWidth, destroyKey, styledWidth, isCancelLoading, isConfirmLoading }
}
