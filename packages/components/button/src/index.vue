<!-- button 按钮组件的 .vue 源代码 -->
<template>
  <button :class="[ns.b(), ns.m('primary')]">这是测试按钮</button>
</template>

<script setup>
defineOptions({
  name: 'a-button'
})

import { useNamespace } from '@ui-library/hooks'
// 今后在每个组件中，调用 useNamespace 这个 Hook 的时候，
// 必须传入一个块的名字，否则这个 Hook 无法正常工作
const ns = useNamespace('button')

console.log('组件的命名空间是：' + ns.namespace)
console.log('Button 组件的块类名是：' + ns.b('wrap'))
console.log(ns.e('item'))
console.log(ns.m('', 'small'))
</script>

<style scoped></style>
