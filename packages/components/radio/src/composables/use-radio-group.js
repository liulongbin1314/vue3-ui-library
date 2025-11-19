import { inject, computed } from 'vue'
import { RADIO_GROUP_PROPS } from '../constant'

export const useRadioGroup = () => {
  const groupProps = inject(RADIO_GROUP_PROPS, undefined)
  const isGroupMode = computed(() => groupProps !== undefined)

  return { isGroupMode, groupProps }
}
