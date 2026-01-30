<template>
  <div>
    <p>字体图标：</p>
    <!-- 虽然同时设置了开关的文字和图标，但由于没有为开关添加 center-icon 属性， -->
    <!-- 因此只展示图标，不展示文字 -->
    <a-switch
      active-text="Yes"
      inactive-text="No"
      active-icon="icon-all"
      inactive-icon="icon-all-fill"
    ></a-switch>

    <hr />
    <p>svg 图标：</p>
    <!-- center-icon 属性可同时展示图标和文字 -->
    <a-switch
      active-text="开启"
      inactive-text="关闭"
      :active-icon="Sun"
      :inactive-icon="Moon"
      center-icon
    ></a-switch>
  </div>
</template>

<script setup>
import { Sun, Moon } from 'escook-ui/icons'
</script>

<style scoped>
.container {
  display: flex;
  gap: 15px;
  align-items: end;
}
</style>
