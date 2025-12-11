import { computed, ref, useTemplateRef } from 'vue'
import { useResizeObserver } from '@vueuse/core'

const colors = {
  info: 'var(--a-color-black-light-5)',
  primary: 'var(--a-color-primary)',
  success: 'var(--a-color-success)',
  warning: 'var(--a-color-warning)',
  error: 'var(--a-color-error)'
}

export const useDialogState = () => {
  const iconWidth = ref(0)
  const el = useTemplateRef('icon')

  useResizeObserver(el, (entries) => {
    iconWidth.value = entries[0].borderBoxSize[0].inlineSize
  })

  const styledIconWidth = computed(() => ({
    paddingLeft: iconWidth.value + 'px'
  }))

  return { colors, styledIconWidth }
}
