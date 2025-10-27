<template>
  <footer :class="[ns.b()]" class="footer">
    <slot>Footer</slot>
  </footer>
</template>

<script setup>
defineOptions({
  name: 'a-footer'
})

const { height } = defineProps({
  height: {
    type: String,
    default: '60px'
  }
})

import { useNamespace } from '@ui-library/hooks'
const ns = useNamespace('footer')
</script>

<style scoped>
.footer {
  height: v-bind(height);
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
