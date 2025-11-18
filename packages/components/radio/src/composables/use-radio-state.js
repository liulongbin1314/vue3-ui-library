import { computed } from 'vue'

export const useRadioState = () => {
  const isChecked = computed(() => true)

  return { isChecked }
}
