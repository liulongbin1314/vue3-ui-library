import { onMounted, onUnmounted } from 'vue'

export const useClickOutside = (containerRef, callback) => {
  const handleClickOutside = (event) => {
    if (containerRef.value && event.target) {
      if (!containerRef.value.contains(event.target)) {
        callback()
      }
    }
  }

  onMounted(() => document.addEventListener('click', handleClickOutside))
  onUnmounted(() => document.removeEventListener('click', handleClickOutside))
}
