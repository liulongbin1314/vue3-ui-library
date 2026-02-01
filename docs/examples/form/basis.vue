<template>
  <a-form :model="formData" width="600px" label-width="100px">
    <a-form-item label="姓名">
      <a-input v-model="formData.name"></a-input>
    </a-form-item>

    <a-form-item label="手机号">
      <a-input v-model="formData.phone"></a-input>
    </a-form-item>

    <a-form-item label="状态">
      <a-switch v-model="formData.state" active-value="Yes" inactive-value="No"></a-switch>
    </a-form-item>

    <a-form-item label="爱好">
      <a-checkbox-group v-model="formData.hobby">
        <a-checkbox value="吃饭">吃饭</a-checkbox>
        <a-checkbox value="睡觉">睡觉</a-checkbox>
        <a-checkbox value="打豆豆">打豆豆</a-checkbox>
      </a-checkbox-group>
    </a-form-item>

    <a-form-item label="性别">
      <a-radio-group v-model="formData.gender">
        <a-radio value="男">男</a-radio>
        <a-radio value="女">女</a-radio>
        <a-radio value="保密">保密</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="简介">
      <a-textarea v-model="formData.intro"></a-textarea>
    </a-form-item>

    <a-form-item label=" ">
      <a-button style="margin-right: 15px" @click="onReset">重置</a-button>
      <a-button type="primary" @click="onSubmit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  state: false,
  hobby: [],
  gender: '',
  intro: ''
})

// 点击提交按钮
const onSubmit = () => {
  AMessage({
    content: '点击了提交按钮',
    type: 'primary',
    background: true
  })
}

// 点击重置按钮
const onReset = () => {
  AMessage({
    content: '点击了重置按钮',
    type: 'warning',
    background: true
  })
}
</script>
