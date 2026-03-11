<template>
  <div class="box">
    <ATooltip content="你好，刘老师" placement="left" effect="dark" :trigger="tooltipTrigger">
      <AButton type="primary">hover 触发</AButton>
    </ATooltip>

    <ATooltip content="你好，刘老师" effect="dark">
      <AButton type="primary">hover 触发</AButton>
    </ATooltip>

    <ATooltip content="你好，Escook" placement="top" auto-hide effect="dark" trigger="click">
      <AButton type="primary">click 触发</AButton>
    </ATooltip>

    <ATooltip content="你好，彬哥" placement="right" effect="dark" manual ref="tooltipRef">
      <AButton type="primary">手动触发</AButton>
    </ATooltip>
  </div>

  <div style="height: 1000px">
    <AButtonGroup>
      <AButton @click="tooltipRef.open()">打开</AButton>
      <AButton @click="tooltipRef.close()">关闭</AButton>
    </AButtonGroup>
  </div>
</template>

<script setup>
import { AButton, AButtonGroup, ATooltip } from '@ui-library/components'
import { ref } from 'vue'

const tooltipTrigger = ref('hover')
const tooltipRef = ref(null)

setTimeout(() => {
  console.log('trigger changed')
  tooltipTrigger.value = 'click'
}, 3000)
</script>

<style scoped>
.box {
  padding: 120px;
  /* background-color: coral; */
  display: flex;
  gap: 50px;
}
</style>
