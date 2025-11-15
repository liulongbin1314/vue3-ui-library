import { ref } from 'vue'

export const useSwitchState = () => {
  const isLoading = ref(false)

  return { isLoading }
}
