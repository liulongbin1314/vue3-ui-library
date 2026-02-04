<template>
  <div class="box">
    <a-button type="primary" @click="visible = true">展示 Dialog 弹窗</a-button>
    <a-button type="primary" @click="visible2 = true">展示自定义 Footer 的 Dialog 弹窗</a-button>
  </div>

  <a-dialog v-model="visible" title="标题">
    <!-- 默认插槽中的内容，会展示到弹窗的内容区域 -->
    <span>这是消息内容。</span>
  </a-dialog>

  <a-dialog v-model="visible2" title="标题">
    <!-- 默认插槽中的内容，会展示到弹窗的内容区域 -->
    <span>这是消息内容。</span>

    <!-- 使用 footer Slot 自定义底部按钮区域内容 -->
    <template #footer>
      <a-button-group size="large">
        <a-button type="warning" @click="visible2 = false">取消</a-button>
        <a-button type="success" @click="visible2 = false">确定</a-button>
      </a-button-group>
    </template>
  </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const visible2 = ref(false)
</script>

<style scoped>
.box {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
