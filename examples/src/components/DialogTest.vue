<template>
  <p>基础用法</p>

  <a-dialog title="温馨提示">
    <div>Hello world. 11111111111111111111111111111111111111111111111111111111111</div>

    <template #icon="{ colors }">
      <AIcon :icon="Flag" color="cyan"></AIcon>
    </template>
  </a-dialog>
</template>

<script setup>
import { AIcon } from '@ui-library/components'
import { Flag } from '@ui-library/icons'
</script>

<style scoped></style>
