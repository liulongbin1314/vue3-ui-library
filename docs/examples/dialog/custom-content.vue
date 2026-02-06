<template>
  <a-button type="primary" @click="visible = true">展示 Dialog 弹窗</a-button>

  <a-dialog v-model="visible" title="登录" cancel-button-text="Cancel" confirm-button-text="Submit">
    <a-form :model="form">
      <a-form-item label="用户名" prop="username">
        <a-input v-model="form.username"></a-input>
      </a-form-item>
      <a-form-item label="密码" prop="password">
        <a-input v-model="form.password" password></a-input>
      </a-form-item>
    </a-form>
  </a-dialog>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)

const form = ref({
  username: 'zs',
  password: 'xxxxxx'
})
</script>

<style scoped>
.box {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
