import { computed, ref } from 'vue'

const initZIndex = {
  message: 3000,
  modal: 2000
}

const zindex = ref(0)

export const useZIndex = (type = 'message') => {
  const currentZIndex = computed(() => initZIndex[type] + zindex.value)
  const genNextIndex = () => zindex.value++

  return { currentZIndex, genNextIndex }
}
