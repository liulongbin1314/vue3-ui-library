import { useStyle } from '@ui-library/hooks'
import { computed, getCurrentInstance } from 'vue'

export const useFormItemState = () => {
  const instance = getCurrentInstance()
  const props = instance.props
  const uStyle = useStyle()

  const styledWidth = computed(() => uStyle.width(props.labelWidth))

  return { styledWidth }
}
